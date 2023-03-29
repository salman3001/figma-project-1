import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="">
      <h1>Welcome to laundraMoon Design workshop !</h1>
      <h3>Explore the page designes below</h3>
      <Link to="/home" className="btn btn-link">
        Home
      </Link>
    </div>
  );
};

export default Welcome;
