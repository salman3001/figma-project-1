import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/blogpage/Blog";
import Home from "./components/Home";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Welcome} />
      <Route path="home" Component={Home} />
      <Route path="blog" Component={Blog} />
    </Routes>
  );
}

export default App;
