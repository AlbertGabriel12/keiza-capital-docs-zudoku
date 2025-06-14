const getAll = require("./getAll");
const getById = require("./getById");
const create = require("./create");
const sandboxOnlyPay = require("./sandboxOnlyPay");
const getEarnedFeesBalance = require("./earnedSelfFees/getEarnedFeesBalance");
const withdrawEarnedFees = require("./earnedSelfFees/withdrawEarnedFees");
const getByPaymentId = require("./getByPaymentId");

module.exports = {
    "/auth/payment/pix": {
        ...getAll,
        ...create,
    },
    ...getById,
    ...getByPaymentId,
    ...sandboxOnlyPay,
    ...getEarnedFeesBalance,
    ...withdrawEarnedFees
}