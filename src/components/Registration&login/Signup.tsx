import Label from "../common/forms/Label";
import MobileInput from "../common/forms/MobileInput";

const Signup = () => {
  return (
    <main className="grid container2 mx-auto lg:grid-cols-2 min-h-screen max-w-screen  ">
      <div className="bg-[#00A5BF] relative flex text-white flex-col justify-between  items-center">
        <h1 className="w-full p-6 border-b border-white border-opacity-20">
          <img
            src={
              import.meta.env.VITE_BASE_URL + "/images/launder-logo-white.svg"
            }
            className="h-6"
            alt=""
          />
        </h1>
        <div className="flex pt-8 flex-col items-center">
          <h1 className="h1-lg">Welcome back!</h1>
          <p className="text-white">See the latest system update on our blog</p>
        </div>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/Signupart.png"}
          alt=""
          className="self-start"
        />
      </div>
      <div className="bg-white ">
        <h1 className="w-full p-5 border-b text-end border-gray-300 border-opacity-20">
          <p className="flex gap-2 justify-end">
            I already have an accound?
            <a className="text-[#00A5BF]" href="/login">
              Login
            </a>
          </p>
        </h1>
        <div className="flex flex-col  ">
          <div className="flex flex-col gap-16 justify-center items-center py-16 px-10 md:px-20 w-full  ">
            <div className="text-center flex justify-center  items-center flex-col gap-2">
              <h1 className="h1-md">Sign up to Laundramoon</h1>
              <p className="text-muted max-w-xs ">
                Please fill in your details below and we will get in touch with
                you shortly.
              </p>
            </div>
            <form id="signup-form" className="w-full flex flex-col gap-8">
              <div className="flex gap-8">
                <div className="flex justify-center items-center gap-4 font-bold">
                  <input
                    type="radio"
                    name="radio-4"
                    className="radio radio-accent"
                    id="individual-radio"
                    checked
                  />
                  <label htmlFor="individual-radio">Individual </label>
                </div>
                <div className="flex justify-center items-center gap-4 font-bold">
                  <input
                    type="radio"
                    name="radio-4"
                    id="company-radio"
                    disabled
                    className="radio radio-accent"
                  />
                  <label htmlFor="company-radio">Company </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="input-container">
                  <label htmlFor="name">Name</label>
                  <input name="name" placeholder="Williums" type="text" />
                </div>
                <div className="input-container">
                  <label htmlFor="surname">surname</label>
                  <input name="name" placeholder="khan" type="text" />
                </div>
                <div className="input-container">
                  <label htmlFor="email">Business Email</label>
                  <input
                    name="email"
                    placeholder="jack@gmail.com"
                    type="email"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="mobile">Mobile</label>
                  <MobileInput placeholder="2382810277" name="mobile" />
                </div>
                <div className="input-container">
                  <Label titile="Password" for="password" />
                  <input name="password" placeholder="***" type="password" />
                </div>
                <div className="input-container">
                  <Label titile="Confirm Password" for="confirmPassword" />
                  <input
                    name="confirmPassword"
                    placeholder="******"
                    type="password"
                  />
                </div>
              </div>
            </form>
            <button form="signup-form" type="submit" className="form-btn">
              <span>Next</span>{" "}
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/arrow.svg"}
                alt=""
              />
            </button>
            <div className="flex w-full">
              <label htmlFor="" className=" flex gap-2 label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-info text-white"
                />
                <span>
                  By signing up, I agree to the Privacy Policy and Terms of
                  Service.
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
