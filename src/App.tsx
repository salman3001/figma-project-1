import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Welcome} />
      <Route path="home" Component={Home} />
    </Routes>
  );
}

export default App;
