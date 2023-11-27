import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../features/commentsSlice";
import styles from "./myBooks.module.css";

const Comments = ({ item}) => {
  const token = useSelector((state) => state.application.user);
  console.log(token);

  const dispatch = useDispatch();

  const handleDeleteComment = (id) => {
    if (token) {
      dispatch(deleteComment(id));
    } else {
    }
  };

  return (
    <div className={styles.cont}>
      <div className={styles.com_add1}>
        <div className={styles.avat}>
          <h4 className={styles.h1text}>{item.userId?.login}</h4>
        </div>
        <div className={styles.cont2}>
          <div className={styles.commen}>{item.text}</div>
          <button className={styles.btn} onClick={() => handleDeleteComment(item._id)}>❌</button> {}
        </div>
      </div>
    </div>
  );
};

export default Comments;
