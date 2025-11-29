import About from "../components/About";
import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Services from "../components/services";
import TechStack from "../components/TechStack";
import FooterContact from "../components/FooterContact";

export default function Home({ openContact }) {
  return (
    <div>
      <HomePage openContact={openContact} />
      <About openContact={openContact} />
      <Portfolio />
      <Testimonials />
      <Services />
      <TechStack />
      <FooterContact openContact={openContact} />
    </div>
  );
}
