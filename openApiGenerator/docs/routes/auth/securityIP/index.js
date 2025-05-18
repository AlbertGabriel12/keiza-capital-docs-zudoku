const create = require("./create");
const _delete = require("./delete");
const getAll = require("./getAll");

module.exports = {
    "/auth/securityIP": {
        ...getAll,
        ...create
    },
    ..._delete
}