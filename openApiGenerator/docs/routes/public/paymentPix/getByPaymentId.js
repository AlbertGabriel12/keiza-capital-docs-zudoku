module.exports = {
    "/payment/pix/{id}": {
        "get": {
            "summary": "Public Get By ID",
            "deprecated": false,
            "description": "",
            "tags": [
                "Payments Pix"
            ],
            "parameters": [
                {
                    "name": "id",
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
                "200": {
                    "description": "",
                    "headers": {}
                },
                "404": {
                    "description": "",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/NotFoundError"
                            }
                        }
                    }
                }
            },
            "security": []
        }
    },
}