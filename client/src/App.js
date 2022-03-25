import React, { useState, useEffect } from "react";
import Timeline from "./components/Timeline";
import UserInput from "./components/UserInput";
import { getBtcPrices } from "./services/btcPriceService";
import { getAverage, getFormatedData } from "./utils";
import btc from "./btc.png";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState([]);

  const getPrices = async () => {
    const btc = await getBtcPrices();
    const formatedData = await getFormatedData(btc);
    const data = getAverage(formatedData);
    setData(data);
  };

  useEffect(() => {
    getPrices();
  }, []);

  return (
    <div className={styles.bg}>
      <img src={btc} alt="btc" className={styles.logo} />
      <UserInput getPrices={getPrices} />
      <Timeline data={data} />
    </div>
  );
}

export default App;
