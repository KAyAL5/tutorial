let router = require('express').Router();
// Import contact controller
var userCtrl = require('../controllers/user.controller');

router.get('/', function(req,res){
  res.json({
    status: 'User API Its Working',
    message: 'Welcome to RESTful User API!',
  });
});

//localhost:3600/user/register
router.route('/register')
    .post(userCtrl.insert);

//localhost:3600/user/alluser
router.route('/alluser')
    .get(userCtrl.allUsers);

//localhost:3600/user/5c29c8be4a3efd3784ed95dc
router.route('/:userId')
    .get(userCtrl.getUserById) 
    .put(userCtrl.updateUser)
    .delete(userCtrl.deleteUser);

//localhost:3600/user/isValidUser
router.route('/isValidUser')
    .post(userCtrl.login);

    
// Export API routes
module.exports = router;