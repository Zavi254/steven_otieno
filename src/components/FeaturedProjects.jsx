import { projectsData } from "../../public/data/projectsData";

const FeaturedProjects = () => {
  return (
    <div>
      {projectsData.map((project) => (
        <div
          key={project.id}
          className="font-manrope mt-9 lg:mt-16 grid grid-cols-1 items-center md:grid-cols-2 lg:space-x-6"
        >
          <div className="bg-customDarkGray mb-9 lg:mb-0 rounded-xl shadow-md p-5 lg:p-10">
            <img className="rounded-md" src={project.image} alt="" loading="lazy"/>
          </div>
          <div>
            <h5 className=" dark:text-white text-lg font-medium lg:text-2xl mb-3 ">
              {project.title}
            </h5>
            <p className="dark:text-customGray font-medium mb-5">
              {project.description}
            </p>
            <div className="dark:text-white">
              <p className="font-semibold border-b pb-3 border-b-customGray">
                PROJECT INFO
              </p>
              <div className="flex justify-between mt-2 mb-5 font-medium border-b pb-2 pt-2 border-b-customGray">
                <p>Technology Used:</p>
                <p className="dark:text-customGray">{project.technology}</p>
              </div>
              <div className="flex justify-between mt-2 mb-5 font-medium border-b pb-2 pt-2 border-b-customGray">
                <p>Role</p>
                <p className="dark:text-customGray">{project.role}</p>
              </div>
            </div>
            <div className="text-customGreen flex gap-4 font-bold pt-3">
              <a
                href={project.liveDemoLink}
                className="flex items-center gap-2 underline underline-offset-8" target="_blank"
              >
                <p>LIVE DEMO</p>
                <img src={project.newTabIcon} alt="" />
              </a>
              <a
                href={project.githubLink}
                className="flex items-center gap-2 underline underline-offset-8" target="_blank"
              >
                <p>SEE ON GITHUB</p>
                <img src={project.githubTabIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
