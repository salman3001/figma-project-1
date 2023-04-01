import BrandLogo from "../common/BrandLogo";

const NavBar = () => {
  return (
    <nav className="flex relative justify-between items-center h-16 px-5 sm:px-10 md:px-25 shadow-hero-1">
      {/* logo */}
      <img src="/images/Launder-logo.svg" className="h-4 md:h-8 " />
      {/* links */}
      <div className="hidden lg:flex items-center text-xl gap-6 justify-between">
        <a href="">Pricing</a>
        <a href="">Services</a>
        <a href="">Business</a>
        <a href="">Blog</a>
        <a href="">FAQS</a>
      </div>
      {/* actions */}
      <div className="hidden md:flex gap-2 md:gap-6">
        <button className="btn-1 btn-sm md:btn-md">Login</button>
        <button className="btn-2 btn-sm md:btn-md">Book Now</button>
      </div>
      <div className="block group md:hidden ">
        <label htmlFor="hameburger" className="cursor-pointer">
          <img src="/images/hamburger-menu-icon.svg" className="h-8" alt="" />
        </label>
        <input
          className="peer hidden checked:group-[.hame]:hidden"
          type="checkbox"
          defaultChecked
          id="hameburger"
        />
        <div className="peer-checked:hidden  bg-blue-400 ">sdsd</div>
      </div>
      <div>sssssssssss</div>
    </nav>
  );
};

export default NavBar;
