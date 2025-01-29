import { createSlice } from "@reduxjs/toolkit";

const accessToken = localStorage.getItem("access_token");
const refreshToken = localStorage.getItem("refresh_token");

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
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
    },
    setTokens: (state, action) => {
      state.accessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
      state.isAuthenticated = true;

      localStorage.setItem("access_token", action.payload.access);
      localStorage.setItem("refresh_token", action.payload.refresh);
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;

      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
  },
});

export const { setUser, setTokens, logout } = authSlice.actions;
export default authSlice.reducer;
