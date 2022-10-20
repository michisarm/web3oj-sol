// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MinusCalculatorProblem.sol";

contract MyMinusCalculator is IMinusCalculator {
    function minus(uint256 input1, uint256 input2) override public pure returns (uint256){
        return input1 - input2;
    }
}
