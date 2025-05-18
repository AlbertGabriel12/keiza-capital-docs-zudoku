module.exports = {
    "UnauthorizedError": {
        "type": "object",
        "required": ["message", "statusCode"],
        "properties": {
            "message": {
                "type": "string",
                "example": "Unauthorized"
            },
            "statusCode": {
                "type": "integer",
                "example": 401
            }
        }
    }
}