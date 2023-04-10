import { ReactNode } from "react";
import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";

const MyAccount2 = () => {
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
                <div className="p-5 md:p-10  w-full min-h-[500px] bg-[#afd1d7] border-[#1ca3b8] border-opacity-25 border bg-opacity-10 rounded-sm">
                  <div className=" flex flex-col gap-4 ">
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
                            d="M12.6503 5.71895V3.54278C12.6503 2.85342 13.2101 2.29252 13.9006 2.29252H21.0992C21.7885 2.29252 22.3494 2.85342 22.3494 3.54278V5.71895H12.6503ZM26.3047 5.71895H24.0482V3.54278C24.0482 1.9168 22.7252 0.59375 21.0992 0.59375H13.9006C12.2746 0.59375 10.9515 1.9168 10.9515 3.54278V5.71895H7.79379C7.04877 5.71895 6.37333 6.12893 6.02972 6.78831C5.68612 7.44876 5.7375 8.23767 6.1646 8.84674L9.14359 13.106C9.51503 13.638 10.1241 13.9559 10.7739 13.9559H24.0846C24.8628 13.9559 25.5736 13.4977 25.8968 12.788L27.4586 9.34235C27.6513 8.91525 27.4629 8.41108 27.0358 8.21733C26.6065 8.02358 26.1045 8.21305 25.9108 8.64015L24.349 12.0859C24.3019 12.1897 24.1981 12.256 24.0846 12.256H10.7739C10.6797 12.256 10.5897 12.2111 10.5362 12.1329L7.55615 7.87265C7.46838 7.74741 7.50584 7.63181 7.53581 7.574C7.56686 7.51513 7.64179 7.41772 7.79379 7.41772H26.3047C27.5603 7.41772 28.5429 8.36505 28.5429 9.57677V20.5486C28.5429 21.739 27.5731 22.7088 26.3839 22.7088H8.61587C7.42556 22.7088 6.45682 21.739 6.45682 20.5486V11.6652C6.45682 11.1953 6.07682 10.8153 5.6069 10.8153C5.13699 10.8153 4.75806 11.1953 4.75806 11.6652V20.5486C4.75806 22.6767 6.48787 24.4075 8.61587 24.4075H26.3839C28.5108 24.4075 30.2417 22.6767 30.2417 20.5486V9.57677C30.2417 7.41344 28.5119 5.71895 26.3047 5.71895Z"
                            fill="white"
                            stroke="white"
                            stroke-width="0.5"
                          />
                        </svg>
                      }
                    />
                    <AddressCard
                      svg={
                        <svg
                          width="34"
                          height="41"
                          viewBox="0 0 34 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.8608 40V31.2727H3.44176V34.9673H7.4858V31.2727H9.07102V40H7.4858V36.2926H3.44176V40H1.8608ZM13.5774 40.1278C12.9382 40.1278 12.3842 39.9872 11.9155 39.706C11.4467 39.4247 11.0831 39.0312 10.8246 38.5256C10.5689 38.0199 10.4411 37.429 10.4411 36.7528C10.4411 36.0767 10.5689 35.4844 10.8246 34.9759C11.0831 34.4673 11.4467 34.0724 11.9155 33.7912C12.3842 33.5099 12.9382 33.3693 13.5774 33.3693C14.2166 33.3693 14.7706 33.5099 15.2393 33.7912C15.7081 34.0724 16.0703 34.4673 16.326 34.9759C16.5845 35.4844 16.7138 36.0767 16.7138 36.7528C16.7138 37.429 16.5845 38.0199 16.326 38.5256C16.0703 39.0312 15.7081 39.4247 15.2393 39.706C14.7706 39.9872 14.2166 40.1278 13.5774 40.1278ZM13.5859 38.892C13.9325 38.892 14.2223 38.7969 14.4553 38.6065C14.6882 38.4134 14.8615 38.1548 14.9751 37.831C15.0916 37.5071 15.1499 37.1463 15.1499 36.7486C15.1499 36.348 15.0916 35.9858 14.9751 35.6619C14.8615 35.3352 14.6882 35.0753 14.4553 34.8821C14.2223 34.6889 13.9325 34.5923 13.5859 34.5923C13.2308 34.5923 12.9354 34.6889 12.6996 34.8821C12.4666 35.0753 12.2919 35.3352 12.1754 35.6619C12.0618 35.9858 12.005 36.348 12.005 36.7486C12.005 37.1463 12.0618 37.5071 12.1754 37.831C12.2919 38.1548 12.4666 38.4134 12.6996 38.6065C12.9354 38.7969 13.2308 38.892 13.5859 38.892ZM21.2915 33.4545V34.6477H17.5288V33.4545H21.2915ZM18.4577 31.8864H20.0004V38.0312C20.0004 38.2386 20.0316 38.3977 20.0941 38.5085C20.1594 38.6165 20.2447 38.6903 20.3498 38.7301C20.4549 38.7699 20.5714 38.7898 20.6992 38.7898C20.7958 38.7898 20.8839 38.7827 20.9634 38.7685C21.0458 38.7543 21.1083 38.7415 21.1509 38.7301L21.4109 39.9361C21.3285 39.9645 21.2106 39.9957 21.0572 40.0298C20.9066 40.0639 20.7219 40.0838 20.5032 40.0895C20.1168 40.1009 19.7688 40.0426 19.4592 39.9148C19.1495 39.7841 18.9038 39.5824 18.7219 39.3097C18.543 39.0369 18.4549 38.696 18.4577 38.2869V31.8864ZM25.4091 40.1278C24.7528 40.1278 24.1861 39.9915 23.7088 39.7188C23.2344 39.4432 22.8693 39.054 22.6136 38.5511C22.358 38.0455 22.2301 37.4503 22.2301 36.7656C22.2301 36.0923 22.358 35.5014 22.6136 34.9929C22.8722 34.4815 23.233 34.0838 23.696 33.7997C24.1591 33.5128 24.7031 33.3693 25.3281 33.3693C25.7315 33.3693 26.1122 33.4347 26.4702 33.5653C26.831 33.6932 27.1491 33.892 27.4247 34.1619C27.7031 34.4318 27.9219 34.7756 28.081 35.1932C28.2401 35.608 28.3196 36.1023 28.3196 36.6761V37.1491H22.9545V36.1094H26.8409C26.8381 35.8139 26.7741 35.5511 26.6491 35.321C26.5241 35.0881 26.3494 34.9048 26.125 34.7713C25.9034 34.6378 25.6449 34.571 25.3494 34.571C25.0341 34.571 24.7571 34.6477 24.5185 34.8011C24.2798 34.9517 24.0938 35.1506 23.9602 35.3977C23.8295 35.642 23.7628 35.9105 23.7599 36.2031V37.1108C23.7599 37.4915 23.8295 37.8182 23.9688 38.0909C24.108 38.3608 24.3026 38.5682 24.5526 38.7131C24.8026 38.8551 25.0952 38.9261 25.4304 38.9261C25.6548 38.9261 25.858 38.8949 26.0398 38.8324C26.2216 38.767 26.3793 38.6719 26.5128 38.5469C26.6463 38.4219 26.7472 38.267 26.8153 38.0824L28.2557 38.2443C28.1648 38.625 27.9915 38.9574 27.7358 39.2415C27.483 39.5227 27.1591 39.7415 26.7642 39.8977C26.3693 40.0511 25.9176 40.1278 25.4091 40.1278ZM31.1673 31.2727V40H29.6246V31.2727H31.1673Z"
                            fill="white"
                          />
                          <g clip-path="url(#clip0_0_1)">
                            <path
                              d="M31.1666 15.5832V28.3332H28.3333V24.0832H5.66659V28.3332H2.83325V5.6665H5.66659V19.8332H16.9999V9.9165H25.4999C27.0028 9.9165 28.4442 10.5135 29.5069 11.5762C30.5696 12.6389 31.1666 14.0803 31.1666 15.5832ZM28.3333 19.8332V15.5832C28.3333 14.8317 28.0347 14.1111 27.5034 13.5797C26.972 13.0483 26.2514 12.7498 25.4999 12.7498H19.8333V19.8332H28.3333ZM11.3333 15.5832C11.709 15.5832 12.0693 15.4339 12.335 15.1682C12.6007 14.9026 12.7499 14.5422 12.7499 14.1665C12.7499 13.7908 12.6007 13.4304 12.335 13.1648C12.0693 12.8991 11.709 12.7498 11.3333 12.7498C10.9575 12.7498 10.5972 12.8991 10.3315 13.1648C10.0658 13.4304 9.91659 13.7908 9.91659 14.1665C9.91659 14.5422 10.0658 14.9026 10.3315 15.1682C10.5972 15.4339 10.9575 15.5832 11.3333 15.5832ZM11.3333 18.4165C10.2061 18.4165 9.12508 17.9687 8.32805 17.1717C7.53102 16.3747 7.08325 15.2937 7.08325 14.1665C7.08325 13.0393 7.53102 11.9583 8.32805 11.1613C9.12508 10.3643 10.2061 9.9165 11.3333 9.9165C12.4604 9.9165 13.5414 10.3643 14.3385 11.1613C15.1355 11.9583 15.5833 13.0393 15.5833 14.1665C15.5833 15.2937 15.1355 16.3747 14.3385 17.1717C13.5414 17.9687 12.4604 18.4165 11.3333 18.4165Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_1">
                              <rect width="34" height="34" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      }
                    />
                  </div>
                  <div className="flex justify-between items-center p-10">
                    <p className="bg-[#03444] font-bold opacity-80">
                      New Address
                    </p>
                    <button className="flex justify-center items-center text-[#00A5BF] gap-4 p-1">
                      <span className="text-3xl font-semibold leading-10">
                        +
                      </span>
                      <span>Add More</span>
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

export default MyAccount2;

interface IAddressCard {
  svg: ReactNode;
}

const AddressCard = (prop: IAddressCard) => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center gap-4 p-5 md:p-10 bg-[#E4F4FF] rounded-lg">
      <div className="bg-[#00A5BF] w-16 h-16 p-4 flex justify-center items-center rounded-full ">
        {prop.svg}
      </div>
      <div>
        <p className="text-[#03444F] text-lg font-bold opacity-80">Adress</p>
        <p className="text-[#111212]">
          height: 24px; width: 363px; left: 505px; top: 348px; border-radius:
          nullpx;
        </p>
      </div>
    </div>
  );
};