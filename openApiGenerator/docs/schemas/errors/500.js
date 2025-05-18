module.exports = {
    "InternalServerError": {
        "type": "object",
        "required": ["message", "statusCode"],
        "properties": {
            "message": {
                "type": "string",
                "example": "Internal server error"
            },
            "statusCode": {
                "type": "integer",
                "example": 500
            }
        }
    }
}