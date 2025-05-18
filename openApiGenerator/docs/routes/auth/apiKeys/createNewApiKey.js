module.exports = {
    "/auth/apiKey/createNewApiKey": {
        "post": {
            "summary": "Create new API KEY",
            "deprecated": false,
            "description": "",
            "tags": [
                "API Key"
            ],
            "parameters": [],
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
                }
            ]
        }
    },
}