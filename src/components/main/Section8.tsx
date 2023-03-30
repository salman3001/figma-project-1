import React from "react";

const Section8 = () => {
  return (
    <div className="p-20 px10 sm:px-20  md:60">
      <OpenAccordian />
      <CloseAccordian />
    </div>
  );
};

export default Section8;

const OpenAccordian = () => (
  <div className="flex flex-col gap-4">
    <div className="flex justify-between">
      <p className="font-bold text-lg hover:cursor-pointer">
        Do you offer repair and alteration service too?
      </p>
      <button>
        <img src="/images/accordian-open-icon.svg" className="h-8" alt="" />
      </button>
    </div>
    <div className="text-[#545252]">
      Yes, apart from dry cleaning and laundry services, we also offer
      alterations and repairs. You can check our services to know more. But
      kindly note these alteration and repairs require a minimum of 48 hours.
    </div>
    <div className="divider"></div>
  </div>
);

const CloseAccordian = () => (
  <div className="flex flex-col gap-4 odd:hidden">
    <div className="flex justify-between">
      <p className="font-bold text-lg hover:cursor-pointer">
        Do you offer repair and alteration service too?
      </p>
      <button>
        <img src="/images/accordian-open-icon.svg" className="h-8" alt="" />
      </button>
    </div>
    <div className="text-[#545252]">
      Yes, apart from dry cleaning and laundry services, we also offer
      alterations and repairs. You can check our services to know more. But
      kindly note these alteration and repairs require a minimum of 48 hours.
    </div>
    <div className="divider"></div>
  </div>
);
