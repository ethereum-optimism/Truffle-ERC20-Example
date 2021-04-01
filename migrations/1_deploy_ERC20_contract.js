const { getArtifact } = require('../utils/getArtifact')

const useL2 = (process.env.TARGET === 'OVM')

module.exports = function (deployer, accounts) {
  const tokenName = 'My Optimistic Coin'
  const tokenSymbol = 'OPT'
  const tokenDecimals = 1

  // deployment steps
  deployer.deploy(getArtifact(useL2, 'ERC20'), 10000, tokenName, tokenDecimals, tokenSymbol)
}