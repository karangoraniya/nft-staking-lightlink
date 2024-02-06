# NFT-Staking-Smart-Contract

NFT-Staking Smart Contract for 1 month, 6months, and 12 months.

## Vesting

#### Get all Tokens Details

| Duration     | APR Reward % | Reward Tokens |
| :----------- | :----------- | :------------ |
| 01 Month     | `05`         | NPY           |
| 06 Months    | `10`         | NPY           |
| 12 Months    | `15`         | NPY           |
| After 1 Year | `15`         | NPY           |

## Important Step

```bash
create .env file in root directory.
```

```bash
    PRIVATE_KEY="YOUR_PRIVATE_KEY"

```

-Get Your API Key

- [Alchemy](https://alchemy.com/?r=36af7883c4699196)

-Get Your Goerli Faucet

- [Goerli Faucet](https://georlifaucet.com/)

-Get Your Goerli to Peagsus Faucet Bridge

- [Bridge Faucet](https://bridge-test.lightlink.io/bridge?from=ETHEREUM&to=LIGHTLINK&token=ETH)

## NPM Packages

- [Openzeppelin](https://www.npmjs.com/package/@openzeppelin/contracts)
- [Hardhat-Ethers](https://www.npmjs.com/package/hardhat-ethers)
- [Chai](https://www.npmjs.com/package/chai)
- [Ethers](https://www.npmjs.com/package/ethers)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Hardhat-Etherscan](https://www.npmjs.com/package/hardhat-etherscan)

## Tech Stack

- [Node](https://nodejs.org/en/)
- [Hardhat](https://hardhat.org/)
- [Solidity](https://docs.soliditylang.org/)
- [Openzeppelin](https://openzeppelin.com/)

## Run Locally

Clone the project

```bash
  git clone git@github.com:karangorania/nft-staking.git
```

Go to the project directory

```bash
  cd nft-staking
```

Install dependencies

```bash
  npm install
```

Compile

```bash
  npx hardhat compile
```

Test

```bash
  npx hardhat test
```

Deploy on Peagsus LighLink

```bash
  npx hardhat run scripts/deploy.ts --network peagsus
```

Help

```bash
  npx hardhat help
```

## Check on Peagsus Explorer

- [LightPunkToken](https://pegasus.lightlink.io/address/0xe963a8D81c27dE0c7cb1bd6a01A0350b1F1a2E39)
- [PunkLightNFT](https://pegasus.lightlink.io/address/0xFE6B22dA8f348f42B1b12d4Bb900b05303D3407A)
- [NFTStaking](https://pegasus.lightlink.io/address/0x6BC00CA7604e76A5e67E532a44883cc2b6C73659)
