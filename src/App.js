import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
  DashBoard,
} from "./pages";
import { Provider } from "react-redux";
import store from "./store/store";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<RegisterPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashBoard />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
