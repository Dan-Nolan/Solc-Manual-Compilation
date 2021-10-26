// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

contract MyContract {
    uint public sum;

    function storeSum(uint _x, uint _y) public {
       sum = _x + _y;
    }
}
