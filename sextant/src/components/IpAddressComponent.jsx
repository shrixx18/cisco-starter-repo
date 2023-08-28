import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IpAddressComponent = ({ ipv6 }) => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const apiUrl = `/getIpAddress?ipv6=${ipv6}`;

    axios.get(apiUrl)
      .then(response => {
        setIpAddress(response.data.ipAddress);
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }, [ipv6]);

  return (
    <div>
      <h2>Your {ipv6 ? 'IPv6' : 'IPv4'} Address:</h2>
      <p>{ipAddress}</p>
    </div>
  );
};

export default IpAddressComponent;
