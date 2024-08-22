import FeaturedProjects from "./FeaturedProjects";

const FeaturedWork = () => {
  return (
    <section id="work" className="lg:pt-14 lg:pb-14">
      <h2 className="font-bebas mb-3 text-2xl mt-7 lg:text-4xl dark:text-customGray">Featured Projects</h2>
      <p className="font-manrope dark:text-customGray font-medium">
        Here are some of the selected projects that showcase my passion for
        frontend development
      </p>
      <FeaturedProjects />
    </section>
  );
};

export default FeaturedWork;
