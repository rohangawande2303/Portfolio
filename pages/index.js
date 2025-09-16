import About from "../components/About";
import Contact from "../components/Contact";
// import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";
import Services from "../components/services";

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Portfolio />
      <Services />
      {/* <Experience /> */}

      <Contact />
    </div>
  );
}
