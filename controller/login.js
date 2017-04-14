var express = require('express');
var router = express.Router();


login = require("../model/signup");

router.post('/', function(request, response) {

  login.checklogin(request).then(function(success) {
    response.send({
      "status": true,
      "message": success
    });

  }).catch(function(error) {
    response.send({
      "status": false,
      "message": error
    });
  })

})



module.exports = router;
