import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import FeaturedWork from "./components/FeaturedWork";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen dark:bg-customBlack lg:p-6 xl:pr-48 xl:pl-48 md:pr-20 md:pl-20 p-4">
      <Navbar />
      <HeroSection />
      <FeaturedWork />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
