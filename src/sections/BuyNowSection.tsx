import React from "react";
import { BuyButton } from "../components/BuyButton";

export const BuyNowSection = () => {
  return (
    <div className="from-indigo-600 bg-gradient-to-tr to-indigo-400 h-96 w-full flex-grow px-2 py-4 flex justify-center items-center">
      <main>
        <p className="font-bold text-2xl p-4">Ready to get started?</p>
        <BuyButton />
      </main>
    </div>
  );
};
