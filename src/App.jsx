import headerBG from "./assets/headerBG.svg";
import headerDecor from "./assets/headerDecor.svg";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import Brands from "./Brands";
import Explore from "./Explore";
import Courses from "./Courses";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Banner from "./Banner";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="header-section">
        <div className="header-background">
          <div className="background-container">
            <img src={headerBG} alt="" />
          </div>
          <img className="header-decor" src={headerDecor} alt="" />
          <Navigation />
          <HeroSection />
        </div>
      </div>
      <Brands />
      <Explore />
      <Courses />
      <Pricing />
      <Testimonials />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
