const create = require("./create");
const _delete = require("./delete");
const get = require("./get");
const update = require("./update");

module.exports = {
    "/auth/webhook": {
        ...get,
        ...create,
        ...update,
    },
    ..._delete
}