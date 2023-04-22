"use client";
import React, { useState } from "react";

const ManageWeb = ({ data }) => {
  const [awards, setAwards] = useState(data.awards);
  const [projects, setProjects] = useState(data.projects);
  const [branch, setBranch] = useState(data.branch);
  const [facebook, setFacebook] = useState(data.links[0].facebook);
  const [instagram, setInstagram] = useState(data.links[1].instagram);
  const [linkdin, setLinkdin] = useState(data.links[2].linkdine);
  console.log(data);
  async function sendPatchRequest(e) {
    e.preventDefault();
    const url = "https://json-server-7syj.onrender.com/page/1";
    const body = {
      awards: awards,
      projects: projects,
      branch: branch,
      links: [
        { id: 1, facebook: facebook },

        { id: 2, instagram: instagram },

        {
          id: 3,
          linkdine: linkdin,
        },
      ],
    };
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      console.log(result); // log the response data to the console
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form className="text-2xl flex flex-col gap-3  h-screen">
      <div className="flex gap-3 ">
        <div className="flex flex-col">
          <label>awards</label>
          <input
            className="border rounded py-2 px-6"
            type="text"
            value={awards}
            onChange={(obj) => setAwards(obj.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>projects</label>
          <input
            className="border rounded py-2 px-6"
            type="text"
            value={projects}
            onChange={(obj) => setProjects(obj.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>branch</label>
          <input
            className="border rounded py-2 px-6"
            type="text"
            value={branch}
            onChange={(obj) => setBranch(obj.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label>facebook link</label>
          <input
            className="border rounded py-2 px-6"
            type="text"
            value={facebook}
            onChange={(obj) => setFacebook(obj.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>instagram link</label>
          <input
            className="border rounded py-2 px-6"
            type="text"
            value={instagram}
            onChange={(obj) => setInstagram(obj.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>linkdine link</label>
          <input
            className="border rounded py-2 px-6"
            type="text"
            value={linkdin}
            onChange={(obj) => setLinkdin(obj.target.value)}
          />
        </div>
      </div>
      <div className="text-center ">
        <button className="mt-5 bg-blue-700 py-2 px" onClick={sendPatchRequest}>
          submit
        </button>
      </div>
    </form>
  );
};

export default ManageWeb;
