module.exports = {
    "/account/forgotPassword/{email}": {
        "post": {
            "summary": "Forgot Password Step 1",
            "deprecated": false,
            "description": "",
            "tags": [
                "Password Recovery"
            ],
            "parameters": [
                {
                    "name": "email",
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
                "201": {
                    "description": "",
                    "headers": {}
                },
                "400": {
                    "description": "",
                    "headers": {}
                }
            },
            "security": []
        }
    },
}