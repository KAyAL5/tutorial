module.exports = {
    "port": 3000,
    "appEndpoint": "http://localhost:3000",
    "apiEndpoint": "http;//localhost:3000",
    "jwt_secret": "$ecret#",
    "jwt_expiration": '3h',
    "environment": "dev",
    "mongoUrl": "mongodb://localhost:27017/tutorial",
    "permissionLevels": {
        "NORMAL_USER": 1,
        "PAID_USER": 4,
        "ADMIN": 2048
    }
};