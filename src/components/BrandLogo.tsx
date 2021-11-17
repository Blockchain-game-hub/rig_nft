import React from "react";

interface IEventHandler {
	_onClick: React.MouseEventHandler<HTMLDivElement>;
}
export const BrandLogo = ({ _onClick }: IEventHandler) => {
	return (
		<div
			onClick={_onClick}
			className="cursor-pointer items-center flex"
		>
			<img className="px-2" src="miner_icon_xs.png" alt="" />
			<p className="brand-name font-bold text-6xl uppercase">Rig</p>
		</div>
	);
};
