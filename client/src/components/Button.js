import React from "react";
import PropTypes from "prop-types";

import styles from './Button.module.css';

function Button(props) {
  const { text, fn } = props;
  return (
    <button className={styles.button} onClick={fn}>
      {text}
    </button>
  );
}

Button.propTypes = {
  fn: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
