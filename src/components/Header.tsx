/**
 * TODO:
 * - Links for navigation.
 * - scrolling to secitons.
 * - implement graphics.
 * - Moralis implementation
 */
import React from "react";
import { Link, Events, animateScroll as scroll, scroller } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { BrandLogo } from "./BrandLogo";
import { BuyButton } from "./BuyButton";
import { ConnectButton } from "./ConnectButton";
import { NavLinkBtn } from "./NavLinkBtn";

const Header = () => {
	React.useEffect(() => {
		// effect here
		Events.scrollEvent.register("begin", () => {
			console.log("begin scrolling");
		});

		return () => {
			Events.scrollEvent.remove("begin");
			Events.scrollEvent.remove("end");
		};
	}, []);

	// // ScrollToTop - scrolls user back to top. NOTE: have this link to a floating element somewhere.

	return (
		<nav className="fixed w-full bg-black justify-between items-center flex flex-row h-24 px-2 py-2">
			<BrandLogo _onClick={() => scroll.scrollToTop()} />

			{/* right nav section  */}
			<nav className="grid grid-cols-3 divide-x-2 items-center px-2 py-2 font-light text-lg">
				{/* NOTE: These will be links. */}
				<NavLinkBtn
					_className="test1 cursor-pointer"
					toName="test1"
				>
					<p>About</p>
				</NavLinkBtn>
				<NavLinkBtn
					_className="test2 cursor-pointer"
					toName="test2"
				>
					<p>Play</p>
				</NavLinkBtn>
				<ConnectButton />
			</nav>
		</nav>
	);
};

export default Header;
