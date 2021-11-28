// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";
//import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract RigTkn is ERC20 {


    constructor(string memory name_, string memory symbol_) public {
        name = "RigTkn";
        symbol = "RT";
    }


}