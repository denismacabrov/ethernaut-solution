//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IInstance {
    function password() external returns (string memory);
    function authenticate(string memory passkey) external;
}