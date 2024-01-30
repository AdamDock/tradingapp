// pages/api/gainers.js

import axios from 'axios';

export default async function handler(req, res) {
  const apiKey = 'DYJQ11FVVN0I8LM0';
  const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    
    if (response.status === 200) {
      // Successfully fetched data
      const data = response.data;
      res.status(200).json(data);
    } else {
      // Handle other status codes if needed
      res.status(response.status).end();
    }
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
