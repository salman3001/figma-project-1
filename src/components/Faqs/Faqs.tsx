import Footer from "../footer/Footer";
import Section10 from "../main/Section10";
import Section8 from "../main/Section8";
import NavBar from "../navbar/NavBar";

const Faqs = () => {
  return (
    <div className="flex bg-white container min-h-screen mx-auto flex-col justify-between">
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <div className="grid lg:grid-cols-2 text-xl py-10 pl-10 pr-10 lg:pr-0 md:pl-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-7xl py-10 font-bold">
              Frequently asked questions
            </h1>
            <ul className="text-3xl flex flex-col gap-7 opacity-80">
              <li className="flex gap-6 items-center font-bold">
                <img src="/images/ring.svg" className="h-4" alt="" />
                General Information
              </li>
              <li className="flex gap-6 items-center">
                <img src="/images/ring.svg" className="h-4" alt="" />
                Our Services
              </li>
              <li className="flex gap-6 items-center">
                <img src="/images/ring.svg" className="h-4" alt="" />
                Collection & Delivery
              </li>
              <li className="flex gap-6 items-center">
                <img src="/images/ring.svg" className="h-4" alt="" />
                Pricing & Payments
              </li>
              <li className="flex gap-6 items-center">
                <img src="/images/ring.svg" className="h-4" alt="" />
                Rescheduling, Cancellations, & Complaints
              </li>
            </ul>
          </div>
          <div>
            <Section8 />
          </div>
        </div>
        <Section10 />
      </main>
      <Footer />
    </div>
  );
};

export default Faqs;
