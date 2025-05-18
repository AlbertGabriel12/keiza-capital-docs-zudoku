const unauthorizedError = require("./errors/401.js")
const notFound = require("./errors/404.js")
const internalServerError = require("./errors/500.js")

module.exports = {
    "schemas": {
        ...unauthorizedError,
        ...notFound,
        ...internalServerError
    }
}