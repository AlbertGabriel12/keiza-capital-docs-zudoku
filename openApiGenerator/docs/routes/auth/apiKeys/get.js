module.exports = {
    "/auth/apiKey": {
        "get": {
            "summary": "Get",
            "deprecated": false,
            "description": "",
            "tags": [
                "API Key"
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