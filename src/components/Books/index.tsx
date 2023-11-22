import React, { useEffect } from "react";
import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.jpg";
import book4 from "../../assets/book4.jpg";
import basket from "../../assets/basket.png";
import style from "./bookShop.module.css";
import { useDispatch,useSelector } from "react-redux";
import { fetchBooks } from "../../features/booksSlice";

export const Books = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchBooks())
  }, [])
  const books = useSelector(state => state.books.books)
  console.log(books);
  
  return (
    <div className={style.book}>
    {books.map((item,i) => (
        <div className={style.book_nom1}>
          <img src={item.image} alt="" sizes="" srcset="" />
          <div className={style.line_1}>
            <div className="left">
              <span className={style.oldPrice}>1450 ₽</span>
              <span className={style.actuaclPrice}>{item.price}</span>
            </div>
            <div className={style.right}>
              <span className={style.sale}>20%</span>
            </div>
          </div>
  
          <div className={style.line_2}>
            <div className={style.title_head}>{item.name}</div>
            <div className={style.title_author}>Саша Карин</div>
          </div>
  
          <div className={style.line_3}>
            <button className={style.btn_bye}>Купить</button>
            <button className={style.savaBook}>
              <img src={basket} alt="" width={24} height={24} />
            </button>
          </div>
        </div>
    ))
  }
  </div>
  );
};
function useSelectore() {
  throw new Error("Function not implemented.");
}

