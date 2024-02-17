import type { FC } from "react";
import IconMarkerHome from "icons/IconMarkerHome";
import "./header.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="mx-auto container max-w-7xl flex h-10 items-center text-sm font-extrabold px-6">
        <IconMarkerHome /><div className="ml-2">BOOKING ROOM</div> 
      </div>
    </header>
  );
};

export default Header;