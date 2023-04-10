import CheckSteper from "../common/CheckSteper";
import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";
import PromoCard from "../common/PromoCard";

const OrderNowServices = () => {
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
              <a className="px-1 text-sm md:text-lg md:px-2 h-full flex flex-col justify-center cursor-pointer">
                Address
              </a>
              <a className="px-1 text-sm md:text-lg  md:px-2 h-full flex flex-col justify-center cursor-pointer bg-[#00A5BF] text-white">
                Service
              </a>
              <a className="px-1 text-sm md:text-lg  md:px-2 h-full flex flex-col justify-center cursor-pointer">
                Collection
              </a>
              <a className="px-1 text-sm md:text-lg md:px-2 h-full flex flex-col justify-center cursor-pointer">
                Contacts
              </a>
              <a className="px-1 text-sm md:text-lg  md:px-2 h-full flex flex-col justify-center cursor-pointer">
                Payment
              </a>
            </div>
            {/* progress */}
            <div className="w-full h-1 bg-[#CBECF1]">
              <div className="w-[40%] bg-[#18BFDA] h-full "></div>
            </div>
            <div className="grid xl:grid-cols-3">
              <div className="xl:col-span-2 p-5 md:p-10">
                <div className="w-full flex flex-col gap-4 ">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold">Services</h1>
                    <div className="flex justify-center gap-4 flex-wrap">
                      <Card title="Wash" name="wash" />
                      <Card title="Wash & Iron" name="wash-iron" />
                      <Card title="Ironing" name="ironing" />
                      <Card title="Dry cleaing" name="dry-cleaning" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-2xl font-bold">Wash and Iron</h2>
                      <p className="opacity-70">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled
                      </p>
                      <div className="grid grid-cols-3">
                        <input
                          type="radio"
                          name="tab-type"
                          id="pricelist-tab"
                          className="hidden peer/pricelist"
                          checked
                        />
                        <label
                          htmlFor="pricelist-tab"
                          className="tab-type boder-b-[#CFE4E8] text-xl font-bold text-[#787878] peer-checked/pricelist:text-[#03444F] cursor-pointer border-b-4 p-3 peer-checked/pricelist:border-b-[#03444F]"
                        >
                          Price List
                        </label>

                        <input
                          type="radio"
                          name="tab-type"
                          id="faq-tab"
                          className="hidden peer/faqs"
                        />
                        <label
                          htmlFor="faq-tab"
                          className="tab-type boder-b-[#CFE4E8] text-xl font-bold text-[#787878] peer-checked/faqs:text-[#03444F] cursor-pointer grow border-b-4 p-3 peer-checked/faqs:border-b-[#03444F] col-span-2"
                        >
                          Frequently asked questions
                        </label>
                        {/* price table */}
                        <div className="peer-checked/pricelist:block  hidden mt-5 col-span-3">
                          {/* <div className="w-full overflow-scroll"> */}
                          <div className="w-full flex flex-wrap items-center justify-center gap-2">
                            <input
                              type="checkbox"
                              name="shirt"
                              id="shirt"
                              className="hidden peer/shirt"
                              checked
                            />
                            <label
                              htmlFor="shirt"
                              className="border cursor-pointer py-2 px-10 peer-checked/shirt:bg-[#E5FCFF] peer-checked/shirt:border-[#00A5BF] rounded-full border-[#C8C8C8] "
                            >
                              Shirt
                            </label>
                            <input
                              type="checkbox"
                              name="bottom"
                              id="bottom"
                              className="hidden peer/bottom"
                            />
                            <label
                              htmlFor="bottom"
                              className="border cursor-pointer py-2 px-10 peer-checked/bottom:bg-[#E5FCFF] peer-checked/bottom:border-[#00A5BF] rounded-full border-[#C8C8C8] "
                            >
                              Bottoms
                            </label>
                            <input
                              type="checkbox"
                              name="Tops"
                              id="Tops"
                              className="hidden peer/Tops"
                              checked
                            />
                            <label
                              htmlFor="Tops"
                              className="border cursor-pointer py-2 px-10 peer-checked/Tops:bg-[#E5FCFF] peer-checked/Tops:border-[#00A5BF] rounded-full border-[#C8C8C8] "
                            >
                              Tops
                            </label>
                            <input
                              type="checkbox"
                              name="Dresses"
                              id="Dresses"
                              className="hidden peer/Dresses"
                            />
                            <label
                              htmlFor="Dresses"
                              className="border cursor-pointer py-2 px-10 peer-checked/Dresses:bg-[#E5FCFF] peer-checked/Dresses:border-[#00A5BF] rounded-full border-[#C8C8C8] "
                            >
                              Dresses
                            </label>
                            <input
                              type="checkbox"
                              name="Jackets"
                              id="Jackets"
                              className="hidden peer/Jackets"
                            />
                            <label
                              htmlFor="Jackets"
                              className="border cursor-pointer py-2 px-10 peer-checked/Jackets:bg-[#E5FCFF] peer-checked/Jackets:border-[#00A5BF] rounded-full border-[#C8C8C8] "
                            >
                              Jackets
                            </label>
                            <input
                              type="checkbox"
                              name="Outwear"
                              id="Outwear"
                              className="hidden peer/Outwear"
                            />
                            <label
                              htmlFor="Outwear"
                              className="border cursor-pointer py-2 px-10 peer-checked/Outwear:bg-[#E5FCFF] peer-checked/Outwear:border-[#00A5BF] rounded-full border-[#C8C8C8] "
                            >
                              Outwear
                            </label>
                            <input
                              type="checkbox"
                              name="Bedsheets"
                              id="Bedsheets"
                              className="hidden peer/Bedsheets"
                            />
                            <label
                              htmlFor="Bedsheets"
                              className="border cursor-pointer py-2 px-10 peer-checked/Bedsheets:bg-[#E5FCFF] peer-checked/Bedsheets:border-[#00A5BF] rounded-full border-[#C8C8C8] "
                            >
                              Bedsheets
                            </label>
                          </div>
                          {/* </div> */}
                          <div className="overflow-scroll md:scrollbar-hide mt-4">
                            <table className="w-[500px] md:w-full text-center ">
                              <thead>
                                <tr className="">
                                  <th>Products</th>
                                  <th>Pricing</th>
                                  <th>Quantity</th>
                                  <th>Estimated</th>
                                </tr>
                              </thead>
                              <tbody className="text-[#747474] [&>tr>td]:p-3">
                                <tr>
                                  <TableData />
                                </tr>
                                <tr>
                                  <TableData />
                                </tr>
                                <tr>
                                  <TableData />
                                </tr>
                                <tr>
                                  <TableData />
                                </tr>
                                <tr className=" bg-[#E4F4FF] font-bold text-[#03444F]">
                                  <td></td>
                                  <td></td>
                                  <td>Total Amount</td>
                                  <td>&#163; 39.99</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="mt-8 flex justify-end items-center">
                            <button className="bg-[#00A5BF] w-48 p-2 rounded-lg flex gap-2 text-white justify-center items-center text-xl">
                              <span>Next</span>{" "}
                              <img
                                src={
                                  import.meta.env.VITE_BASE_URL +
                                  "/images/arrow.svg"
                                }
                                className="h-4"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                        {/* faqs */}
                        <div className="peer-checked/faqs:block hidden col-span-3 pt-6 pl-2">
                          <ServiceOverView />
                          <ServiceOverView />
                          <ServiceOverView />
                          <ServiceOverView />
                          <ServiceOverView />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
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
        modelContent={
          <div className="w-full h-full flex justify-center items-center"></div>
        }
        modelstate="unchecked"
      />
    </div>
  );
};

export default OrderNowServices;

const Card = (prop: { title: string; name: string }) => (
  <div className="max-w-full ">
    <input
      type="radio"
      name="washtype"
      className="hidden peer"
      id={prop.name}
    />
    <label
      className="flex cursor-pointer flex-col p-4 min-w-[150px] rounded-lg h-full  border justify-center items-center peer-checked:bg-[#00A5BF] [&>svg>path]:stroke-[#00A5BF] peer-checked:[&>svg>path]:stroke-[#03444F] "
      htmlFor={prop.name}
    >
      <svg
        width="58"
        height="72"
        viewBox="0 0 58 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.255 49.3073C17.3651 49.364 17.4786 49.4183 17.5952 49.4696C18.4987 49.8671 19.6106 50.0917 20.8506 49.82C21.7837 49.6155 22.7309 49.1428 23.6752 48.3416C26.0498 51.3288 30.9361 51.7418 33.9241 48.1442C35.5189 49.2827 37.6525 49.0342 39.1799 48.6272C39.8274 48.4547 40.4359 48.2368 40.9596 48.023C39.5782 53.3906 34.7052 57.3545 28.905 57.3545C23.5763 57.3545 19.0318 54.0113 17.255 49.3073Z"
          fill="white"
          stroke="#03444F"
          stroke-width="2"
        />
        <path
          d="M1.75 70.1128V21.5723H56.2509V70.1128C56.2509 70.5605 55.8604 70.996 55.2821 70.996H2.71987C2.13933 70.996 1.75 70.5605 1.75 70.1128ZM11.9911 45.7126C11.9911 55.0636 19.5714 62.6426 28.9222 62.6426C38.272 62.6426 45.8522 55.0636 45.8522 45.7126C45.8522 36.3629 38.272 28.7826 28.9222 28.7826C19.5702 28.7826 11.9911 36.364 11.9911 45.7126Z"
          fill="white"
          stroke="#03444F"
          stroke-width="2"
        />
        <path
          d="M2.71987 1.00391H55.2821C55.7872 1.00391 56.2509 1.43531 56.2509 2.03791V15.9543H1.75V2.03791C1.75 1.43531 2.21254 1.00391 2.71987 1.00391ZM7.32238 8.47966C7.32238 10.5909 9.03433 12.3045 11.1472 12.3045L13.9721 8.47966H14.9721C14.9721 8.47942 14.9721 8.47917 14.9721 8.47893C14.9717 6.36522 13.2594 4.65478 11.1472 4.65478C9.03485 4.65478 7.32238 6.36561 7.32238 8.47966ZM19.6509 8.47966C19.6509 10.5912 21.3642 12.3045 23.4757 12.3045L26.3006 8.47966H27.3006C27.3006 8.47942 27.3006 8.47917 27.3006 8.47893C27.3002 6.36496 25.5865 4.65478 23.4757 4.65478C21.3647 4.65478 19.6509 6.36535 19.6509 8.47966Z"
          fill="white"
          stroke="#03444F"
          stroke-width="2"
        />
      </svg>

      <p className="font-bold">{prop.title}</p>
    </label>
  </div>
);

const TableData = () => (
  <>
    <td>Shirt</td>
    <td> &#163; 6.99</td>
    <td className="flex gap-2 justify-center items-center">
      <button className="bg-[#00A5BF] text-xl w-7 h-7 text-center text-white rounded-sm px-2">
        -
      </button>
      <span>2</span>
      <button className="bg-[#00A5BF] text-xl w-7 h-7 text-center text-white rounded-sm px-2">
        +
      </button>
    </td>
    <td> &#163; 12.99</td>
  </>
);

const ServiceOverView = () => (
  <>
    <div className="flex gap-4 items-center">
      <div>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 0C16.299 0 21 4.70102 21 10.5C21 16.299 16.299 21 10.5 21C4.70102 21 0 16.299 0 10.5C0 4.70102 4.70102 0 10.5 0ZM10.5 1.57476C5.57073 1.57476 1.57476 5.57074 1.57476 10.5C1.57476 15.4293 5.57073 19.4252 10.5 19.4252C15.4292 19.4252 19.4252 15.4293 19.4252 10.5C19.4252 5.57074 15.4292 1.57476 10.5 1.57476Z"
            fill="#00A5BF"
          />
          <path
            d="M5 10.5L8.5 14L15.5 7"
            stroke="#00A5BF"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="space-y-4">
        <p className="text-lg font-bold">Service Overview</p>
        <p>Lorem Ipsum has been the industry's standard </p>
      </div>
    </div>
    <div className="divider"></div>
  </>
);
