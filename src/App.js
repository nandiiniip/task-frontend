import React from "react";
import "./App.css";
import { HomePage, RegisterPage } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
