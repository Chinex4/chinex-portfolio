import { SOCIAL_LINKS } from "@/pages/constant";

const HeroSection = () => {
  return (
    <section id="hero" className="container flex min-h-[60vh] pt-24">
      <div className="hero-content m-auto flex flex-col items-center gap-4 text-center">
        <h1 className="animate-title whitespace-nowrap text-5xl font-extrabold sm:text-6xl md:text-8xl">
          Chinaza Okuefuna
        </h1>
        <h2 className="animate-fade-in text-lg sm:text-2xl">
          Fullstack mobile engineer
        </h2>
        <p className="animate-fade-in max-w-lg text-base font-light text-zinc-500 sm:text-lg">
          I’m a full-stack mobile engineer passionate about building scalable,
          high-performance web and mobile applications.
        </p>
        <div className="mt-8 flex gap-5">
          {SOCIAL_LINKS.map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              className="text-zinc-400 transition duration-300 hover:text-orange-strong"
              target="_blank"
            >
              <item.icon width={25} height={25} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
