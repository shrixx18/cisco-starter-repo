import express from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/getIpAddress', async (req, res) => {
  try {
    const ipAddressType = req.query.ipv6 ? 'ipv6' : 'ipv4';
    const apiUrl = `https://api.ipify.org?format=json&${ipAddressType}=true`;

    const response = await axios.get(apiUrl);
    const ipAddress = response.data[ipAddressType];
    res.json({ ipAddress });
  } catch (error) {
    console.error('Error fetching IP address:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

