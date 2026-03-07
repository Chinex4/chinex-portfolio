import { useState } from "react";

import MobileCard from "@/components/mobile";
import ProjectCard from "@/components/project";
import Title from "@/components/title";
import { Mobile_APP, PROJECTS } from "@/pages/constant";

type ActiveContent = "web" | "mobile";

const splitColumns = <T,>(items: T[]) => {
  return [
    items.filter((_, idx) => idx % 2 === 0),
    items.filter((_, idx) => idx % 2 !== 0),
  ];
};

const ProjectsSection = () => {
  const [activeContent, setActiveContent] = useState<ActiveContent>("web");
  const [webLeftColumn, webRightColumn] = splitColumns(PROJECTS);
  const [mobileLeftColumn, mobileRightColumn] = splitColumns(Mobile_APP);

  const toggleButtonClass = (content: ActiveContent) =>
    [
      "flex w-1/2 items-center justify-center rounded-full px-2 py-2 transition-opacity",
      activeContent === content
        ? "bg-orange-strong hover:opacity-80"
        : "text-inherit",
    ].join(" ");

  return (
    <section id="projects" className="container pt-40">
      <div className="max-w-2xl">
        <Title title="Projects" />
        <p className="mt-4 text-lg text-zinc-500">
          These are some of the amazing projects I've worked or collaborated on.
        </p>
      </div>

      <div className="mx-auto mt-4 flex w-60 justify-between rounded-full border">
        <button
          onClick={() => setActiveContent("web")}
          className={toggleButtonClass("web")}
          type="button"
        >
          Web
        </button>
        <button
          onClick={() => setActiveContent("mobile")}
          className={toggleButtonClass("mobile")}
          type="button"
        >
          <span>Mobile Apps</span>
        </button>
      </div>

      {activeContent === "web" ? (
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            {webLeftColumn.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {webRightColumn.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            {mobileLeftColumn.map((mobile, idx) => (
              <MobileCard key={idx} mobile={mobile} />
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {mobileRightColumn.map((mobile, idx) => (
              <MobileCard key={idx} mobile={mobile} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
