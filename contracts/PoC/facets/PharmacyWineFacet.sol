pragma solidity ^0.8.0;

// import basic store lib
import {LibStore} from "../libraries/LibOthers.sol";
// import to be able to interact with MeatStoreFacet
import {LibMeatStore} from "../libraries/LibOthers.sol";
// import to be able to interact with "enforcecontractowner"
import {LibDiamond} from "../libraries/LibDiamond.sol"; 

contract PharmacyWineFacet {

    // function setButcherName (string memory _newButcherName) external {
    //     LibDiamond.enforceIsContractOwner();
    //     LibMeatStore.setButcherName(_newButcherName);
    // }   
    // function getButcherName() external view returns (string memory _butcherName) {
    //     _butcherName = LibMeatStore.getButcherName();
    // }
    // function buyMeat(uint256 _idx) external {
    //     LibStore.isStoreOfProduct(address(this),_idx);
    //     LibStore.StoreState storage  ds = LibStore.diamondStorage();
    //     ds.salesPerProduct[_idx]++;
    //     ds.itemSalesPerCustomer[msg.sender][_idx]++;
    //     ds.salesPerCustomer[msg.sender]++;
    // }
    // function addMeat(string memory _newMeat) external {
    //     LibDiamond.enforceIsContractOwner();
    //     LibStore.StoreState storage ds = LibStore.diamondStorage();
    //     ds.itemCounter.current();
    //     ds.productName[ds.itemCounter.current()] = _newMeat;
    // }
}