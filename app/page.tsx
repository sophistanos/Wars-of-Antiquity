import About from "../components/About";
import Events from "../components/Events";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Nations from "../components/Nations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Nations />
      <Events />
    </>
  );
}
