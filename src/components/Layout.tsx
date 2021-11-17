import React from "react";
import Footer from "./Footer";
import Header from "./Header";

// TODO: change to react components after for chilren.
function Layout({ children }: any) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
