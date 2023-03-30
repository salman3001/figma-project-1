import BrandLogo from "../common/BrandLogo";

const NavBar = () => {
  return (
    <nav className="flex relative justify-between items-center  h-[10vh] px-24 shadow-hero-1">
      {/* logo */}
      <img src="/images/Launder-logo.svg" className="h-8 " />
      {/* links */}
      <div className="flex items-center text-xl gap-6 justify-between">
        <a href="">Pricing</a>
        <a href="">Services</a>
        <a href="">Business</a>
        <a href="">Blog</a>
        <a href="">FAQS</a>
      </div>
      {/* actions */}
      <div className="flex gap-6">
        <button className="btn-1">Login</button>
        <button className="btn-2">Book Now</button>
      </div>
    </nav>
  );
};

export default NavBar;
