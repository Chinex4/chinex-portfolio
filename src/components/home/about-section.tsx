import CustomLink from "@/components/link";
import Title from "@/components/title";
import { TECH_STACKS_TOOLS } from "@/pages/constant";

const AboutSection = () => {
  return (
    <section id="about" className="container animate-fade-in pt-24">
      <div className="bg-card border p-5 sm:p-14 md:px-16 md:py-14">
        <div className="mb-8 flex flex-col justify-between gap-7 border-b pb-8 sm:gap-10 md:flex-row">
          <Title title="About Me" align="center" />
          <div className="flex flex-col gap-4 text-sm text-zinc-500 sm:text-base md:w-9/12">
            <p>
              My name is <span className="text-zinc-50">Chinaza</span>, a
              full-stack mobile engineer and web developer with hands-on
              experience building scalable, high-quality digital solutions. I
              specialize in React.js And React Native for Frontend finnese and
              Php for solid backend functionality. When it comes to design, I
              wield Css and Tailwind to create responsive Interfaces . I've had
              the privilege of working on some incredible projects, like from
              building a{" "}
              <CustomLink
                href="https://www.zagasm.com/"
                text="Social media Platform"
                target="_blank"
                withIcon
              />{" "}
              to developing a{" "}
              <CustomLink
                href="https://www.bitspotexchange.com/"
                text="Crypto Exchange Platform"
                target="_blank"
                withIcon
              />{" "}
              I have a strong foundation in React Native, TypeScript, and modern
              JavaScript. I’m not just a coder—I’m a problem solver and an avid
              learner.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {TECH_STACKS_TOOLS.map((tech, idx) => (
            <div key={idx}>
              <h3 className="mb-2 text-lg font-bold text-zinc-50 sm:text-xl">
                {tech.title}:
              </h3>
              <div className="flex flex-wrap gap-4">
                {tech.collections.map((item, collectionIdx) => (
                  <div key={collectionIdx} className="flex gap-1">
                    <item.icon width={20} height={20} />
                    <span className="text-sm text-zinc-500 sm:text-base">
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
