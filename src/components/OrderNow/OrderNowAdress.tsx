import CheckSteper from "../common/CheckSteper";
import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";
import PromoCard from "../common/PromoCard";
import TrackBar from "../common/TrackBar";

const OrderNowAdress = () => {
  return (
    <div className=" bg-white">
      <Drawer
        active=""
        content={
          <>
            <DashboardNav title="Order Now" />
            <div className="w-full h-16 bg-[#03444F] mt-20 xl:mt-0 text-white flex items-center px-5 md:px-10 ">
              <p className="opacity-70 text-sm md:text-lg ">
                There is high demand in your area, so please place your order
                within 30 minutes.
              </p>
            </div>
            <div className="h-14 flex items-center px-2 md:px-10  ">
              <a className="px-1  text-sm md:text-lg  md:px-2 h-full flex flex-col justify-center cursor-pointer bg-[#00A5BF] text-white">
                Address
              </a>
              <a className="px-1 text-sm md:text-lg  md:px-2 h-full flex flex-col justify-center cursor-pointer">
                Service
              </a>
              <a className="px-1 text-sm md:text-lg  md:px-2 h-full flex flex-col justify-center cursor-pointer">
                Collection
              </a>
              <a className="px-1 text-sm md:text-lg  md:px-2 h-full flex flex-col justify-center cursor-pointer">
                Contacts
              </a>
              <a className="px-1 text-sm md:text-lg  md:px-2 h-full flex flex-col justify-center cursor-pointer">
                Payment
              </a>
            </div>
            {/* progress */}
            <div className="w-full h-1 bg-[#CBECF1]">
              <div className="w-[20%] bg-[#18BFDA] h-full"></div>
            </div>
            <div className="grid xl:grid-cols-3">
              <div className="xl:col-span-2 p-5 md:p-10">
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
              <div className=" flex flex-col gap-6 p-5 md:p-10">
                <div className="border p-10 rounded-lg">
                  <CheckSteper
                    data={[
                      {
                        child: (
                          <div>
                            <p className="font-bold">Address</p>
                            <div className="divider"></div>
                          </div>
                        ),
                        completed: false,
                      },
                      {
                        child: (
                          <div>
                            <p className="font-bold">Services</p>
                            <div className="divider"></div>
                          </div>
                        ),
                        completed: false,
                      },
                      {
                        child: (
                          <div>
                            <p className="font-bold">Collection Time</p>
                            <div className="divider"></div>
                          </div>
                        ),
                        completed: false,
                      },
                      {
                        child: (
                          <div>
                            <p className="font-bold">Delivery Time</p>
                            <div className="divider"></div>
                          </div>
                        ),
                        completed: false,
                      },
                      {
                        child: (
                          <div>
                            <p className="font-bold">Frequency</p>
                            <div className="divider"></div>
                          </div>
                        ),
                        completed: false,
                      },
                      {
                        child: (
                          <div>
                            <p className="font-bold">Contact</p>
                            <div className="divider"></div>
                          </div>
                        ),
                        completed: false,
                      },
                      {
                        child: (
                          <div>
                            <p className="font-bold">Payment</p>
                            <div className="divider"></div>
                          </div>
                        ),
                        completed: false,
                      },
                    ]}
                  />
                </div>
                <div className="flex justify-between">
                  <p className="font-bold">Promotions</p>
                  <a className="text-[#00A5BF]">See All</a>
                </div>
                <PromoCard />
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

export default OrderNowAdress;
