import React from "react";
import Footer from "./Footer";
import Header from "./Header";

// TODO: change to react components after for chilren.
function Layout({ children }: any) {
  return (
    <div className=" bg-gray-800 text-white flex flex-col h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
