import CheckSteper from "../common/CheckSteper";
import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";
import PromoCard from "../common/PromoCard";

const Payment = () => {
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
              <div className="px-1 md:px-2 h-full flex flex-col justify-center">
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
              <div className="px-1 md:px-2 h-full flex flex-col justify-center bg-[#00A5BF] text-white">
                Payment
              </div>
            </div>
            {/* progress */}
            <div className="w-full h-1 bg-[#CBECF1]">
              <div className="w-[95%] bg-[#18BFDA] h-full"></div>
            </div>
            <div className="grid xl:grid-cols-3 w-full">
              <div className="xl:col-span-2 p-5 w-full space-y-12 md:p-10">
                <h1 className="text-3xl font-bold">Payment Options</h1>
                <form
                  action=""
                  id="payment-form"
                  className="flex flex-col gap-4"
                >
                  <div className="relative">
                    <input
                      type="text"
                      name="cardname"
                      className="p-4 pl-12 rounded-lg border-2 w-full bg-[#F3F9FD]"
                      placeholder="Name on the card"
                    />
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-5 left-4"
                    >
                      <path
                        d="M8.99896 9.40026C11.0608 9.40026 12.7323 7.72879 12.7323 5.66693C12.7323 3.60506 11.0608 1.93359 8.99896 1.93359C6.9371 1.93359 5.26562 3.60506 5.26562 5.66693C5.26562 7.72879 6.9371 9.40026 8.99896 9.40026Z"
                        stroke="#00A5BF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17 20.0664C17 15.6481 13.4183 12.0664 9 12.0664C4.58172 12.0664 1 15.6481 1 20.0664"
                        stroke="#00A5BF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      name="cardnumber"
                      className="p-4 pl-12 rounded-lg border-2 w-full bg-[#F3F9FD]"
                      placeholder="Card Number"
                    />
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-5 left-4"
                    >
                      <path
                        d="M0 2.5C0 1.90326 0.237053 1.33097 0.65901 0.90901C1.08097 0.487053 1.65326 0.25 2.25 0.25H15.75C16.3467 0.25 16.919 0.487053 17.341 0.90901C17.7629 1.33097 18 1.90326 18 2.5V11.5C18 12.0967 17.7629 12.669 17.341 13.091C16.919 13.5129 16.3467 13.75 15.75 13.75H2.25C1.65326 13.75 1.08097 13.5129 0.65901 13.091C0.237053 12.669 0 12.0967 0 11.5V2.5ZM2.25 1.375C1.95163 1.375 1.66548 1.49353 1.4545 1.7045C1.24353 1.91548 1.125 2.20163 1.125 2.5V3.625H16.875V2.5C16.875 2.20163 16.7565 1.91548 16.5455 1.7045C16.3345 1.49353 16.0484 1.375 15.75 1.375H2.25ZM16.875 5.875H1.125V11.5C1.125 11.7984 1.24353 12.0845 1.4545 12.2955C1.66548 12.5065 1.95163 12.625 2.25 12.625H15.75C16.0484 12.625 16.3345 12.5065 16.5455 12.2955C16.7565 12.0845 16.875 11.7984 16.875 11.5V5.875Z"
                        fill="#00A5BF"
                      />
                      <path
                        d="M2.25 9.25C2.25 8.95163 2.36853 8.66548 2.5795 8.45451C2.79048 8.24353 3.07663 8.125 3.375 8.125H4.5C4.79837 8.125 5.08452 8.24353 5.2955 8.45451C5.50647 8.66548 5.625 8.95163 5.625 9.25V10.375C5.625 10.6734 5.50647 10.9595 5.2955 11.1705C5.08452 11.3815 4.79837 11.5 4.5 11.5H3.375C3.07663 11.5 2.79048 11.3815 2.5795 11.1705C2.36853 10.9595 2.25 10.6734 2.25 10.375V9.25Z"
                        fill="#00A5BF"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full">
                    <div className="relative grow">
                      <input
                        type="text"
                        name="expiry"
                        className="p-4 pl-12 rounded-lg border-2 w-full bg-[#F3F9FD]"
                        placeholder="MM/YY"
                      />
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-5 left-4"
                      >
                        <path
                          d="M6.77778 10.55H8.66667V12.45H6.77778V10.55ZM20 5.8V19.1C20 20.145 19.15 21 18.1111 21H4.88889C4.38792 21 3.90748 20.7998 3.55324 20.4435C3.19901 20.0872 3 19.6039 3 19.1L3.00944 5.8C3.00944 4.755 3.84056 3.9 4.88889 3.9H5.83333V2H7.72222V3.9H15.2778V2H17.1667V3.9H18.1111C19.15 3.9 20 4.755 20 5.8ZM4.88889 7.7H18.1111V5.8H4.88889V7.7ZM18.1111 19.1V9.6H4.88889V19.1H18.1111ZM14.3333 12.45H16.2222V10.55H14.3333V12.45ZM10.5556 12.45H12.4444V10.55H10.5556V12.45Z"
                          fill="#00A5BF"
                        />
                      </svg>
                    </div>
                    <div className="relative grow">
                      <input
                        type="number"
                        name="cvv"
                        className="p-4 pl-12 rounded-lg border-2 w-full bg-[#F3F9FD]"
                        placeholder="CVC/CVV"
                      />
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-5 left-4"
                      >
                        <path
                          d="M0 4.5C0 3.90326 0.237053 3.33097 0.65901 2.90901C1.08097 2.48705 1.65326 2.25 2.25 2.25H15.75C16.3467 2.25 16.919 2.48705 17.341 2.90901C17.7629 3.33097 18 3.90326 18 4.5V13.5C18 14.0967 17.7629 14.669 17.341 15.091C16.919 15.5129 16.3467 15.75 15.75 15.75H2.25C1.65326 15.75 1.08097 15.5129 0.65901 15.091C0.237053 14.669 0 14.0967 0 13.5V4.5ZM2.25 3.375C1.95163 3.375 1.66548 3.49353 1.4545 3.7045C1.24353 3.91548 1.125 4.20163 1.125 4.5V5.625H16.875V4.5C16.875 4.20163 16.7565 3.91548 16.5455 3.7045C16.3345 3.49353 16.0484 3.375 15.75 3.375H2.25ZM16.875 7.875H1.125V13.5C1.125 13.7984 1.24353 14.0845 1.4545 14.2955C1.66548 14.5065 1.95163 14.625 2.25 14.625H15.75C16.0484 14.625 16.3345 14.5065 16.5455 14.2955C16.7565 14.0845 16.875 13.7984 16.875 13.5V7.875Z"
                          fill="#00A5BF"
                        />
                        <path
                          d="M2.25 11.25C2.25 10.9516 2.36853 10.6655 2.5795 10.4545C2.79048 10.2435 3.07663 10.125 3.375 10.125H4.5C4.79837 10.125 5.08452 10.2435 5.29549 10.4545C5.50647 10.6655 5.625 10.9516 5.625 11.25V12.375C5.625 12.6734 5.50647 12.9595 5.29549 13.1705C5.08452 13.3815 4.79837 13.5 4.5 13.5H3.375C3.07663 13.5 2.79048 13.3815 2.5795 13.1705C2.36853 12.9595 2.25 12.6734 2.25 12.375V11.25Z"
                          fill="#00A5BF"
                        />
                        <path
                          d="M7 11.25C7 10.9516 7.11853 10.6655 7.3295 10.4545C7.54048 10.2435 7.82663 10.125 8.125 10.125H9.25C9.54837 10.125 9.83452 10.2435 10.0455 10.4545C10.2565 10.6655 10.375 10.9516 10.375 11.25V12.375C10.375 12.6734 10.2565 12.9595 10.0455 13.1705C9.83452 13.3815 9.54837 13.5 9.25 13.5H8.125C7.82663 13.5 7.54048 13.3815 7.3295 13.1705C7.11853 12.9595 7 12.6734 7 12.375V11.25Z"
                          fill="#00A5BF"
                        />
                      </svg>
                    </div>
                  </div>
                </form>
                <div className="space-x-4 pt-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-info    "
                    name=""
                    id="tc"
                  />
                  <label htmlFor="tc" className="opacity-70">
                    T&C nunc arcu massa fringilla semper accumsan. Rutrum nunc,
                    justo eu in quis pretium at risus facilisis.{" "}
                  </label>
                </div>
                <div className="divider"></div>
                <div className="flex gap-4 flex-wrap">
                  <div className="flex gap-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.25 9.0625H14.9219V4.6875C14.9219 3.30664 13.8027 2.1875 12.4219 2.1875H7.57812C6.19727 2.1875 5.07812 3.30664 5.07812 4.6875V9.0625H3.75C3.4043 9.0625 3.125 9.3418 3.125 9.6875V17.1875C3.125 17.5332 3.4043 17.8125 3.75 17.8125H16.25C16.5957 17.8125 16.875 17.5332 16.875 17.1875V9.6875C16.875 9.3418 16.5957 9.0625 16.25 9.0625ZM6.48438 4.6875C6.48438 4.08398 6.97461 3.59375 7.57812 3.59375H12.4219C13.0254 3.59375 13.5156 4.08398 13.5156 4.6875V9.0625H6.48438V4.6875ZM15.4688 16.4062H4.53125V10.4688H15.4688V16.4062ZM9.45312 13.6914V14.7266C9.45312 14.8125 9.52344 14.8828 9.60938 14.8828H10.3906C10.4766 14.8828 10.5469 14.8125 10.5469 14.7266V13.6914C10.7081 13.5757 10.8284 13.4117 10.8906 13.2232C10.9527 13.0347 10.9534 12.8314 10.8926 12.6425C10.8318 12.4535 10.7126 12.2888 10.5522 12.1719C10.3918 12.055 10.1985 11.992 10 11.992C9.80153 11.992 9.60817 12.055 9.44777 12.1719C9.28736 12.2888 9.16818 12.4535 9.10738 12.6425C9.04659 12.8314 9.0473 13.0347 9.10943 13.2232C9.17156 13.4117 9.2919 13.5757 9.45312 13.6914Z"
                        fill="#00A5BF"
                      />
                    </svg>
                    <p>Secure payment option with </p>
                  </div>
                  <div className="flex gap-4">
                    <img
                      src={import.meta.env.VITE_BASE_URL + "/images/Stripe.png"}
                      alt=""
                    />
                    <img
                      src={import.meta.env.VITE_BASE_URL + "/images/SSL.png"}
                      alt=""
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-[#00A5BF] w-full p-4  rounded-lg flex gap-2 text-white justify-center items-center text-xl max-w-sm"
                >
                  <img
                    src={import.meta.env.VITE_BASE_URL + "/images/arrow.svg"}
                    className="h-4 rotate-180"
                    alt=""
                  />
                  <span>Back</span>{" "}
                </button>
              </div>
              <div className=" flex flex-col gap-6 p-5 md:p-10">
                <div className="space-y-6 border rounded-lg p-4">
                  <div className="text-lg flex justify-between font-bold text-[#03444F] ">
                    <p>Pay Now</p>
                    <p>&#163; 72.99</p>
                  </div>
                  <div className="grid grid-cols-2 p-4 bg-[#F3F9FD] rounded-lg border-[#C2E8F0] border text-[#77797C]">
                    <p>
                      Minimum Order{" "}
                      <a className="bg-[#03444F] inline-block p-1 rounded-full cursor-pointer">
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.46072 3.41719L3.75972 3.63037L3.69897 3.91275L4.03366 3.9735C4.25134 4.02581 4.29466 4.104 4.24741 4.32169L3.69897 6.89625C3.55553 7.56169 3.77772 7.875 4.29916 7.875C4.70416 7.875 5.17328 7.68825 5.38647 7.43119L5.45172 7.12238C5.30378 7.25287 5.08609 7.30519 4.94266 7.30519C4.73847 7.30519 4.66478 7.16175 4.71653 6.90919L5.46072 3.41719ZM5.51191 1.8675C5.51191 2.06442 5.43368 2.25328 5.29443 2.39253C5.15519 2.53177 4.96633 2.61 4.76941 2.61C4.57248 2.61 4.38362 2.53177 4.24438 2.39253C4.10513 2.25328 4.02691 2.06442 4.02691 1.8675C4.02691 1.67058 4.10513 1.48172 4.24438 1.34247C4.38362 1.20323 4.57248 1.125 4.76941 1.125C4.96633 1.125 5.15519 1.20323 5.29443 1.34247C5.43368 1.48172 5.51191 1.67058 5.51191 1.8675Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </p>
                    <p className="text-end">&#163; 12.99</p>
                    <p>
                      Service fee{" "}
                      <a className="bg-[#03444F] inline-block p-1 rounded-full cursor-pointer">
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.46072 3.41719L3.75972 3.63037L3.69897 3.91275L4.03366 3.9735C4.25134 4.02581 4.29466 4.104 4.24741 4.32169L3.69897 6.89625C3.55553 7.56169 3.77772 7.875 4.29916 7.875C4.70416 7.875 5.17328 7.68825 5.38647 7.43119L5.45172 7.12238C5.30378 7.25287 5.08609 7.30519 4.94266 7.30519C4.73847 7.30519 4.66478 7.16175 4.71653 6.90919L5.46072 3.41719ZM5.51191 1.8675C5.51191 2.06442 5.43368 2.25328 5.29443 2.39253C5.15519 2.53177 4.96633 2.61 4.76941 2.61C4.57248 2.61 4.38362 2.53177 4.24438 2.39253C4.10513 2.25328 4.02691 2.06442 4.02691 1.8675C4.02691 1.67058 4.10513 1.48172 4.24438 1.34247C4.38362 1.20323 4.57248 1.125 4.76941 1.125C4.96633 1.125 5.15519 1.20323 5.29443 1.34247C5.43368 1.48172 5.51191 1.67058 5.51191 1.8675Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </p>
                    <p className="text-end">&#163; 12.99</p>

                    <p>
                      Collection & Delivery{" "}
                      <a className="bg-[#03444F] inline-block p-1 rounded-full cursor-pointer">
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.46072 3.41719L3.75972 3.63037L3.69897 3.91275L4.03366 3.9735C4.25134 4.02581 4.29466 4.104 4.24741 4.32169L3.69897 6.89625C3.55553 7.56169 3.77772 7.875 4.29916 7.875C4.70416 7.875 5.17328 7.68825 5.38647 7.43119L5.45172 7.12238C5.30378 7.25287 5.08609 7.30519 4.94266 7.30519C4.73847 7.30519 4.66478 7.16175 4.71653 6.90919L5.46072 3.41719ZM5.51191 1.8675C5.51191 2.06442 5.43368 2.25328 5.29443 2.39253C5.15519 2.53177 4.96633 2.61 4.76941 2.61C4.57248 2.61 4.38362 2.53177 4.24438 2.39253C4.10513 2.25328 4.02691 2.06442 4.02691 1.8675C4.02691 1.67058 4.10513 1.48172 4.24438 1.34247C4.38362 1.20323 4.57248 1.125 4.76941 1.125C4.96633 1.125 5.15519 1.20323 5.29443 1.34247C5.43368 1.48172 5.51191 1.67058 5.51191 1.8675Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </p>
                    <p className="text-end">&#163; 12.99</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="self-end text-[#00A5BF] font-bold    ">
                      Apply coupon
                    </button>
                    <input
                      type="text"
                      name="coupon"
                      className="border p-3 rounded-lg"
                    />
                    <p className="opacity-60">Coupon applied</p>
                  </div>
                  <button
                    type="submit"
                    form="payment-form"
                    className="bg-[#00A5BF] w-full p-4 rounded-lg flex gap-2 text-white justify-center items-center text-xl max-w-sm mx-auto"
                  >
                    <span>Make Payment</span>{" "}
                    <img
                      src={import.meta.env.VITE_BASE_URL + "/images/arrow.svg"}
                      className="h-4"
                      alt=""
                    />
                  </button>
                </div>
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

export default Payment;
