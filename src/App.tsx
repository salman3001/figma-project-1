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
import ChangePAssword from "./components/Registration&login/ChangePAssword";
import CheckYouEmail from "./components/Registration&login/CheckYouEmail";
import EnterOtp from "./components/Registration&login/EnterOtp";
import Failed from "./components/Registration&login/Failed";
import Forgotpssword from "./components/Registration&login/Forgotpssword";
import Login from "./components/Registration&login/Login";
import Signup from "./components/Registration&login/Signup";
import Signup1 from "./components/Registration&login/Signup1";
import Signup2 from "./components/Registration&login/Signup2";
import SuccessfullyChanged from "./components/Registration&login/SuccessfullyChanged";
import SuccessfullyVarified from "./components/Registration&login/SuccessfullyVarified";
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
      <Route path="login" Component={Login} />
      <Route path="signup" Component={Signup} />
      <Route path="signup1" Component={Signup1} />
      <Route path="signup2" Component={Signup2} />
      <Route path="checkyouremail" Component={CheckYouEmail} />
      <Route path="successfullyvarified" Component={SuccessfullyVarified} />
      <Route path="forgotpassword" Component={Forgotpssword} />
      <Route path="enterotp" Component={EnterOtp} />
      <Route path="failed" Component={Failed} />
      <Route path="changepassword" Component={ChangePAssword} />
      <Route path="successfullychanged" Component={SuccessfullyChanged} />
    </Routes>
  );
}

export default App;
