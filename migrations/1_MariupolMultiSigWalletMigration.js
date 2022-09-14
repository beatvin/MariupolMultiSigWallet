var MariupolMultiSigWallet = artifacts.require("MariupolMultiSigWallet");

module.exports = function(deployer) {

  deployer.deploy(MariupolMultiSigWallet,['keyholder1 address','keyholder2 address'],'token contract address','token owner address');
  
};