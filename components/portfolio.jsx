'use client';

import React from "react";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ProjectCard from "./project-card";
import web3Projects from "../data/web3-projects.json";
import web2Projects from "../data/web2-projects.json";
import { useRouter } from "next/navigation";

export default function Portfolio({ setVideo }) {
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      router.push('/');
    }, 500);
  };

  return (
    <div className={`
        absolute top-0 left-0 w-full h-full bg-black/70 z-10 overflow-y-auto pb-14
        ${isClosing ? 'animate-slide-down-fast' : 'animate-slide-up-fast'}
      `}>
      <button
        onClick={handleClose}
        className="fixed top-2 right-4 text-gray-100 z-100 bg-black/50 rounded-full hover:text-pink-600 transition-all duration-300"
      >
        <XCircleIcon className="w-10 h-10" />
      </button>

      <div className="flex w-full justify-center pt-14">
        <h1 className="text-2xl uppercase font-bold text-gray-100">web 3</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-y-auto mx-auto max-w-7xl">
        {web3Projects.map((project, index) => (
          <ProjectCard key={index} project={project} setVideo={setVideo} />
        ))}
      </div>

      <div className="flex w-full justify-center pt-14">
        <h1 className="text-2xl uppercase font-bold text-gray-100">web 2</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-y-auto mx-auto max-w-7xl">
        {web2Projects.map((project, index) => (
          <ProjectCard key={index} project={project} setVideo={setVideo} />
        ))}
      </div>
    </div>
  );
}