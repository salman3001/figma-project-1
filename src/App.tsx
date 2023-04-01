import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./components/aboutus/Aboutus";
import BlogDetail from "./components/blogdetail/BlogDetail";
import Blog from "./components/blogpage/Blog";
import Contactus from "./components/contactus/Contactus";
import Faqs from "./components/Faqs/Faqs";
import Home from "./components/Home";
import Location from "./components/Location/Location";
import OurServices from "./components/OurServices/OurServices";
import Services from "./components/OurServices/Services";
import Privacy from "./components/Privacy/Privacy";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Welcome} />
      <Route path="home" Component={Home} />
      <Route path="blog" Component={Blog} />
      <Route path="blogdetail" Component={BlogDetail} />
      <Route path="contactus" Component={Contactus} />
      <Route path="aboutus" Component={Aboutus} />
      <Route path="services" Component={Services} />
      <Route path="faqs" Component={Faqs} />
      <Route path="ourservices" Component={OurServices} />
      <Route path="location" Component={Location} />
      <Route path="privacy" Component={Privacy} />
    </Routes>
  );
}

export default App;
