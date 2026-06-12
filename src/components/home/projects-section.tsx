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
      "flex w-1/2 cursor-pointer items-center justify-center rounded-full px-4 py-3 text-sm font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-soft",
      activeContent === content
        ? "bg-orange-strong text-white shadow-lg shadow-orange-strong/25"
        : "text-zinc-300 hover:bg-white/10 hover:text-white",
    ].join(" ");

  return (
    <section id="projects" className="container section-shell pt-32">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-orange-soft">
            Selected work
          </p>
          <Title title="Projects" />
          <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
            A focused collection of products I have built, shipped, or
            collaborated on across web platforms and mobile applications.
          </p>
        </div>

        <div className="glass-panel flex w-full max-w-xs justify-between rounded-full p-1.5">
          <button
            onClick={() => setActiveContent("web")}
            className={toggleButtonClass("web")}
            type="button"
            aria-pressed={activeContent === "web"}
          >
            Web
          </button>
          <button
            onClick={() => setActiveContent("mobile")}
            className={toggleButtonClass("mobile")}
            type="button"
            aria-pressed={activeContent === "mobile"}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className="mt-10 rounded-none sm:rounded-[2rem] sm:border sm:border-white/10 sm:bg-white/[.025] sm:p-4">
        <p className="pb-4 pt-2 text-sm text-zinc-500 sm:px-4">
          Showing {activeContent === "web" ? PROJECTS.length : Mobile_APP.length}{" "}
          {activeContent === "web" ? "web projects" : "mobile applications"}.
        </p>

        {activeContent === "web" ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-8 sm:gap-8">
            {webLeftColumn.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
          <div className="flex flex-col gap-8 sm:gap-8">
            {webRightColumn.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-8 sm:gap-8">
            {mobileLeftColumn.map((mobile, idx) => (
              <MobileCard key={idx} mobile={mobile} />
            ))}
          </div>
          <div className="flex flex-col gap-8 sm:gap-8">
            {mobileRightColumn.map((mobile, idx) => (
              <MobileCard key={idx} mobile={mobile} />
            ))}
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default ProjectsSection;
