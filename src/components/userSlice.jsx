import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      console.log("Response Status:", response.status);

      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue("Login failed. Not recognized by API!");
      }
    } catch (error) {
      console.log("Error:", error);
      return rejectWithValue("Login failed. Not recognized by API!");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.user = null;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;