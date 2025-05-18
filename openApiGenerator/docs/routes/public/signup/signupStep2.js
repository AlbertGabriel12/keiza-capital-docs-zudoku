module.exports = {
    "/account/signup/validateCode": {
        "post": {
            "summary": "Signup Step 2",
            "deprecated": false,
            "description": "",
            "tags": [
                "Signup"
            ],
            "parameters": [],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "email": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                }
                            },
                            "required": [
                                "email",
                                "code"
                            ]
                        },
                        "examples": {}
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Code validated",
                    "headers": {}
                },
                "400": {
                    "description": "Invalid code",
                    "headers": {}
                }
            },
            "security": []
        }
    },
}