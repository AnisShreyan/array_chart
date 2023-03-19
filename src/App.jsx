import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState([]);
  const [price, setPrice] = useState([]);
  const [time, setTime] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${time}`
      )
      .then((data) => {
        setData(data.data.prices);
      });
  }, [time]);

  useEffect(() => {
    let getDate = data.map((i) => {
      return i[0];
    });
    let getPrice = data.map((i) => {
      return i[1];
    });
    setDate(getDate);
    setPrice(getPrice);
  }, [data]);

  return <>
  <div className="App">
    <input type="number" value={time} onChange={e=>setTime(e.target.value)}/>
  </div>
  </>;
}

export default App;
