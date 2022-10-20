const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
    const [myAccount] = await ethers.getSigners();
    
    const MyDivisionCalculator = await ethers.getContractFactory("MyDivisionCalculator");
    const myDivisionCalculator = await MyDivisionCalculator.connect(myAccount).deploy(); 
    await myDivisionCalculator.deployed();

    const instance = "0xDDb3bC147a84269a331Dd581Ab365e582d9b3B7a";
    const DivisionCalculatorProblem = await ethers.getContractFactory("DivisionCalculatorProblem");
    const minusCalculatorProblem = DivisionCalculatorProblem.attach(instance);
    minusCalculatorProblem.connect(myAccount).setDivisionCalculator(myDivisionCalculator.address);
}

async function main() {
    calculatorSol();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
