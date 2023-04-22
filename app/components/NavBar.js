import React from "react";
import { GoSearch } from "react-icons/go";
import { FiLock } from "react-icons/fi";
import Link from "next/link";

const NavBar = () => {
  const links = [
    { id: 1, name: "Discover", link: "/comingsoon" },
    { id: 2, name: "gallary", link: "/comingsoon" },
    { id: 3, name: "Activity", link: "/comingsoon" },
    { id: 4, name: "Contact", link: "/comingsoon" },
    { id: 5, name: "Marketplace", link: "/comingsoon" },
  ];
  return (
    <div className="container mx-auto items-center flex justify-between pt-6  border-b-2 border-gray-400">
      <div>
        <h1 className="text-4xl font-bold">MDCH</h1>
      </div>
      <div className="flex gap-4 ">
        {links.map(({ id, name, link }) => (
          <div key={id}>
            <Link href={link}>
              <p className="uppercase font-bold text-sm">{name}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <div>
          <GoSearch />
        </div>
        <div>
          <Link href={"/login"}>
            <FiLock />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
