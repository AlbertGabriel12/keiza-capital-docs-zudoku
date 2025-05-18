module.exports = {
    "/auth/apiKey/enable": {
        "put": {
            "summary": "Enable",
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