import FormInput from "../common/forms/FormInput";
import Label from "../common/forms/Label";
import OrDivider from "../common/OrDivider";
import NavBar from "../navbar/NavBar";

const Login = () => {
  return (
    <main className="grid 2 mx-auto lg:grid-cols-2 min-h-screen max-w-screen font-nuckle ">
      <div className="bgColor-primary relative flex text-white flex-col justify-between  items-center">
        <h1 className="w-full p-6 border-b border-white border-opacity-20">
          <img
            src={
              import.meta.env.VITE_BASE_URL + "/images/launder-logo-white.svg"
            }
            className="h-6 "
            alt=""
          />
        </h1>
        <div className="flex pt-8 flex-col items-center">
          <h1 className="h1-lg">Welcome back!</h1>
          <p className="text-white">See the latest system update on our blog</p>
        </div>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/loginart.png"}
          alt=""
          className="self-start"
        />
      </div>
      <div className="bg-white ">
        <h1 className="w-full p-5 border-b text-end border-gray-300 border-opacity-20">
          <p className="flex gap-2 justify-end">
            Don't have an account?{" "}
            <a className="text-[#00A5BF]" href="/signup">
              Signup
            </a>
          </p>
        </h1>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-16 justify-center items-center py-16 px-10 md:px-20 w-full  ">
            <div className="text-center flex flex-col gap-2">
              <h1 className="h1-md">Log in to Laundramoon</h1>
              <p className="opacity-70 text-xl">Log in to continue</p>
            </div>
            <form
              id="login-form"
              className="md:max-w-[648px] w-full flex flex-col gap-4"
            >
              <div className="flex flex-col gap-4">
                <label htmlFor="email">Email Address</label>
                <input
                  name="email"
                  placeholder="Jackson@infomail.com"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <Label titile="Password" for="password" />
                <FormInput
                  name="password"
                  placeholder="*********"
                  type="password"
                />
              </div>
              <a href="/forgotpassword" className="text-muted">
                Forgot Password?
              </a>
              <button form="login-form" type="submit" className="form-btn">
                <span>Login</span>
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/arrow.svg"}
                  className=""
                  alt=""
                />
              </button>
            </form>
            <OrDivider />
            <div className="flex gap-4">
              <button>
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/google-btn.png"}
                  alt=""
                />
              </button>
              <button>
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/fb-btn.png"}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
