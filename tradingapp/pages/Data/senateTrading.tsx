import { useEffect, useState } from 'react';
import axios from 'axios'; // If you're using Axios

const MyPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Using Fetch
    fetch('https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=GEGTXgWZ2hJnasaCxmauE0wznXyRy7ix')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error(error);
      });
      console.log(data);

    // Using Axios (if you installed it)
    // axios.get('https://financialmodelingprep.com/api/v4/senate-trading?symbol=AAPL')
    //   .then((response) => {
    //     setData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  return (
    <div>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default MyPage;
