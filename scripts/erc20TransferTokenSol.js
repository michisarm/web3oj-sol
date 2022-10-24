const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
    const [myAccount] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account:", myAccount.address);
    const weiAmount = (await myAccount.getBalance()).toString();
    console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

    const MyERC20Transfer = await ethers.getContractFactory("MyERC20Transfer");
    const myERC20Transfer = await MyERC20Transfer.connect(myAccount).deploy();
    await myERC20Transfer.deployed();
    myERC20Transfer.connect(myAccount).mint();
    console.log("myERC20Transfer address:", (myERC20Transfer.address));

    const instance = "0x4D9c2D034E9e4474c7d7dd5f59bd5bB51D2cb6d6";
    myERC20Transfer.connect(myAccount).transferProblem(20 * 10 ** 18);
    // await myERC20Transfer.transfer(instance, 20 * 10 ** uint(decimals()));



    const ERC20Transfer = await ethers.getContractFactory("ERC20Transfer");
    const eRC20Transfer = ERC20Transfer.attach(instance);
    eRC20Transfer.connect(myAccount).setWeb3ojt(myERC20Transfer.address);
}

async function main() {
    calculatorSol();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
 