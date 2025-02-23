import NavBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";



const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div id="about">
        <About />
        </div>
        <div id="skills">
      </div>
    </>
  );
};

export default Home;
