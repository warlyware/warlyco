import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-cyan-200 rounded-lg shadow-md p-4 border-2 hover:border-pink-500 transition-all duration-300 cursor-pointer hover:scale-105">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-purple-700 uppercase">{project.title}</h3>
        {project.years && (
          <p className="text-sm text-purple-700">{project.years}</p>
        )}
      </div>
      <p className="text-sm text-purple-700">{project.description}</p>
      {project.techs && (
        <>
          <div className="flex justify-center w-full">
            <div className="border-t border-purple-700 my-3 w-1/3"></div>
          </div>
          <p className="text-sm text-purple-700">
            <span className="font-bold">Techs:</span>{" "}
            {project.techs.join(", ")}
          </p>
        </>
      )}
    </div>
  );
}