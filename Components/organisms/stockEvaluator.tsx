import React, { useState, useEffect} from "react";
import Bluechip from "../molecules/bluechip";
import Value from "../molecules/value";
import Growth from "../molecules/growth";
import Momentum from "../molecules/momentum";

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
