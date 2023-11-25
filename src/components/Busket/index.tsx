import React, { useEffect, useState } from "react";
import styles from "./busket.module.css";
import book from "../../someimg/ведьмак.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../features/booksSlice";
import { addBookInBasket, fetchBasket } from "../../features/basketSlica";
import { Link } from "react-router-dom";

export const Busket = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchBasket())
  },[dispatch])
  const bookInbusket = useSelector(state => state.basket.BooksInBasket.books)
  console.log(bookInbusket);
  
  
  return (
    <>
      <h1>Корзина</h1>
      <div className={styles.Busket}>
        {bookInbusket?.map((book) => (
          <div className={styles.busketElements}>
            <div>
              <img id={styles.book} src={book.image} alt="" />
              <button className={styles.deleteBook}>Удалить из корзины</button>
            </div>
            <div className={styles.line_1}>
              <div className="left">
                <span className={styles.oldPrice}>1450 ₽</span>
                <span className={styles.actuaclPrice}>{book.price}</span>
              </div>
              <div className={styles.right}>
                <span className={styles.sale}>20%</span>
              </div>
              <div className={styles.line_2}>
                <div className={styles.bookName}>{book.name}</div>
                <div className={styles.title_author}>{book.author}</div>
              </div>
              <div className={styles.line_3}>
                <Link to={`/readbook/${book._id}`}
                  className={styles.btn_buy}
                >
                  Читать
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
