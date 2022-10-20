const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
    const [myAccount] = await ethers.getSigners();
    
    const MyMultiplicationCalculator = await ethers.getContractFactory("MyMultiplicationCalculator");
    const myMultiplicationCalculator = await MyMultiplicationCalculator.connect(myAccount).deploy(); 
    await myMultiplicationCalculator.deployed();

    const instance = "0xf4DfD1823a7Bc9F083dD05263DC709a54b728808";
    const MultiplicationCalculatorProblem = await ethers.getContractFactory("MultiplicationCalculatorProblem");
    const multiplicationCalculatorProblem = MultiplicationCalculatorProblem.attach(instance);
    multiplicationCalculatorProblem.connect(myAccount).setMultiplicationCalculator(myMultiplicationCalculator.address);
}

async function main() {
    calculatorSol();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
