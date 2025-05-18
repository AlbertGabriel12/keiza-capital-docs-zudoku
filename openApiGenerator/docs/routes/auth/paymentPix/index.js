const getAll = require("./getAll");
const getById = require("./getById");
const create = require("./create");
const sandboxOnlyPay = require("./sandboxOnlyPay");
const getEarnedFeesBalance = require("./earnedSelfFees/getEarnedFeesBalance");
const withdrawEarnedFees = require("./earnedSelfFees/withdrawEarnedFees");

module.exports = {
    "/auth/payment/pix": {
        ...getAll,
        ...create,
    },
    ...getById,
    ...sandboxOnlyPay,
    ...getEarnedFeesBalance,
    ...withdrawEarnedFees
}