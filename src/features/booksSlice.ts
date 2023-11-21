import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { builders } from "prettier/doc.js";


const initialState = {

    books: [],
    error: null,

}

export const fetchBooks = createAsyncThunk(
    "fetch/Books",
    async (_, thunkAPI) => {
       
      try {
        const res = await fetch("http://localhost:3040/books", {
          method: 'GET',
          
        });
  
        const books = await res.json();
  
        if (books.error) {
          return thunkAPI.rejectWithValue(books.error);
        }
  
        return books;
      } catch (e) {
        thunkAPI.rejectWithValue(e);
      }
    }
  );


  const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.error = action.payload;
      })

        .addCase(fetchBooks.pending, (state, action) => {
       
      })
    }
  })

  export default booksSlice.reducer;