import axios from "axios";
import store from "../store/store";
import { logout, setTokens } from "../store/authSlice";

// Create an Axios instance
const axiosCustom = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: Add Authorization Token
axiosCustom.interceptors.request.use(
  async (config) => {
    const state = store.getState().auth;
    let accessToken = state.accessToken;
    let refreshToken = state.refreshToken;

    // Ensure token exists before decoding
    if (accessToken) {
      try {
        const tokenParts = accessToken.split(".");
        if (tokenParts.length !== 3) throw new Error("Invalid Token Format");

        const tokenData = JSON.parse(atob(tokenParts[1])); // Decode JWT payload
        const isExpired = tokenData.exp * 1000 < Date.now();

        if (isExpired && refreshToken) {
          try {
            const refreshResponse = await axios.post(
              "http://127.0.0.1:8000/refresh",
              {
                refresh_token: refreshToken,
              },
            );

            accessToken = refreshResponse.data.access_token;
            refreshToken = refreshResponse.data.refresh_token;

            store.dispatch(
              setTokens({ access: accessToken, refresh: refreshToken }),
            );
          } catch (err) {
            console.error("Token refresh failed, logging out...", err);
            store.dispatch(logout());
            window.location.href = "/login";
            return Promise.reject(err);
          }
        }

        config.headers.Authorization = `Bearer ${accessToken}`;
      } catch (error) {
        console.error("Error processing token:", error);
        store.dispatch(logout());
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor: Handle 401 Unauthorized errors
axiosCustom.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // If unauthorized, clear storage and redirect
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.href = "/login";
      }
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  },
);

export default axiosCustom;
