import React, {
	Children,
	PropsWithChildren,
	ReactChildren,
	ReactPropTypes,
} from "react";
import { Link } from "react-scroll";

// INames - props for the NavLinkBtn to take in.
interface INames {
	_className: string;
	toName: string;
	children: any;
}

export const NavLinkBtn = ({ _className, toName, children }: INames) => {
	return (
		<div>
			<div className="px-6">
				<Link
					activeClass="active"
					className={_className}
					to={toName}
					spy={true}
					smooth={true}
					duration={500}
				>
					{children}
				</Link>
			</div>
		</div>
	);
};
