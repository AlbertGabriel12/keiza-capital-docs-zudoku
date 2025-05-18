module.exports = {
    "/auth/securityIP/{ip}": {
        "delete": {
            "summary": "Delete",
            "deprecated": false,
            "description": "",
            "tags": [
                "Security IP"
            ],
            "parameters": [
                {
                    "name": "ip",
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
                    "description": "Not found",
                    "headers": {}
                }
            },
            "security": [
                {
                    "BearerAuth": []
                }
            ]
        }
    },
}