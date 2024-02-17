import type { FC } from "react";
import "./footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="mx-auto container max-w-7xl flex h-14 items-center text-sm font-extrabold px-6 text-white">
         &copy; 2024 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;