"use client";
import React from "react";

import { BsFillCheckSquareFill } from "react-icons/bs";

const HomeScreen = ({ data }) => {
  return (
    <div className="">
      <section>
        <div className="container mx-auto items-center">
          <img src="/hero.png" className="w-full" alt="" />
        </div>
        <div className="bg-black text-white flex text-center justify-between text-5xl px-6 py-4 md:px-8 md:py-20 lg:px-20">
          <div>
            <p className="md:text-6xl">{data.awards}</p>
            <p className="text-lg mt-[-15px] md:mt-1">awards</p>
          </div>
          <div>
            <p className="md:text-6xl">{data.projects}</p>
            <p className="text-lg mt-[-15px] md:mt-1">Project complete</p>
          </div>
          <div>
            <p className="md:text-6xl">{data.branch}</p>
            <p className="text-lg mt-[-15px] md:mt-1">branches</p>
          </div>
        </div>
      </section>
      <section className="bg-indigo-950   mt-5 md:mt-10 lg:mt-16 p-8">
        <p className="text-gray-400">our services</p>

        <p className="text-orange-600 text-4xl w-2/5 ">
          Our Services can solve your problem
        </p>
        <div className="grid md:grid-cols-3 gap-3   lg:gap-10 mx-auto rounded mt-2">
          <div className="bg-white py-5 px-3 ">
            <p className="text-2xl">Perfect search engine optimization</p>
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo, possimus.
            </p>
          </div>
          <div className="bg-orange-500 text-white py-5 px-3">
            <p className="text-2xl">Perfect search engine optimization</p>
            <p className="text-gray-200">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo, possimus.
            </p>
          </div>
          <div className="bg-white py-5 px-3">
            <p className="text-2xl">Perfect search engine optimization</p>
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo, possimus.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className=" md:flex md:justify-between  mt-3 p-2 md:p-4 md:w-5/6 md:mx-auto">
          <div className="p-4">
            <img
              src="/groupofpeople.jpeg"
              className="rounded shadow-md h-full"
              alt="the img"
            />
          </div>
          <div className="p-4">
            <p className="text-2xl md:text-5xl ">
              We provide perfect business solution
            </p>
            <ul className="text-sm text-gray-600 md:text-lg mt-2 px-10 ">
              {data.business.map((list, index) => (
                <li key={index} className="flex gap-2 ">
                  <BsFillCheckSquareFill className="text-orange-500" />
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" md:w-5/6 md:mx-auto">
          <p className="text-2xl md:text-5xl">
            live project process for our client
          </p>
          <div className="grid md:grid-cols-2 space-x-3">
            <div className="grid md:grid-cols-2 py-4 gap-3">
              {data.features.map((feature, index) => (
                <div key={index} className="p-2 text-2xl border shadow-md">
                  <p className="text-orange-500">{feature.heading}</p>
                  <p>{feature.details}</p>
                </div>
              ))}
            </div>
            <div className="px-4">
              <img
                src="/uigroup.jpeg"
                alt="the img"
                className="rounded w-full h-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-indigo-950 mt-20 p-8 text-center">
        <div>
          <p className="text-orange-600 text-4xl">
            whant to grow your business just say hi
          </p>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="space-x-3">
            <input
              type="text"
              placeholder="enter your email"
              className="px-4"
            />
            <button className="bg-blue-600 px-2 text-gray-400 border-r-[0.8px] border-b-2 border-orange-500">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
