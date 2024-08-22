/* eslint-disable react/no-unescaped-entities */
import AboutImageProfile from "/assets/images/about_image_portfolio.png";

const AboutMe = () => {
  return (
    <section
      id="about_me"
      className="lg:pt-20 lg:pb-20  mt-9 grid grid-cols-1 md:grid-cols-2 space-x-6 lg:border-b border-customGray"
    >
      <div>
        <h2 className="font-bebas mb-3 text-2xl mt-7 lg:text-5xl lg:mb-4 lg:mt-0 dark:text-white"> 
          About me
        </h2>
        <img className="rounded-md shadow-lg lg:mb-0 lg:mt-0 mb-4 mt-4" src={AboutImageProfile} alt="" loading="lazy" />
      </div>

      <div className="font-manrope self-center">
        <h5 className="dark:text-white text-lg font-medium lg:text-xl mb-4">
          I am front-end developer based in Kenya. Has Information Technology
          background .
        </h5>
        <p className="dark:text-customGray font-medium leading-7">
          Hi there 👋🏽! I'm a software engineer with over 3 years of experience
          specializing in Frontend Development. I thrive on crafting seamless
          user experiences and optimizing performance. My focus is on helping
          businesses and individuals scale by building performant and scalable
          web applications using JavaScript and TypeScript
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
