import React, { useEffect } from 'react';
import styles from "./header.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../features/categoriesSlice';
const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories.categories)
    
    useEffect(() => {
        dispatch(fetchCategories())
    },[])
    return (
        <>
        <div className="downLine">
        <div className={styles.downNavBar}>
        {categories.map((item) => (
          <div className={styles.k1}>
            <a href=""><b>{item.text}</b></a>
          </div>
        ))}
        </div>
        </div>
        </>
    );
};

export default Categories;