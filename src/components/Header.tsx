import React from "react";

const Header = () => {
	return (
		<div>
			<nav className="justify-between flex px-2 py-2">
				<div className="brand">this is the header</div>
				<div className="menu">
					<ul className="justify-between px-2">
						<div>link 1</div>
						<div>link 2</div>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
