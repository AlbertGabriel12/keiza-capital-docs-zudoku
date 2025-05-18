module.exports = {
    "/account/concludesLogin/{emailToken}": {
        "post": {
            "summary": "Login Step 2 (Token JWT)",
            "deprecated": false,
            "description": "",
            "tags": [
                "Login"
            ],
            "parameters": [
                {
                    "name": "emailToken",
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
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "tokenJWT": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
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
                        "content-type": {
                            "example": "application/json; charset=utf-8",
                            "schema": {
                                "type": "string"
                            }
                        },
                        "content-length": {
                            "example": "287",
                            "schema": {
                                "type": "integer"
                            }
                        },
                        "Date": {
                            "example": "Sun, 23 Mar 2025 17:29:01 GMT",
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