import React from "react";
import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";

const MyAccount = () => {
  return (
    <div className=" bg-white">
      <Drawer
        active="myAccount"
        content={
          <>
            <DashboardNav title="My Account" />
            <div className="flex flex-col px-10 gap-8 py-20 xl:py-10">
              <h1 className="text-4xl font-bold">My Account</h1>
              <div className=" flex flex-col">
                <div className="flex space-x-4 text-center text-white">
                  <div className="bg-[#00A5BF]  p-4 py-2 w-40 rounded-t-lg ">
                    Address
                  </div>
                  <div className="  text-[#022A30] p-4 py-2 bg-[#afd1d7] bg-opacity-10 w-40 border-[#1ca3b8] border-opacity-25 border-x border-t  rounded-t-lg ">
                    Profile
                  </div>
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
          <div className="w-full h-full flex justify-center items-center"></div>
        }
        modelstate="unchecked"
      />
    </div>
  );
};

export default MyAccount;
