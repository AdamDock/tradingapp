import React, { useState, useEffect} from "react";
import styles from '@/styles/Home.module.css'
import FedFactors from "../molecules/FedFactors";
import Commodities from "../molecules/Commodities";

const Gainers = ()=>{

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
export default Gainers;