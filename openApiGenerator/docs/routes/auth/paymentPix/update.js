module.exports = {
    "put": {
        "summary": "Update",
        "deprecated": false,
        "description": "",
        "tags": [
            "Payments Pix"
        ],
        "parameters": [
            {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "example": "ed3be0b7-23ce-4c26-8773-28d4cec62472",
                "schema": {
                    "type": "string"
                }
            }
        ],
        "requestBody": {
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "amount": {
                                "type": "number",
                                "example": "10"
                            },
                            "selfEarnedFees": {
                                "type": "number",
                                "example": "1"
                            },
                            "externalId": {
                                "type": "string",
                                "example": "a externalId reference"
                            },
                            "description": {
                                "type": "string",
                                "example": "a description example"
                            },
                            "callbackSuccessUrl": {
                                "type": "string",
                                "example": "https://example.com.br/success"
                            },
                            "dueDate": {
                                "type": "string",
                                "example": "2025-04-12"
                            }
                        }
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