import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

const Value = () => {
  // State variables to manage form data and result
  const [earnings, setEarnings] = useState("");
  const [priceToBook, setPriceToBook] = useState("");
  const [debtToEquity, setDebtToEquity] = useState("");
  const [freeCashFlow, setFreeCashFlow] = useState("");
  const [priceToCash, setPriceToCash] = useState("");
  const [result, setResult] = useState(null);
  const [result1, setResult1] = useState(null);


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to a variable for calculations
    const formData = {
      earnings,
      priceToBook,
      debtToEquity,
      freeCashFlow,
      priceToCash,
    };

    // Perform calculations or other actions with the formData variable
    // For this example, let's calculate a simple average of the entered values
    const values = Object.values(formData).map(Number);
    const average = (((earnings/15) * 30)+((priceToBook/1)*30)+((debtToEquity/1)*20)+((freeCashFlow/5)*10)+((priceToCash/15)*10))/100;
    const allMetrics =
    earnings < 15 && priceToBook < 1 && debtToEquity < 1 && freeCashFlow > 7 && priceToCash < 10
      ? "Great Value"
      : earnings < 30 && priceToBook < 2 && debtToEquity < 2 && freeCashFlow > 2 && priceToCash < 15
      ? "Good Value"
      : "Bad Value";


    // Set the result in state for rendering
    setResult(average);
    setResult1(allMetrics);
    
  };

  return (
    <>
      <div>
        <h2>Value</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label>
            Earnings per Share ratio:
            <input
              type="number"
              value={earnings}
              onChange={(e) => setEarnings(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            Price to Book ratio:
            <input
              type="number"
              value={priceToBook}
              onChange={(e) => setPriceToBook(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            Debt-to-Equity ratio:
            <input
              type="number"
              value={debtToEquity}
              onChange={(e) => setDebtToEquity(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            Free Cash Flow Yield:
            <input
              type="number"
              value={freeCashFlow}
              onChange={(e) => setFreeCashFlow(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            Price to Cash ratio:
            <input
              type="number"
              value={priceToCash}
              onChange={(e) => setPriceToCash(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <button type="submit">Submit!</button>
        </form>
      </div>
      <div>
        <h3>
          Value Quotient: {result !== null ? result.toFixed(2) : "Submit the form to see the result"}
          <br/>
          Stock: {result1 !== null ? (result1 ===0 ? "Great Value": (result1===1 ? "Good Value": "Bad Value")): "Submit the form to see the result"}
        </h3>
      </div>
    </>
  );
};

export default Value;
