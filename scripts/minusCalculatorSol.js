const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
    const [myAccount] = await ethers.getSigners();
    
    const MyMinusCalculator = await ethers.getContractFactory("MyMinusCalculator");
    const myMinusCalculator = await MyMinusCalculator.connect(myAccount).deploy(); 
    await myMinusCalculator.deployed();

    const instance = "0x0D1E447653AF73C878ecAE2bCDD147FBb1F4185e";
    const MinusCalculatorProblem = await ethers.getContractFactory("MinusCalculatorProblem");
    const minusCalculatorProblem = MinusCalculatorProblem.attach(instance);
    minusCalculatorProblem.connect(myAccount).setMinusCalculator(myMinusCalculator.address);
}

async function main() {
    calculatorSol();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
