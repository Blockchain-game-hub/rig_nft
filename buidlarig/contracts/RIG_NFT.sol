// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.8.0;

//Import Openzeppelin ERC721 Contract
//Import Openzeppelin Ownable Contract


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Parts.sol";



contract RigNft is ERC721, Ownable {

    struct MyRig {
        uint256 hashrate;
        uint8 rig_temp;
        uint256 power_level;
        bytes32 rarity;

    }

    //uint256 public constant MyRig = 0;

    //MyRig internal basic_rig = RigNft(200, 90, 700, common);
    //MyRig internal enthusiast_rig = RigNft(600, 85, 900, rare);
    //MyRig internal pro_rig = RigNft(1000, 80, 1000, unique);    



    constructor(string memory name, string memory symbol) public ERC721("RigNft", "Rig") {
        _mint(msg.sender, MyRig, 8, "");
    }

    /**function mint( uint hashrate, uint power_level, bytes32 rarity) public onlyOwner {
        _safemint(account, id, amount, "");
    }

    function burn (address account, uint256 id, uint256 amount) public {
        require(msg.sender == account);
        _burn(account, id, amount);
    }*/

   

}