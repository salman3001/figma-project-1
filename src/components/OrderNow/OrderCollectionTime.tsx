import CheckSteper from "../common/CheckSteper";
import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";
import PromoCard from "../common/PromoCard";

const OrderCollectionTime = () => {
  return (
    <div className=" bg-white">
      <Drawer
        active=""
        content={
          <>
            <DashboardNav title="Order Now" />
            <div className="w-full h-16 bg-[#03444F] mt-20 xl:mt-0 text-white flex items-center px-5 md:px-10 ">
              <p className="opacity-70">
                There is high demand in your area, so please place your order
                within 30 minutes.
              </p>
            </div>
            <div className="h-14 flex items-center px-2 md:px-10 w-full ">
              <div className="px-1 md:px-2 h-full flex flex-col justify-center bg-[#00A5BF] text-white">
                Address
              </div>
              <div className="px-1 md:px-2 h-full flex flex-col justify-center">
                Service
              </div>
              <div className="px-1 md:px-2 h-full flex flex-col justify-center">
                Collection
              </div>
              <div className="px-1 md:px-2 h-full flex flex-col justify-center">
                Contacts
              </div>
              <div className="px-1 md:px-2 h-full flex flex-col justify-center">
                Payment
              </div>
            </div>
            {/* progress */}
            <div className="w-full h-1 bg-[#CBECF1]">
              <div className="w-[60%] bg-[#18BFDA] h-full"></div>
            </div>
            <div className="grid xl:grid-cols-3 w-full">
              <div className="xl:col-span-2 p-5 w-full md:p-10">
                <form className="flex flex-col gap-4 ">
                  <h1 className="text-3xl font-bold">Collection & delivery</h1>
                  <h3 className="text-2xl font-bold">Pickup Time</h3>
                  <div className="grid xl:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 relative ">
                      <label htmlFor="day">Select day</label>
                      <input
                        type="date"
                        name="day"
                        id="day"
                        className="border-2 p-2 rounded-lg pl-9"
                      />
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-11 left-2"
                      >
                        <path
                          d="M5.00045 0C4.31253 0 3.75 0.562522 3.75 1.25045V3.12552H6.2497V1.25045C6.25088 0.562522 5.68837 0 5.00045 0Z"
                          fill="#00A5BF"
                        />
                        <path
                          d="M0 3.12402V19.9996H20.0011L20 3.12402C20 3.12402 8.3008 3.12402 0 3.12402ZM17.5002 17.5H2.4997V6.87417H17.5002V17.5Z"
                          fill="#00A5BF"
                        />
                        <path
                          d="M14.9995 0C14.3115 0 13.749 0.562522 13.749 1.25045V3.12552H16.2488V1.25045C16.2488 0.562522 15.6863 0 14.9995 0Z"
                          fill="#00A5BF"
                        />
                        <path
                          d="M8.75014 16.1257L5.375 12.7506L7.12584 10.9997L8.75014 12.6252L12.8753 8.5L14.6261 10.2497L8.75014 16.1257Z"
                          fill="#00A5BF"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2  relative">
                      <label htmlFor="time">Select Time</label>
                      <select
                        name="time"
                        id="time"
                        className="border-2 p-2 rounded-lg pl-9"
                      >
                        <option value="15:00 17:00">15:00 17:00</option>
                        <option value="17:00 20:00">17:00 20:00</option>
                      </select>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-11 left-2"
                      >
                        <g clip-path="url(#clip0_120_588)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 0C4.47153 0 0 4.47153 0 10C0 15.5285 4.47153 20 10 20C15.5285 20 20 15.5285 20 10C20 4.47153 15.5285 0 10 0ZM10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                            fill="#00A5BF"
                          />
                          <path
                            d="M10.9993 5H9.05762V10.9423H13.7635V9.05818H10.9993V5Z"
                            fill="#00A5BF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_120_588">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2 xl:col-span-2">
                      <label htmlFor="instruction">Driver Instruction</label>
                      <textarea
                        name="instruction"
                        id="instruction"
                        className="border-2 p-2 rounded-lg h-28"
                        placeholder="Add any special instructions for driver "
                      />
                    </div>
                  </div>
                  <div className="divider"></div>
                  <h3 className="text-2xl font-bold">Delivery Time</h3>
                  <div className="grid xl:grid-cols-2 gap-4 ">
                    <div className="flex flex-col gap-2 relative">
                      <label htmlFor="day">Select day</label>
                      <input
                        type="date"
                        name="day"
                        id="day"
                        className="border-2 p-2 rounded-lg pl-9"
                      />
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-11 left-2"
                      >
                        <path
                          d="M5.00045 0C4.31253 0 3.75 0.562522 3.75 1.25045V3.12552H6.2497V1.25045C6.25088 0.562522 5.68837 0 5.00045 0Z"
                          fill="#00A5BF"
                        />
                        <path
                          d="M0 3.12402V19.9996H20.0011L20 3.12402C20 3.12402 8.3008 3.12402 0 3.12402ZM17.5002 17.5H2.4997V6.87417H17.5002V17.5Z"
                          fill="#00A5BF"
                        />
                        <path
                          d="M14.9995 0C14.3115 0 13.749 0.562522 13.749 1.25045V3.12552H16.2488V1.25045C16.2488 0.562522 15.6863 0 14.9995 0Z"
                          fill="#00A5BF"
                        />
                        <path
                          d="M8.75014 16.1257L5.375 12.7506L7.12584 10.9997L8.75014 12.6252L12.8753 8.5L14.6261 10.2497L8.75014 16.1257Z"
                          fill="#00A5BF"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2 relative">
                      <label htmlFor="time">Select Time</label>
                      <select
                        name="time"
                        id="time"
                        className="border-2 p-2 rounded-lg pl-9"
                      >
                        <option value="15:00 17:00">15:00 17:00</option>
                        <option value="17:00 20:00">17:00 20:00</option>
                      </select>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-11 left-2"
                      >
                        <g clip-path="url(#clip0_120_588)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 0C4.47153 0 0 4.47153 0 10C0 15.5285 4.47153 20 10 20C15.5285 20 20 15.5285 20 10C20 4.47153 15.5285 0 10 0ZM10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                            fill="#00A5BF"
                          />
                          <path
                            d="M10.9993 5H9.05762V10.9423H13.7635V9.05818H10.9993V5Z"
                            fill="#00A5BF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_120_588">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2 xl:col-span-2">
                      <label htmlFor="instruction">Driver Instruction</label>
                      <textarea
                        name="instruction"
                        id="instruction"
                        className="border-2 p-2 rounded-lg h-28"
                        placeholder="Add any special instructions for driver "
                      />
                    </div>
                  </div>
                  <div className="divider"></div>
                  <h3 className="text-2xl font-bold">Frequency</h3>
                  <div className="">
                    <select
                      name="time"
                      id="time"
                      className="border-2 p-4 rounded-lg w-full"
                    >
                      <option value="15:00 17:00">Just Once</option>
                      <option value="17:00 20:00">Every Week</option>
                    </select>
                  </div>
                  <div className="flex justify-between mt-4 gap-4">
                    <button className="bg-[#00A5BF] w-full p-4 rounded-lg flex gap-2 text-white justify-center items-center text-xl max-w-sm">
                      <img
                        src={
                          import.meta.env.VITE_BASE_URL + "/images/arrow.svg"
                        }
                        className="h-4 rotate-180"
                        alt=""
                      />
                      <span>Back</span>{" "}
                    </button>
                    <button className="bg-[#00A5BF] w-full p-4 rounded-lg flex gap-2 text-white justify-center items-center text-xl max-w-sm">
                      <span>Next</span>{" "}
                      <img
                        src={
                          import.meta.env.VITE_BASE_URL + "/images/arrow.svg"
                        }
                        className="h-4"
                        alt=""
                      />
                    </button>
                  </div>
                </form>
              </div>
              <div className=" flex flex-col gap-6 p-5 md:p-10">
                <div className="border p-10 rounded-lg">
                  <CheckSteper
                    data={[
                      {
                        child: (
                          <div>
                            <p className="font-bold">Address</p>
                            <p className="opacity-50">
                              Nash Conversions Ltd, Unit 5, Shaftesbury Road,
                              LONDON, E10 7DA
                            </p>
                            <div className="divider"></div>
                          </div>
                        ),
                        completed: true,
                      },
                      {
                        child: (
                          <div>
                            <p className="font-bold">Services</p>
                            <p className="text-[#00A5BF]">Wash & Iron</p>
                            <div className="grid grid-cols-2 opacity-60">
                              <p>Shirt</p>
                              <p>&#163; 12.99</p>
                              <p>Top</p>
                              <p>&#163; 12.99</p>
                            </div>
                            <p className="text-[#00A5BF]">Wash & Iron</p>
                            <div className="grid grid-cols-2 opacity-60">
                              <p>Ironing</p>
                              <p>&#163; 12.99</p>
                              <p>Top</p>
                              <p>&#163; 12.99</p>
                            </div>
                            <div className="grid grid-cols-2 text-[#00A5BF]">
                              <p>Total</p>
                              <p>&#163; 72.99</p>
                            </div>

                            <div className="divider"></div>
                          </div>
                        ),
                        completed: true,
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
        modelContent={<></>}
        modelstate="unchecked"
      />
    </div>
  );
};

export default OrderCollectionTime;
