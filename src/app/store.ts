import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import categories from "../features/categoriesSlice";
import books from "../features/booksSlice";
import comments from "../features/commentsSlice";
import basket from "../features/basketSlica"
export const store = configureStore({
    reducer: {
        application,
        categories,
        books,
        comments,
        basket
    },
    devTools: true,
})