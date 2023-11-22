import styles from "./FullPage.module.css";
import bookim from "../../someimg/ведьмак.jpeg";
import car from "../../assets/car.png";
import point from "../../assets/point.png";
const FullPage = () => {
  return (
    <div className={styles.allDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.book}>
          <img id={styles.book} src={bookim} alt="" />
        </div>
        <div className={styles.info}>
          <h1 id={styles.name}>The witcher</h1>

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
                  Анджей Сапковский
                </a>
              </div>
              <div className={styles.categ}>
                <span className={styles.category}>Категория </span>{" "}
                <span className={styles.fantasy}>Фантастика</span>
              </div>
              <div className={styles.anons}>
                <span className={styles.date}>Дата выхода </span>{" "}
                <span className={styles.num}> 01.01.2001</span>
              </div>
              <div className={styles.pages}>
                <span className={styles.pagesCount}>Количество страниц </span>{" "}
                <span className={styles.pagesNum}> 460</span>
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
              <h2 className={styles.h1}>1200р</h2>
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
            Новеллы о ведьмаке Геральте из Ривии, его друзьях и недругах, о
            смертельно опасной его «работе» по истреблению кровожадной нечисти,
            о мире, в котором среди обычных людей живут эльфы, гномы, оборотни и
            драконы, давно стали классикой... Сага Анджея Сапковского занимает
            одно из первых мест в отечественных и зарубежных списках лучшего
            фэнтези, а Геральт, культовый персонаж литературы и компьютерных
            игр, уже во второй раз появляется на телеэкранах. Смотрите
            экранизацию великолепной саги и сравнивайте приключения любимого
            героя в кинематографическом и литературном мирах!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPage;
