module.exports = {
    "/account/signup/createAccount": {
        "post": {
            "summary": "Signup Step 3",
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
                                "password": {
                                    "type": "string"
                                },
                                "emailToken": {
                                    "type": "integer"
                                },
                                "phone": {
                                    "type": "string"
                                },
                                "accountType": {
                                    "type": "string"
                                },
                                "address": {
                                    "type": "object",
                                    "properties": {
                                        "cep": {
                                            "type": "string"
                                        },
                                        "city": {
                                            "type": "string"
                                        },
                                        "state": {
                                            "type": "string"
                                        },
                                        "street": {
                                            "type": "string"
                                        },
                                        "number": {
                                            "type": "string"
                                        },
                                        "district": {
                                            "type": "string"
                                        },
                                        "complement": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "cep",
                                        "city",
                                        "state",
                                        "street",
                                        "number",
                                        "district"
                                    ]
                                },
                                "fullName": {
                                    "type": "string"
                                },
                                "cpf": {
                                    "type": "string"
                                },
                                "birthDate": {
                                    "type": "string"
                                },
                                "cnpj": {
                                    "type": "string"
                                },
                                "companyName": {
                                    "type": "string"
                                },
                                "companyStartDate": {
                                    "type": "string"
                                },
                                "acceptTerms": {
                                    "type": "boolean"
                                }
                            },
                            "required": [
                                "email",
                                "password",
                                "emailToken",
                                "phone",
                                "accountType",
                                "address",
                                "fullName",
                                "cpf",
                                "birthDate",
                                "acceptTerms"
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