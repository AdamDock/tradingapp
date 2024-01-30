import React, { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css'

const day = 24 * 60 * 60 * 1000;
const storageTimeKey = 'lastApiCallTimeTopGainers';
const storageGainersKey = 'gainersData';
const currentTimeInMilliseconds = Date.now();

const Topgainers = () => {
    const [gainers, setGainers] = useState([]);

    useEffect(() => {
        const storageGainers = localStorage.getItem(storageGainersKey);
        const storageTime = parseInt(localStorage.getItem(storageTimeKey), 10);

        if (storageGainers && storageTime + day > currentTimeInMilliseconds) {
            setGainers((JSON.parse(storageGainers)).top_gainers);
        } else {
            // Fetch gainers data
            fetch('/api/gainerFetch')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((responseData) => {
                    const dataString = JSON.stringify(responseData);
                    setGainers(responseData);
                    localStorage.setItem(storageTimeKey, Date.now());
                    localStorage.setItem(storageGainersKey, dataString);
                })
                .catch((error) => {
                    console.error('Error:', error)
                    // Handle the error, e.g., set a fallback value for gainers
                    setGainers('Error fetching gainers data');
                });
        }
    }, []);
    const transformData = (data) => {
        return data.map((item) => (
            <tr>
                <td>
                    {item.ticker}
                </td>
                <td>
                    {item.price}
                </td>
                <td>
                    {item.change_amount}
                </td>
                <td>
                    {item.change_percentage}
                </td>
             </tr>
        ));
      };

    return (
        <>
            <h2>
                Biggest Winners
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Percent Change</th>
                    </tr>
                </thead>
                <tbody>
                    {transformData(gainers)}

                </tbody>
            </table>
          
        </>
    );
}

export default Topgainers;
