import React, { useState } from "react";
import logo from "../../img/logo.png";
import back from "../../img/back.jpg";
import styles from "../Header/header.module.css";
import { Link, NavLink } from "react-router-dom";
import Categories from "./categories";
import { useDispatch, useSelector } from "react-redux";
import { exit } from "../../features/applicationSlice";
import Search from "../Search/Index";
import { fetchBasket } from "../../features/basketSlica";

export const Header = () => {
  const [state, SetState] = useState(false);
  const dispatch = useDispatch();
  const image = useSelector((state) => state.application.user.avatar);
  const num = useSelector((state) => state.application);
  console.log(num);

  const token = useSelector((state) => state.application.token);
  const user = useSelector((state) => state.application.user.login);

  const bookInbusket = useSelector((state) => state.basket.BooksInBasket);

  const handleClose = () => {
    dispatch(exit());
  };
  const bookInBasket = useSelector((state) => state.basket.BooksInBasket);
  console.log(bookInBasket);
  if (!token) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.upLine}>
          <div className={styles.logo}>
            <Link to={"/"}>
              <img src={logo} alt="" width={70} height={70} />
            </Link>
          </div>
          <Search />
          <div className={styles.navBar}>
            {/* <ul>
              <li>
                <Link to={"signup"}>Регистрация</Link>
              </li>
              <li>
                <a href="">Мои книги</a>
              </li>
              <li>
                <a href="">Закладки</a>
              </li>
              <li>
              <Link to={"/busket"}>Корзина <span>{bookInbusket.length}</span></Link>
              </li>
            </ul> */}
            <Link to={"/signup"} className={styles.NavLink}>
              Регистрация
            </Link>
            <Link to={"/signin"} className={styles.NavLink}>
              Войти
            </Link>
            <Link className={styles.NavLink} to={"/signup"}>
              Мои книги
            </Link>
          </div>
        </div>
        <Categories />
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.upLine}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src={logo} alt="" width={70} height={70} />
          </Link>
        </div>
        <Search />
        <div className={styles.navBar}>
          <ul>
            <li>
              <Link to={"/mybook"} className={styles.NavLink}>
                Мои книги
                {/* <span>{bookInBasket.length}</span> */}
              </Link>
            </li>
            <li>
              <h3 className={styles.NavLink}>{user}</h3>
            </li>
            <li>
              <img
                onClick={() => SetState(!state)}
                className={styles.img_logo}
                src={`http://localhost:3040/${image}`}
                alt=""
              />
            </li>
              <div className={`${styles.airDiv} ${state && styles.airDivActive}`}>
                <li>
                  <h3>{user}</h3>
                  <button onClick={handleClose}>Выйти</button>
                </li>
              </div>
          </ul>
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default Header;
