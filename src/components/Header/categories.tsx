import React from 'react';
import styles from "./header.module.css";
const Categories = () => {
    return (
        <div className="downLine">
        <div className={styles.downNavBar}>
          <div className={styles.k1}>
            <a href=""><b>Детективы</b></a>
          </div>
          <div className={styles.k2}>
            <a href=""><b>Боевик</b></a>
          </div>
          <div className={styles.k3}>
            <a href=""><b>Биография</b></a>
          </div>
          <div className={styles.k4}>
            <a href=""><b>Фэнтези</b></a>
          </div>
          <div className={styles.k5}>
            <a href=""><b>Романы</b></a>
          </div>
          
        </div>
      </div>
    );
};

export default Categories;