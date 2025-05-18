module.exports = {
    "/account/forgotPasswordChangePassword/{email}": {
        "post": {
            "summary": "Forgot Password Step 2",
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
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "emailToken": {
                                    "type": "integer"
                                },
                                "newPassword": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "emailToken",
                                "newPassword"
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