module.exports = {
    "/auth/payment/pix/earnedFeesBalance": {
        "get": {
            "summary": "Get earned fees balance",
            "deprecated": false,
            "description": "",
            "tags": [
                "Payments Pix"
            ],
            "parameters": [],
            "responses": {
                "200": {
                    "description": "",
                    "headers": {}
                },
                "400": {
                    "description": "",
                    "headers": {}
                },
                "500": {
                    "description": "",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InternalServerError"
                            }
                        }
                    }
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