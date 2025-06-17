module.exports = {
    "get": {
        "summary": "Get All",
        "deprecated": false,
        "description": "",
        "tags": [
            "Payments Pix"
        ],
        "parameters": [
            {
                "name": "page",
                "in": "query",
                "description": "",
                "example": "1",
                "required": false,
                "schema": {
                    "type": "integer"
                }
            },
            {
                "name": "limit",
                "in": "query",
                "description": "",
                "example": "10",
                "required": false,
                "schema": {
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 100
                }
            }
        ],
        "responses": {
            "200": {
                "headers": {},
                "description": "Paginated list of payment records",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "currentPage": {
                                    "type": "integer",
                                    "example": 1
                                },
                                "pageSize": {
                                    "type": "integer",
                                    "example": 1
                                },
                                "totalItems": {
                                    "type": "integer",
                                    "example": 1
                                },
                                "totalPages": {
                                    "type": "integer",
                                    "example": 1
                                },
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "type": "string",
                                                "format": "uuid",
                                                "example": "44f7d15c-74af-4b66-9c42-bda90da1cda6"
                                            },
                                            "paymentId": {
                                                "type": "string",
                                                "nullable": true,
                                                "example": "knOcLvzsAm8OB6eBsX0"
                                            },
                                            "externalId": {
                                                "type": "string",
                                                "nullable": true,
                                                "example": "string"
                                            },
                                            "checkoutPaymentLink": {
                                                "type": "string",
                                                "nullable": true,
                                                "example": "https://example.com.br/test"
                                            },
                                            "callbackSuccessUrl": {
                                                "type": "string",
                                                "nullable": true,
                                                "example": "https://example.com.br/success"
                                            },
                                            "amount": {
                                                "type": "number",
                                                "example": 10
                                            },
                                            "netAmount": {
                                                "type": "number",
                                                "example": 9
                                            },
                                            "fees": {
                                                "type": "object",
                                                "properties": {
                                                    "selfEarnedFee": {
                                                        "type": "number",
                                                        "nullable": true,
                                                        "example": null
                                                    },
                                                    "infraFee": {
                                                        "type": "number",
                                                        "example": 1
                                                    }
                                                }
                                            },
                                            "payload": {
                                                "type": "string",
                                                "example": "payload"
                                            },
                                            "description": {
                                                "type": "string",
                                                "example": "example"
                                            },
                                            "dueDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "example": "2025-05-28T22:38:22.000Z"
                                            },
                                            "status": {
                                                "type": "string",
                                                "enum": [
                                                    "PENDING",
                                                    "PAID"
                                                ],
                                                "example": "PENDING"
                                            },
                                            "createdAt": {
                                                "type": "string",
                                                "format": "date-time",
                                                "example": "2025-05-12T22:38:22.795Z"
                                            },
                                            "updatedAt": {
                                                "type": "string",
                                                "format": "date-time",
                                                "example": "2025-05-12T22:38:22.795Z"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "400": {
                "description": "",
                "headers": {}
            }
        },
        "security": [
            {
                "BearerAuth": []
            },
            {
                "ApiKeyAuth": []
            }
        ]
    },
}