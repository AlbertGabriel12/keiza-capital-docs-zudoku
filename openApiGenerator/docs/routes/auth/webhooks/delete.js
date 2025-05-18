module.exports = {
    "/auth/webhook/delete/{id}": {
        "delete": {
            "summary": "Delete",
            "deprecated": false,
            "description": "",
            "tags": [
                "Webhooks"
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
                "200": {
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
                }
            ]
        }
    }
}