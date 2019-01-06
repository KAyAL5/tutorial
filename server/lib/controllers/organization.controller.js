const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const orgModel = require('../models/organization.model');
const userModel = require('../models/user.model');

// Register new organization
exports.register = (req, res) => {
    let org = new orgModel();
    org.organization = req.body.acadamy;
    org.contact = req.body.email;
    org.name = req.body.name;
    org.address = req.body.address;

    let user = new userModel();
    user.email = req.body.email;
    user.username = req.body.name;
    user.password = hashPassword(req.body.password);
    user.usertype = 'admin';

    // save the contact and check for errors
    org.save(function (err) {
        if (err) {
            res.status(501).json({
                status: "failed",
                message: err
            });
        }
        user.save(function (err) {
            if (err) {
                res.status(501).json({
                    status: "failed",
                    message: err
                });
            }
            res.status(200).json({
                status: 'success',
                message: 'organization created!',
                data: org
            });
        });
    });
};


function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}
