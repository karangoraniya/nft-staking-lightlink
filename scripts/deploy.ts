import { ethers } from 'hardhat';

async function main() {
  const lightPunk = await ethers.deployContract('LightPunk', [
    '0xE0B8dk998Fc566bce543E9da6D3893FfE1170B833',
  ]);

  await lightPunk.waitForDeployment();

  console.log(`LightPunk  deployed to ${lightPunk.target}`);
  const PunkLight = await ethers.deployContract('PunkLight', [
    '0xE0B8dk998Fc566bce543E9da6D3893FfE1170B833',
  ]);

  await PunkLight.waitForDeployment();

  console.log(`PunkLight  deployed to ${PunkLight.target}`);

  const staking = await ethers.deployContract('NFTStaking', [
    lightPunk.target,
    PunkLight.target,
  ]);

  await staking.waitForDeployment();

  console.log('Staking deployed to:', staking.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
