'use client';

import React from "react";

export default function ProjectCard({ project, setIsVideoOpen, setVideo }) {
  const openInVideoModal = (video) => {
    setVideo(video);
  };

  return (
    <div className="bg-cyan-200 rounded-lg shadow-md p-4 border-2 border-pink-400 text-purple-700">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-lg font-bold text-purple-700 uppercase">{project.title}</h3>
        {project.years && (
          <p className="text-purple-700">{project.years}</p>
        )}
      </div>
      <div className="flex justify-between items-center w-full text-sm">
        <p className="mb-2 italic">
          {project.buildInfo}
        </p>
        {project.repoLinks && (
          <div className="flex gap-2 mb-2">
            <>
              {Object.entries(project.repoLinks).map(([key, value]) => (
                <a href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={key}
                  className="hover:text-pink-500 transition-all duration-300 underline"
                >
                  {key}
                </a>
              ))}
            </>
          </div>
        )}
        {project.links && (
          <div className="flex gap-2 mb-2">
            <>
              {Object.entries(project.links).map(([key, value]) => (
                <a href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={key}
                  className="hover:text-pink-500 transition-all duration-300 underline"
                >
                  {key}
                </a>
              ))}
            </>
          </div>
        )}
      </div>
      {project.videos && (
        <div className="flex gap-2 mb-2 text-sm">
          <span className="font-bold">Videos:</span>
          {project.videos.map((video) => (
            <button key={video.title}
              onClick={() => {
                openInVideoModal(video);
              }}
              className="hover:text-pink-500 transition-all duration-300 underline"
            >
              {video.title}
            </button>
          ))}
        </div>
      )}
      <p className="text-sm mb-2">{project.description}</p>
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