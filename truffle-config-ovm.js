
const mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
const { ganache } = require('@eth-optimism/plugins/ganache')

module.exports = {
  contracts_build_directory: './build/contracts/ovm',

  networks: {
    test: {
      network_id: 420,
      provider: function() {
        return ganache.provider({
          mnemonic: mnemonic,
          network_id: 420,
        })
      },
    },
  },
  compilers: {
    solc: {
      // Add path to the optimism solc fork
      version: "node_modules/@eth-optimism/solc",
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 1
        },
      }
    }
  }
}
