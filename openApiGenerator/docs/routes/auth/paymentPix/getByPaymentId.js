module.exports = {
    "/auth/payment/pix/{paymentId}": {
        "get": {
            "summary": "Get by payment ID",
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
                    "example": "",
                    "schema": {
                        "type": "string"
                    }
                }
            ],
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