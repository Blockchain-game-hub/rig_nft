// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.8.0;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";
import "./Parts.sol";
//import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";



contract BuidlRig is ERC721 {
    
    constructor (string memory name_, string memory symbol_) public {
    }

    /**function mintRig() public onlyOwner {
        _safeMint();
    }

    function burnPart() public onlyOwner {

    }*/

}


