import basket from "../../assets/basket.png";
import style from "./bookShop.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../features/booksSlice";

import { useParams } from "react-router-dom";

export const Books = () => {
  const {categoryId} = useParams()
  
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books.books);
  const currentPage = useSelector((state) => state.books.currentPage);
  const perPage = useSelector((state) => state.books.perPage);
  const perPageBooks = useMemo(() => {
    return books.slice((currentPage * perPage) - perPage, currentPage * perPage);
  }, [currentPage,books]);
  
  useEffect(() => {
    dispatch(fetchBooks())
  }, [])
  const books = useSelector(state => state.books.books.filter((item)=> {
    if(!categoryId){
      return item
    }
     return item.categoryId._id === categoryId

  }))
  
  return (
    <div className={style.book}>
      {perPageBooks.map((item, i) => (
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
            <div className={style.title_author}>{item.author}</div>
          </div>

          <div className={style.line_3}>
            <button className={style.btn_bye}>Купить</button>
            <button className={style.savaBook}>
              <img src={basket} alt="" width={24} height={24} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
function useSelectore() {
  throw new Error("Function not implemented.");
}
