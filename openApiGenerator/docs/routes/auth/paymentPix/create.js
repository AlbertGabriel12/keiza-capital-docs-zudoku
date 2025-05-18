module.exports = {
    "post": {
        "summary": "Create",
        "deprecated": false,
        "description": "",
        "tags": [
            "Payments Pix"
        ],
        "parameters": [],
        "requestBody": {
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "amount": {
                                "type": "number"
                            },
                            "selfEarnedFees": {
                                "type": "number"
                            },
                            "externalId": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "amount"
                        ]
                    },
                    "examples": {}
                }
            }
        },
        "responses": {
            "201": {
                "description": "",
                "headers": {}
            },
            "400": {
                "description": "",
                "headers": {}
            }
        },
        "security": [
            {
                "BearerAuth": []
            },
            {
                "ApiKeyAuth": []
            }
        ]
    }
}