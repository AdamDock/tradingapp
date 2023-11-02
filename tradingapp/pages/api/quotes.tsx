const axios = require('axios');

const category = 'happiness';
const apiKey = 'G4LJBaD9NGa0JyYg6zHboqkg9L0e5YaFFSXo744P';
const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;


export default async (req, res) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });

    if (response.status !== 200) {
      console.error('Error:', response.status, response.data);
      res.status(response.status).json(response.data);
    } else {
      console.log(response.data);
      res.status(200).json(response.data);
    }
  } catch (error) {
    console.error('Request failed:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
