module.exports = {
    "/auth/apiKey/disable": {
        "put": {
            "summary": "Disable",
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