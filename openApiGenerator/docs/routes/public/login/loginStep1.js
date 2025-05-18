module.exports = {
    "/account/login": {
        "post": {
            "summary": "Login Step 1",
            "deprecated": false,
            "description": "",
            "tags": [
                "Login"
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
                                "password": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "email",
                                "password"
                            ]
                        },
                        "examples": {}
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "example",
                    "headers": {
                        "access-control-allow-origin": {
                            "example": "*",
                            "schema": {
                                "type": "string"
                            }
                        },
                        "access-control-allow-credentials": {
                            "example": "true",
                            "schema": {
                                "type": "boolean"
                            }
                        },
                        "content-length": {
                            "example": "0",
                            "schema": {
                                "type": "integer"
                            }
                        },
                        "Date": {
                            "example": "Sun, 23 Mar 2025 17:28:45 GMT",
                            "schema": {
                                "type": "string"
                            }
                        },
                        "Connection": {
                            "example": "keep-alive",
                            "schema": {
                                "type": "string"
                            }
                        },
                        "Keep-Alive": {
                            "example": "timeout=72",
                            "schema": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "security": []
        }
    },
}