const Section7 = () => {
  return (
    <div className="relative section7-gradient my-24 flex p-10">
      {/* left */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="absolute ">
          <img
            src="/images/section7art.png "
            className="max-h-[600px]"
            alt=""
          />
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col gap-4 w-1/2">
        <h1 className="text-4xl font-bold">
          App For LaundraMoon With Laundry Services
        </h1>
        <p className="text-[#777777] max-w-[500px]">
          Using the App, you can check the current service rate for Laundry at
          any time and keep yourself updated.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-10">
            <SiteInduction />
            <SiteInduction />
          </div>
          <div className="flex gap-10">
            <SiteInduction />
            <SiteInduction />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-[#00A5BF]">Download the App on</p>
          <div className="flex gap-4">
            <a href="">
              <img
                src="/images/google-store-btn 2.jpg"
                className="h-16"
                alt=""
              />
            </a>
            <a href="">
              <img src="/images/app-store-btn 2.png" className="h-16" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;

const SiteInduction = () => (
  <div className="flex justify-center items-center">
    <img src="/images/section7check.svg" alt="" />
    <p className="font-semibold"> Site Inductions</p>
  </div>
);