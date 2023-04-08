import { ReactNode } from "react";
import CheckSteper from "../common/CheckSteper";
import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";
import FormInput from "../common/forms/FormInput";
import PromoCard from "../common/PromoCard";

const OrderNowAddress2 = () => {
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
              <div className="w-[20%] bg-[#18BFDA] h-full"></div>
            </div>
            <div className="grid xl:grid-cols-3 w-full">
              <div className="xl:col-span-2 p-5 w-full md:p-10">
                <div className="flex flex-col gap-4 ">
                  <h1 className="text-xl font-bold text-[#045462]">
                    Existing Address
                  </h1>
                  <AddressCard
                    svg={
                      <svg
                        width="34"
                        height="40"
                        viewBox="0 0 34 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.7222 8.12259L20.0556 1.03008C19.3528 0.36673 18.4429 0 17.5 0C16.5571 0 15.6473 0.36673 14.9445 1.03008L7.27789 8.12259C6.87203 8.50563 6.54816 8.97552 6.32783 9.50097C6.10751 10.0264 5.99579 10.5954 6.00012 11.1699V22.9548C6.00012 24.0277 6.40399 25.0566 7.12287 25.8152C7.84175 26.5738 8.81677 27 9.83343 27H25.1667C26.1833 27 27.1583 26.5738 27.8772 25.8152C28.5961 25.0566 29 24.0277 29 22.9548V11.1565C29.0025 10.5842 28.8899 10.0178 28.6696 9.49482C28.4493 8.97183 28.1264 8.50412 27.7222 8.12259ZM20.0556 24.3032H14.9445V17.5613C14.9445 17.2037 15.0791 16.8607 15.3188 16.6078C15.5584 16.355 15.8834 16.2129 16.2223 16.2129H18.7778C19.1167 16.2129 19.4417 16.355 19.6813 16.6078C19.921 16.8607 20.0556 17.2037 20.0556 17.5613V24.3032ZM26.4444 22.9548C26.4444 23.3125 26.3098 23.6554 26.0702 23.9083C25.8305 24.1612 25.5055 24.3032 25.1667 24.3032H22.6111V17.5613C22.6111 16.4885 22.2072 15.4595 21.4884 14.7009C20.7695 13.9423 19.7945 13.5161 18.7778 13.5161H16.2223C15.2056 13.5161 14.2306 13.9423 13.5117 14.7009C12.7928 15.4595 12.389 16.4885 12.389 17.5613V24.3032H9.83343C9.49454 24.3032 9.16954 24.1612 8.92991 23.9083C8.69028 23.6554 8.55566 23.3125 8.55566 22.9548V11.1565C8.55589 10.965 8.59475 10.7758 8.66966 10.6014C8.74457 10.4271 8.8538 10.2715 8.9901 10.1452L16.6567 3.06614C16.8899 2.84997 17.1897 2.73075 17.5 2.73075C17.8104 2.73075 18.1102 2.84997 18.3434 3.06614L26.01 10.1452C26.1463 10.2715 26.2555 10.4271 26.3304 10.6014C26.4053 10.7758 26.4442 10.965 26.4444 11.1565V22.9548Z"
                          fill="white"
                        />
                        <path
                          d="M0.860795 39V30.2727H2.44176V33.9673H6.4858V30.2727H8.07102V39H6.4858V35.2926H2.44176V39H0.860795ZM12.5774 39.1278C11.9382 39.1278 11.3842 38.9872 10.9155 38.706C10.4467 38.4247 10.0831 38.0312 9.82457 37.5256C9.56889 37.0199 9.44105 36.429 9.44105 35.7528C9.44105 35.0767 9.56889 34.4844 9.82457 33.9759C10.0831 33.4673 10.4467 33.0724 10.9155 32.7912C11.3842 32.5099 11.9382 32.3693 12.5774 32.3693C13.2166 32.3693 13.7706 32.5099 14.2393 32.7912C14.7081 33.0724 15.0703 33.4673 15.326 33.9759C15.5845 34.4844 15.7138 35.0767 15.7138 35.7528C15.7138 36.429 15.5845 37.0199 15.326 37.5256C15.0703 38.0312 14.7081 38.4247 14.2393 38.706C13.7706 38.9872 13.2166 39.1278 12.5774 39.1278ZM12.5859 37.892C12.9325 37.892 13.2223 37.7969 13.4553 37.6065C13.6882 37.4134 13.8615 37.1548 13.9751 36.831C14.0916 36.5071 14.1499 36.1463 14.1499 35.7486C14.1499 35.348 14.0916 34.9858 13.9751 34.6619C13.8615 34.3352 13.6882 34.0753 13.4553 33.8821C13.2223 33.6889 12.9325 33.5923 12.5859 33.5923C12.2308 33.5923 11.9354 33.6889 11.6996 33.8821C11.4666 34.0753 11.2919 34.3352 11.1754 34.6619C11.0618 34.9858 11.005 35.348 11.005 35.7486C11.005 36.1463 11.0618 36.5071 11.1754 36.831C11.2919 37.1548 11.4666 37.4134 11.6996 37.6065C11.9354 37.7969 12.2308 37.892 12.5859 37.892ZM17.0231 39V32.4545H18.4975V33.5668H18.5742C18.7106 33.1918 18.9364 32.8991 19.2518 32.6889C19.5671 32.4759 19.9435 32.3693 20.381 32.3693C20.8242 32.3693 21.1978 32.4773 21.5018 32.6932C21.8086 32.9062 22.0245 33.1974 22.1495 33.5668H22.2177C22.3626 33.2031 22.6069 32.9134 22.9506 32.6974C23.2972 32.4787 23.7077 32.3693 24.1822 32.3693C24.7844 32.3693 25.2759 32.5597 25.6566 32.9403C26.0373 33.321 26.2276 33.8764 26.2276 34.6065V39H24.6808V34.8452C24.6808 34.4389 24.5728 34.142 24.3569 33.9545C24.141 33.7642 23.8768 33.669 23.5643 33.669C23.1921 33.669 22.9009 33.7855 22.6907 34.0185C22.4833 34.2486 22.3796 34.5483 22.3796 34.9176V39H20.8668V34.7812C20.8668 34.4432 20.7646 34.1733 20.56 33.9716C20.3583 33.7699 20.0941 33.669 19.7674 33.669C19.5458 33.669 19.3441 33.7259 19.1623 33.8395C18.9805 33.9503 18.8356 34.108 18.7276 34.3125C18.6197 34.5142 18.5657 34.75 18.5657 35.0199V39H17.0231ZM30.6903 39.1278C30.0341 39.1278 29.4673 38.9915 28.9901 38.7188C28.5156 38.4432 28.1506 38.054 27.8949 37.5511C27.6392 37.0455 27.5114 36.4503 27.5114 35.7656C27.5114 35.0923 27.6392 34.5014 27.8949 33.9929C28.1534 33.4815 28.5142 33.0838 28.9773 32.7997C29.4403 32.5128 29.9844 32.3693 30.6094 32.3693C31.0128 32.3693 31.3935 32.4347 31.7514 32.5653C32.1122 32.6932 32.4304 32.892 32.706 33.1619C32.9844 33.4318 33.2031 33.7756 33.3622 34.1932C33.5213 34.608 33.6009 35.1023 33.6009 35.6761V36.1491H28.2358V35.1094H32.1222C32.1193 34.8139 32.0554 34.5511 31.9304 34.321C31.8054 34.0881 31.6307 33.9048 31.4062 33.7713C31.1847 33.6378 30.9261 33.571 30.6307 33.571C30.3153 33.571 30.0384 33.6477 29.7997 33.8011C29.5611 33.9517 29.375 34.1506 29.2415 34.3977C29.1108 34.642 29.044 34.9105 29.0412 35.2031V36.1108C29.0412 36.4915 29.1108 36.8182 29.25 37.0909C29.3892 37.3608 29.5838 37.5682 29.8338 37.7131C30.0838 37.8551 30.3764 37.9261 30.7116 37.9261C30.9361 37.9261 31.1392 37.8949 31.321 37.8324C31.5028 37.767 31.6605 37.6719 31.794 37.5469C31.9276 37.4219 32.0284 37.267 32.0966 37.0824L33.5369 37.2443C33.446 37.625 33.2727 37.9574 33.017 38.2415C32.7642 38.5227 32.4403 38.7415 32.0455 38.8977C31.6506 39.0511 31.1989 39.1278 30.6903 39.1278Z"
                          fill="white"
                        />
                      </svg>
                    }
                  />
                  <AddressCard
                    svg={
                      <svg
                        width="31"
                        height="36"
                        viewBox="0 0 31 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.860795 35V26.2727H2.44176V29.9673H6.4858V26.2727H8.07102V35H6.4858V31.2926H2.44176V35H0.860795ZM12.5774 35.1278C11.9382 35.1278 11.3842 34.9872 10.9155 34.706C10.4467 34.4247 10.0831 34.0312 9.82457 33.5256C9.56889 33.0199 9.44105 32.429 9.44105 31.7528C9.44105 31.0767 9.56889 30.4844 9.82457 29.9759C10.0831 29.4673 10.4467 29.0724 10.9155 28.7912C11.3842 28.5099 11.9382 28.3693 12.5774 28.3693C13.2166 28.3693 13.7706 28.5099 14.2393 28.7912C14.7081 29.0724 15.0703 29.4673 15.326 29.9759C15.5845 30.4844 15.7138 31.0767 15.7138 31.7528C15.7138 32.429 15.5845 33.0199 15.326 33.5256C15.0703 34.0312 14.7081 34.4247 14.2393 34.706C13.7706 34.9872 13.2166 35.1278 12.5774 35.1278ZM12.5859 33.892C12.9325 33.892 13.2223 33.7969 13.4553 33.6065C13.6882 33.4134 13.8615 33.1548 13.9751 32.831C14.0916 32.5071 14.1499 32.1463 14.1499 31.7486C14.1499 31.348 14.0916 30.9858 13.9751 30.6619C13.8615 30.3352 13.6882 30.0753 13.4553 29.8821C13.2223 29.6889 12.9325 29.5923 12.5859 29.5923C12.2308 29.5923 11.9354 29.6889 11.6996 29.8821C11.4666 30.0753 11.2919 30.3352 11.1754 30.6619C11.0618 30.9858 11.005 31.348 11.005 31.7486C11.005 32.1463 11.0618 32.5071 11.1754 32.831C11.2919 33.1548 11.4666 33.4134 11.6996 33.6065C11.9354 33.7969 12.2308 33.892 12.5859 33.892ZM20.2915 28.4545V29.6477H16.5288V28.4545H20.2915ZM17.4577 26.8864H19.0004V33.0312C19.0004 33.2386 19.0316 33.3977 19.0941 33.5085C19.1594 33.6165 19.2447 33.6903 19.3498 33.7301C19.4549 33.7699 19.5714 33.7898 19.6992 33.7898C19.7958 33.7898 19.8839 33.7827 19.9634 33.7685C20.0458 33.7543 20.1083 33.7415 20.1509 33.7301L20.4109 34.9361C20.3285 34.9645 20.2106 34.9957 20.0572 35.0298C19.9066 35.0639 19.7219 35.0838 19.5032 35.0895C19.1168 35.1009 18.7688 35.0426 18.4592 34.9148C18.1495 34.7841 17.9038 34.5824 17.7219 34.3097C17.543 34.0369 17.4549 33.696 17.4577 33.2869V26.8864ZM24.4091 35.1278C23.7528 35.1278 23.1861 34.9915 22.7088 34.7188C22.2344 34.4432 21.8693 34.054 21.6136 33.5511C21.358 33.0455 21.2301 32.4503 21.2301 31.7656C21.2301 31.0923 21.358 30.5014 21.6136 29.9929C21.8722 29.4815 22.233 29.0838 22.696 28.7997C23.1591 28.5128 23.7031 28.3693 24.3281 28.3693C24.7315 28.3693 25.1122 28.4347 25.4702 28.5653C25.831 28.6932 26.1491 28.892 26.4247 29.1619C26.7031 29.4318 26.9219 29.7756 27.081 30.1932C27.2401 30.608 27.3196 31.1023 27.3196 31.6761V32.1491H21.9545V31.1094H25.8409C25.8381 30.8139 25.7741 30.5511 25.6491 30.321C25.5241 30.0881 25.3494 29.9048 25.125 29.7713C24.9034 29.6378 24.6449 29.571 24.3494 29.571C24.0341 29.571 23.7571 29.6477 23.5185 29.8011C23.2798 29.9517 23.0938 30.1506 22.9602 30.3977C22.8295 30.642 22.7628 30.9105 22.7599 31.2031V32.1108C22.7599 32.4915 22.8295 32.8182 22.9688 33.0909C23.108 33.3608 23.3026 33.5682 23.5526 33.7131C23.8026 33.8551 24.0952 33.9261 24.4304 33.9261C24.6548 33.9261 24.858 33.8949 25.0398 33.8324C25.2216 33.767 25.3793 33.6719 25.5128 33.5469C25.6463 33.4219 25.7472 33.267 25.8153 33.0824L27.2557 33.2443C27.1648 33.625 26.9915 33.9574 26.7358 34.2415C26.483 34.5227 26.1591 34.7415 25.7642 34.8977C25.3693 35.0511 24.9176 35.1278 24.4091 35.1278ZM30.1673 26.2727V35H28.6246V26.2727H30.1673Z"
                          fill="white"
                        />
                        <path
                          d="M30.1667 10.5837V23.3337H27.3334V19.0837H4.66671V23.3337H1.83337V0.666992H4.66671V14.8337H16V4.91699H24.5C26.0029 4.91699 27.4443 5.51401 28.507 6.57672C29.5697 7.63943 30.1667 9.08076 30.1667 10.5837ZM27.3334 14.8337V10.5837C27.3334 9.83221 27.0349 9.11154 26.5035 8.58019C25.9722 8.04884 25.2515 7.75033 24.5 7.75033H18.8334V14.8337H27.3334ZM10.3334 10.5837C10.7091 10.5837 11.0694 10.4344 11.3351 10.1687C11.6008 9.90305 11.75 9.54272 11.75 9.16699C11.75 8.79127 11.6008 8.43093 11.3351 8.16526C11.0694 7.89958 10.7091 7.75033 10.3334 7.75033C9.95765 7.75033 9.59732 7.89958 9.33164 8.16526C9.06596 8.43093 8.91671 8.79127 8.91671 9.16699C8.91671 9.54272 9.06596 9.90305 9.33164 10.1687C9.59732 10.4344 9.95765 10.5837 10.3334 10.5837ZM10.3334 13.417C9.2062 13.417 8.1252 12.9692 7.32817 12.1722C6.53114 11.3752 6.08337 10.2942 6.08337 9.16699C6.08337 8.03982 6.53114 6.95882 7.32817 6.16179C8.1252 5.36476 9.2062 4.91699 10.3334 4.91699C11.4605 4.91699 12.5415 5.36476 13.3386 6.16179C14.1356 6.95882 14.5834 8.03982 14.5834 9.16699C14.5834 10.2942 14.1356 11.3752 13.3386 12.1722C12.5415 12.9692 11.4605 13.417 10.3334 13.417Z"
                          fill="white"
                        />
                      </svg>
                    }
                  />
                  <AddressCard
                    svg={
                      <svg
                        width="35"
                        height="39"
                        viewBox="0 0 35 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.65909 33.6364C8.65909 34.5767 8.48295 35.3821 8.13068 36.0526C7.78125 36.7202 7.30398 37.2315 6.69886 37.5866C6.09659 37.9418 5.41335 38.1193 4.64915 38.1193C3.88494 38.1193 3.20028 37.9418 2.59517 37.5866C1.9929 37.2287 1.51563 36.7159 1.16335 36.0483C0.81392 35.3778 0.639205 34.5739 0.639205 33.6364C0.639205 32.696 0.81392 31.892 1.16335 31.2244C1.51563 30.554 1.9929 30.0412 2.59517 29.6861C3.20028 29.331 3.88494 29.1534 4.64915 29.1534C5.41335 29.1534 6.09659 29.331 6.69886 29.6861C7.30398 30.0412 7.78125 30.554 8.13068 31.2244C8.48295 31.892 8.65909 32.696 8.65909 33.6364ZM7.0696 33.6364C7.0696 32.9744 6.96591 32.4162 6.75852 31.9616C6.55398 31.5043 6.26989 31.1591 5.90625 30.9261C5.54261 30.6903 5.12358 30.5724 4.64915 30.5724C4.17472 30.5724 3.75568 30.6903 3.39205 30.9261C3.02841 31.1591 2.7429 31.5043 2.53551 31.9616C2.33097 32.4162 2.22869 32.9744 2.22869 33.6364C2.22869 34.2983 2.33097 34.858 2.53551 35.3153C2.7429 35.7699 3.02841 36.1151 3.39205 36.3509C3.75568 36.5838 4.17472 36.7003 4.64915 36.7003C5.12358 36.7003 5.54261 36.5838 5.90625 36.3509C6.26989 36.1151 6.55398 35.7699 6.75852 35.3153C6.96591 34.858 7.0696 34.2983 7.0696 33.6364ZM13.4009 31.4545V32.6477H9.53161V31.4545H13.4009ZM10.4989 38V30.8366C10.4989 30.3963 10.5898 30.0298 10.7717 29.7372C10.9563 29.4446 11.2035 29.2259 11.5131 29.081C11.8228 28.9361 12.1665 28.8636 12.5444 28.8636C12.8114 28.8636 13.0487 28.8849 13.256 28.9276C13.4634 28.9702 13.6168 29.0085 13.7163 29.0426L13.4094 30.2358C13.3441 30.2159 13.2617 30.196 13.1623 30.1761C13.0629 30.1534 12.9521 30.142 12.8299 30.142C12.543 30.142 12.3398 30.2116 12.2205 30.3509C12.104 30.4872 12.0458 30.6832 12.0458 30.9389V38H10.4989ZM17.9244 31.4545V32.6477H14.055V31.4545H17.9244ZM15.0224 38V30.8366C15.0224 30.3963 15.1133 30.0298 15.2951 29.7372C15.4798 29.4446 15.7269 29.2259 16.0366 29.081C16.3462 28.9361 16.69 28.8636 17.0678 28.8636C17.3349 28.8636 17.5721 28.8849 17.7795 28.9276C17.9869 28.9702 18.1403 29.0085 18.2397 29.0426L17.9329 30.2358C17.8675 30.2159 17.7852 30.196 17.6857 30.1761C17.5863 30.1534 17.4755 30.142 17.3533 30.142C17.0664 30.142 16.8633 30.2116 16.744 30.3509C16.6275 30.4872 16.5692 30.6832 16.5692 30.9389V38H15.0224ZM19.1325 38V31.4545H20.6751V38H19.1325ZM19.908 30.5256C19.6637 30.5256 19.4535 30.4446 19.2773 30.2827C19.1012 30.1179 19.0131 29.9205 19.0131 29.6903C19.0131 29.4574 19.1012 29.2599 19.2773 29.098C19.4535 28.9332 19.6637 28.8509 19.908 28.8509C20.1552 28.8509 20.3654 28.9332 20.5387 29.098C20.7148 29.2599 20.8029 29.4574 20.8029 29.6903C20.8029 29.9205 20.7148 30.1179 20.5387 30.2827C20.3654 30.4446 20.1552 30.5256 19.908 30.5256ZM25.1165 38.1278C24.4631 38.1278 23.902 37.9844 23.4332 37.6974C22.9673 37.4105 22.608 37.0142 22.3551 36.5085C22.1051 36 21.9801 35.4148 21.9801 34.7528C21.9801 34.0881 22.108 33.5014 22.3636 32.9929C22.6193 32.4815 22.9801 32.0838 23.446 31.7997C23.9148 31.5128 24.4688 31.3693 25.108 31.3693C25.6392 31.3693 26.1094 31.4673 26.5185 31.6634C26.9304 31.8565 27.2585 32.1307 27.5028 32.4858C27.7472 32.8381 27.8864 33.25 27.9205 33.7216H26.446C26.3864 33.4062 26.2443 33.1435 26.0199 32.9332C25.7983 32.7202 25.5014 32.6136 25.1293 32.6136C24.8139 32.6136 24.5369 32.6989 24.2983 32.8693C24.0597 33.0369 23.8736 33.2784 23.7401 33.5938C23.6094 33.9091 23.544 34.2869 23.544 34.7273C23.544 35.1733 23.6094 35.5568 23.7401 35.8778C23.8707 36.196 24.054 36.4418 24.2898 36.6151C24.5284 36.7855 24.8082 36.8707 25.1293 36.8707C25.3565 36.8707 25.5597 36.8281 25.7386 36.7429C25.9205 36.6548 26.0724 36.5284 26.1946 36.3636C26.3168 36.1989 26.4006 35.9986 26.446 35.7628H27.9205C27.8835 36.2259 27.7472 36.6364 27.5114 36.9943C27.2756 37.3494 26.9545 37.6278 26.5483 37.8295C26.142 38.0284 25.6648 38.1278 25.1165 38.1278ZM32.0849 38.1278C31.4286 38.1278 30.8619 37.9915 30.3846 37.7188C29.9102 37.4432 29.5451 37.054 29.2894 36.5511C29.0337 36.0455 28.9059 35.4503 28.9059 34.7656C28.9059 34.0923 29.0337 33.5014 29.2894 32.9929C29.5479 32.4815 29.9087 32.0838 30.3718 31.7997C30.8349 31.5128 31.3789 31.3693 32.0039 31.3693C32.4073 31.3693 32.788 31.4347 33.146 31.5653C33.5067 31.6932 33.8249 31.892 34.1005 32.1619C34.3789 32.4318 34.5977 32.7756 34.7567 33.1932C34.9158 33.608 34.9954 34.1023 34.9954 34.6761V35.1491H29.6303V34.1094H33.5167C33.5138 33.8139 33.4499 33.5511 33.3249 33.321C33.1999 33.0881 33.0252 32.9048 32.8008 32.7713C32.5792 32.6378 32.3207 32.571 32.0252 32.571C31.7099 32.571 31.4329 32.6477 31.1942 32.8011C30.9556 32.9517 30.7695 33.1506 30.636 33.3977C30.5053 33.642 30.4386 33.9105 30.4357 34.2031V35.1108C30.4357 35.4915 30.5053 35.8182 30.6445 36.0909C30.7837 36.3608 30.9783 36.5682 31.2283 36.7131C31.4783 36.8551 31.771 36.9261 32.1062 36.9261C32.3306 36.9261 32.5337 36.8949 32.7156 36.8324C32.8974 36.767 33.055 36.6719 33.1886 36.5469C33.3221 36.4219 33.4229 36.267 33.4911 36.0824L34.9315 36.2443C34.8406 36.625 34.6673 36.9574 34.4116 37.2415C34.1587 37.5227 33.8349 37.7415 33.44 37.8977C33.0451 38.0511 32.5934 38.1278 32.0849 38.1278Z"
                          fill="white"
                        />
                        <path
                          d="M12.6504 5.71895V3.54278C12.6504 2.85342 13.2103 2.29252 13.9007 2.29252H21.0993C21.7887 2.29252 22.3496 2.85342 22.3496 3.54278V5.71895H12.6504ZM26.3048 5.71895H24.0483V3.54278C24.0483 1.9168 22.7253 0.59375 21.0993 0.59375H13.9007C12.2747 0.59375 10.9517 1.9168 10.9517 3.54278V5.71895H7.79391C7.04889 5.71895 6.37345 6.12893 6.02985 6.78831C5.68624 7.44876 5.73762 8.23767 6.16472 8.84674L9.14372 13.106C9.51515 13.638 10.1242 13.9559 10.774 13.9559H24.0847C24.8629 13.9559 25.5737 13.4977 25.897 12.788L27.4587 9.34235C27.6514 8.91525 27.463 8.41108 27.0359 8.21733C26.6067 8.02358 26.1046 8.21305 25.9109 8.64015L24.3491 12.0859C24.302 12.1897 24.1982 12.256 24.0847 12.256H10.774C10.6798 12.256 10.5899 12.2111 10.5363 12.1329L7.55627 7.87265C7.4685 7.74741 7.50596 7.63181 7.53594 7.574C7.56698 7.51513 7.64191 7.41772 7.79391 7.41772H26.3048C27.5604 7.41772 28.5431 8.36505 28.5431 9.57677V20.5486C28.5431 21.739 27.5733 22.7088 26.384 22.7088H8.616C7.42568 22.7088 6.45695 21.739 6.45695 20.5486V11.6652C6.45695 11.1953 6.07694 10.8153 5.60703 10.8153C5.13711 10.8153 4.75818 11.1953 4.75818 11.6652V20.5486C4.75818 22.6767 6.48799 24.4075 8.616 24.4075H26.384C28.5109 24.4075 30.2418 22.6767 30.2418 20.5486V9.57677C30.2418 7.41344 28.512 5.71895 26.3048 5.71895Z"
                          fill="white"
                          stroke="white"
                          stroke-width="0.5"
                        />
                      </svg>
                    }
                  />
                  <a className="self-end text-[#00A5BF] space-x-2 cursor-pointer">
                    <span className="text-3xl ">+</span>{" "}
                    <span>Add New Address</span>
                  </a>
                  <button
                    disabled
                    className="bg-gray-300 w-52 p-4 rounded-lg flex gap-2 text-white justify-center items-center text-xl self-end"
                  >
                    <span>Next</span>{" "}
                    <img
                      src={import.meta.env.VITE_BASE_URL + "/images/arrow.svg"}
                      className="h-4"
                      alt=""
                    />
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
        modelContent={<></>}
        modelstate="unchecked"
      />
    </div>
  );
};

export default OrderNowAddress2;

interface IAddressCard {
  svg: ReactNode;
}

const AddressCard = (prop: IAddressCard) => {
  return (
    <div className="flex flex-col lg:flex-row w-full items-center gap-4 p-5 md:p-10 bg-[#E4F4FF] rounded-lg">
      <div className="bg-[#00A5BF] w-16 h-16 p-4 flex justify-center items-center rounded-full ">
        {prop.svg}
      </div>
      <div className="max-w-lg">
        <p className="text-[#03444F] text-lg font-bold opacity-80">Adress</p>
        <p className="text-[#111212] ">
          height: 24px; width: 363px; left: 505px; top: 348px; border-radius:
          nullpx;
        </p>
      </div>
      <div className=" grow flex justify-end gap-4 text-white">
        <button className="py-2 px-4 flex gap-2 justify-center rounded-full bg-[#00A5BF] w-32">
          <span>
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.7625 13.4727L18.0958 12.2227C18.3042 12.0273 18.6667 12.1641 18.6667 12.4453V18.125C18.6667 19.1602 17.7708 20 16.6667 20H2C0.895833 20 0 19.1602 0 18.125V4.375C0 3.33984 0.895833 2.5 2 2.5H13.3958C13.6917 2.5 13.8417 2.83594 13.6333 3.03516L12.3 4.28516C12.2375 4.34375 12.1542 4.375 12.0625 4.375H2V18.125H16.6667V13.6914C16.6667 13.6094 16.7 13.5312 16.7625 13.4727ZM23.2875 5.58984L12.3458 15.8477L8.57917 16.2383C7.4875 16.3516 6.55833 15.4883 6.67917 14.457L7.09583 10.9258L18.0375 0.667969C18.9917 -0.226563 20.5333 -0.226563 21.4833 0.667969L23.2833 2.35547C24.2375 3.25 24.2375 4.69922 23.2875 5.58984ZM19.1708 6.79688L16.75 4.52734L9.00833 11.7891L8.70417 14.3398L11.425 14.0547L19.1708 6.79688ZM21.8708 3.68359L20.0708 1.99609C19.9 1.83594 19.6208 1.83594 19.4542 1.99609L18.1667 3.20312L20.5875 5.47266L21.875 4.26562C22.0417 4.10156 22.0417 3.84375 21.8708 3.68359Z"
                fill="white"
              />
            </svg>
          </span>
          <span>Edit</span>
        </button>
        <button className="py-2 px-4 rounded-full bg-[#00A5BF] w-32">
          Select
        </button>
      </div>
    </div>
  );
};
