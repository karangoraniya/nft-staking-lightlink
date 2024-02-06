// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PunkLight is ERC1155, Ownable {


    constructor(address initialOwner)
        ERC1155("https://bafybeidcias3jusl2s3vyhslxdhh4rtn2ptnpepbgnrd5ulkx5tkvoaqgq.ipfs.dweb.link/")
        Ownable(initialOwner)
    {}

    function mint(uint256 id, uint256 amount, bytes memory data)
        public
    {
        _mint(msg.sender, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }
}