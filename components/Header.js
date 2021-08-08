import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Header() {
  const [show, handleShow] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  });
  return (
    <header
      className={`fixed w-full z-50 grid grid-cols-3 shadow-md p-5 md:px-10 transition duration-100 ${
        show ? "bg-white" : ""
      }`}
    >
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your Search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2 cursor-pointer shadow-sm">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
