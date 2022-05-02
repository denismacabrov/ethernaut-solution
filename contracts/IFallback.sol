//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IFallback {
    function contribute() external payable;
    function getContribution() external view returns (uint);
    function withdraw() external;
}