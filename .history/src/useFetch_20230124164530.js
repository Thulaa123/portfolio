import { useEffect, useState } from "react";
import axios from "axios";
const userData = await pb.collection('users').authWithPassword('test@example.com', '123456');

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      }).finally(() => {
        setLoading(false);
      })
  }, [url]);
  return {data, loading, error}
};

export default useFetch;
