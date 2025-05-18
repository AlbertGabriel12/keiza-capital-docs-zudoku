module.exports = {
    "/account/signup/sendEmailValidateCode": {
        "post": {
            "summary": "Signup Step 1",
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
                                }
                            },
                            "required": [
                                "email"
                            ]
                        },
                        "examples": {}
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Email code sended",
                    "headers": {}
                },
                "400": {
                    "description": "Email already exists",
                    "headers": {}
                }
            },
            "security": []
        }
    },
}