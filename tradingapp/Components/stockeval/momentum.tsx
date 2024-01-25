import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
   
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
 <div className="bg-hover-color rounded-xl outline">        
 <h2 className="text-xl font-bold text-center">Momentum</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Relative Strength Index (RSI):
</h1>

            <input
              type="number"
              value={rsi}
              onChange={(e) => setRsi(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            On-Balance Volume (OBV):
</h1>

            <input
              type="number"
              value={obv}
              onChange={(e) => setObv(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            50 Day Moving Average:
</h1>

            <input
              type="number"
              value={movingAverage50}
              onChange={(e) => setMovingAverage50(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            200 Day Moving Average:
</h1>

            <input
              type="number"
              value={movingAverage200}
              onChange={(e) => setMovingAverage200(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Current Price:
</h1>

            <input
              type="number"
              value={currentPrice}
              onChange={(e) => setCurrentPrice(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <Button 
          type="submit" 
          variant="contained"
          className="p-2 m-4 text-lg font-bold text-black hover:text-chocolate hover:bg-hover-color bg-hover-color">
            Submit!
          </Button>        </form>
      </div>
      
      {momentumResult !== null ? <div className="bg-hover-color rounded-xl outline mt-3">
        <h3 className="text-chocolate text-center">
          <h1 className="text-lg font-bold">Momentum Score:</h1>{momentumResult}</h3>
      </div> : ""}
    </>
  );
};

export default Momentum;
