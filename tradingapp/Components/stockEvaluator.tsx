import React, { useState, useEffect} from "react";
import styles from '@/styles/Home.module.css'
import Bluechip from "./stockeval/bluechip";
import Value from "./stockeval/value";
import Growth from "./stockeval/growth";
import Momentum from "./stockeval/momentum";
import Spacer from "./stockeval/dividend";

const Evaluator = ()=>{

    return (
        <div className={styles.column}>
            <div className={styles.solo}>
            <Spacer/>

            </div>
            <span>
            <Value/>

            </span>
            <span>
            <Bluechip/>


            </span>
            <span>
            <Growth/>

            </span>
            <span>
            <Momentum/>

            </span>
        </div>
    );
}
export default Evaluator;
