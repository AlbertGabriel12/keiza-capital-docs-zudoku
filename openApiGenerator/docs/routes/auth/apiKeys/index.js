const get = require("./get");
const createNewApiKey = require("./createNewApiKey");
const enable = require("./enable");
const disable = require("./disable");

module.exports = {
    ...get,
    ...createNewApiKey,
    ...enable,
    ...disable
}