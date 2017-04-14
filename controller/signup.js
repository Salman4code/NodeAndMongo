var express = require('express');
var router = express.Router();


signup = require("../model/signup");
// signupObject = new signup();

router.post('/', function(request, response) {
  // console.log(request.body);
  signup.checksignup(request).then(function(success) {
    console.log(success);
    response.send({
      "status": true,
      "message": success
    });
  }).catch(function(error) {
    console.log(error.message.errmsg);
    response.send({
      "status": false,
      "message": error
    });
  })
})

module.exports = router;
