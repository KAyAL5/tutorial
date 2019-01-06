const bcrypt = require('bcrypt');

const userModel = require('../models/user.model');

// Handle create user actions
exports.insert = (req, res) => {
    let user = new userModel();
    user.email = req.body.email;
    user.username = req.body.username;
    user.password = hashPassword(req.body.password);
    user.usertype = req.body.usertype;
    // save the contact and check for errors
    user.save(function (err) {
        if (err) {
            res.status(501).json({
                status: "failed",
                message: err
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'New user created!',
            data: user
        });
    });
};

// Handle get user by id
exports.getUserById = (req, res) => {
    userModel.findById(req.params.userId)
        .then((result) => {
            res.status(200).json({
                status: "success",
                data: result
            });
        })
        .catch((err) => {
            res.status(501).json({
                status: "failed",
                message: err
            });
        });
};

exports.updateUser = (req, res) => {
    userModel.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
        if (err) {
            res.status(501).json({
                status: "failed",
                message: err
            });
        }
        res.status(200).json({
            status: "success",
            message: 'user updated',
            data: user
        });
    });
}

exports.allUsers = (req, res) => {
    console.log(req.headers.authorization);
    userModel.find({}, (err, users) => {
        if (err) {
            res.status(501).json({
                status: "failed",
                message: err
            });
        }
        res.status(200).json({
            status: "success",
            message: 'all users',
            data: users
        });
    });
};

exports.deleteUser = (req, res) => {
    userModel.remove({ _id: req.params.userId }, (err, user) => {
        if (err) {
            res.send(err);
            res.status(501).json({
                status: "failed",
                message: err
            })
        }
        res.status(200).json({
            status: "success",
            message: 'user deleted',
            data: user
        })
    });
};

exports.login = (req, res) => {
    let promise = userModel.findOne({ email: req.body.email }).exec();
    promise.then((user) => {
        if (user) {
            if (isValid(req.body.password, user.password)) {
                user.password = null;
                return res.status(200).json({
                    status: 'success',
                    message: 'valid user',
                    data: user
                });
            } else {
                return res.status(400).json({ message: 'Invalid Credentials' });
            }
        }
        else {
            return res.status(200).json({ message: 'User email is not registered.' })
        }
    });

    promise.catch(function (err) {
        return res.status(501).json({ message: 'Some internal error' });
    })
}

function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

function isValid(hashedpassword, password) {
    return bcrypt.compareSync(hashedpassword, password);
}
