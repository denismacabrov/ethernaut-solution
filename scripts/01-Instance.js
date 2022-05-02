async function main() {

    /*const signers = await ethers.getSigners();
    const [owner] = signers;
    console.log(owner.address);*/

    const contractAddress = "0x9bD2Daf5d86269262bbD0B885fF9DacdcCf4d227";
    const instance = await hre.ethers.getContractAt("IInstance", contractAddress);
    const password = await instance.callStatic.password();
    const tx = await instance.authenticate(password);

    console.log(tx);
};

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });