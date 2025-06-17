module.exports = {
    "get": {
        "summary": "Get by id",
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
