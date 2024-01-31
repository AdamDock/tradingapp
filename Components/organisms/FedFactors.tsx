import { useEffect } from "react";
import ChartAccordian from "../molecules/chartaccordian";

const FedFactors = () => {
    useEffect(() => {
    }, []);
    const renderedFactors = () => {
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Federal Reserve Metrics</h1>

            <ChartAccordian/>
        </div>
    );
}
export default FedFactors;