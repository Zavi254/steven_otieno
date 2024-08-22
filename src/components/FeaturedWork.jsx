import FeaturedProjects from "./FeaturedProjects";

const FeaturedWork = () => {
  return (
    <section id="work" className="lg:pt-20 lg:pb-20 lg:border-b border-customGray">
      <h2 className="font-bebas mb-3 text-2xl mt-7 lg:text-5xl dark:text-white">Featured Projects</h2>
      <p className="font-manrope dark:text-customGray font-medium">
        Here are some of the selected projects that showcase my passion for
        frontend development
      </p>
      <FeaturedProjects />
    </section>
  );
};

export default FeaturedWork;
