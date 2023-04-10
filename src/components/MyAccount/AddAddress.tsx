import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";
import FormInput from "../common/forms/FormInput";
import Label from "../common/forms/Label";

const AddAddress = () => {
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
                  <a className="bg-[#00A5BF]  p-4 py-2 w-40 rounded-t-lg cursor-pointer">
                    Address
                  </a>
                  <a className="  text-[#022A30] p-4 py-2 cursor-pointer bg-[#afd1d7] bg-opacity-10 w-40 border-[#1ca3b8] border-opacity-25 border-x border-t  rounded-t-lg ">
                    Profile
                  </a>
                </div>
                <div className="p-10 w-full min-h-[500px] bg-[#afd1d7] border-[#1ca3b8] border-opacity-25 border bg-opacity-10 rounded-sm">
                  <div className="max-w-xl flex flex-col gap-4 ">
                    <h1 className="text-xl font-bold text-[#045462]">
                      Lorem Ipsum
                    </h1>
                    <p className="opacity-50">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia, a possimus. Cupiditate perspiciatis laborum quam
                      delectus unde corporis eos eligendi expedita eaque. Quae
                      adipisci saepe natus aperiam! Vero, porro aut.
                    </p>
                    <button className="flex justify-center items-center gap-4 bg-[#00A5BF] text-white p-2 px-1 w-40 rounded-lg">
                      <span className="text-3xl">+</span>
                      <p>Add More</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
        modelContent={
          <div className="w-full h-full flex flex-col gap-6 justify-center items-center">
            <h1 className="text-2xl font-bold">Add Address</h1>
            <p className="max-w-sm text-center opacity-40">
              Please fill in your details below and we will get in touch with
              you shortly.
            </p>
            <form action="" className="flex flex-col gap-6 ">
              <div className=" space-y-2 ">
                <label htmlFor="address" className="opacity-40">
                  Search for address or building
                </label>
                <FormInput
                  name="address"
                  placeholder="21 Lombard St, London EC3V 9AH, UK"
                  type="text"
                />
                <button className="flex gap-2 text-xs text-[#00A5BF] pt-1">
                  <img
                    src={
                      import.meta.env.VITE_BASE_URL + "images/location 1.svg"
                    }
                    className="h-4"
                    alt=""
                  />{" "}
                  Passcode Search
                </button>
              </div>

              <button className="bg-[#00A5BF] w-full p-4 rounded-lg flex gap-2 text-white justify-center items-center text-xl">
                <span>Next</span>{" "}
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

export default AddAddress;
