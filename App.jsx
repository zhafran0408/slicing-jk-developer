import Navbar from "./navbar";
import About  from "./about";
import Services from "./services"
import HeroSection from "./Herosection";
import Testimonials from "./Testimonial";
import CaseStudies from "./caseStudies";
import Blog from "./Blog"
import Contact from "./contact"
function App() {
  return (
    <>
      <Navbar />
      <About/>
      <Services/>
      <HeroSection/>
      <Testimonials/>
      <CaseStudies/>
      <Blog/>
      <Contact/>
    </>
  );
}

export default App;




