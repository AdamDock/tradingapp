import fetch from 'isomorphic-fetch';

export default async function handler(req, res) {
    try {
      const apiKey = "b0AH09IUEVj7kFEwAWsmPj4qxCecNX94";
      const endpoint = `https://api.polygon.io/v1/marketstatus/upcoming?apiKey=${apiKey}`;
  
      const response = await fetch(endpoint);
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
  
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }