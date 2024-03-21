import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header className="bg-[#663399]">
    <div className="flex items-baseline grid-cols-2 mx-auto max-w-[640px] p-[1rem]">
      <h1 className="m-0 text-[2rem]">
        <Link
          to="/"
          className="text-white font-bold ml-[0.75rem] mt-0 p-[0.25rem] no-underline text-[2rem] ml-[-0.25rem] hover:bg-white hover:text-[#663399] focus:bg-white focus:text-[#663399] active:bg-white active:text-[#663399]"
        >
          Gatsby Auth
        </Link>
      </h1>
      <nav role="main" className="text-[1.25rem] mt-0 text-right">
        <Link
          to="/"
          className="text-white font-bold ml-[0.75rem] mt-0 p-[0.25rem] no-underline hover:bg-white hover:text-[#663399] focus:bg-white focus:text-[#663399] active:bg-white active:text-[#663399]"
        >
          Home
        </Link>
        <Link
          to="/profile"
          className="text-white font-bold ml-[0.75rem] mt-0 p-[0.25rem] no-underline hover:bg-white hover:text-[#663399] focus:bg-white focus:text-[#663399] active:bg-white active:text-[#663399]"
        >
          Profile
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
