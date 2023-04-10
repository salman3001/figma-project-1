import CheckSteper from "../common/CheckSteper";
import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";
import FormInput from "../common/forms/FormInput";
import PromoCard from "../common/PromoCard";

const OrderNowAddAddress = () => {
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
              <a className="px-1 text-sm md:text-lg  md:px-2 h-full flex flex-col justify-center cursor-pointer bg-[#00A5BF] text-white">
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
          <div className="w-full h-full flex flex-col gap-6 justify-center items-center ">
            <h1 className="text-2xl font-bold">Add Address</h1>
            <p className="max-w-sm text-center opacity-40">
              Please fill in your details below and we will get in touch with
              you shortly.
            </p>
            <form action="" className="flex flex-col gap-6 w-full ">
              <div className="flex flex-col gap-6">
                {/* Address type radio buttons */}
                <div className="flex gap-4 flex-wrap justify-evenly">
                  <div className="w-32 flex ">
                    <input
                      type="radio"
                      name="addressType"
                      id="home-radio-input"
                      value="Home"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="home-radio-input"
                      className="flex gap-2 rounded-lg  justify-center px-4 py-2 border w-full peer-checked:border-[#00A5BF] peer-checked:text-[#00A5BF] peer-checked:[&>svg>path]:fill-[#00A5BF]"
                    >
                      <svg
                        width="21"
                        height="25"
                        viewBox="0 0 21 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.8333 7.52092L12.8334 0.953774C12.1917 0.339565 11.361 0 10.5 0C9.63912 0 8.80841 0.339565 8.16672 0.953774L1.16677 7.52092C0.796201 7.87558 0.50049 8.31067 0.299326 8.79719C0.0981609 9.28372 -0.00384129 9.81053 0.000110592 10.3425V21.2545C0.000110592 22.2479 0.368857 23.2005 1.02523 23.903C1.6816 24.6054 2.57183 25 3.50009 25H17.5C18.4282 25 19.3185 24.6054 19.9748 23.903C20.6312 23.2005 21 22.2479 21 21.2545V10.3301C21.0023 9.80014 20.8995 9.27574 20.6983 8.7915C20.4972 8.30725 20.2024 7.87419 19.8333 7.52092ZM12.8334 22.503H8.16672V16.2605C8.16672 15.9293 8.28964 15.6118 8.50843 15.3776C8.72722 15.1435 9.02396 15.012 9.33338 15.012H11.6667C11.9761 15.012 12.2729 15.1435 12.4916 15.3776C12.7104 15.6118 12.8334 15.9293 12.8334 16.2605V22.503ZM18.6666 21.2545C18.6666 21.5856 18.5437 21.9032 18.3249 22.1373C18.1061 22.3715 17.8094 22.503 17.5 22.503H15.1667V16.2605C15.1667 15.2671 14.7979 14.3144 14.1416 13.612C13.4852 12.9096 12.5949 12.5149 11.6667 12.5149H9.33338C8.40513 12.5149 7.51489 12.9096 6.85852 13.612C6.20215 14.3144 5.8334 15.2671 5.8334 16.2605V22.503H3.50009C3.19067 22.503 2.89392 22.3715 2.67513 22.1373C2.45634 21.9032 2.33343 21.5856 2.33343 21.2545V10.3301C2.33364 10.1528 2.36912 9.9776 2.43751 9.81614C2.50591 9.65469 2.60565 9.51067 2.73009 9.39367L9.73004 2.83902C9.94294 2.63886 10.2166 2.52847 10.5 2.52847C10.7834 2.52847 11.0571 2.63886 11.27 2.83902L18.27 9.39367C18.3944 9.51067 18.4942 9.65469 18.5626 9.81614C18.631 9.9776 18.6664 10.1528 18.6666 10.3301V21.2545Z"
                          fill="#747474"
                        />
                      </svg>
                      <p>Home</p>
                    </label>
                  </div>
                  <div className="w-32 flex">
                    <input
                      type="radio"
                      name="addressType"
                      id="office-radio-input"
                      value="Office"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="office-radio-input"
                      className="flex gap-2 rounded-lg  justify-center px-4 py-2 border w-full peer-checked:border-[#00A5BF] peer-checked:text-[#00A5BF] peer-checked:[&>svg>path]:fill-[#00A5BF]"
                    >
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.31929 5.65412V3.7781C7.31929 3.18383 7.80191 2.70029 8.3971 2.70029H14.6028C15.1971 2.70029 15.6806 3.18383 15.6806 3.7781V5.65412H7.31929ZM19.0903 5.65412H17.1451V3.7781C17.1451 2.3764 16.0045 1.23584 14.6028 1.23584H8.3971C6.9954 1.23584 5.85484 2.3764 5.85484 3.7781V5.65412H3.13263C2.49038 5.65412 1.9081 6.00754 1.61189 6.57598C1.31568 7.14533 1.35997 7.82542 1.72816 8.35049L4.29626 12.0222C4.61647 12.4809 5.14153 12.7549 5.70166 12.7549H17.1764C17.8473 12.7549 18.46 12.36 18.7387 11.7482L20.0851 8.77773C20.2512 8.40954 20.0887 7.97491 19.7206 7.80789C19.3505 7.64087 18.9177 7.8042 18.7507 8.17239L17.4044 11.1428C17.3638 11.2323 17.2743 11.2895 17.1764 11.2895H5.70166C5.62045 11.2895 5.54294 11.2508 5.4968 11.1834L2.92778 7.51075C2.85211 7.40279 2.88441 7.30313 2.91024 7.2533C2.937 7.20255 3.0016 7.11857 3.13263 7.11857H19.0903C20.1727 7.11857 21.0198 7.93523 21.0198 8.97982V18.4383C21.0198 19.4645 20.1838 20.3005 19.1586 20.3005H3.84133C2.8152 20.3005 1.98008 19.4645 1.98008 18.4383V10.7802C1.98008 10.3751 1.65249 10.0475 1.24739 10.0475C0.84229 10.0475 0.515625 10.3751 0.515625 10.7802V18.4383C0.515625 20.2728 2.00684 21.765 3.84133 21.765H19.1586C20.9921 21.765 22.4843 20.2728 22.4843 18.4383V8.97982C22.4843 7.11488 20.9931 5.65412 19.0903 5.65412Z"
                          fill="#747474"
                          stroke="#747474"
                          stroke-width="0.5"
                        />
                      </svg>

                      <p> Office</p>
                    </label>
                  </div>
                  <div className="w-32 flex">
                    <input
                      type="radio"
                      name="addressType"
                      id="hotel-radio-input"
                      value="Hotel"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="hotel-radio-input"
                      className="flex gap-2 rounded-lg  justify-center px-4 py-2 border w-full peer-checked:border-[#00A5BF] peer-checked:text-[#00A5BF] peer-checked:[&>svg>path]:fill-[#00A5BF]"
                    >
                      <svg
                        width="23"
                        height="19"
                        viewBox="0 0 23 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.75 8.375V18.5H20.5V15.125H2.5V18.5H0.25V0.5H2.5V11.75H11.5V3.875H18.25C19.4435 3.875 20.5881 4.34911 21.432 5.19302C22.2759 6.03693 22.75 7.18153 22.75 8.375ZM20.5 11.75V8.375C20.5 7.77826 20.2629 7.20597 19.841 6.78401C19.419 6.36205 18.8467 6.125 18.25 6.125H13.75V11.75H20.5ZM7 8.375C7.29837 8.375 7.58452 8.25647 7.7955 8.0455C8.00647 7.83452 8.125 7.54837 8.125 7.25C8.125 6.95163 8.00647 6.66548 7.7955 6.4545C7.58452 6.24353 7.29837 6.125 7 6.125C6.70163 6.125 6.41548 6.24353 6.2045 6.4545C5.99353 6.66548 5.875 6.95163 5.875 7.25C5.875 7.54837 5.99353 7.83452 6.2045 8.0455C6.41548 8.25647 6.70163 8.375 7 8.375ZM7 10.625C6.10489 10.625 5.24645 10.2694 4.61351 9.63649C3.98058 9.00355 3.625 8.14511 3.625 7.25C3.625 6.35489 3.98058 5.49645 4.61351 4.86351C5.24645 4.23058 6.10489 3.875 7 3.875C7.89511 3.875 8.75355 4.23058 9.38649 4.86351C10.0194 5.49645 10.375 6.35489 10.375 7.25C10.375 8.14511 10.0194 9.00355 9.38649 9.63649C8.75355 10.2694 7.89511 10.625 7 10.625Z"
                          fill="#747474"
                        />
                      </svg>
                      <p>Hotel</p>
                    </label>
                  </div>
                </div>
                <div className="grid xl:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="landmark" className="opacity-40">
                      Enter Landmark
                    </label>
                    <FormInput
                      name="landmark"
                      type="text"
                      placeholder="Type here..."
                    />
                  </div>
                  <div>
                    <label htmlFor="street" className="opacity-40">
                      Enter Street
                    </label>
                    <FormInput
                      name="street"
                      type="text"
                      placeholder="Type here..."
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="opacity-40">
                      Enter city
                    </label>
                    <FormInput
                      name="city"
                      type="text"
                      placeholder="Type here..."
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="opacity-40">
                      Enter state
                    </label>
                    <FormInput
                      name="state"
                      type="text"
                      placeholder="Type here..."
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="opacity-40">
                      Enter country
                    </label>
                    <FormInput
                      name="country"
                      type="text"
                      placeholder="Type here..."
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="opacity-40">
                      Enter zipcode
                    </label>
                    <FormInput
                      name="zip"
                      type="number"
                      placeholder="Type here..."
                    />
                  </div>
                </div>
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

export default OrderNowAddAddress;
