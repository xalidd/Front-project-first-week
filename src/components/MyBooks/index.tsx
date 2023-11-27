import styles from "./myBooks.module.css";
import book5 from "../../assets/book5.jpg";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchComments, addComment } from "../../features/commentsSlice";
import { RootState } from "../../features/booksSlice";
import { useSelector, useDispatch } from "react-redux";
import Comments from "./comments";
import { fetchBooks } from "../../features/booksSlice";

const MyBooks = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const comments = useSelector((state: RootState) => state.comments.comments);

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchComments(id));
  }, [dispatch, id]);
  console.log(comments);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    dispatch(addComment({ text: newComment, bookId: id }));
    setNewComment("");
  };

  const bookItem = useSelector((item) =>
    item.books.books?.find((res) => {
      console.log(res);
      if (res._id === id) {
        return res;
      }
    })
  );
  console.log(bookItem);

  return (
    <div className={styles.bookFullPage}>
      <div className={styles.book}>
        <img src={bookItem?.image} alt="" />
        <div className={styles.title}>
          <div className={styles.title1}>{bookItem?.name}</div>
          <div className={styles.title2}>{bookItem?.categoryId.text}</div>
          <div className={styles.title2}>{bookItem?.author}</div>
        </div>

        <div className={styles.text_p}>
          <p>{bookItem?.content}</p>
        </div>
      </div>
      <div className={styles.formTop}>
        <div className={styles.form_class}>
          <textarea
            className={styles.input}
            type="text"
            placeholder="Оставьте ваш комментарий"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />{" "}
          {}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddComment();
            }}
          >
            <button className={styles.add_com} type="submit">
              добавить
            </button>{" "}
            {}
          </form>
        </div>
        <div className={styles.main2}>
          {comments?.map((item) => (
            <Comments key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
