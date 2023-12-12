import React, { useState, useEffect} from "react";
import styles from '@/styles/Home.module.css'


import Topgainers from "./gainers-losers/dailyGainers";
import Toplosers from "./gainers-losers/dailyLosers";
import Spacer from "./stockeval/dividend.tsx";


const Gainers = ()=>{

    return (
        <div className={styles.column}>
                <span>
                <Spacer/>
                    </span>

                <span className={styles.top}>
                    <Topgainers/>
                </span>
                <span className={styles.top}>
                    <Toplosers/>

                </span>
              

        </div>
    );
}
export default Gainers;