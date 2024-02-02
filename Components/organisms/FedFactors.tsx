import { useEffect, useState } from "react";
import ChartAccordian from "../molecules/chartaccordian";

const FedFactors = () => {
    const [fedFactors, setFedFactors] = useState([]);  
    useEffect(() => {
        const getMarketFactors = async () => {
            try {
                const res = await fetch('/api/economyData');
                const data = await res.json();
                console.log(data);
                const flattendData = data.flat();
                const chartData = flattendData.map((factor: any) => {

                    const transformedData = factor.data 
                    .filter(item => item.value !== null)
                    .map(item => {
                        const dateParts = item.date.split('-').map(part => parseInt(part, 10));
                        let value = item.value;
                        return {
                            x: new Date(dateParts[0], dateParts[1] - 1, dateParts[2]),
                            y: value
                        };
                    });
                    return {...factor, data:transformedData};
                });
                setFedFactors(chartData);
            } catch (error) {
                console.error('Error getting MarketFactors:', error);
            }
        }
        getMarketFactors();
    }, []);

    const renderedFactors = fedFactors.map((factor: any, index) => {
        console.log(factor);
        return (
            <div key={factor.name} >
                <ChartAccordian name={factor.name} currentValue={factor.data[0].y} description={factor.Description} data={factor.data} unit={factor.unit}/>
            </div>
        )
    });

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Federal Reserve Metrics</h1>
            {renderedFactors}

        </div>
    );
}
export default FedFactors;