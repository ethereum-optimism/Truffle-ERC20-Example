require('dotenv/config')

const useL2 = (process.env.TARGET === 'OVM')

function getArtifact (target, contractName) {
  const buildFolder = (target === true) ? 'build/contracts/ovm' : 'build'
  const artifact = artifacts.require(`./${buildFolder}/${contractName}`)
  return artifact
}

module.exports = function (deployer, accounts) {
  const tokenName = 'Optipus Coin'
  const tokenSymbol = 'OPT'
  const tokenDecimals = 1

  // deployment steps
  deployer.deploy(getArtifact(useL2, 'ERC20'), 10000, tokenName, tokenDecimals, tokenSymbol)
}