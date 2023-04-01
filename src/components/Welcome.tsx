import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="">
      <h1>Welcome to laundraMoon Design workshop !</h1>
      <h3>Explore the page designes below</h3>
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
    </div>
  );
};

export default Welcome;
