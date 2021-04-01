const mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
// import { ganache } from '@eth-optimism/plugins/ganache'

module.exports = {
  contracts_build_directory: './build/contracts/ovm',

  networks: {
    optimistic_ethereum: {
      network_id: 420,
    }
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

// export { config }