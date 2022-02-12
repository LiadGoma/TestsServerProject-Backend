const awilix = require("awilix");
const config = require("config");
const ExtractReqBodyService = require("../services/extractReqBody");

const container = awilix.createContainer( {injectionMode: awilix.InjectionMode.CLASSIC});

container.register({
    config: awilix.asValue(config),
    extractReqBodyService : awilix.asClass(ExtractReqBodyService).singleton()
});

module.exports = container;