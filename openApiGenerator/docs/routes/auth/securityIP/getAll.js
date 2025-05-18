module.exports = {
    "get": {
        "summary": "Get All",
        "deprecated": false,
        "description": "",
        "tags": [
            "Security IP"
        ],
        "parameters": [],
        "responses": {
            "200": {
                "description": "",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    }
                },
                "headers": {}
            },
            "500": {
                "description": "",
                "headers": {}
            }
        },
        "security": [
            {
                "BearerAuth": []
            }
        ]
    },
}