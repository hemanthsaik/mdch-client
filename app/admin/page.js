"use client";
import React from "react";
import ManageWeb from "../components/ManageWeb";

async function getData() {
  const res = await fetch("https://json-server-7syj.onrender.com/page/1");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Dashbord = async () => {
  const data = await getData();
  return (
    <div className="flex font-display">
      <div className="h-screen p-4 w-1/5 shadow">
        <div className="mt-4 p-4 text-center">
          <img src="" alt="" className="rounded-full h-24 w-24 mx-auto" />
          <div>
            <p className="text-4xl">Hemanthsaik</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <ul className="text-3xl">
            <li className="py-3">DashBord</li>
            <li className="py-3">Manage website</li>
            <li className="py-3">Profile & setings</li>
          </ul>
        </div>
      </div>
      <div className="overflow-auto w-full bg-slate-200 p-10">
        <ManageWeb data={data} />
      </div>
    </div>
  );
};

export default Dashbord;
