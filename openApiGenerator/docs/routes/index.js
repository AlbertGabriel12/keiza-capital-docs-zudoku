const signupStep1 = require("./public/signup/signupStep1");
const signupStep2 = require("./public/signup/signupStep2");
const signupStep3 = require("./public/signup/signupStep3");
const loginStep1 = require("./public/login/loginStep1");
const loginStep2 = require("./public/login/loginStep2");
const forgotPasswordStep1 = require("./public/forgotPassword/forgotPasswordStep1");
const forgotPasswordStep2 = require("./public/forgotPassword/forgotPasswordStep2");

const authPaymentPix = require("./auth/paymentPix");
const publicPaymentPixGetByPaymentId = require("./public/paymentPix/getByPaymentId");

const apiKeys = require("./auth/apiKeys");
const securityIP = require("./auth/securityIP");
const webhooks = require("./auth/webhooks");

module.exports = {
    "paths": {
        ...signupStep1,
        ...signupStep2,
        ...signupStep3,
        ...loginStep1,
        ...loginStep2,
        ...forgotPasswordStep1,
        ...forgotPasswordStep2,

        ...authPaymentPix,
        ...publicPaymentPixGetByPaymentId,

        ...apiKeys,
        ...securityIP,
        ...webhooks
    }
}