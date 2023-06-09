import React from "react";

const CheckYouEmail = () => {
  return (
    <main className="grid container2 mx-auto lg:grid-cols-2 min-h-screen max-w-screen  ">
      <div className="bg-[#00A5BF] relative flex text-white flex-col justify-between  items-center">
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
          <p className="">See the latest system update on our blog</p>
        </div>
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/Signupart.png"}
          alt=""
          className="self-start"
        />
      </div>
      <div className="bg-white px-32">
        <h1 className="w-full p-5 border-b text-end border-gray-300 border-opacity-20">
          <p className="flex gap-3 justify-end">
            I already have an accound?{" "}
            <a className="text-[#00A5BF]" href="/login">
              Login
            </a>
          </p>
        </h1>
        <div className="flex flex-col justify-center items-center text-center gap-16 h-[90%]">
          <div className="">
            <img
              src={
                import.meta.env.VITE_BASE_URL + "/images/email-circle-icon.png"
              }
              alt=""
            />
          </div>
          <div className="max-w-md">
            <h1 className="h1-md">Check Your Email</h1>
            <p>
              To confirm your email address, tap the linkin the email we sent to
              ioaefhiahe@gmail.com
            </p>
          </div>
          <div className="grid grid-cols-2 p-2 border max-w-xs justify-content-center text-start rounded-lg">
            <div className="">
              <h3>Need Help</h3>
              <a href="" className="text-xs text-[#00A5BF]">
                Contact our support
              </a>
            </div>
            <img
              src={
                import.meta.env.VITE_BASE_URL + "/images/check-circle-icon.png"
              }
              className="place-self-end self-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckYouEmail;
