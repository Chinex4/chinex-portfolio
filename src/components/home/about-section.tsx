import CustomLink from "@/components/link";
import Title from "@/components/title";
import { TECH_STACKS_TOOLS } from "@/pages/constant";

const AboutSection = () => {
  return (
    <section id="about" className="container section-shell animate-fade-in pt-28">
      <div className="responsive-panel overflow-hidden rounded-none sm:rounded-[2rem] sm:p-10 md:p-12">
        <div className="mb-10 grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-orange-soft">
              About
            </p>
            <Title title="About Me" />
          </div>
          <div className="flex flex-col gap-5 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              My name is <span className="font-semibold text-zinc-50">Chinaza</span>.
              I’m a full-stack mobile engineer and web developer building
              scalable, high-quality products across web, mobile, and backend
              systems.
            </p>
            <p>
              I specialize in React, React Native, Node.js, Laravel, PHP, CSS,
              and Tailwind, with enough product sense to care about performance,
              interaction quality, and the details users actually feel. My work
              ranges from a{" "}
              <CustomLink
                href="https://www.zagasm.com/"
                text="social media platform"
                target="_blank"
                withIcon
              />{" "}
              to a{" "}
              <CustomLink
                href="https://www.bitspotexchange.com/"
                text="crypto exchange platform"
                target="_blank"
                withIcon
              />
              .
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {TECH_STACKS_TOOLS.map((tech, idx) => (
            <div
              key={idx}
              className="border-t border-white/10 py-6 transition-all duration-300 first:border-t-0 sm:rounded-3xl sm:border sm:bg-white/[.04] sm:p-6 sm:hover:border-orange-soft/40 sm:hover:bg-white/[.065]"
            >
              <h3 className="mb-5 text-lg font-bold text-zinc-50 sm:text-xl">
                {tech.title}:
              </h3>
              <div className="flex flex-wrap gap-3">
                {tech.collections.map((item, collectionIdx) => (
                  <div
                    key={collectionIdx}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.035] px-3 py-2 sm:bg-dark/50"
                  >
                    <item.icon width={20} height={20} />
                    <span className="text-sm font-medium text-zinc-300">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
