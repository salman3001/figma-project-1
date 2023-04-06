import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="container mx-auto p-10">
      <h1>Welcome to laundraMoon Design workshop !</h1>
      <h3>Explore the page designes below</h3>
      <div className="divider"></div>
      <ul>
        <Link to="/home" className="btn btn-link">
          Home
        </Link>
        <Link to="/blog" className="btn btn-link">
          Blog
        </Link>
        <Link to="/blogdetail" className="btn btn-link">
          Blog Detail
        </Link>
        <Link to="/contactus" className="btn btn-link">
          Contact Us
        </Link>
        <Link to="/aboutus" className="btn btn-link">
          About us
        </Link>
        <Link to="/services" className="btn btn-link">
          Services
        </Link>
        <Link to="/faqs" className="btn btn-link">
          FAQs
        </Link>
        <Link to="/ourservices" className="btn btn-link">
          Our Services
        </Link>
        <Link to="/location" className="btn btn-link">
          Location
        </Link>
        <Link to="/privacy" className="btn btn-link">
          Privacy
        </Link>
        <Link to="/login" className="btn btn-link">
          Login
        </Link>
        <Link to="/signup" className="btn btn-link">
          Sign up
        </Link>
        <Link to="/signup1" className="btn btn-link">
          Sign up 1
        </Link>
        <Link to="/signup2" className="btn btn-link">
          Sign up 2
        </Link>
        <Link to="/checkyouremail" className="btn btn-link">
          Check Your Email
        </Link>
        <Link to="/successfullyvarified" className="btn btn-link">
          Successfully Varified
        </Link>
        <Link to="/forgotpassword" className="btn btn-link">
          Forgot Password
        </Link>
        <Link to="/enterotp" className="btn btn-link">
          Enter OTP
        </Link>
        <Link to="/failed" className="btn btn-link">
          Failed
        </Link>
        <Link to="/changepassword" className="btn btn-link">
          Change Password
        </Link>
        <Link to="/successfullychanged" className="btn btn-link">
          Successfully Changed
        </Link>
        <Link to="/orders" className="btn btn-link">
          Orders
        </Link>
      </ul>
    </div>
  );
};

export default Welcome;
