import basket from "../../assets/basket.png";
import style from "./Books.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../features/booksSlice";
import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Pagination from "../Pagination/Index";
import { addBook } from "../../features/booksSlice";
import { addBookInBasket } from "../../features/basketSlica";

export const Books = () => {
  const { categoryId } = useParams();

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.books.currentPage);
  const perPage = useSelector((state) => state.books.perPage);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const books = useSelector((state) =>
    state.books.books.filter((item) => {
      if (!categoryId) {
        return item;
      }

      return item.categoryId._id === categoryId;
    })
  );
//
  const fromInput = useSelector((state) => state.books.inputValue);
    console.log(fromInput);
    
  const perPageBooks = useMemo(() => {
    return books.slice(currentPage * perPage - perPage, currentPage * perPage);
  }, [currentPage, books]);

  const choosedBook = perPageBooks.filter((item) => {
    if (item.name.toLowerCase().includes(fromInput.toLowerCase())) {
      return true;
    }
    return false;
  });
//

  return (
    <>
      <div className={style.book}>
        {choosedBook.map((item, i) => (
          <div className={style.book_nom1}>
            <Link to={`/books/${item._id}`}>
              <img src={item.image} alt="" sizes="" srcset="" />
            </Link>
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
              <div className={style.title_head}>
                <Link to={`/books/${item._id}`}>{item.name}</Link>
              </div>
              <div className={style.title_author}>{item.author}</div>
            </div>

            <div className={style.line_3}>
              <button className={style.btn_bye} onClick={() => dispatch(addBookInBasket(item._id))}>Добавить в корзину</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Pagination books={books} />
      </div>
    </>
  );
};
function useSelectore() {
  throw new Error("Function not implemented.");
}
function pushBookBasket(): any {
  throw new Error("Function not implemented.");
}

