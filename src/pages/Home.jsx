import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import CompetitiveProfiles from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="m-6 mt-0 bg-gray-50 font-inter">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CompetitiveProfiles />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
