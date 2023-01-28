import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const username = 'vinnath112@gmail.com';
    const password = 'YOUR_PASSWORD';
    const auth = btoa(`${username}:${password}`); // encode the credentials in base64
    const headers = {
      'Authorization': `Basic ${auth}`
    };

    axios.get('https://thulana-port.fly.dev/api/collections/portfolio/records', { headers })
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  }, []);

  return <div>{data}</div>;
}

export default MyComponent;
