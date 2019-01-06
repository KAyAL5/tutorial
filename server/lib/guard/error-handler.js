function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        // custom application error
        console.log(err);
        return res.status(400).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        console.log('Invalid Token');
        return res.status(401).json({ message: 'Invalid jwt Token' });
    }

    // default to 500 server error
    console.log('default to 500 server error');
    return res.status(500).json({ message: err.message });
}

module.exports = errorHandler;