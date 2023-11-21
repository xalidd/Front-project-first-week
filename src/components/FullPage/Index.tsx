import styles from "../FullPage/FullPage.module.css";
import bookim from "../../someimg/ведьмак.jpeg";

const FullPage = () => {
  return (
    <div className={styles.allDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.book}>
          <img id={styles.book} src={bookim} alt="" />
        </div>
        <div className={styles.info}>
          <h1 id={styles.name}>The witcher</h1>
          <div className={styles.discreptionAndButtons}>
            <div className={styles.optionsAndDescriptions}>
              <div className={styles.options}>
                <p>ID книги : 12345</p>
                <p>Автор : Анджей Сапковский</p>
                <p>Категория : Фантастика</p>
                <p>Дата выхода : 01.01.2001</p>
                <p>Количество страниц : 460</p>
                <p>Тип обложки: Твердый</p>
                <p>Переводчик: Вандам</p>
              </div>
              <div className={styles.buttons}>
                <h2>1200р</h2>
                <button>Купить сейчас</button>
                <button>Добавить в корзину</button>
              </div>
            </div>
            <div className={styles.description}>
              Новеллы о ведьмаке Геральте из Ривии, его друзьях и недругах, о
              смертельно опасной его «работе» по истреблению кровожадной
              нечисти, о мире, в котором среди обычных людей живут эльфы, гномы,
              оборотни и драконы, давно стали классикой... Сага Анджея
              Сапковского занимает одно из первых мест в отечественных и
              зарубежных списках лучшего фэнтези, а Геральт, культовый персонаж
              литературы и компьютерных игр, уже во второй раз появляется на
              телеэкранах. Смотрите экранизацию великолепной саги и сравнивайте
              приключения любимого героя в кинематографическом и литературном
              мирах!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPage;
