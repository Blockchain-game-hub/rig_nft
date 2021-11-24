// RigSection - will have image/gif of rig doing its thing.
// NOTE: potentially do some three.js stuff later

import React from "react";
import { CubeComp } from "../components/CubeComp";

export const RigSection = () => {
  return (
    <div className="w-full h-96 flex-grow overflow-hidden ">
      <p className="text-xl">Build a rig and start mining!</p>
      <img
        className=" scale-auto min-h-full from-indigo-800 to-indigo-200 bg-gradient-to-t "
        src="minigif.gif"
        alt=""
      />
      <CubeComp />
    </div>
  );
};
