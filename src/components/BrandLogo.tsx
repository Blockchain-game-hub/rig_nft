import React from "react";

interface IEventHandler {
	_onClick: React.MouseEventHandler<HTMLDivElement>;
}
export const BrandLogo = ({ _onClick }: IEventHandler) => {
	return (
		<div
			onClick={_onClick}
			className="brand-section flex flex-row items-center cursor-pointer"
		>
			<img
				className="transform scale-50 px-0 mx-0"
				src="token_sm_icon.png"
				alt=""
			/>
			<div className="brand-name font-bold text-6xl uppercase text-left px-0">
				Rig
			</div>
		</div>
	);
};
