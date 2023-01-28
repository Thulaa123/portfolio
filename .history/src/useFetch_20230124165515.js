import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const username = 'YOUR_USERNAME';
    const password = 'YOUR_PASSWORD';
    const auth = btoa(`${username}:${password}`); // encode the credentials in base64
    const headers = {
      'Authorization': `Basic ${auth}`
    };

    axios.get('https://api.pocketbase.io/endpoint', { headers })
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  }, []);

  return <div>{data}</div>;
}

export default MyComponent;
