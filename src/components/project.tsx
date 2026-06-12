import { GithubIcon, LinkSquareIcon } from "@/assets/icons";

type Project = {
  name: string;
  image?: string;
  desc: string;
  date: string;
  stacks: string[];
  live?: string;
  code?: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const primaryLink = project.live || project.code || "#";

  return (
    <article className="group responsive-card flex h-full flex-col overflow-hidden rounded-none pb-8 transition-all duration-300 sm:rounded-[1.75rem] sm:pb-0 sm:hover:-translate-y-1 sm:hover:border-orange-soft/45 sm:hover:shadow-orange-strong/10">
      {project.image ? (
        <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="block cursor-pointer overflow-hidden">
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className="h-48 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105 sm:h-56 sm:rounded-none"
            loading="lazy"
          />
        </a>
      ) : null}
      <div className="flex flex-1 flex-col gap-5 px-0 pt-5 sm:p-5 md:p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-sm font-semibold text-zinc-300">
            {project.date}
          </span>
          <div className="flex items-center gap-3">
            {project.code ? (
              <a
                href={project.code}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[.035] text-zinc-300 transition duration-300 hover:border-orange-soft hover:text-orange-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-soft sm:bg-transparent"
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} source code`}
              >
                <GithubIcon width={20} height={20} />
              </a>
            ) : null}
            {project.live ? (
              <a
                href={project.live}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[.035] text-zinc-300 transition duration-300 hover:border-orange-soft hover:text-orange-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-soft sm:bg-transparent"
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} live website`}
              >
                <LinkSquareIcon width={20} height={20} />
              </a>
            ) : null}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold leading-tight text-zinc-50 sm:text-2xl">
            {project.name}
          </h3>
          <p className="text-sm leading-7 text-zinc-400 sm:text-base">{project.desc}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.stacks.slice(0, 6).map((stack) => (
            <span
              key={stack}
              className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-xs font-semibold text-zinc-300"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
