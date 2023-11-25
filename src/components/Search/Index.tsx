import { useState } from "react";
import styles from "../Search/Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { takeSearch } from "../../features/booksSlice";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        placeholder="🔍    Поиск по книге или автору"
        type="text"
        onChange={(e) => dispatch(takeSearch(e.target.value))}
      />
    </div>
  );
};

export default Search;
