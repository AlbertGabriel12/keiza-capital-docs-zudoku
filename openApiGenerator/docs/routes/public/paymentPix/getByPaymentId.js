module.exports = {
    "/payment/pix/{paymentId}": {
        "get": {
            "summary": "Public Get By PaymentID",
            "deprecated": false,
            "description": "",
            "tags": [
                "Payments Pix"
            ],
            "parameters": [
                {
                    "name": "paymentId",
                    "in": "path",
                    "description": "",
                    "required": true,
                    "example": "",
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "description": "",
                    "headers": {}
                },
                "404": {
                    "description": "",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/NotFoundError"
                            }
                        }
                    }
                }
            },
            "security": []
        }
    },
}