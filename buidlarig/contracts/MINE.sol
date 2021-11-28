// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;


import "./RIG_TKN.sol";
import "./RIG_NFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//import "@openzeppelin/contracts/token/ERC20/extensions/ERC20URIStorage.sol";
import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
//import "@openzeppelin/contracts/utils/math/Math.sol"; 
import "@openzeppelin/contracts/utils/Arrays.sol";





contract Mine is VRFConsumerBase, Counters{

    enum RigState {Idle, Overheat, Mining}
    RigState state;
    RigState constant defaultstate = RigState.Idle;

    enum RigTemp {Very_Cold, Cold, Normal, Warm, Hot, Very_Hot}
    RigTemp temp;
    RigTemp[2] constant defaulttemp = RigTemp.Normal;

    enum Network {TotalMiners, ActiveMiners, InactiveMiners, IdleMiners}
    Network networkload;
    
    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 rigId = 0;

    mapping(uint => RigNft) public _rigdetails;
    mapping(bytes32 => address) public requestIdtoSender;
    mapping(bytes32 => string) public requestIDtoTokenURI;
    
    event requestedMiner(bytes32 indexed requestId);


    constructor(address _VRFCoordinator, address _LinkToken, bytes32 _keyHash) public {
        VRFConsumer(_VRFCoordinator, _LinkToken);
        RigOwner = msg.sender;

        keyHash = _keyHash;
        fee = 0.1 * 10**18;
    }

    function mine(uint256 hashrate, uint8 rig_temp, uint8 power_level) public onlyOwner{
        _rigdetails[rigId] = RigNft(hashrate, rig_temp, block.timestamp, power_level);
        _safemint(msg.sender, rigId);
        rigId++;

        bytes32 requestId = requestRandomness(keyHash, fee);
        requestIdtoSender[requestId] = msg.sender;
        requestIdtoTokenURI[requestId] = tokenURI;
        emit requestedMiner(requestId);
    }

    function fulfillRandomness(bytes32 requestId, uint randomNumber) internal override {
        address RigOwner = requestIdtoSender[requestId];
        string memory tokenURI = requestIDtoTokenURI[requestId];
        uint256 newItemId = tokenCounter;
        _safemint(RigOwner, newItemId);
        _setTokenURI(newItemId, tokenURI);
        RigTemp Temp = Temp(randomNumber % 6);
    }

    /**function adjustStat(uint256 tokenId) public {
        RigNft storage rig = _rigdetails[tokenId];
        VRFConsumer = room_temp;
        require(rig.rig_temp);
    }

    function checkNetwork() {

    }*/
}
