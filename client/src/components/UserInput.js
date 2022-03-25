import React, { useState } from "react";
import PropTypes from "prop-types";

import { postBtcPrice, deleteData, getData } from "../services/btcPriceService";
import Button from "./Button";
import styles from "./UserInput.module.css";

const UserInput = ({ getPrices }) => {
  const [price, setPrice] = useState("");
  const [timeStamp, setTimeStamp] = useState("");

  const handleChange = (e) => {
    setPrice(parseInt(e.target.value));
    setTimeStamp(new Date().getTime());
  };

  const onSubmit = () => {
    postBtcPrice({ price, timeStamp });
    getPrices();
    setPrice("");
  };

  const onReset = () => {
    deleteData();
    getPrices();
  };

  const handleClick = () => {
    getData();
    getPrices();
  };

  return (
    <div data-testid="input" className={styles.container}>
      <Button fn={handleClick} text={"Show historic BTC prices"} />
      <label className={styles.label}>Update Bitcoin price </label>
      <div className={styles.inputContainer}>
        <input type="number" value={price} onChange={handleChange} />

        <Button fn={onSubmit} text={"Submit"} />

        <Button fn={onReset} text={"Reset"} />
      </div>
    </div>
  );
};

UserInput.propTypes = {
  getPrices: PropTypes.func.isRequired,
};

export default UserInput;
