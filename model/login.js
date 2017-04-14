// var express = require('express');
// var mongoose = require('../config');
//
// var login1 = require('../model/signup');
// var crypto = require('crypto');
//
// var login = function() {
//   this.checklogin = function(request) {
//     // var loginDetail=new login({
//     //   email:request.body.email,
//     //   password:request.body.password
//     // });
//     return new Promise(function(resolve, reject) {
//       console.log("inside promise");
//
//       login1.findOne({userEmail: request.body.email}, function(err, docs) {
//
//         console.log(docs);
//         if (docs) {
//           console.log(docs.userPassword);
//
//           var password = decrypt(docs.userPassword);
//           console.log(password);
//           console.log(request.body.password);
//           if (request.body.password == password) {
//             resolve("login Successfully");
//           } else {
//             reject("invalid user");
//           }
//         } else {
//           reject("Email_id is not registered with us");
//         }
//       })
//
//       // login1.findOne({$and: [{userEmail: request.body.email}, {userPassword: request.body.password}]}, function(err, docs) {
//       //   console.log(docs);
//       //   if (docs)
//       //
//       //     resolve("Login Successfully");
//       //   else {
//       //     reject("Unauthorized User");
//       //   }
//       // });
//
//     })
//   }
// }
//
//
// function decrypt(data) {
//   var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
//   var key = 'password';
//   var decipher = crypto.createDecipher(algorithm, key);
//   var decrypted = decipher.update(data, 'hex', 'utf8') + decipher.final('utf8');
//   console.log("decrypted text:", decrypted);
//   return decrypted;
// }
//
//
//
//
// module.exports = login;
