import React from "react";
import PropTypes from "prop-types";
import styles from "./Loader.scss";

export function Loader({ message }) {
  return (
    <>
      <div className={styles.loader} />
      {message && <div className={styles.loaderText}>{message}</div>}
    </>
  );
}

Loader.propTypes = {
  message: PropTypes.string
};
