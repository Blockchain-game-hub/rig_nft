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
		<div>
			<nav className="fixed w-full bg-black justify-between items-center flex flex-row h-24 px-4 py-2">
				<div
					onClick={() => scroll.scrollToTop()}
					className="brand font-bold tracking-widest text-4xl uppercase cursor-pointer"
				>
					Rig
				</div>
				<div className="menu">
					<nav className="flex justify-around items-center px-2 font-light text-lg ">
						{/* NOTE: These will be links. */}
						<div className="px-2">
							<NavLinkBtn
								_className="test1"
								toName="test1"
							>
								<p>Link 1</p>
							</NavLinkBtn>
						</div>
						<NavLinkBtn
							_className="test2"
							toName="test2"
						>
							<p>Link 2</p>
						</NavLinkBtn>
						<ConnectButton />
					</nav>
				</div>
			</nav>
		</div>
	);
};

export default Header;
