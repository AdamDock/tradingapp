import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

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
      <div>
        <h2>Blue Chip</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label>
            Market Capitalization(in billions):
            <input
              type="number"
              value={marketCap}
              onChange={(e) => setMarketCap(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            Dividend(percent):
            <input
              type="number"
              value={dividend}
              onChange={(e) => setDividend(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            Operating Timeline in years:
            <input
              type="number"
              value={operatingTimeline}
              onChange={(e) => setOperatingTimeline(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            Up/Down Volume:
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            Historical Volatility:
            <input
              type="number"
              value={volatility}
              onChange={(e) => setVolatility(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <button type="submit">Submit!</button>
        </form>
      </div>
      <div>
        <h3>
          Blue Chip Score: {bluechipResult !== null ? bluechipResult : "Submit the form to see the result"}
        </h3>
      </div>
    </>
  );
};

export default Bluechip;
