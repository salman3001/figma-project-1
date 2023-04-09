import CheckSteper from "../common/CheckSteper";
import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";
import MobileInput from "../common/forms/MobileInput";
import PromoCard from "../common/PromoCard";

const ContactCompany = () => {
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
                  <h1 className="text-3xl font-bold">Contact</h1>
                  <div className="flex gap-6">
                    <div className="flex gap-2  items-center">
                      <input
                        type="radio"
                        name="usertype"
                        id="userType-individual"
                      />
                      <label htmlFor="userType-individual">Individual</label>
                    </div>
                    <div className="flex gap-2  items-center">
                      <input
                        type="radio"
                        name="usertype"
                        id="userType-company"
                        checked
                      />
                      <label htmlFor="userType-company">Company</label>
                    </div>
                  </div>
                  <div className="grid xl:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="p-3 border rounded-lg"
                        placeholder="Williams"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="surname">Surname</label>
                      <input
                        type="text"
                        name="surname"
                        id="name"
                        className="p-3 border rounded-lg"
                        placeholder="shekspeer"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="p-3 border rounded-lg"
                        placeholder="Williams@company.com"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="mobile">Mobile</label>
                      <MobileInput name="mobile" placeholder="053245412354" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        name="tax"
                        id="tax"
                        className="p-3 border rounded-lg"
                        placeholder="VYY66TR537"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="tax">Tax Number</label>
                      <input
                        type="text"
                        name="e"
                        id="email"
                        className="p-3 border rounded-lg"
                        placeholder="Williams@company.com"
                      />
                    </div>
                  </div>
                  <div className="xl:col-span-2  text-[#00A5BF] self-end">
                    <a href="">Book for others</a>
                  </div>
                  <div className="flex justify-between gap-4 mt-4">
                    <button
                      type="button"
                      className="bg-[#00A5BF] w-full p-4 rounded-lg flex gap-2 text-white justify-center items-center text-xl max-w-sm"
                    >
                      <img
                        src={
                          import.meta.env.VITE_BASE_URL + "/images/arrow.svg"
                        }
                        className="h-4 rotate-180"
                        alt=""
                      />
                      <span>Back</span>{" "}
                    </button>
                    <button
                      type="submit"
                      className="bg-[#00A5BF] w-full p-4 rounded-lg flex gap-2 text-white justify-center items-center text-xl max-w-sm"
                    >
                      <span>Make Payment</span>{" "}
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
                            <p>Toady, 14:00 - 17:00</p>
                            <p className="text-lg font-bold text-[#03444F]">
                              Notes
                            </p>
                            <p className="text-[#03444F]">
                              Notes Lorem Ipsum has been the industry's standard
                              dummy
                            </p>
                            <div className="divider"></div>
                          </div>
                        ),
                        completed: true,
                      },
                      {
                        child: (
                          <div>
                            <p className="font-bold">Delivery Time</p>
                            <p>Toady, 14:00 - 17:00</p>
                            <p className="text-lg font-bold text-[#03444F]">
                              Notes
                            </p>
                            <p className="text-[#03444F]">
                              Notes Lorem Ipsum has been the industry's standard
                              dummy
                            </p>
                            <div className="divider"></div>
                          </div>
                        ),
                        completed: true,
                      },
                      {
                        child: (
                          <div>
                            <p className="font-bold">Frequency</p>
                            <p>Just Once</p>
                            <div className="divider"></div>
                          </div>
                        ),
                        completed: true,
                      },
                      {
                        child: (
                          <div>
                            <p className="font-bold">Contact</p>
                            <p>05321453212</p>
                            <p>Email</p>
                            <div className="divider"></div>
                          </div>
                        ),
                        completed: true,
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

export default ContactCompany;
