module.exports = {
    "/auth/payment/pix/sandboxOnly/pay": {
        "post": {
            "summary": "sandboxOnly Pay",
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
                                "id": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "id"
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