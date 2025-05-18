const schemas = require("./schemas/index.js")

module.exports = {
    "openapi": "3.0.1",
    "info": {
        "title": "Keiza Capital Docs",
        "description": "",
        "version": "1.0.0"
    },
    "components": {
        "securitySchemes": {
            "BearerAuth": {
                "type": "http",
                "scheme": "bearer",
                "bearerFormat": "JWT"
            },
            "ApiKeyAuth": {
                "type": "apiKey",
                "in": "header",
                "name": "x-api-key"
            }
        },
        ...schemas
    },
    "servers": [
        {
            "url": "https://sandbox.keizacapital.com.br",
            "description": "Sandbox"
        },
        {
            "url": "https://api.keizacapital.com.br",
            "description": "Produção"
        }
    ],
    "tags": [
        {
            "name": "Signup"
        },
        {
            "name": "Login"
        },
        {
            "name": "Password Recovery"
        },
        {
            "name": "Payments Pix"
        },
        {
            "name": "API Key"
        },
        {
            "name": "Security IP"
        },
        {
            "name": "Webhooks"
        }
    ],
}