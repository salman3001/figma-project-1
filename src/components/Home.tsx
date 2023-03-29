const Home = () => {
  return (
    <div className="flex w-[1920px]   min-h-screen mx-auto flex-col justify-between">
      {/* header */}
      <header>
        <nav className="flex relative justify-between items-center  h-[121px] px-32 shadow-md">
          {/* logo */}
          <svg
            width="223"
            height="26"
            viewBox="0 0 223 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
          >
            <path
              d="M0.4375 24.7273V0H4.9169V20.9723H15.8075V24.7273H0.4375Z"
              fill="black"
            />
            <path
              d="M24.8388 25.1016C23.6636 25.1016 22.6051 24.8923 21.6634 24.4737C20.7296 24.0471 19.9891 23.4193 19.4418 22.5902C18.9025 21.7611 18.6328 20.7389 18.6328 19.5234C18.6328 18.477 18.826 17.6117 19.2124 16.9276C19.5987 16.2434 20.1259 15.696 20.794 15.2855C21.4621 14.875 22.2147 14.5651 23.0518 14.3558C23.897 14.1385 24.7704 13.9815 25.6719 13.8849C26.7585 13.7723 27.6399 13.6716 28.3161 13.5831C28.9922 13.4865 29.4832 13.3416 29.7891 13.1484C30.103 12.9472 30.2599 12.6373 30.2599 12.2188V12.1463C30.2599 11.2367 29.9903 10.5324 29.451 10.0334C28.9117 9.53433 28.1349 9.2848 27.1207 9.2848C26.0502 9.2848 25.201 9.51823 24.5732 9.98509C23.9534 10.4519 23.5348 11.0033 23.3175 11.6392L19.2365 11.0597C19.5585 9.93277 20.0897 8.991 20.8303 8.23438C21.5708 7.4697 22.4763 6.8982 23.5469 6.51989C24.6174 6.13352 25.8007 5.94034 27.0966 5.94034C27.9901 5.94034 28.8795 6.04498 29.7649 6.25426C30.6503 6.46354 31.4593 6.80966 32.1918 7.29261C32.9242 7.76752 33.5118 8.41548 33.9545 9.23651C34.4053 10.0575 34.6307 11.0838 34.6307 12.3153V24.7273H30.429V22.1797H30.2841C30.0185 22.6948 29.6442 23.1778 29.1612 23.6286C28.6863 24.0713 28.0866 24.4295 27.3622 24.7031C26.6458 24.9688 25.8047 25.1016 24.8388 25.1016ZM25.9737 21.8899C26.8511 21.8899 27.6117 21.7169 28.2557 21.3707C28.8996 21.0166 29.3946 20.5497 29.7408 19.9702C30.0949 19.3906 30.272 18.7588 30.272 18.0746V15.8892C30.1352 16.0019 29.9018 16.1065 29.5717 16.2031C29.2498 16.2997 28.8875 16.3842 28.4851 16.4567C28.0826 16.5291 27.6842 16.5935 27.2898 16.6499C26.8954 16.7062 26.5533 16.7545 26.2635 16.7947C25.6115 16.8833 25.0279 17.0282 24.5128 17.2294C23.9976 17.4306 23.5911 17.7124 23.2933 18.0746C22.9955 18.4287 22.8466 18.8875 22.8466 19.451C22.8466 20.2559 23.1404 20.8636 23.728 21.2741C24.3156 21.6847 25.0642 21.8899 25.9737 21.8899Z"
              fill="black"
            />
            <path
              d="M50.8459 16.9276V6.18182H55.2166V24.7273H50.9787V21.4311H50.7855C50.367 22.4695 49.6787 23.3187 48.7209 23.9787C47.7711 24.6387 46.5999 24.9688 45.2074 24.9688C43.992 24.9688 42.9174 24.6991 41.9837 24.1598C41.058 23.6125 40.3336 22.8196 39.8104 21.7812C39.2872 20.7348 39.0256 19.4711 39.0256 17.9901V6.18182H43.3963V17.3139C43.3963 18.4891 43.7183 19.4228 44.3622 20.1151C45.0062 20.8073 45.8513 21.1534 46.8977 21.1534C47.5417 21.1534 48.1655 20.9965 48.7692 20.6825C49.3729 20.3686 49.8679 19.9018 50.2543 19.282C50.6487 18.6541 50.8459 17.8693 50.8459 16.9276Z"
              fill="black"
            />
            <path
              d="M64.0819 13.8608V24.7273H59.7111V6.18182H63.8887V9.3331H64.106C64.5326 8.29474 65.2128 7.4697 66.1465 6.85795C67.0882 6.24621 68.2514 5.94034 69.6358 5.94034C70.9157 5.94034 72.0305 6.21402 72.9803 6.76136C73.9382 7.30871 74.6787 8.10156 75.2019 9.13992C75.7331 10.1783 75.9947 11.438 75.9867 12.919V24.7273H71.6159V13.5952C71.6159 12.3556 71.294 11.3857 70.65 10.6854C70.0141 9.98509 69.1328 9.63494 68.0059 9.63494C67.2412 9.63494 66.561 9.80398 65.9654 10.142C65.3778 10.4721 64.9149 10.951 64.5769 11.5788C64.2469 12.2067 64.0819 12.9673 64.0819 13.8608Z"
              fill="black"
            />
            <path
              d="M87.312 25.0533C85.8551 25.0533 84.5511 24.679 83.4 23.9304C82.249 23.1818 81.3394 22.0952 80.6713 20.6705C80.0033 19.2457 79.6692 17.5152 79.6692 15.4787C79.6692 13.4181 80.0073 11.6795 80.6834 10.2628C81.3676 8.83807 82.2892 7.76349 83.4483 7.03906C84.6074 6.30658 85.8993 5.94034 87.324 5.94034C88.4107 5.94034 89.3042 6.12547 90.0044 6.49574C90.7047 6.85795 91.2601 7.29664 91.6706 7.81179C92.0811 8.31889 92.3991 8.79782 92.6245 9.24858H92.8056V0H97.1884V24.7273H92.8901V21.8054H92.6245C92.3991 22.2562 92.0731 22.7351 91.6465 23.2422C91.2199 23.7412 90.6564 24.1679 89.9561 24.522C89.2559 24.8762 88.3745 25.0533 87.312 25.0533ZM88.5314 21.4673C89.4571 21.4673 90.2459 21.2178 90.8979 20.7188C91.5499 20.2116 92.0449 19.5073 92.383 18.6058C92.7211 17.7043 92.8901 16.6539 92.8901 15.4545C92.8901 14.2552 92.7211 13.2128 92.383 12.3274C92.053 11.442 91.562 10.7538 90.91 10.2628C90.266 9.77178 89.4732 9.52628 88.5314 9.52628C87.5575 9.52628 86.7445 9.77983 86.0925 10.2869C85.4405 10.794 84.9495 11.4943 84.6195 12.3878C84.2895 13.2812 84.1245 14.3035 84.1245 15.4545C84.1245 16.6136 84.2895 17.648 84.6195 18.5575C84.9576 19.459 85.4526 20.1714 86.1046 20.6946C86.7646 21.2098 87.5736 21.4673 88.5314 21.4673Z"
              fill="black"
            />
            <path
              d="M101.846 24.7273V6.18182H106.084V9.27273H106.277C106.615 8.20218 107.195 7.37713 108.016 6.79759C108.845 6.20999 109.79 5.91619 110.853 5.91619C111.094 5.91619 111.364 5.92827 111.662 5.95241C111.968 5.96851 112.221 5.99669 112.423 6.03693V10.0575C112.237 9.99313 111.944 9.93679 111.541 9.88849C111.147 9.83215 110.764 9.80398 110.394 9.80398C109.597 9.80398 108.881 9.97704 108.245 10.3232C107.617 10.6612 107.122 11.1321 106.76 11.7358C106.398 12.3395 106.217 13.0357 106.217 13.8246V24.7273H101.846Z"
              fill="black"
            />
            <path
              d="M120.331 25.1016C119.156 25.1016 118.097 24.8923 117.156 24.4737C116.222 24.0471 115.481 23.4193 114.934 22.5902C114.395 21.7611 114.125 20.7389 114.125 19.5234C114.125 18.477 114.318 17.6117 114.705 16.9276C115.091 16.2434 115.618 15.696 116.286 15.2855C116.954 14.875 117.707 14.5651 118.544 14.3558C119.389 14.1385 120.263 13.9815 121.164 13.8849C122.251 13.7723 123.132 13.6716 123.808 13.5831C124.484 13.4865 124.975 13.3416 125.281 13.1484C125.595 12.9472 125.752 12.6373 125.752 12.2188V12.1463C125.752 11.2367 125.482 10.5324 124.943 10.0334C124.404 9.53433 123.627 9.2848 122.613 9.2848C121.542 9.2848 120.693 9.51823 120.065 9.98509C119.446 10.4519 119.027 11.0033 118.81 11.6392L114.729 11.0597C115.051 9.93277 115.582 8.991 116.322 8.23438C117.063 7.4697 117.969 6.8982 119.039 6.51989C120.11 6.13352 121.293 5.94034 122.589 5.94034C123.482 5.94034 124.372 6.04498 125.257 6.25426C126.143 6.46354 126.951 6.80966 127.684 7.29261C128.416 7.76752 129.004 8.41548 129.447 9.23651C129.897 10.0575 130.123 11.0838 130.123 12.3153V24.7273H125.921V22.1797H125.776C125.511 22.6948 125.136 23.1778 124.653 23.6286C124.179 24.0713 123.579 24.4295 122.854 24.7031C122.138 24.9688 121.297 25.1016 120.331 25.1016ZM121.466 21.8899C122.343 21.8899 123.104 21.7169 123.748 21.3707C124.392 21.0166 124.887 20.5497 125.233 19.9702C125.587 19.3906 125.764 18.7588 125.764 18.0746V15.8892C125.627 16.0019 125.394 16.1065 125.064 16.2031C124.742 16.2997 124.38 16.3842 123.977 16.4567C123.575 16.5291 123.176 16.5935 122.782 16.6499C122.388 16.7062 122.045 16.7545 121.756 16.7947C121.104 16.8833 120.52 17.0282 120.005 17.2294C119.49 17.4306 119.083 17.7124 118.786 18.0746C118.488 18.4287 118.339 18.8875 118.339 19.451C118.339 20.2559 118.633 20.8636 119.22 21.2741C119.808 21.6847 120.556 21.8899 121.466 21.8899Z"
              fill="black"
            />
            <path
              d="M134.518 24.7273V6.18182H138.695V9.3331H138.913C139.299 8.2706 139.939 7.44152 140.832 6.84588C141.726 6.24219 142.792 5.94034 144.032 5.94034C145.288 5.94034 146.346 6.24621 147.207 6.85795C148.077 7.46165 148.688 8.28669 149.043 9.3331H149.236C149.646 8.30279 150.339 7.48177 151.312 6.87003C152.295 6.25024 153.458 5.94034 154.802 5.94034C156.508 5.94034 157.901 6.47964 158.979 7.55824C160.058 8.63684 160.597 10.2105 160.597 12.2791V24.7273H156.214V12.9553C156.214 11.8042 155.909 10.9631 155.297 10.4318C154.685 9.89252 153.937 9.62287 153.051 9.62287C151.997 9.62287 151.172 9.95289 150.576 10.6129C149.988 11.2649 149.695 12.1141 149.695 13.1605V24.7273H145.408V12.7741C145.408 11.8163 145.119 11.0516 144.539 10.4801C143.968 9.90862 143.219 9.62287 142.293 9.62287C141.665 9.62287 141.094 9.78385 140.579 10.1058C140.064 10.4197 139.653 10.8665 139.347 11.446C139.041 12.0175 138.888 12.6856 138.888 13.4503V24.7273H134.518Z"
              fill="black"
            />
            <path
              d="M173.121 25.0895C171.31 25.0895 169.74 24.6911 168.412 23.8942C167.084 23.0973 166.054 21.9825 165.321 20.5497C164.597 19.117 164.235 17.4427 164.235 15.527C164.235 13.6113 164.597 11.933 165.321 10.4922C166.054 9.05137 167.084 7.93253 168.412 7.13565C169.74 6.33878 171.31 5.94034 173.121 5.94034C174.932 5.94034 176.502 6.33878 177.83 7.13565C179.158 7.93253 180.184 9.05137 180.909 10.4922C181.641 11.933 182.007 13.6113 182.007 15.527C182.007 17.4427 181.641 19.117 180.909 20.5497C180.184 21.9825 179.158 23.0973 177.83 23.8942C176.502 24.6911 174.932 25.0895 173.121 25.0895ZM173.145 21.5881C174.127 21.5881 174.948 21.3184 175.608 20.7791C176.268 20.2318 176.759 19.4993 177.081 18.5817C177.411 17.6641 177.576 16.6418 177.576 15.5149C177.576 14.38 177.411 13.3537 177.081 12.4361C176.759 11.5104 176.268 10.7739 175.608 10.2266C174.948 9.67921 174.127 9.40554 173.145 9.40554C172.139 9.40554 171.302 9.67921 170.634 10.2266C169.974 10.7739 169.479 11.5104 169.149 12.4361C168.827 13.3537 168.666 14.38 168.666 15.5149C168.666 16.6418 168.827 17.6641 169.149 18.5817C169.479 19.4993 169.974 20.2318 170.634 20.7791C171.302 21.3184 172.139 21.5881 173.145 21.5881Z"
              fill="black"
            />
            <path
              d="M193.806 25.0895C191.995 25.0895 190.426 24.6911 189.098 23.8942C187.77 23.0973 186.739 21.9825 186.007 20.5497C185.282 19.117 184.92 17.4427 184.92 15.527C184.92 13.6113 185.282 11.933 186.007 10.4922C186.739 9.05137 187.77 7.93253 189.098 7.13565C190.426 6.33878 191.995 5.94034 193.806 5.94034C195.618 5.94034 197.187 6.33878 198.515 7.13565C199.843 7.93253 200.87 9.05137 201.594 10.4922C202.327 11.933 202.693 13.6113 202.693 15.527C202.693 17.4427 202.327 19.117 201.594 20.5497C200.87 21.9825 199.843 23.0973 198.515 23.8942C197.187 24.6911 195.618 25.0895 193.806 25.0895ZM193.831 21.5881C194.813 21.5881 195.634 21.3184 196.294 20.7791C196.954 20.2318 197.445 19.4993 197.767 18.5817C198.097 17.6641 198.262 16.6418 198.262 15.5149C198.262 14.38 198.097 13.3537 197.767 12.4361C197.445 11.5104 196.954 10.7739 196.294 10.2266C195.634 9.67921 194.813 9.40554 193.831 9.40554C192.824 9.40554 191.987 9.67921 191.319 10.2266C190.659 10.7739 190.164 11.5104 189.834 12.4361C189.512 13.3537 189.351 14.38 189.351 15.5149C189.351 16.6418 189.512 17.6641 189.834 18.5817C190.164 19.4993 190.659 20.2318 191.319 20.7791C191.987 21.3184 192.824 21.5881 193.831 21.5881Z"
              fill="black"
            />
            <path
              d="M210.773 13.8608V24.7273H206.403V6.18182H210.58V9.3331H210.797C211.224 8.29474 211.904 7.4697 212.838 6.85795C213.78 6.24621 214.943 5.94034 216.327 5.94034C217.607 5.94034 218.722 6.21402 219.672 6.76136C220.63 7.30871 221.37 8.10156 221.893 9.13992C222.425 10.1783 222.686 11.438 222.678 12.919V24.7273H218.307V13.5952C218.307 12.3556 217.985 11.3857 217.341 10.6854C216.706 9.98509 215.824 9.63494 214.697 9.63494C213.933 9.63494 213.252 9.80398 212.657 10.142C212.069 10.4721 211.606 10.951 211.268 11.5788C210.938 12.2067 210.773 12.9673 210.773 13.8608Z"
              fill="black"
            />
            <path
              d="M178.999 15.2273C178.999 19.3694 176.536 22.7273 173.499 22.7273C170.461 22.7273 167.999 19.3694 167.999 15.2273C167.999 11.0851 170.461 7.72727 173.499 7.72727C176.536 7.72727 178.999 11.0851 178.999 15.2273Z"
              fill="black"
            />
            <path
              d="M199.999 15.2273C199.999 19.3694 197.536 22.7273 194.499 22.7273C191.461 22.7273 188.999 19.3694 188.999 15.2273C188.999 11.0851 191.461 7.72727 194.499 7.72727C197.536 7.72727 199.999 11.0851 199.999 15.2273Z"
              fill="black"
            />
          </svg>
          {/* links */}
          <div className="flex h-[30px] w-[751px] items-center justify-between">
            <a href="" className="text-2xl">
              Pricing
            </a>
            <a href="" className="text-2xl">
              Services
            </a>
            <a href="" className="text-2xl">
              Business
            </a>
            <a href="" className="text-2xl">
              Blog
            </a>
            <a href="" className="text-2xl">
              FAQS
            </a>
          </div>
          {/* actions */}
          <div className="flex gap-6">
            <button className="login-btn">Login</button>
            <button className="booknow-btn">Book Now</button>
          </div>
        </nav>
      </header>
      {/* main */}
      <main className="grow">
        {/* section-1 */}
        <section className="flex h-[820px] bg-[#EAEFF3]">
          {/* left side */}
          <div className="grow flex flex-col gap-2 px-[137px] pt-[188px]">
            <div className="w-[708px] h-[240px]  font-[653] leading-[80px] text-[72px] ">
              Your professional dry clean & laundry service
            </div>
            <p className="font-[591] text-[28px]">
              We collect, clean & return at the location of your choice on time.
            </p>
            <div className="font-[653] text-[28px] mt-10">
              Download the App on
            </div>
            <div className="flex gap-4 mt-2">
              <a href="">
                <img
                  className="w-[254px] h-[77px]"
                  src="/images/google-store-btn 2.jpg"
                  alt="Play Store"
                />
              </a>
              <a href="">
                <img
                  className="applestore-btn"
                  src="/images/app-store-btn 2.png"
                  alt="Apple Store"
                />
              </a>
            </div>
          </div>
          {/* right side */}
          <div className="h-full w-[860px] bg-[#02A5BF]">
            {/* top */}
            <div className="relative top-[195px] left-[277px] w-[445px] h-[146px] bg-white border-2 border-[#03444f] shadow-hero-1 rounded-2xl">
              <div className="absolute top-[-38px] left-[-2px] flex gap-4 justify-center items-center w-[256px] h-[77px] bg-white border-2 shadow-hero-1 border-[#03444f] special-radius">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5213" cy="11.5213" r="11.5213" fill="black" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5213" cy="11.5213" r="11.5213" fill="black" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5213" cy="11.5213" r="11.5213" fill="black" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5213" cy="11.5213" r="11.5213" fill="black" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5213" cy="11.5213" r="11.5213" fill="black" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5213" cy="11.5213" r="11.5213" fill="black" />
                </svg>
              </div>
              <div className="flex flex-col mt-10 pl-6">
                <p className="text-[16px] pb-1">Login</p>
                <hr />
                {/* lock and bars */}
                <div className="flex gap-2 mt-4 justify-center items-center">
                  <svg
                    width="23"
                    height="30"
                    viewBox="0 0 23 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.75 10H18.375V7.25C18.375 3.455 15.295 0.375 11.5 0.375C7.705 0.375 4.625 3.455 4.625 7.25V10H3.25C1.73062 10 0.5 11.2306 0.5 12.75V26.5C0.5 28.0194 1.73062 29.25 3.25 29.25H19.75C21.2694 29.25 22.5 28.0194 22.5 26.5V12.75C22.5 11.2306 21.2694 10 19.75 10ZM11.5 22.375C9.98063 22.375 8.75 21.1444 8.75 19.625C8.75 18.1056 9.98063 16.875 11.5 16.875C13.0194 16.875 14.25 18.1056 14.25 19.625C14.25 21.1444 13.0194 22.375 11.5 22.375ZM15.7625 10H7.2375V7.25C7.2375 4.89875 9.14875 2.9875 11.5 2.9875C13.8512 2.9875 15.7625 4.89875 15.7625 7.25V10Z"
                      fill="black"
                    />
                  </svg>
                  <div className="flex flex-col gap-2">
                    <svg
                      width="357"
                      height="11"
                      viewBox="0 0 357 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="357"
                        height="11"
                        rx="5.5"
                        fill="#DDDDDD"
                        fill-opacity="0.49"
                      />
                    </svg>
                    <svg
                      width="262"
                      height="11"
                      viewBox="0 0 262 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="262"
                        height="11"
                        rx="5.5"
                        fill="#DDDDDD"
                        fill-opacity="0.49"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* bottom */}
            <div></div>
          </div>
        </section>
      </main>
      {/* footer */}
      <footer>footer</footer>
    </div>
  );
};

export default Home;
