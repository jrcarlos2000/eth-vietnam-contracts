const { ethers } = require("hardhat");
const hre = require("hardhat");
const {diamondName} = require("../utils/helpers");

async function defaultFixture() {
    await deployments.fixture();
    const cDiamond = await ethers.getContract(`${diamondName}Diamond`);
    const cDiamondCutFacet = await ethers.getContractAt('DiamondCutFacet', cDiamond.address)
    const cDiamondLoupeFacet = await ethers.getContractAt('DiamondLoupeFacet', cDiamond.address)
    const cOwnershipFacet = await ethers.getContractAt('OwnershipFacet', cDiamond.address)

    //following facets are independent
    const cMeatStoreFacet = await ethers.getContract("MeatStoreFacet");
    const cMeatStoreFacetProxy = await ethers.getContractAt("MeatStoreFacet",cDiamond.address);
    const cStoreBaseFacet = await ethers.getContract("StoreBaseFacet");
    const cStoreBaseFacetProxy = await ethers.getContractAt("StoreBaseFacet",cDiamond.address);
    const cBeerWineStoreFacet = await ethers.getContract("BeerWineStoreFacet");
    const cBeerWineStoreFacetProxy = await ethers.getContractAt("BeerWineStoreFacet",cDiamond.address);

    //export accounts for testing
    const signers = await ethers.getSigners();

    const sig1 = signers[0];
    const sig2 = signers[1];
    const sig3 = signers[2];
    return {
        cDiamond,
        cDiamondCutFacet,
        cDiamondLoupeFacet,
        cOwnershipFacet,
        cMeatStoreFacet,
        cMeatStoreFacetProxy,
        cStoreBaseFacet,
        cStoreBaseFacetProxy,
        cBeerWineStoreFacet,
        cBeerWineStoreFacetProxy,
        sig1,
        sig2,
        sig3
    }
}

module.exports = {
    defaultFixture
}