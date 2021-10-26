# Running Example

## Install Deps

Run `npm i` to install dependencies

## Compile the Contracts

You can use the [solc](https://www.npmjs.com/package/solc) CLI to compile the contracts into their proper location

```
solcjs --abi --base-path . Contract.sol
solcjs --bin --base-path . Contract.sol
```

## Start Blockchain

You can use [ganache-cli](https://www.npmjs.com/package/ganache-cli) to start a local blockchain

## Create a .env

Create a .env with two variables:

```
PRIVATE_KEY=x
JSON_RPC=y
```

Where private key has ether on your local blockchain and JSON_RPC is `http://localhost:8545/` (if you're using ganache-cli defaults).

## Deploy!

Run `node deploy` to start the example
