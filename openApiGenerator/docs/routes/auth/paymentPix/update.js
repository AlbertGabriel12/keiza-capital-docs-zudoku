module.exports = {
    "/auth/payment/pix/{id}": {
        "put": {
            "summary": "Update",
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
                                    "example": "http://www.keizacapital.com.br"
                                },
                                "dueDate": {
                                    "type": "string",
                                    "example": "2025-04-12"
                                }
                            },
                            "required": []
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
}