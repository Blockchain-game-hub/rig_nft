// RigSection - will have image/gif of rig doing its thing.
// NOTE: potentially do some three.js stuff later

import React from "react";

export const RigSection = () => {
  return (
    <div className="w-full h-96 flex-grow overflow-hidden">
      <img className=" scale-auto min-h-full" src="minigif.gif" alt="" />
    </div>
  );
};
