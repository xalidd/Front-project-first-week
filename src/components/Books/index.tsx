import React from "react";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";
import style from "./bookShop.module.css"
export const Books = () => {
  return (
    <div className={style.book}>
      <div>
        <img src={book1} alt="" sizes="" srcset="" />
         Нигиль
      </div>
      <div>
        <img src={book2} alt="" sizes="" srcset="" />
         Совсем неглавная героиня
      </div>
      <div>
      <img src={book3} alt="" sizes="" srcset="" />
     Голос твоего рода
      </div>
      <div>
      <img src={book4} alt="" sizes="" srcset="" />
      Конкистадор поневоле
      </div>
    </div>
  );
};
