import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

const Growth = () => {
  // State variables to manage form data and result
  const [forwardPERatio, setForwardPERatio] = useState("");
  const [revenueGrowth, setRevenueGrowth] = useState("");
  const [priceToSalesRatio, setPriceToSalesRatio] = useState("");
  const [returnOnEquity, setReturnOnEquity] = useState("");
  const [pegRatio, setPegRatio] = useState("");
  const [growthResult, setGrowthResult] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to a variable for calculations
    const formData = {
      forwardPERatio,
      revenueGrowth,
      priceToSalesRatio,
      returnOnEquity,
      pegRatio,
    };

    // Perform calculations or other actions with the formData variable
    // For this example, let's calculate a simple score based on the entered values
    const score =
      forwardPERatio < 15 && revenueGrowth > 15 && priceToSalesRatio < 1 && returnOnEquity > 20 && pegRatio < .9
        ? "Great Growth Potential"
        : forwardPERatio < 25 && revenueGrowth > 5 && priceToSalesRatio < 2 && returnOnEquity > 10 && pegRatio < 1.2
        ? "Good Growth Potential"
        : "Limited Growth Potential";

    // Set the result in state for rendering
    setGrowthResult(score);
  };

  return (
    <>
      <div>
        <h2>Growth</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label>
            Forward P/E ratio:
            <input
              type="number"
              value={forwardPERatio}
              onChange={(e) => setForwardPERatio(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            Revenue Growth:
            <input
              type="number"
              value={revenueGrowth}
              onChange={(e) => setRevenueGrowth(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            Price to Sales ratio:
            <input
              type="number"
              value={priceToSalesRatio}
              onChange={(e) => setPriceToSalesRatio(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            Return on Equity:
            <input
              type="number"
              value={returnOnEquity}
              onChange={(e) => setReturnOnEquity(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            PEG Ratio:
            <input
              type="number"
              value={pegRatio}
              onChange={(e) => setPegRatio(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <button type="submit">Submit!</button>
        </form>
      </div>
      <div>
        <h3>
          Growth rating: {growthResult !== null ? growthResult : "Submit the form to see the result"}
        </h3>
      </div>
    </>
  );
};

export default Growth;
