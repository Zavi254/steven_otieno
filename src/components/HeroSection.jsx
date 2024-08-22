import { heroSectionData } from "../../public/data/heroSectionData";
import homePorfolioImage from "/assets/images/home_page_portfolio.png";
import HeroSectionSocials from "./HeroSectionSocials";

const HeroSection = () => {
  return (
    <section
      id="hero_section"
      className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 md:mt-16 items-center mt-10  lg:pt-14 lg:pb-14 border-b border-customGray"
    >
      <div>
        <h1 className="font-bebas lg:text-4xl xl:text-6xl lg:mt-0 lg:mb-10 text-4xl text-black mb-3 mt-4 dark:text-white ">
          {heroSectionData.title}
        </h1>
        <p className="font-manrope text-black dark:text-customGray lg:text-md leading-7 mt-3">
          {heroSectionData.description}
        </p>
        <HeroSectionSocials />
      </div>
      <div className="bg-customGray rounded shadow-sm mt-6">
        <img src={homePorfolioImage} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
