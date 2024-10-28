import React from "react";
import "../index.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";

export default function Portfolio() {
  return (
    <div className="flex flex-col mx-auto font-mono mb-40 items-center justify-center text-white">
      <div id="project1-card" className="flex flex-row mx-5 ">
        <video
          id="project1"
          controls
          autoPlay
          src="/eventrandomizer.mov"
          width="640"
          height="360"
          className="video"
        />
        <div className="flex flex-col mx-5 p-5">
          <h1 className="text-3xl pb-8">bored in athens event randomizer</h1>
          <p className="text-lg">
            inspired by google's "i'm feeling lucky search", bored in athens event randomizer serves athens, ga residents with a spontaneous event on a requested date.
          </p>
          <div className="flex flex-row  size-28">
            <img src="react-icon.svg" className="" />
            <img src="python-icon.svg" className="" />
            <img src="js-icon.svg" className="" />
            <img src="html-icon.svg" className="" />
            <img src="css-icon.svg" className="" />
          </div>
        </div>
      </div>
      <div id="project2-card" className="flex flex-row mx-5 my-28">
        <div className="flex flex-col justify-center mx-5 p-5">
          <h1 className="text-3xl pb-8">algorithm visualizer</h1>
          <p className="text-lg">
            allows users to control a visualizer of bubble sort and insertion sort. data set size and simulation tick rate can be adjusted.
          </p>
          <div className="flex flex-row size-28">
            <img src="python-icon.svg"/>
          </div>
        </div>
        <video
          id="project1"
          controls
          autoPlay
          src="/algovisualizer.mov"
          width="640"
          height="360"
          className="video"
        />
      </div>
    </div>
  );
}
