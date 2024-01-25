import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";   

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
  <div className="bg-hover-color rounded-xl outline">        
       <h2 className="text-xl font-bold text-center">Value</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Earnings per Share ratio:
</h1>

            <input
              type="number"
              value={earnings}
              onChange={(e) => setEarnings(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Price to Book ratio:
</h1>

            <input
              type="number"
              value={priceToBook}
              onChange={(e) => setPriceToBook(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Debt-to-Equity ratio:
</h1>

            <input
              type="number"
              value={debtToEquity}
              onChange={(e) => setDebtToEquity(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Free Cash Flow Yield:
</h1>

            <input
              type="number"
              value={freeCashFlow}
              onChange={(e) => setFreeCashFlow(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
          <h1 className="font-semibold text-lg text-chocolate">            Price to Cash ratio:
</h1>

            <input
              type="number"
              value={priceToCash}
              onChange={(e) => setPriceToCash(e.target.value)}
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
      
      {result !== null ? <div className="bg-hover-color rounded-xl outline mt-3">
        <h3 className="text-chocolate text-center">
          <h1 className="text-lg font-bold">Value Quotient</h1>{result !== null ? result.toFixed(2) : ""}</h3>
          <h3 className="text-chocolate text-center">
          <h1 className="text-lg font-bold">Stock:</h1>{result1 !== null ? (result1 ===0 ? "Great Value": (result1===1 ? "Good Value": "Bad Value")): ""}</h3>
      </div> : ""}
    </>
  );
};

export default Value;
