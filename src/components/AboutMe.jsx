import { aboutMeData } from "../../public/data/aboutMeData";

const AboutMe = () => {
  return (
    <section
      id="about_me"
      className="lg:pt-20 lg:pb-20  mt-9 pb-10 pt-10 grid grid-cols-1 md:grid-cols-2 lg:space-x-6 lg:border-b border-customGray"
    >
      <div>
        <h2 className="font-bebas mb-3 text-2xl mt-7 lg:text-5xl lg:mb-4 lg:mt-0 dark:text-white">
          About me
        </h2>
        <img
          className="rounded-md shadow-lg lg:mb-0 lg:mt-0 mb-4 mt-4"
          src={aboutMeData.profileImage}
          alt=""
          loading="lazy"
        />
      </div>

      <div className="font-manrope self-center">
        <h5 className="dark:text-white text-lg font-medium lg:text-xl mb-4">
          {aboutMeData.intro}
        </h5>
        <p className="dark:text-customGray font-medium leading-7">
          {aboutMeData.description}
        </p>
        <div className="mt-5 grid grid-cols-2 md:gap-5 lg:grid-cols-3 xl:gap-4">
          {aboutMeData.skills.map((skill) => (
            <div
              key={skill.id}
              className="dark:text-customGray cursor-pointer lg:mb-0 mb-3 flex items-center justify-center gap-1 border border-black dark:border-customGray p-1 rounded-custom-100 w-40 lg:w-36"
            >
              <img src={skill.icon} alt="" />
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
