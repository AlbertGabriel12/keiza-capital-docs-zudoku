module.exports = {
    "/auth/payment/pix/withdrawEarnedFees": {
        "post": {
            "summary": "Withdraw earned fees",
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
    },
}