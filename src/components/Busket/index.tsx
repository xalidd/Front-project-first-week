import React from "react";
import styles from "./busket.module.css";
import book from "../../someimg/ведьмак.jpeg";
export const Busket = () => {
  return (
    <div className={styles.Busket}>
      <h1>Корзина</h1> 
    
      <div className={styles.busketElements}>
      
        <div> 
        <img id={styles.book} src={book} alt="" /> 
         <button className={styles.deleteBook}>Удалить из корзины</button>
      </div>
      <div className={styles.line_1}>
        <div className="left">
          <span className={styles.oldPrice}>1450 ₽</span>
          <span className={styles.actuaclPrice}>{styles.price} 700₽</span>
        </div>
        <div className={styles.right}>
          <span className={styles.sale}>20%</span>
        </div>
        <div className={styles.line_2}>
          <div className={styles.bookName}>The witcher</div>
          <div className={styles.title_author}>
            {styles.author} Анджей Сапковский
          </div>
        </div>
        <div className={styles.line_3}>
          <button className={styles.btn_buy}>Купить</button>
        </div>
      </div>
    </div>
    </div>
  );
};
