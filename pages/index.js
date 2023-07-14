import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Portfolio />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}
