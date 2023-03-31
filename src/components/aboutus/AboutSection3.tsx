import CheckSvg from "../common/CheckSvg";

const AboutSection3 = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold">Our History</h1>
        <p className="opacity-80">
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </p>
      </div>
      <div>
        <img src="/images/young-woman.png" alt="" />
      </div>
      <div className="relative flex border-l-4 border-[#00A5BF]">
        <div className=" relative gap-10 p-20">
          <div className="relative flex z-10">
            <CheckSvg color="#00A5BF" />
          </div>
          <p>
            We are based in Southall London since 1978, offering a range of
            services as well as collection and delivery for over 50 years. We
            are delighted to say every individual customer to corporate clients
            have been looked after with dedicated personal touch that they
            deserve. Over the years we have learned the art of building a
            relationship with our prime customers, obsessing over the quality of
            service and always delivering on promises. Our NHS and hospitality
            clients can be assured that Laundramoon will always go extra miles
            to deliver at most best service possible. We are proud at what we
            do. Our experienced customer service experts ensure your order is
            handled with care and professionalism and you face no difficulty
            during our service. OUR SERVICES MADE SIMPLE We provide an
            affordable and convenient way of getting your dry cleaning, laundry,
            alterations and repair done with top quality service in London. Our
            instant pickup service at a time slot chosen by you provides your
            dry cleaning and laundry done on time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
