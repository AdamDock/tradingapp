import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

const Momentum = () => {
  // State variables to manage form data and result
  const [rsi, setRsi] = useState("");
  const [obv, setObv] = useState("");
  const [movingAverage50, setMovingAverage50] = useState("");
  const [movingAverage200, setMovingAverage200] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [momentumResult, setMomentumResult] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to a variable for calculations
    const formData = {
      rsi,
      obv,
      movingAverage50,
      movingAverage200,
      currentPrice,
    };

    // Perform calculations or other actions with the formData variable
    // For this example, let's calculate a simple score based on the entered values
    const score =
      rsi > 60 && obv > 0 && currentPrice > movingAverage50 && currentPrice > movingAverage200
        ? "Strong Momentum"
        : rsi > 30 && obv > 0 && currentPrice > movingAverage50 && currentPrice > movingAverage200
        ? "Moderate Momentum"
        : "Weak Momentum";

    // Set the result in state for rendering
    setMomentumResult(score);
  };

  return (
    <>
      <div>
        <h2>Momentum</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label>
            Relative Strength Index (RSI):
            <input
              type="number"
              value={rsi}
              onChange={(e) => setRsi(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            On-Balance Volume (OBV):
            <input
              type="number"
              value={obv}
              onChange={(e) => setObv(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            50 Day Moving Average:
            <input
              type="number"
              value={movingAverage50}
              onChange={(e) => setMovingAverage50(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            200 Day Moving Average:
            <input
              type="number"
              value={movingAverage200}
              onChange={(e) => setMovingAverage200(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            Current Price:
            <input
              type="number"
              value={currentPrice}
              onChange={(e) => setCurrentPrice(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <button type="submit">Submit!</button>
        </form>
      </div>
      <div>
        <h3>
          Momentum Score: {momentumResult !== null ? momentumResult : "Submit the form to see the result"}
        </h3>
      </div>
    </>
  );
};

export default Momentum;
