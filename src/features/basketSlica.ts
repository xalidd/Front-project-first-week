import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Exception } from "sass";

const initialState = {
    BooksInBasket: []
}

export const fetchBasket = createAsyncThunk("fetch/basket", async(_,thunkAPI) =>{
    try {
        const res = await fetch("http://localhost:3040/basket", {
            headers: {
                "Content-Type":"books/json",
                Authorization: `Bearer ${thunkAPI.getState().application.token}`
            },
        })

        const basket = await res.json()
        return basket
    } catch (error) {
        
    }
})

export const addBookInBasket = createAsyncThunk("addBook/fetch", async(id,thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:3040/basket/${id}`, {
            headers: {
                "Content-Type":"books/json",
                Authorization: `Bearer ${thunkAPI.getState().application.token}`
            },
            method:"PATCH",
        })
        const data = await res.json()
        return thunkAPI.fulfillWithValue(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const  deleteBookInBasket = createAsyncThunk("deleteBook/fetch",async(id,thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:3040/basket/${id}`, {
            headers: {
                "Content-Type":"application/json"
            },
            method:"DELETE",
        })
        
        const date = await res.json()
            
        return thunkAPI.fulfillWithValue(date)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
})
const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBasket.fulfilled, (state, action) => {
                state.BooksInBasket = action.payload
            })
            .addCase(addBookInBasket.fulfilled, (state, action) => {
                console.log(action.payload);
                
                state.BooksInBasket.push(action.payload)
            })
            .addCase(deleteBookInBasket.fulfilled, (state,action) => {
            state.BooksInBasket = state.BooksInBasket.filter((item) => item._id !== action.payload._id)
            })
    }
})

export default basketSlice.reducer