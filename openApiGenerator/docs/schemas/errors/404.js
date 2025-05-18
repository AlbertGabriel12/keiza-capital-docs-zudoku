module.exports = {
    "NotFoundError": {
        "type": "object",
        "required": ["message", "error", "statusCode"],
        "properties": {
            "message": {
                "type": "string",
                "example": "string"
            },
            "error": {
                "type": "string",
                "example": "Not Found"
            },
            "statusCode": {
                "type": "integer",
                "example": 404
            }
        }
    }
}