import React, { useEffect } from "react";
import styles from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categoriesSlice";
import { Link } from "react-router-dom";
const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.downNavBar}>
          {categories
            .map((item) => {
              if (item._id === "655f06e887a8a4647f40a422") {
                return (
                  <div className={styles.k1}>
                    <Link to={"/"}>
                      <b>{item.text}</b>
                    </Link>
                  </div>
                );
              }
              return (
                <div className={styles.k1}>
                  <Link to={`/category/${item._id}`}>
                    <b>{item.text}</b>
                  </Link>
                </div>
              );
            })
            .reverse()}
        </div>
      </div>
    </>
  );
};

export default Categories;
