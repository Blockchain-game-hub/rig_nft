import React from "react";
import { Link } from "react-router-dom";

export const BrandLogo = () => {
  // state for mobile header size.
  const [isMobile, setIsMobile] = React.useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return isMobile ? (
    <Link to="/">
      <img src="miner_icon_xs.png" alt="" />
    </Link>
  ) : (
    <Link to="/">
      <div className="cursor-pointer items-center flex px-2 py-2">
        <img className="px-2" src="miner_icon_xs.png" alt="" />
        <p className="brand-name font-bold text-6xl uppercase">Rig</p>
      </div>
    </Link>
  );
};
