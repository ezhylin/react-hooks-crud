import React from "react";
import styles from './loader.module.css';
import {useSelector} from "react-redux";

export const Loader = () => {
  const { activeRequests } = useSelector(state => state.loader);

  return activeRequests ? (
    <div className={styles.Loader}>
      <div className={styles.loader}>
        Loading ...
      </div>
    </div>
  ) : null;
}