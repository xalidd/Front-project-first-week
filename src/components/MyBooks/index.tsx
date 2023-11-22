import React from "react";
import book5 from "../../assets/book5.jpg";
import styles from "./myBooks.module.css"

const MyBooks = () => {
  return (
    <div>
      {" "}
      мои книги
      <div className={styles.book}>
      <img src={book5} alt="" sizes="" srcset="" />
        <div className={styles.title}>
          <div className={styles.title1}>Незванный гость</div>
          <div className={styles.title2}>Детективный роман. Триллер</div>
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
