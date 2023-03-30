import Main from "./main/main";
import NavBar from "./navbar/NavBar";

const Home = () => {
  return (
    <div className="flex container min-h-screen mx-auto flex-col justify-between">
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <Main />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Home;
