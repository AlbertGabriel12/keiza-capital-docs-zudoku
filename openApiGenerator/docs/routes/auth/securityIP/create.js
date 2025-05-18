module.exports = {
    "post": {
        "summary": "Create",
        "deprecated": false,
        "description": "",
        "tags": [
            "Security IP"
        ],
        "parameters": [],
        "requestBody": {
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "ip": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "ip"
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
            }
        },
        "security": [
            {
                "BearerAuth": []
            }
        ]
    },
}