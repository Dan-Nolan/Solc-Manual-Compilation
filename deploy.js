require("dotenv").config();
const ethers = require("ethers");

const fs = require('fs');

const interface = fs.readFileSync("./Contract_sol_MyContract.abi").toString();
const bytecode = fs.readFileSync("./Contract_sol_MyContract.bin").toString();

const provider = new ethers.providers.JsonRpcProvider(process.env.JSON_RPC);

const pk = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(pk, provider);

const Factory = new ethers.ContractFactory(interface, bytecode, wallet);

(async () => {
  const contract = await Factory.deploy();

  // hash(sender + nonce)
  // awaits the contract to be mined
  await contract.deployed();

  // STORE A SUM storeSum(20,25)
  const tx = await contract.storeSum(
    ethers.BigNumber.from("1231289371289738912731"),
    ethers.BigNumber.from("123908120398129038")
  );

  // await the transaction to be mined
  await tx.wait();

  // lookup the sum eth_call (query) costs no gas
  const sum = await contract.sum();

  console.log(sum.toString());

})();
