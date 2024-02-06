import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
require('dotenv').config();
const { PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.20',
  networks: {
    pegasus: {
      url: 'https://replicator.pegasus.lightlink.io/rpc/v1',
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

export default config;
