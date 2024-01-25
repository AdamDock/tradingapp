import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
 
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
       <div className="bg-hover-color rounded-xl outline">        

        <h2 className="text-xl font-bold text-center">Growth</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Forward P/E ratio:
</h1>

            <input
              type="number"
              value={forwardPERatio}
              onChange={(e) => setForwardPERatio(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Revenue Growth:
</h1>

            <input
              type="number"
              value={revenueGrowth}
              onChange={(e) => setRevenueGrowth(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Price to Sales ratio:
</h1>

            <input
              type="number"
              value={priceToSalesRatio}
              onChange={(e) => setPriceToSalesRatio(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Return on Equity:
</h1>

            <input
              type="number"
              value={returnOnEquity}
              onChange={(e) => setReturnOnEquity(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            PEG Ratio:
</h1>

            <input
              type="number"
              value={pegRatio}
              onChange={(e) => setPegRatio(e.target.value)}
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
      
      {growthResult !== null ? <div className="bg-hover-color rounded-xl outline mt-3">
        <h3 className="text-chocolate text-center">
          <h1 className="text-lg font-bold">Growth Rating:</h1>{growthResult}</h3>
      </div> : ""}
    </>
  );
};

export default Growth;
