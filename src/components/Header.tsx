/**
 * TODO:
 * - Links for navigation.
 * - scrolling to secitons.
 * - implement graphics.
 * - Moralis implementation
 */
import React from "react";
import { Link, Events, animateScroll as scroll, scroller } from "react-scroll";
import { BrandLogo } from "./BrandLogo";
import { ConnectButton } from "./ConnectButton";
import { NavLinkBtn } from "./NavLinkBtn";

const Header = () => {
  // ScrollToTop - scrolls user back to top. NOTE: have this link to a floating element somewhere.

  return (
    <nav className=" w-full bg-black justify-between items-center flex flex-row h-24 px-2 py-2">
      <BrandLogo />

      {/* right nav section  */}
      <nav className=" flex justify-between items-center px-1 py-1 font-light text-lg">
        {/* NOTE: These will be links. */}
        <NavLinkBtn _className="test1 cursor-pointer" _toName="about">
          About
        </NavLinkBtn>
        <NavLinkBtn _className="test2 cursor-pointer" _toName="play">
          Play
        </NavLinkBtn>
        <ConnectButton />
      </nav>
    </nav>
  );
};

export default Header;
