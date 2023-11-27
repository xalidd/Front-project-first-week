import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  error: null,
  loading: false,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments", 
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3040/comments/${id}`, {
        method: "GET",
      });

      const comments = await res.json();

      if (comments.error) {
        return thunkAPI.rejectWithValue(comments.error);
      }

      return comments;
    } catch (e) {
      return thunkAPI.rejectWithValue(e); 
    }
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment", 
  async ({ text, bookId }, thunkAPI) => {
    const token = thunkAPI.getState().application.token;

    try {
      const res = await fetch(`http://localhost:3040/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({text, bookId}), 
      });

      const comments = await res.json(); 

      if (comments.error) {
        return thunkAPI.rejectWithValue(comments.error);
      }

      return comments;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment", 
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().application.token;

    try {
      await fetch(`http://localhost:3040/comments/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return id; 
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.loading = false;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter((comment) => comment._id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default commentsSlice.reducer;
