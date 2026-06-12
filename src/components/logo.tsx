import classNames from "classnames";

type LogoProps = {
  compact?: boolean;
  className?: string;
};

const Logo = ({ compact, className }: LogoProps) => {
  return (
    <a
      href="#hero"
      aria-label="Chinaza Okuefuna home"
      className={classNames(
        "group inline-flex items-center gap-3 text-white transition-colors duration-200 hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-soft",
        className
      )}
    >
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-white/12 bg-[#11131a] shadow-lg shadow-black/20 transition-colors duration-300 group-hover:border-orange-soft/60">
        <span className="absolute bottom-0 left-0 top-0 w-1 bg-orange-strong" />
        <span className="absolute inset-[1px] rounded-[0.9rem] border border-white/[.04]" />
        <svg
          viewBox="0 0 44 44"
          className="relative h-8 w-8"
          aria-hidden="true"
          fill="none"
        >
          <path
            d="M27.8 12.4a11.7 11.7 0 1 0 0 19.2"
            stroke="currentColor"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
          <path
            d="M17 13.5h10.7c5 0 8.3 3.7 8.3 8.5s-3.3 8.5-8.3 8.5H17"
            stroke="#ff5a1f"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {!compact ? (
        <span className="hidden leading-none sm:block">
          <span className="block text-sm font-extrabold tracking-tight">
            Chinex
          </span>
          <span className="mt-1 block text-[0.68rem] font-bold uppercase tracking-[0.24em] text-zinc-500">
            Developer
          </span>
        </span>
      ) : null}
    </a>
  );
};

export default Logo;
