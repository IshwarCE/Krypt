const marketPlaceBoilerPlate = artifacts.require("marketPlaceBoilerPlate");

module.exports = function (deployer) {
  deployer.deploy(marketPlaceBoilerPlate);
};
