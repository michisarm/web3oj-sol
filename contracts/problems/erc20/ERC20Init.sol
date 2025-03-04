// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Init{
    ERC20 public web3ojt;

    function setWeb3ojt(address _web3ojt) public returns (uint256){
        web3ojt = ERC20(_web3ojt);
    }
}