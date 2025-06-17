module.exports = {
    "post": {
        "summary": "Create",
        "deprecated": false,
        "description": "",
        "tags": [
            "Payments Pix"
        ],
        "parameters": [],
        "requestBody": {
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "amount": {
                                "type": "number"
                            },
                            "selfEarnedFees": {
                                "type": "number"
                            },
                            "externalId": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "dueDate": {
                                "type": "string",
                                "example": "2025-04-12"
                            },
                            "callbackSuccessUrl": {
                                "type": "string",
                                "example": "https://seudominio.com/sucesso"
                            }
                        },
                        "required": [
                            "amount"
                        ]
                    },
                    "examples": {}
                }
            }
        },
        "responses": {
            "201": {
                "description": "pagamento criado",
                "content": {
                    "application/json": {
                        "example": {
                            "id": "1f70b77b-08bf-486b-a6ac-a18e1781f146",
                            "paymentId": "PkEgXNmbu33FzB5Nxah",
                            "externalId": "string",
                            "checkoutPaymentLink": "https://sandbox-keiza-capital.vercel.app/checkoutPix/1f70b77b-08bf-486b-a6ac-a18e1781f146",
                            "callbackSuccessUrl": "https://seudominio.com/sucesso",
                            "amount": 10,
                            "netAmount": 9,
                            "description": "string",
                            "dueDate": null,
                            "fees": {
                                "selfEarnedFee": null,
                                "infraFee": 1
                            },
                            "payload": "00020126580014br.gov.bcb.pix01366e49949c-424b-4ba7-8734-d4f1fd2dc272520400005303986540510.005802BR5917Brla Digital Ltda6009Sao Paulo6229052500004LPkEgXNmbu33FzB5Nxah6304EF57",
                            "status": "PENDING",
                            "createdAt": "2025-06-16T23:23:46.136Z",
                            "updatedAt": "2025-06-16T23:23:46.136Z"
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
    }
}
;
