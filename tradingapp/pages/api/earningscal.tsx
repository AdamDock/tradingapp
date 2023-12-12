// pages/api/earningsCal.js
import fetch from 'isomorphic-fetch';

export default async function handler(req, res) {
    try {
      // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
      const url = 'https://www.alphavantage.co/query?function=EARNINGS_CALENDAR&horizon=3month&apikey=demo';
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const csvData = await response.text();
      const rows = csvData
        .split('\n')
        .map((row) => row.split(','));
  
      console.log('Rows:', rows);
      console.log('success');
  
      res.status(200).json({ success: true, data: rows });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  