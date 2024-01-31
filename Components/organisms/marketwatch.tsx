import React, { useState, useEffect} from "react";
import styles from '@/styles/Home.module.css'
import FedFactors from "./FedFactors";
import Commodities from "./Commodities";

const MarketMetrics = ()=>{

    return (
        <div className={styles.column}>
            <div>
                <FedFactors/>
            </div>
            <div>
                <Commodities/>
            </div>
                
              

        </div>
    );
}
export default MarketMetrics;