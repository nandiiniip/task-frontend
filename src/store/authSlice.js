import { createSlice } from "@reduxjs/toolkit";

// Load data from localStorage
const accessToken = localStorage.getItem("access_token");
const refreshToken = localStorage.getItem("refresh_token");
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: user,
  accessToken: accessToken || null,
  refreshToken: refreshToken || null,
  isAuthenticated: !!accessToken,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setTokens: (state, action) => {
      state.accessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
      state.user = action.payload.user;
      state.isAuthenticated = true;

      localStorage.setItem("access_token", action.payload.access);
      localStorage.setItem("refresh_token", action.payload.refresh);
      localStorage.setItem("user", JSON.stringify(action.payload.user)); // Save user data
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.user = null;

      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, setTokens, logout } = authSlice.actions;
export default authSlice.reducer;
