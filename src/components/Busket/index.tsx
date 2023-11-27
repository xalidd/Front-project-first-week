import React, { useEffect, useState } from "react";
import styles from "./busket.module.css";
import book from "../../someimg/ведьмак.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../features/booksSlice";
import { addBookInBasket, deleteBookInBasket, fetchBasket } from "../../features/basketSlica";
import { Link } from "react-router-dom";

export const Busket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBasket());
  }, [dispatch]);
  const bookInbusket = useSelector((state) => state.basket.basket.books);
  console.log(bookInbusket);

  return (
    <div className={styles.mainBusketDiv}>
      <div className={styles.Busket}>
        {bookInbusket?.map((book) => (
          <div className={styles.busketElements}>
            <div className={styles.frameImg}>
              <img src={book.image} alt="" />
            </div>
              <div className={styles.line_2}>
                <div className={styles.bookName}>{book.name}</div>
                <div className={styles.title_author}>{book.author}</div>
              </div>
              <div className={styles.line_3}>
                <Link to={`/readbook/${book._id}`} className={styles.btn_buy}>
                  Читать
                </Link>
              <button className={styles.deleteBook} onClick={() => dispatch(deleteBookInBasket(book._id))}>Удалить</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};
