const OurServiceSection6 = () => {
  return (
    <div className="p-10 sm:p-20  md:px-40 flex flex-col gap-4 md:gap-16 about-section3-gradient">
      <div className="flex flex-col justify-center gap-2 items-center">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-xl text-[#141111] opacity-80">
          Get a question? we're here to answer!
        </p>
      </div>
      <div className="md:pt-8">
        <CloseAccordian
          title="Where do you operate?"
          description="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours."
        />
        <OpenAccordian
          title="Do you offer repair and alteration service too?"
          description="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours."
        />
        <CloseAccordian
          title="How can I contact you?"
          description="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours."
        />
        <CloseAccordian
          title="How can I contact you?"
          description="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours."
        />
        <CloseAccordian
          title="How can I contact you?"
          description="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours."
        />
      </div>
    </div>
  );
};

export default OurServiceSection6;

interface Iaccordian {
  title: string;
  description: string;
}

const OpenAccordian = (prop: Iaccordian) => (
  <div className="flex group open flex-col gap-4">
    <div className="flex justify-between">
      <p className="font-bold text-lg hover:cursor-pointer">{prop.title}</p>
      <i>
        <img
          src="/images/accordian-close-icon.svg"
          className="h-8 group-[.open]:hidden"
          alt=""
        />
        <img
          src="/images/accordian-open-icon.svg"
          className="h-8 group-[.close]:hidden"
          alt=""
        />
      </i>
    </div>
    <div className="text-[#545252] group-[.close]:hidden">
      {prop.description}
    </div>
    <div className="divider"></div>
  </div>
);

const CloseAccordian = (prop: Iaccordian) => (
  <div className="flex group close flex-col gap-2 group">
    <div className="flex justify-between">
      <p className="font-bold text-lg hover:cursor-pointer">{prop.title}</p>
      <i>
        <img
          src="/images/accordian-close-icon.svg"
          className="h-8 group-[.open]:hidden"
          alt=""
        />
        <img
          src="/images/accordian-open-icon.svg"
          className="h-8 group-[.close]:hidden"
          alt=""
        />
      </i>
    </div>
    <div className="text-[#545252] group-[.close]:hidden">
      {prop.description}
    </div>
    <div className="divider my-0"></div>
  </div>
);
