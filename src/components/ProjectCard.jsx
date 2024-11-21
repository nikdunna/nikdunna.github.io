import React, { useState } from "react";
import "../index.css";
import classNames from "classnames";

export function ProjectCard({
  title,
  description,
  source,
  reverse,
  react,
  python,
  js,
  html,
  css,
  java,
  inProgress,
}) {
  return (
    <div
      id="project-card"
      className={classNames(
        "flex flex-col md:flex-row mx-5 bg-slate-800 bg-opacity-75 rounded-lg max-w-screen-xl",
        { "animate-pulse": inProgress }
      )}
    >
      {source && !reverse && (
        <video
          id="project"
          controls
          autoPlay
          src={source}
          width="480"
          height="240"
          className="video hidden md:block p-5"
        />
      )}
      <div className="flex flex-col mx-5 p-5">
        <h1 className="text-2xl pb-4 underline font-semibold underline-offset-8 decoration-cyan-700">
          {/* <div className="h-16 w-16 bg-sky-600 animate-pulse rounded-full"></div> */}
          {title}
        </h1>
        <p className="text-md">{description}</p>
        <div className="flex flex-row  size-8 md:size-28 mt-6">
          {react && <img src="react-icon.svg" className="" />}
          {python && <img src="python-icon.svg" className="" />}
          {js && <img src="js-icon.svg" className="" />}
          {html && <img src="html-icon.svg" className="" />}
          {css && <img src="css-icon.svg" className="" />}
          {java && <img src="java-icon.svg" className="" />}
        </div>
      </div>
      {source && reverse && (
        <video
          id="project"
          controls
          autoPlay
          src={source}
          width="480"
          height="240"
          className="video hidden md:block p-5"
        />
      )}
    </div>
  );
}
