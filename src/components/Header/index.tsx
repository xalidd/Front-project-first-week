import React from "react";
import logo from "../../img/logo.png";
import back from "../../img/back.jpg";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.upLine}>
        <div className={styles.logo}>
          <img src={logo} alt="" width={70} height={70} />
        </div>

        <div className="searchForma">
          <input
            placeholder="Введите название книги или автора"
            className={styles.search}
            type="text"
          />
          <button className={styles.btnNew}>Найти</button>
        </div>
        <div className={styles.navBar}>
          <ul>
            <li>
              <button className={styles.btnNew2}>
                <a href="">Войти</a>
              </button>
            </li>
            <li>
              <button className={styles.btnNew2}>
                <a href="">Мои книги</a>
              </button>
            </li>
            <li>
              <button className={styles.btnNew2}>
                <a href="">Корзина</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="downLine">
        <div className={styles.downNavBar}>
          <div className={styles.k1}>
            <a href="">
              <b>Детективы</b>
            </a>
          </div>
          <div className={styles.k2}>
            <a href="">
              <b>Боевик</b>
            </a>
          </div>
          <div className={styles.k3}>
            <a href="">
              <b>Биография</b>
            </a>
          </div>
          <div className={styles.k4}>
            <a href="">
              <b>Фэнтези</b>
            </a>
          </div>
          <div className={styles.k5}>
            <a href="">
              <b>Романы</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
