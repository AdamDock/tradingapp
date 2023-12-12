import React, { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css'

const day = 24 * 60 * 60 * 1000;
const storageTimeKey = 'lastApiCallTimeTopGainers'; // Use the same shared key for time
const storageDataKey = 'gainersData'; // Use the same shared key for data
const currentTimeInMilliseconds = Date.now();

const Toplosers = () => {
    const [losers, setLosers] = useState([]);
    let largestLosers;

    useEffect(() => {
        const storageData = localStorage.getItem(storageDataKey);
        const storageTime = parseInt(localStorage.getItem(storageTimeKey), 10);

        if (storageData && storageTime + day > currentTimeInMilliseconds) {
            // Use the shared data
            setLosers((JSON.parse(storageData)).top_losers);
        } else {
            // Fetch losers data (you can modify the API endpoint)
            fetch('/api/losersFetch') // Use the appropriate API endpoint
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((responseData) => {
                    const dataString = JSON.stringify(responseData);
                    setLosers(responseData);
                    // Update the shared time and data in local storage
                    localStorage.setItem(storageTimeKey, Date.now());
                    localStorage.setItem(storageDataKey, dataString);
                })
                .catch((error) => {
                    console.error('Error:', error)
                    // Handle the error, e.g., set a fallback value for losers
                    setLosers('Error fetching losers data');
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
                Biggest Losers
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
                    {transformData(losers)}

                </tbody>
            </table>
            
           
        </>
    );
}

export default Toplosers;
