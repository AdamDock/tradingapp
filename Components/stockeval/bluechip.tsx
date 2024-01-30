import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import * as React from 'react';
import Button from '@mui/material/Button';


const Bluechip = () => {
  // State variables to manage form data and result
  const [marketCap, setMarketCap] = useState("");
  const [dividend, setDividend] = useState("");
  const [operatingTimeline, setOperatingTimeline] = useState("");
  const [volume, setVolume] = useState("");
  const [volatility, setVolatility] = useState("");
  const [bluechipResult, setBluechipResult] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to a variable for calculations
    const formData = {
      marketCap,
      dividend,
      operatingTimeline,
      volume,
      volatility,
    };``
    const score =
    marketCap > 250 && dividend >2 && operatingTimeline > 20 && volume > 1 && volatility < .25
      ? "Great Value"
      : marketCap >100 && dividend >1 && operatingTimeline >15 && volume > .7 && volatility < .5
      ? "Good Value"
      : "Bad Value";

    // Perform calculations or other actions with the formData variable
    // For this example, let's calculate a simple score based on the entered values
    // Set the result in state for rendering
    setBluechipResult(score);
  };

  return (
    <>
       <div className="bg-hover-color rounded-xl outline">        

        <h2 className="text-xl font-bold text-center">Blue Chip</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label>
            <h1 className="font-semibold text-lg text-chocolate">            Market Capitalization(in billions):
</h1>
            <input
              type="number"
              value={marketCap}
              onChange={(e) => setMarketCap(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Dividend(percent):
</h1>
            <input
              type="number"
              value={dividend}
              onChange={(e) => setDividend(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Operating Timeline in years:
</h1>
            <input
              type="number"
              value={operatingTimeline}
              onChange={(e) => setOperatingTimeline(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Up/Down Volume:
</h1>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">Historical Volatility:</h1>
            <input
              type="number"
              value={volatility}
              onChange={(e) => setVolatility(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <Button 
          type="submit" 
          variant="contained"
          className="p-2 m-4 text-lg font-bold text-black hover:text-chocolate hover:bg-hover-color bg-hover-color">
            Submit!
          </Button>
        </form>
      </div>
      
               {bluechipResult !== null ? <div className="bg-hover-color rounded-xl outline mt-3">
        <h3 className="text-chocolate text-center">
          <h1 className="text-lg font-bold">Blue Chip Score:</h1>{bluechipResult}</h3>
      </div> : ""}
    </>
  );
};

export default Bluechip;
