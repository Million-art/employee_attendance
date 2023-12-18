'use client'
import React, { useEffect, useState } from 'react';
import User from '../components/User';

const Employees = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  const [userIP, setUserIP] = useState('');

  useEffect(() => {
    const allowedIP = '192.168.0.9';

    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const detectedIP = data.ip;
        setUserIP(detectedIP);

        if (detectedIP === allowedIP) {
          setIsAllowed(true);
        } else {
          console.log(`Detected IP: ${detectedIP}. Access denied.`);
        }
      })
      .catch(error => {
        console.error('Error fetching IP:', error);
      });
  }, []);

  return (
    <div>
      {isAllowed ? (
        <h1>Welcome to the page!</h1>
      ) : (
        <h1>Access denied. Please connect via the allowed router. Detected IP: {userIP}</h1>
      )}
              <User/>

    </div>
  );
};

export default Employees;
