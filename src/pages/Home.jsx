import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="m-6 mt-0 bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
