// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyERC20Init is ERC20, Ownable {
    uint public INITIAL_SUPPLY = 2000000000 * 10 ** 18;

    // constructor(string memory name, string memory symbol) ERC20(name, symbol){
    //     _mint(msg.sender, INITIAL_SUPPLY);
    // }

    constructor() ERC20("Web3 Online Judge Token", "WEB3OJT"){
        // _mint(msg.sender, INITIAL_SUPPLY);
    }

    function mint() public onlyOwner {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
