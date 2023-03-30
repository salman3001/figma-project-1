const Section1 = () => {
  return (
    <section className="flex w-full h-[450px]  bg-[#EAEFF3]">
      {/* left side */}
      <div className="flex   w-1/2 items-start pl-20 pr-40 pb-20 flex-col gap-2  pt-16">
        <div className="font-bold text-4xl ">
          Your professional dry clean & laundry service
        </div>
        <p className="font-medium text-lg">
          We collect, clean & return at the location of your choice on time.
        </p>
        <div className="font-bold text-lg mt-10">Download the App on</div>
        <div className="flex gap-4 mt-2">
          <a href="">
            <img src="/images/google-store-btn 2.jpg" alt="Play Store" />
          </a>
          <a href="">
            <img src="/images/app-store-btn 2.png" alt="Apple Store" />
          </a>
        </div>
      </div>
      {/* right side */}
      <div className="h-full relative w-1/2  bg-[#02A5BF]">
        {/* top */}
        <div className="absolute top-20 left-40">
          <img src="/images/section1-art1.svg" alt="" className="h-20" />
        </div>
        {/* bottom */}
        <div className="absolute flex flex-col px-5 py-7 gap-2 w-96 top-[243px] z-10 left-[-103px] shadow-hero-1 border-2 border-[#03444F] rounded-2xl bg-white">
          <img
            src="/images/Launder-logo.svg"
            alt=""
            className="h-3 self-start"
          />

          <div className=" w-full flex flex-col gap-2 h-28  p-4 bg-[#E9E9E9] rounded-lg">
            <div className="text-4xl flex  gap-2">
              <div className="">E10 7DA</div>
              <div className="">
                <img src="/images/editicon.svg" alt="" />
              </div>
            </div>
            <div className="pl-2 font-semibold">Enter Zipcode</div>
          </div>
          <button className="btn-2 btn-sm">Place Order</button>
          <div className="absolute flex flex-col w-[445px] p-4  h-[81px] bg-white top-[394px] shadow-hero-1 border-[#03444F] border-2 rounded-2xl">
            <div className="text-base text-black font-semibold">Quantity</div>
            <div>
              <img src="/images/slider.svg" alt="" />
            </div>
          </div>
        </div>
        {/* rectangel */}
        <div className="absolute  w-[602px] h-[435px] top-[260px] left-[-59px] border-2 border-[#03444F] rounded-2xl "></div>
        {/* leaves svg */}
        <div className="absolute left-[537px] top-[382px]">
          <img src="/images/leaves.svg" alt="" />
        </div>
        {/* stars */}
        <div className="absolute top-[121px]">
          <img src="/images/stars.svg" alt="" />
        </div>
        {/* reviews */}
        <div className="absolute flex text-white gap-2 font-[700] top-[747px] left-[74px] ">
          <div className="flex">
            <img src="/images/star.svg" alt="" />
            <img src="/images/star.svg" alt="" />
            <img src="/images/star.svg" alt="" />
            <img src="/images/star.svg" alt="" />
            <img src="/images/star.svg" alt="" />
          </div>
          <div>2000+ reviews - Trusted by 750,0000+ geniuses</div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
