// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyERC20Transfer is ERC20, Ownable {
    uint public INITIAL_SUPPLY = 2000000000 * 10 ** 18;

    constructor() ERC20("Web3 Online Judge Token", "WEB3OJT"){}

    function mint() public onlyOwner {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function transferProblem(uint256 _amount) public{
        transfer(0xE0f5206BBD039e7b0592d8918820024e2a7437b9,_amount);
    }
}
