// RigSection - will have image/gif of rig doing its thing.
// NOTE: potentially do some three.js stuff later

import React from "react";
import { CubeComp } from "../components/CubeComp";

export const RigSection = () => {
  return (
    <div className="w-full h-96 flex-grow  ">
      <CubeComp />
    </div>
  );
};
