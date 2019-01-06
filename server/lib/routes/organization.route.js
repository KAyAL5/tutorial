let router = require('express').Router();
// Import contact controller
var orgCtrl = require('../controllers/organization.controller');

router.get('/', function(req,res){
  res.json({
    status: 'Organization API Its Working',
    message: 'Welcome to RESTful organization API!',
  });
});

//localhost:3000/org/register
router.route('/register')
    .post(orgCtrl.register);

// Export API routes
module.exports = router;