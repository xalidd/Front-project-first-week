import styles from "./FullPage.module.css";
import bookim from "../../someimg/ведьмак.jpeg";
import car from "../../assets/car.png";
import point from "../../assets/point.png";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "../../features/booksSlice";
const FullPage = () => {
  const  dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchBooks())
  },[])
  const selectCart = useParams()
  console.log(selectCart.booksId);
  const cart = useSelector((item) => item.books.books?.find((res) => {
    if(res._id === selectCart.booksId){
      return res
    }
  }))
  console.log(cart.categoryId.text);
  
  return (
    <div className={styles.allDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.book}>
          <img id={styles.book} src={cart.image} alt="" />
        </div>
        <div className={styles.info}>
          <h1 id={styles.name}>{cart.name}</h1>

          <div className={styles.optionsAndButtons}>
            <div className={styles.options}>
              <div className={styles.bookId}>
                <span className={styles.productTitle}> ID книги</span>{" "}
                <span className={styles.productValue}>12345</span>
              </div>
              <div className={styles.aut}>
                {" "}
                <span className={styles.author}>Автор </span>{" "}
                <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BF%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,_%D0%90%D0%BD%D0%B4%D0%B6%D0%B5%D0%B9">
                  {cart.author}
                </a>
              </div>
              <div className={styles.categ}>
                <span className={styles.category}>Категория </span>{" "}
                <span className={styles.fantasy}>{cart.categoryId.text}</span>
              </div>
              <div className={styles.anons}>
                <span className={styles.date}>Дата выхода </span>{" "}
                <span className={styles.num}>{cart.data}</span>
              </div>
              <div className={styles.pages}>
                <span className={styles.pagesCount}>Количество страниц </span>{" "}
                <span className={styles.pagesNum}>{cart.numbersOfPages}</span>
              </div>
              <div className={styles.type}>
                <span className={styles.cover}>Тип обложки</span>{" "}
                <span className={styles.coverOfBook}>Твердый</span>
              </div>
              <div className={styles.interpreter}>
                <span className={styles.interpreterOfBook}>Переводчик</span>{" "}
                <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%B0%D0%BD_%D0%94%D0%B0%D0%BC%D0%BC,_%D0%96%D0%B0%D0%BD-%D0%9A%D0%BB%D0%BE%D0%B4">
                  Вандамм
                </a>
              </div>
            </div>
            <div className={styles.buttons}>
              <h2 className={styles.h1}>{cart.price}</h2>
              <button className={styles.btn}>Купить сейчас</button>
              <button className={styles.btn2}>Добавить в корзину</button>
              <p>
                {" "}
                <img id={styles.car} src={car} alt="" />
                Доставка курьером, ага, а еще чего?
              </p>
              <p>
                <img id={styles.point} src={point} alt="" /> Доставка в пункт
                выдачи, тоже не доставляем
              </p>
            </div>
          </div>
          <div className={styles.text}>Описание книги</div>
          <div className={styles.description}>
            {cart.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPage;
