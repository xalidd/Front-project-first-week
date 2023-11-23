import styles from "../Pagination/Pagination.module.scss";
import ReactPaginate from "react-paginate";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";
import second from 'first'
import { changePage } from "../../features/booksSlice";
import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {

const dispatch = useDispatch()
const books = useSelector((state) => state.books.books);
const perPage = useSelector((state) => state.books.perPage);
  return (
    <div className={styles.mainDiv}>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel={<ImArrowRight />}
        onPageChange={(e) => dispatch(changePage(e.selected + 1))}
        pageRangeDisplayed={8}
        pageCount={Math.ceil(books.length / perPage)}
        previousLabel={<ImArrowLeft />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
