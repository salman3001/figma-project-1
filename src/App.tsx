import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./components/aboutus/Aboutus";
import BlogDetail from "./components/blogdetail/BlogDetail";
import Blog from "./components/blogpage/Blog";
import Contactus from "./components/contactus/Contactus";
import Faqs from "./components/Faqs/Faqs";
import Home from "./components/Home";
import Location from "./components/Location/Location";
import AddAddress from "./components/MyAccount/AddAddress";
import AddAddressError from "./components/MyAccount/AddAddressError";
import AddAddressForm from "./components/MyAccount/AddAddressForm";
import MyAccount from "./components/MyAccount/MyAccount";
import MyAccount2 from "./components/MyAccount/MyAccount2";
import MyAccountChanePassword from "./components/MyAccount/MyAccountChanePassword";
import MyAccountPasswordChanged from "./components/MyAccount/MyAccountPasswordChanged";
import MyAccountProfile from "./components/MyAccount/MyAccountProfile";
import OrderNowAddAddress from "./components/OrderNow/OrderNowAddAddress";
import OrderNowAddress2 from "./components/OrderNow/OrderNowAddress2";
import OrderNowAdress from "./components/OrderNow/OrderNowAdress";
import Orders from "./components/Orders/Orders";
import OrderTracking from "./components/Orders/OrderTracking";
import OurServices from "./components/OurServices/OurServices";
import Services from "./components/OurServices/Services";
import Privacy from "./components/Privacy/Privacy";
import Promotions2 from "./components/promotion/Promotion2";
import Promotions from "./components/promotion/Promotions";
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
      <Route path="orders" Component={Orders} />
      <Route path="ordertracking" Component={OrderTracking} />
      <Route path="promotions" Component={Promotions} />
      <Route path="promotions2" Component={Promotions2} />
      <Route path="myaccount" Component={MyAccount} />
      <Route path="addaddress" Component={AddAddress} />
      <Route path="addaddresserror" Component={AddAddressError} />
      <Route path="addaddressform" Component={AddAddressForm} />
      <Route path="myaccount2" Component={MyAccount2} />
      <Route path="myaccountprofile" Component={MyAccountProfile} />
      <Route
        path="myaccountchangepassword"
        Component={MyAccountChanePassword}
      />
      <Route
        path="myaccountpasswordchanged"
        Component={MyAccountPasswordChanged}
      />
      <Route path="ordernowaddaddress" Component={OrderNowAddAddress} />
      <Route path="ordernowaddress2" Component={OrderNowAddress2} />
    </Routes>
  );
}

export default App;
