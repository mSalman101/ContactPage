import React from "react";
import styles from "./Buttton.module.css";
const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
