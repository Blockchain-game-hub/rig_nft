// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.8.0;

//Import Openzeppelin ERC721 Contract
//Import Openzeppelin Ownable Contract
//Import Openzeppelin Counters Contract
//Import Openzeppelin ERC721URIStorage Contract
//Import Openzeppelin ERC721Burnable Contract

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//import "@openzeppelin/contracts/access/Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
//import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";



contract Parts is ERC721, Ownable {

        struct DRAM {
        uint64 clock_speed;
        uint8 storage_space; 
    }

        struct PSU {
        uint8 efficiency;
        uint8 wattage;
        uint Bronze;
        uint Silver;
        uint Gold; 
    }

        struct Motherboard {
        uint itx;
        uint matx;
        uint atx;
    }

        struct GPU {
        uint64 gpu_clock;
        uint GDDR6X;
        uint GDDR6;
        uint GDDR5;
        uint8 memory_size;
        uint8 fan_count;
        uint64 wattage;
    }

        struct Drive {
        uint64 write_speed;
        uint64 read_speed;
        uint8 HDD;
        uint8 SSD;
        uint8 NVME; 
    }

        struct CPU {
        uint64 clock_speed;
        uint8 core_count;
        uint8 wattage; 
    }

        struct Cooling {
        uint fan;
        uint hpfan;
        uint aio; 
    }

        struct Case {
        uint small;
        uint medium;
        uint large;
        uint airflow_std;
        uint airflow_good;
        uint airflow_best;
    }

        struct Rarity {
        uint very_common;
        uint common;
        uint somewhat_common;
        uint rare;
        uint unique;    
        }

    DRAM internal eightGB_dram = DRAM(2666, 8);
    DRAM internal sixtnGB_dram = DRAM(3200, 16);

    PSU  internal bronze_psu = PSU(70, 650, 3, 4);
    PSU  internal silver_psu = PSU(80, 750, 2, 2);
    PSU  internal gold_psu = PSU(90, 850, 1, 1);

    Motherboard internal itx_mobo = Motherboard(3, 4);
    Motherboard internal matx_mobo = Motherboard(2, 2);
    Motherboard internal atx_mobo = Motherboard(1, 1);

    GPU internal n1080ti_gpu = GPU(1500, 3, 8, 2, 300, 5);
    GPU internal n3060ti_gpu = GPU(1425, 2, 8, 2, 220, 4);
    GPU internal n3080_gpu = GPU(1525, 1, 10, 2, 320, 1);
    GPU internal a6800_gpu = GPU(1600, 2, 16, 3, 280, 2);
    GPU internal a6900xt_gpu = GPU(1625, 2, 16, 2, 330, 1);

    Drive internal hd_drive = Drive(350, 340, 1, 4);
    Drive internal ssd_drive = Drive(520, 510, 2, 2);
    Drive internal nvme_drive = Drive(5000, 4500, 3, 1);
    
    CPU internal i3_cpu = CPU(2.9, 4, 90, 5);
    CPU internal amd3600x_cpu = CPU(3.2, 6, 65, 4);
    CPU internal i5_cpu = CPU(3.0, 4, 100, 3);
    CPU internal amd5800x_cpu = CPU(3.7, 8, 105, 2);
    CPU internal i7_cpu = CPU(3.6, 8, 125, 1);
    
    Cooling internal stnd_cooling = Cooling(1000, 3, 4);
    Cooling internal hp_cooling = Cooling(2000, 2, 2);
    Cooling internal aio_cooling = Cooling(2200, 1, 1);
    
    Case internal stnd_case = Case(3, 3, 4);
    Case internal airflw_case = Case(2, 2, 2);
    Case internal high_airflw_case = Case(1, 1, 1);


constructor (string memory name_, string memory symbol_) public {
    }
    /**function mint() {

    }*/

    function setTokenURI(uint tokenId, string memory _tokenURI) public {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner or approved"
        );
        _setTokenURI(tokenId, _tokenURI);
    }
}