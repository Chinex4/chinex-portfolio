import classNames from "classnames";
import { CalendarIcon, FileLinkIcon } from "@/assets/icons";

type Icons = "file-link" | "calendar";

interface IButton {
  text?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  icon?: Icons;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  rounded?: boolean;
  fullWidth?: boolean;
}

const ICONS_MAPPER: Record<
  Icons,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  "file-link": FileLinkIcon,
  calendar: CalendarIcon,
};

const CustomButton: React.FC<IButton> = ({
  type = "button",
  size = "sm",
  text,
  href,
  onClick,
  fullWidth,
  isLoading,
  disabled,
  rounded,
  icon,
}) => {
  const btnClassnames = classNames(
    "group cursor-pointer bg-orange-strong text-white font-semibold flex items-center justify-center gap-3 px-8 shadow-lg shadow-orange-strong/20 hover:bg-orange-soft hover:text-dark hover:shadow-2xl hover:shadow-orange-strong/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-soft select-none transition-all duration-300",
    {
      "h-9 text-base": size === "sm",
      "h-12": size === "md",
      "h-14 text-lg rounded-lg": size === "lg",
      "w-full": fullWidth,
      "rounded-full": rounded,
    }
  );

  const IconNode = icon ? ICONS_MAPPER[icon] : null;
  const isExternalHref = href ? /^https?:\/\//.test(href) : false;

  if (href) {
    return (
      <a
        href={href}
        className={btnClassnames}
        target={isExternalHref ? "_blank" : undefined}
        rel={isExternalHref ? "noreferrer" : undefined}
      >
        {text}
        {IconNode ? <IconNode width={20} height={20} /> : null}
      </a>
    );
  }

  return (
    <button
      type={type === "button" ? "button" : "submit"}
      className={btnClassnames}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {text}
      {IconNode ? <IconNode width={20} height={20} /> : null}
    </button>
  );
};

export default CustomButton;
