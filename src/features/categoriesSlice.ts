import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
}

export const fetchCategories = createAsyncThunk(
    "categories/fetch",
    async(_,thunkAPI) => {
        try {
            const res = await fetch("http://localhost:3040/categories",{
                headers: {
                    "Content-Type":"application/json"
                }
            })
            
            const categories = await res.json()
            
            return categories
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state,action) => {
            state.categories = action.payload
            })
    }
})

export default categoriesSlice.reducer