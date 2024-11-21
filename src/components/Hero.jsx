import React, { useState } from "react";
import "../index.css";
import { Tooltip } from "@mui/material";

export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="m-auto rounded-md p-3 font-semibold">
        <h1 className="text-6xl pb-2">hey, i'm </h1>
        <h1
          className="text-7xl underline underline-offset-[6px] font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-cyan-500 via-slate-500 to-cyan-500 
            animate-text"
        >
          Nikhil Dunna
        </h1>
        <div className="pt-2">
          <p className="">aspiring full stack developer</p>
          <p className="">
            3rd year undergrad in computer science at the {""}
            <span className="">university of georgia</span>
          </p>
        </div>
        <div className="flex flex-row size-64 space-x-8 mt-6">
          <Tooltip className="text-xl" title="LinkedIn" arrow placement="top">
            <a href="https://linkedin.com/in/ndunna">
              <img src="linkedin.svg" alt="" />
            </a>
          </Tooltip>
          <Tooltip title="GitHub" arrow placement="top">
            <a href="https://github.com/nikdunna">
              <img src="github.svg" alt="" />
            </a>
          </Tooltip>
          <Tooltip title="Resume" arrow placement="top">
            <a href="resumefall2024.pdf">
              <img src="resume.svg" alt="" />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
