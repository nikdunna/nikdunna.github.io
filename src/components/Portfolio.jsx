import { ProjectCard } from "./ProjectCard";
import React from "react";
import "../index.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";

export default function Portfolio() {
  return (
    <div className="flex flex-col mx-auto font-mono mb-15 items-center justify-center text-white space-y-10">
      <ProjectCard
        title={"bored in athens event randomizer"}
        react
        python
        html
        css
        js
        source={"/eventrandomizer.mov"}
        description={
          "inspired by google's 'i'm feeling lucky search', bored in athens event randomizer serves athens, ga residents with a spontaneous event on a requested date."
        }
      />
      <ProjectCard
        title={"algorithm visualizer"}
        python
        source={"/algovisualizer.mov"}
        reverse
        description={
          "allows users to control a visualizer of bubble sort and insertion sort. data set size and simulation tick rate can be adjusted."
        }
      />
      <ProjectCard
        title={"UNDER CONSTRUCTION: rpg from scratch"}
        java
        inProgress
        description={
          "a 2D rpg adventure game full of pixel art inspired by 90s and early 2000's nintendo games. written in java and uses a custom engine. more of a passion project i work on in my free time."
        }
      />
    </div>
  );
}
