import Footer from "../footer/Footer";
import Section10 from "../main/Section10";
import NavBar from "../navbar/NavBar";

const Privacy = () => {
  return (
    <div className="flex bg-white container min-h-screen mx-auto flex-col justify-between">
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <div></div>
        <Section10 />
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
