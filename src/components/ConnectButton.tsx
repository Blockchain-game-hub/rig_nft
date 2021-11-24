/**
 * TODO:
 * - Implement Moralis API (easy as far as I found.)
 * - Styling
 * - security with wallet?
 * - other w3 stuff we need.
 */
import React, { useEffect } from "react";
import axios from "axios";

interface IUserInfo {
  address: number;
  rigCoins: number;
}

export const ConnectButton = () => {
  const [user, setUser] = React.useState();
  useEffect(() => {
    axios.get("moralisapi").then();
  }, []);

  return (
    <div>
      <button className="bg-indigo-700 hover:bg-indigo-900 px-2 py-2 mx-2 rounded">
        <p>Connect Wallet</p>
      </button>
    </div>
  );
};
