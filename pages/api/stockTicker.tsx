// pages/api/earningsCal.js
import fetch from 'isomorphic-fetch';


export default async function handler(req, res) {
    try {
      // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
      const url = 'https://www.alphavantage.co/query?function=EARNINGS&symbol=IBM&apikey=DYJQ11FVVN0I8LM0';
  
      const response = await fetch(url);
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  