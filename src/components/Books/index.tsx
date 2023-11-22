import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.jpg";
import book4 from "../../assets/book4.jpg";
import style from "./bookShop.module.css";
export const Books = () => {
  return (
    <div className={style.book}>
      <div>
        <img src={book1} alt="" sizes="" />
        Нигиль
      </div>
      <div>
        <img src={book2} alt="" sizes="" />
        Совсем неглавная героиня
      </div>
      <div>
        <img src={book3} alt="" sizes="" />
        Голос твоего рода
      </div>
      <div>
        <img src={book4} alt="" sizes="" />
        Конкистадор поневоле
      </div>
    </div>
  );
};
