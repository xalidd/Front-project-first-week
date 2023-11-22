import React from "react";
import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.jpg";
import book4 from "../../assets/book4.jpg";
import style from "./bookShop.module.css";
export const Books = () => {
  return (
    <div className={style.book}>
      <div className={style.book_nom1}>
        <img src={book1} alt="" sizes="" srcset="" />
        <div className={style.line_1}>
          <div className="left">
            <span className={style.oldPrice}>1450 руб</span>
            <span className={style.actuaclPrice}>990 руб</span>
          </div>
          <div className={style.right}>
            <span>9%</span>
          </div>
        </div>

        <div className={style.line_2}>
          <div className="title_head">Нигель</div>
          <div className="title_author">Саша Карин</div>
        </div>

        <div className={style.line_3}>
        <button className={style.btn_bye}>Купить</button>
        <button>save</button>

        </div>
      </div>
    </div>
  );
};
