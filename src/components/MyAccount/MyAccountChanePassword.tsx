import Avatar from "../common/Avatar";
import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";
import FormInput from "../common/forms/FormInput";
import MobileInput from "../common/forms/MobileInput";

const MyAccountChanePassword = () => {
  return (
    <div className=" bg-white">
      <Drawer
        active="myAccount"
        content={
          <>
            <DashboardNav title="My Account" />
            <div className="flex flex-col px-5 md:px-10 gap-8 py-20 xl:py-10">
              <h1 className="text-4xl font-bold">My Account</h1>
              <div className=" flex flex-col">
                <div className="flex space-x-4 text-center text-white">
                  <a className="text-[#022A30] cursor-pointer p-4 py-2 bg-[#afd1d7] bg-opacity-10 w-40 border-[#1ca3b8] border-opacity-25 border-x border-t  rounded-t-lg">
                    Address
                  </a>
                  <a className=" bg-[#00A5BF] cursor-pointer  p-4 py-2 w-40 rounded-t-lg">
                    Profile
                  </a>
                </div>
                <div className="flex flex-col p-5 md:p-10 w-full min-h-[500px] bg-[#afd1d7] border-[#1ca3b8] border-opacity-25 border bg-opacity-10 rounded-sm">
                  <div className="flex flex-col xl:flex-row gap-12 xl:gap-24 bg-white xl:p-10">
                    <div>
                      <Avatar />
                    </div>
                    <form
                      id="addressform"
                      className="grid gap-4 xl:grid-cols-2 w-full"
                    >
                      <div className=" flex flex-col gap-2">
                        <label htmlFor="name" className="opacity-50">
                          Name
                        </label>
                        <FormInput
                          name="name"
                          placeholder="Jackson"
                          type="text"
                        />
                      </div>
                      <div className=" flex flex-col gap-2">
                        <label htmlFor="surname" className="opacity-50">
                          Surname
                        </label>
                        <FormInput
                          name="surname"
                          placeholder="Howell"
                          type="text"
                        />
                      </div>
                      <div className=" flex flex-col gap-2">
                        <label htmlFor="email" className="opacity-50">
                          Email
                        </label>
                        <FormInput
                          name="email"
                          placeholder="jackson@companymail.com"
                          type="text"
                        />
                      </div>
                      <div className=" flex flex-col gap-2">
                        <label htmlFor="mobile" className="opacity-50">
                          Mobile Number
                        </label>
                        <MobileInput name="mobile" placeholder="2025561014" />
                      </div>
                      <div className="flex flex-col gap-2 ">
                        <label htmlFor="password" className="opacity-50">
                          Password
                        </label>
                        <FormInput
                          name="password"
                          placeholder="*******"
                          type="password"
                        />
                        <a href="" className="self-end text-[#00A5BF]">
                          Change password
                        </a>
                      </div>
                    </form>
                  </div>
                  <button
                    type="submit"
                    form="addressform"
                    className="self-end bg-[#00A5BF] m-5 xl:m-10 w-48 p-3 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </>
        }
        modelContent={
          <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
            <h1 className="text-2xl font-bold max-w-sm text-center">
              Change Password?
            </h1>
            <p className="max-w-sm text-center opacity-40">
              Iaculis ipsum congue sit tempor sed imperdiet vivamus urna.
            </p>
            <form action="" className="w-full flex max-w-lg flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="oldpassword" className="opacity-50">
                  Old Password
                </label>
                <FormInput
                  name="oldpassword"
                  placeholder="Type old password"
                  type="password"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="newpassword" className="opacity-50">
                  New Pasword
                </label>
                <FormInput
                  name="newpassword"
                  placeholder="Type new password"
                  type="password"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="confirmpassword" className="opacity-50">
                  Confirm New Pasword
                </label>
                <FormInput
                  name="confirmpassword"
                  placeholder="confirm new password"
                  type="password"
                />
              </div>

              <button className="bg-[#00A5BF] w-full p-4 rounded-lg flex gap-2 text-white justify-center items-center text-xl">
                <span>Submit</span>{" "}
                <img
                  src={import.meta.env.VITE_BASE_URL + "/images/arrow.svg"}
                  className="h-4"
                  alt=""
                />
              </button>
            </form>
          </div>
        }
        modelstate="checked"
      />
    </div>
  );
};

export default MyAccountChanePassword;
