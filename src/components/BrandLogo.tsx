import React from "react";

interface IEventHandler {
	_onClick: React.MouseEventHandler<HTMLDivElement>;
}
export const BrandLogo = ({ _onClick }: IEventHandler) => {
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
		<img src="miner_icon_xs.png" alt="" />
	) : (
		<div
			onClick={_onClick}
			className="cursor-pointer items-center flex px-2 py-2"
		>
			<img className="px-2" src="miner_icon_xs.png" alt="" />
			<p className="brand-name font-bold text-6xl uppercase">Rig</p>
		</div>
	);
};
