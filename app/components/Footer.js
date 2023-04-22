"use client";
import Link from "next/link";
import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-black text-white flex justify-between py-5 px-9 mt-16">
      <div>Copywrite and reserved {}</div>
      <div>
        <ul className="flex gap-4">
          <li>About Us</li>
          <li>privaci policy</li>
          <li> trendin list</li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-2">
          <li>follow us on</li>
          <li>
            <Link href={data.links[0].facebook} target="_blank">
              <AiOutlineFacebook className=" bg-blue-600" />{" "}
            </Link>
          </li>
          <li>
            <Link href={data.links[1].instagram} target="_blank">
              <AiOutlineInstagram className="bg-gradient-to-r from-pink-500 to-yellow-500" />{" "}
            </Link>
          </li>

          <li>
            <Link href={data.links[2].linkdine} target="_blank">
              <AiOutlineLinkedin className=" bg-blue-600" />{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
