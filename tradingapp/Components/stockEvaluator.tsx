import React, { useState, useEffect} from "react";
import styles from '@/styles/Home.module.css'
import Bluechip from "./stockeval/bluechip";
import Value from "./stockeval/value";
import Growth from "./stockeval/growth";
import Momentum from "./stockeval/momentum";
import Spacer from "./stockeval/dividend";

const Evaluator = ()=>{

    return (
        <div className="flex justify-evenly align-center">
            <span className="grow p-10 ml-12">
            <Value/>

            </span>
            <span className="grow p-10">
            <Bluechip/>


            </span>
            <span className="grow p-10">
            <Growth/>

            </span>
            <span className="grow p-10">
            <Momentum/>

            </span>
        </div>
    );
}
export default Evaluator;
