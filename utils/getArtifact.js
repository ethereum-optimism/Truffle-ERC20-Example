function getArtifact (target, contractName) {
  const buildFolder = (target === true) ? 'build/contracts/ovm' : 'build'
  const artifact = artifacts.require(`./${buildFolder}/${contractName}`)
  return artifact
}

module.exports = { getArtifact }