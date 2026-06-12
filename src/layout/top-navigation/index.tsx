import classNames from "classnames";
import CustomButton from "@/components/button";
import Logo from "@/components/logo";
import useTopNavigation from "./hooks/useTopNavigation";

import "./nav.scss";

const NAV_ITEMS = [
  { path: "#about", name: "About" },
  { path: "#projects", name: "Projects" },
  { path: "#contact", name: "Contact" },
];

const TopNavigation = () => {
  const { menu, top, margin, setMenu, lenis } = useTopNavigation();

  return (
    <header
      className="glass-panel flex h-16 items-center justify-between rounded-full px-4 shadow-2xl shadow-black/20 transition-all duration-300 md:px-8"
      style={{
        top,
        right: margin,
        left: margin,
      }}
    >
      <Logo />
      <nav
        className={classNames("mobile-nav md:border-l-0", {
          "nav-visible": menu,
        })}
      >
        <span className="mobile-nav__eyebrow">Navigate</span>
        {NAV_ITEMS.map((item, idx) => (
          <a
            key={idx}
            href={item.path}
            className="nav-link h-fit px-5 text-base font-medium text-zinc-300 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-soft"
            onClick={() => {
              setMenu(false);
              lenis.scrollTo(item.path);
            }}
          >
            {item.name}
          </a>
        ))}
        <div className="mt-4 block md:hidden">
          <CustomButton
            href="https://docs.google.com/document/d/1AVOsIOE-4BPcAglB5EQkiMJ-1Y59njIuj29c86CYAMA/edit?usp=sharing"
            text="Résumé"
            icon="file-link"
          />
        </div>
      </nav>
      <div className="hidden md:block">
        <CustomButton
          href="https://docs.google.com/document/d/1AVOsIOE-4BPcAglB5EQkiMJ-1Y59njIuj29c86CYAMA/edit?usp=sharing"
          text="Résumé"
          icon="file-link"
        />
      </div>
      <div
        className={classNames("menu-btn block cursor-pointer md:hidden", { close: menu })}
        onClick={() => setMenu(!menu)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setMenu(!menu);
          }
        }}
        role="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menu}
        tabIndex={0}
      >
        {[1, 2, 3].map((_, idx) => (
          <div key={idx} className="btn-bar bg-zinc-50" />
        ))}
      </div>
    </header>
  );
};

export default TopNavigation;
