"use client";
import { useState, useEffect } from "react";
import HomeScreen from "./components/HomeScreen";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

async function getData() {
  const res = await fetch("https://json-server-7syj.onrender.com/page/1");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      {data && <HomeScreen data={data} />}
      {data && <Footer data={data} />}
    </>
  );
}
