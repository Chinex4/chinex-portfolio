import { SOCIAL_LINKS } from "@/pages/constant";
import CustomButton from "../button";

const HeroSection = () => {
  return (
    <section id="hero" className="container section-shell flex min-h-screen items-center pt-28">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <div className="hero-content flex flex-col items-start gap-6">
          <div className="animate-fade-in inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 shadow-lg shadow-black/10 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-orange-strong shadow-[0_0_24px_rgba(255,90,31,.9)]" />
            Available for product builds and mobile app work
          </div>
          <div className="space-y-4">
            <h1 className="text-balance text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl">
              <span className="block overflow-hidden pb-1">
                <span className="block animate-title will-change-transform">
                  Chinaza
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="block animate-title will-change-transform [animation-delay:120ms]">
                  Okuefuna
                </span>
              </span>
            </h1>
            <h2 className="animate-fade-in max-w-3xl text-2xl font-semibold text-zinc-200 sm:text-3xl">
              Full-stack mobile engineer building polished web and app experiences.
            </h2>
          </div>
          <p className="animate-fade-in max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I design and engineer scalable digital products across React,
            React Native, Node.js, Laravel, and modern frontend systems with a
            focus on speed, usability, and clean execution.
          </p>
          <div className="animate-fade-in flex flex-col gap-4 sm:flex-row">
            <CustomButton text="View Projects" href="#projects" size="md" rounded />
            <a
              href="#contact"
              className="flex h-12 cursor-pointer items-center justify-center rounded-full border border-white/15 px-8 font-semibold text-zinc-100 transition-all duration-300 hover:border-orange-soft hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-soft"
            >
              Start a Conversation
            </a>
          </div>
          <div className="animate-fade-in mt-3 flex gap-4">
          {SOCIAL_LINKS.map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:border-orange-soft hover:text-orange-soft hover:shadow-lg hover:shadow-orange-strong/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-soft"
              target="_blank"
              rel="noreferrer"
            >
              <item.icon width={20} height={20} />
            </a>
          ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md animate-fade-in lg:max-w-none">
          <div className="absolute -inset-6 animate-pulse-glow rounded-[2rem] bg-orange-strong/20 blur-3xl" />
          <div className="responsive-panel relative overflow-hidden rounded-none p-0 sm:rounded-[2rem] sm:p-6">
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-orange-strong/20 blur-2xl" />
            <div className="relative rounded-none border-t border-white/10 bg-transparent py-6 sm:rounded-[1.5rem] sm:border sm:bg-dark/70 sm:p-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-400">Product engineer</span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  Online
                </span>
              </div>
              <div className="space-y-5">
                {[
                  ["20+", "shipped products"],
                  ["React + React Native", "frontend systems"],
                  ["Node.js + Laravel", "backend systems"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[.035] p-5 transition-all duration-300 hover:border-orange-soft/50 hover:bg-white/[.075]"
                  >
                    <div className="text-2xl font-extrabold text-white">{value}</div>
                    <div className="mt-1 text-sm text-zinc-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
