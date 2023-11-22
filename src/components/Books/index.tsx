import React from "react";
import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.jpg";
import book4 from "../../assets/book4.jpg";
import basket from "../../assets/basket.png";

import style from "./bookShop.module.css";

export const Books = () => {
  return (
    <div className={style.book}>
      <div className={style.book_nom1}>
        <img src={book1} alt="" sizes="" srcset="" />
        <div className={style.line_1}>
          <div className="left">
            <span className={style.oldPrice}>1450 ₽</span>
            <span className={style.actuaclPrice}>990 ₽</span>
          </div>
          <div className={style.right}>
            <span className={style.sale}>20%</span>
          </div>
        </div>

        <div className={style.line_2}>
          <div className={style.title_head}>Нигель</div>
          <div className={style.title_author}>Саша Карин</div>
        </div>

        <div className={style.line_3}>
          <button className={style.btn_bye}>Купить</button>
          <button className={style.savaBook}>
            <img src={basket} alt="" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
