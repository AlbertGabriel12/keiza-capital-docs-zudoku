module.exports = {
    "put": {
        "summary": "Update",
        "deprecated": false,
        "description": "",
        "tags": [
            "Webhooks"
        ],
        "parameters": [],
        "requestBody": {
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "url": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "url"
                        ]
                    },
                    "examples": {}
                }
            }
        },
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