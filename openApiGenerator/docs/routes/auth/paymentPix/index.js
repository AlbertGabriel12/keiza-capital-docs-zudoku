const getAll = require("./getAll");
const getById = require("./getById");
const create = require("./create");
const sandboxOnlyPay = require("./sandboxOnlyPay");
const getEarnedFeesBalance = require("./earnedSelfFees/getEarnedFeesBalance");
const withdrawEarnedFees = require("./earnedSelfFees/withdrawEarnedFees");
const update = require("./update");

module.exports = {
    "/auth/payment/pix": {
        ...getAll,
        ...create,
    },
    "/auth/payment/pix/{id}": {
        ...update,
        ...getById,
    },
    ...sandboxOnlyPay,
    ...getEarnedFeesBalance,
    ...withdrawEarnedFees
}