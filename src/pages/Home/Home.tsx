import NavBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import QuotesModule from "../../components/QuotesModule/QuotesModule";



const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <QuotesModule />
      <div id="about">
        <About />
        </div>
        <div id="skills">
      </div>
    </>
  );
};

export default Home;
