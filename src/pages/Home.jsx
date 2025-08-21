import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="m-6 mt-0">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
