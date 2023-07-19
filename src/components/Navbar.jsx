import React from "react";
import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <div className="font-anton row-start-1 row-end-2 text-secondary relative flip-in-hor-top z-10">
      <ul className="xl:-rotate-90 sm:-rotate-90 ss:rotate-0 absolute right-44 xl:top-60 xl:right-48 lg:top-8 md:top-6 sm:top-24 ss:right-44 xs:top-0 xs:right-0 xxs:top-0 xxs:right-0 xl:bg-transparent sm:bg-transparent xl:opacity-100 sm:opacity-100 xl:p-0 sm:p-0 xs:bg-black xs:opacity-70 xs:p-2 xxs:bg-black xxs:p-4 xxs:opacity-70">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a
              className="uppercase text-left xl:text-7xl md:text-6xl sm:text-5xl ss:text-5xl xs:text-4xl text-3xl"
              href={`#${nav.id}`}
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
