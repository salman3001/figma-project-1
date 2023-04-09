import React from "react";

const Section8 = () => {
  return (
    <div className="py-10 sm:p-10  xl:px-40 flex flex-col gap-4 md:gap-16">
      <div className="flex flex-col justify-center gap-2 items-center">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-xl text-[#141111] opacity-80">
          Get a question? we're here to answer!
        </p>
      </div>
      <div className="md:pt-8 px-5 md:px-20">
        <Accordian
          title="Where do you operate?"
          summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
        />
        <div className="divider"></div>
        <Accordian
          title="Do you offer repair and alteration service too?"
          summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
        />
        <div className="divider"></div>
        <Accordian
          title="How can I contact you?"
          summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
        />
        <div className="divider"></div>
        <Accordian
          title="How can I contact you?"
          summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
        />
        <div className="divider"></div>
        <Accordian
          title="How can I contact you?"
          summery="Yes, apart from dry cleaning and laundry services, we also offer alterations and repairs. You can check our services to know more. But kindly note these alteration and repairs require a minimum of 48 hours.z"
        />
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Section8;

// interface Iaccordian {
//   title: string;
//   description: string;
// }

// const OpenAccordian = (prop: Iaccordian) => (
//   <div className="flex group open flex-col gap-4">
//     <div className="flex justify-between">
//       <p className="font-bold text-lg hover:cursor-pointer">{prop.title}</p>
//       <i>
//         <img
//           src={
//             import.meta.env.VITE_BASE_URL + "/images/accordian-close-icon.svg"
//           }
//           className="h-8 group-[.open]:hidden"
//           alt=""
//         />
//         <img
//           src={
//             import.meta.env.VITE_BASE_URL + "/images/accordian-open-icon.svg"
//           }
//           className="h-8 group-[.close]:hidden"
//           alt=""
//         />
//       </i>
//     </div>
//     <div className="text-[#545252] group-[.close]:hidden">
//       {prop.description}
//     </div>
//     <div className="divider"></div>
//   </div>
// );

// const CloseAccordian = (prop: Iaccordian) => (
//   <div className="flex group close flex-col gap-2 group">
//     <div className="flex justify-between">
//       <p className="font-bold text-lg hover:cursor-pointer">{prop.title}</p>
//       <i>
//         <img
//           src={
//             import.meta.env.VITE_BASE_URL + "/images/accordian-close-icon.svg"
//           }
//           className="h-8 group-[.open]:hidden"
//           alt=""
//         />
//         <img
//           src={
//             import.meta.env.VITE_BASE_URL + "/images/accordian-open-icon.svg"
//           }
//           className="h-8 group-[.close]:hidden"
//           alt=""
//         />
//       </i>
//     </div>
//     <div className="text-[#545252] group-[.close]:hidden">
//       {prop.description}
//     </div>
//     <div className="divider my-0"></div>
//   </div>
// );

interface Iaccordian {
  title: string;
  summery: string;
}

const Accordian = (prop: Iaccordian) => {
  return (
    <details className="group ">
      <summary className="list-none before:content-[+] flex justify-between cursor-pointer font-bold text-lg">
        <span>{prop.title}</span>
        <span className="flex group-open:hidden justify-center items-center p-2 aspect-square  border rounded-full">
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="7"
              x2="17"
              y2="7"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="9"
              y1="14"
              x2="9"
              y2="1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <span className="hidden group-open:flex justify-center items-center p-2 aspect-square  border rounded-full">
          <svg
            width="18"
            height="2"
            viewBox="0 0 18 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="1"
              x2="17"
              y2="1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </summary>
      <p className="opacity-60">{prop.summery}</p>
    </details>
  );
};
