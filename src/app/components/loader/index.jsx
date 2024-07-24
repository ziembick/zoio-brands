import React from "react";
import styles from "./loader.module.css";

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div className={styles.love}></div>
        <div className={styles.love}></div>
        <div className={styles.love}></div>
        <div className={styles.love}></div>
        <div className={styles.love}></div>
        <div className={styles.love}></div>
        <div className={styles.love}></div>
      </div> 
    </div>
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div className={styles.death}></div>
        <div className={styles.death}></div>
        <div className={styles.death}></div>
        <div className={styles.death}></div>
        <div className={styles.death}></div>
        <div className={styles.death}></div>
        <div className={styles.death}></div>
      </div> 
    </div>
    <div className={styles.container}>
      <div className={styles.carousel}>
          <div className={styles.robots}></div>
          <div className={styles.robots}></div>
          <div className={styles.robots}></div>
          <div className={styles.robots}></div>
          <div className={styles.robots}></div>
          <div className={styles.robots}></div>
          <div className={styles.robots}></div>
      </div> 
    </div>
  </div>
);

export default Loader;
