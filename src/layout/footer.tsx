const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
        <span className="text-zinc-500">
          Copyright © Chinaza Okuefuna {new Date().getFullYear()}. All rights reserved.
        </span>
        <span className="text-sm font-medium text-zinc-400">
          Built with React, Tailwind, and focused product taste.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
