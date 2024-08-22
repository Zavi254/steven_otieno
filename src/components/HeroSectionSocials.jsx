import heroLinkedInIcon from "/assets/images/hero_linkedin_icon.svg";
import heroGithubIcon from "/assets/images/hero_github_icon.svg";
import circleIcon from "/assets/images/contact_circle_icon.svg";

const HeroSectionSocials = () => {
  return (
    <div className="flex gap-5 items-center mt-10">
      <a
        href="https://drive.google.com/file/d/15737Md-_-8ReRv4hBjDrVIJqSpbDtwrl/view?usp=sharing"
        target="_blank"
        className="text-black rounded-custom-100  bg-customGreen font-manrope pl-5 pr-2 pt-2 pb-2 font-bold text-sm flex items-center gap-3"
      >
        <p>DOWNLOAD RESUME </p>
        <img src={circleIcon} alt="" />
      </a>

      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/steven-otianga/" target="_blank">
          <img className="w-10" src={heroLinkedInIcon} alt="" />
        </a>
        <a href="https://github.com/Zavi254/" target="_blank">
          <img className="w-10" src={heroGithubIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default HeroSectionSocials;
