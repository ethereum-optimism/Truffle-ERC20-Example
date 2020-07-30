# Getting Started with the OVM: Simple ERC20 Token Truffle Project

Hi there! Welcome to our OVM ERC20 Truffle tutorial.

If your preferred smart contract testing framework is Waffle, see our OVM ERC20 Waffle tutorial [here](https://github.com/ethereum-optimism/Waffle-ERC20-Example). If you're interested in writing your first L2-compatible smart contract using Truffle as your smart contract testing framework, then you've come to the right place!  This repo serves as an example for how to test running your contracts in the EVM and OVM and how to uncover OVM bugs for the Optimism team to fix.

### Prerequisites
```
node v11.10.1
```

## Set up

To start out, clone this example repo

```bash
git clone https://github.com/ethereum-optimism/Truffle-ERC20-Example.git
```
Now, enter the repository

```bash
cd Truffle-ERC20-Example
```
Install all dependencies

```bash
yarn install
```
To build contracts and run tests in the EVM:

```bash
yarn all:evm
```
To build contracts and run tests in the OVM:

```bash
yarn all:ovm
```


## OVM vs. EVM Incompatibilities
Our goal is to bring the OVM as close to 100% compatibility with all existing Ethereum projects, but our software is still in an early stage. [This document](https://hackmd.io/elr0znYORiOMSTtfPJVAaA) will maintain the most up to date list of known incompatibilities between the OVM and EVM, along with our plans to fix them. 

## How to uncover OVM bugs
Most likely, all of your tests will be passing in the EVM, but not all of your tests will be passing in the OVM. We recommend isolating issues by running the single failing tests and commenting out parts of contracts until you narrow down what line(s) of Solidity are causing the discrepancy between the EVM and OVM. Then, hop in our [Discord](https://discordapp.com/invite/jrnFEvq) and share the bug you've uncovered and we'll fix it as soon as possible.

## Wasn't that easy?
The OVM provides a fresh new take on layer 2 development: it's identical to layer 1 development.  No hoops, no tricks--the Ethereum you know and love, ready to scale up with L2.  For more info on our progress and what's going on behind the scenes, you can follow us on [Twitter](https://twitter.com/optimismPBC) and [check out our docs](https://docs.optimism.io)!

## Troubleshooting

Example project not working? [Create a Github Issue](https://github.com/ethereum-optimism/Truffle-ERC20-Example/issues), or hop in our [Discord](https://discordapp.com/invite/jrnFEvq) channel and ask away.
