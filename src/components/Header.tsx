/**
 * TODO:
 * - Links for navigation.
 * - scrolling to secitons.
 * - implement graphics.
 * - Moralis implementation
 */
import React from "react";
import { Link, Events, animateScroll as scroll, scroller } from "react-scroll";
import { BuyButton } from "./BuyButton";
import { ConnectButton } from "./ConnectButton";

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
	function scrollToTop() {
		scroll.scrollToTop();
	}

	return (
		<div>
			<nav className="outline-black justify-between items-center flex flex-row h-24 px-4 py-2">
				<div className="brand font-bold text-4xl uppercase cursor-pointer">
					this is the header
				</div>
				<div className="menu">
					<nav className="flex justify-around items-center px-2 font-light text-lg ">
						{/* NOTE: These will be links. */}
						<div className="px-2">
							<Link
								activeClass="active"
								className="test1"
								to="test1"
								spy={true}
								smooth={true}
								duration={500}
							>
								Link 1
							</Link>
						</div>
						<div className="px-2">link 2</div>
						<ConnectButton />
						<BuyButton />
					</nav>
				</div>
			</nav>
		</div>
	);
};

export default Header;
