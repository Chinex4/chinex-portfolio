import classNames from "classnames";

const Title = ({
  title,
  align = "left",
  ignore,
}: {
  title: string;
  align?: "left" | "center";
  ignore?: boolean;
}) => {
  const content = title.toLowerCase();

  return (
    <h2
      className={classNames(
        "relative mt-3 text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-5xl",
        {
          "text-center": align === "center" || ignore,
        }
      )}
    >
      <span className="relative z-10">{title}</span>
      <span
        aria-hidden="true"
        className={classNames(
          "absolute left-0 top-1/2 -z-10 -translate-y-1/2 bg-gradient-to-r from-orange-strong/25 to-white/0 bg-clip-text text-5xl font-extrabold text-transparent blur-[1px] sm:text-7xl",
          {
            "md:left-1/2 md:-translate-x-1/2": align === "center",
            "!left-1/2 !-translate-x-1/2": ignore,
          }
        )}
      >
        {content}
      </span>
    </h2>
  );
};

export default Title;
