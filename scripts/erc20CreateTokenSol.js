const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
    const [myAccount] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account:", myAccount.address);
    const weiAmount = (await myAccount.getBalance()).toString();
    console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

    const MyERC20Init = await ethers.getContractFactory("MyERC20Init");
    const myERC20Init = await MyERC20Init.connect(myAccount).deploy();
    await myERC20Init.deployed();
    myERC20Init.connect(myAccount).mint();
    console.log("myERC20Init address:", (myERC20Init.address));

    const instance = "0x50C97B549a15D5d2C5156E18001Dd6841D47F435";
    const ERC20Init = await ethers.getContractFactory("ERC20Init");
    const eRC20Init = ERC20Init.attach(instance);
    eRC20Init.connect(myAccount).setWeb3ojt(myERC20Init.address);
}

async function main() {
    calculatorSol();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
