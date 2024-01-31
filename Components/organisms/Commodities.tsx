import { useEffect, useState } from "react";
import fetch from 'isomorphic-fetch';
import ChartAccordian from "../molecules/chartaccordian";
import { char } from "stylis";
const mapUnits = {
    "Crude Oil": "dollars per barrel",
    "Natural Gas": "dollars per million Btu",
    "Brent Crude Oil": "dollars per barrel",
    "Copper": "dollars per metric ton",
    "Aluminum": "dollars per metric ton",
    "Wheat": "dollars per metric ton",
    "Corn": "dollars per metric ton",
    "Cotton": "cents per pound",
    "Sugar": "cents per pound",
    "Coffee": "cents per pound",
    "Global Price Index": "Compared to 2016 as a base 100 - Not seasonally adjusted"
}

const Commodities = () => {
    const [commodities, setCommodities] = useState([]);
    useEffect(() => {
        const getCommodities = async () => {
            try {
                const res = await fetch('/api/commodity');
                const data = await res.json();
                console.log(data);
                const flattendData = data.flat();
                const chartData = flattendData.map((commodity: any) => {

                    const transformedData = commodity.data 
                    .map(item => {
                        const dateParts = item.date.split('-').map(part => parseInt(part, 10));
                        return {
                            x: new Date(dateParts[0], dateParts[1] - 1, dateParts[2]),
                            y: Math.round(item.price)
                        };
                    });
                    const xValues = transformedData.map(item => item.x);
                    return {...commodity, data:transformedData, date: xValues};
                });
                console.log(chartData);
                setCommodities(chartData);
            } catch (error) {
                console.error('Error getting commodities:', error);
            }
        }
        getCommodities();
    }, []);

    const renderedCommodities = commodities.map((commodity: any, index) => {
        const unit = mapUnits[commodity.name];
        return (
            <div key={commodity.name} >
                <ChartAccordian name={commodity.name} currentValue={commodity.data[0].y} description={commodity.Description} data={commodity.data} unit={unit}/>
            </div>
        )
    });

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Commodity Prices</h1>
            {renderedCommodities}
        </div>
    )
}

export default Commodities;