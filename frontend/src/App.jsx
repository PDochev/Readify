import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/documents" /> */}
    </Routes>
  );
};

export default App;
