var express = require('express');
validators = require('mongoose-validators');
var mongoose=require('../config');
var crypto = require('crypto');
var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
var key = 'password';


var Schema= mongoose.Schema;

var SomeModelSchema =new Schema({
    userName           : {type:String,required:true,validate:validators.isAlpha()},
    userEmail          : {type:String,required:true,unique:true,validate: validators.isEmail()},
    userMobile         : {type:Number,required:true,match:/^[789]\d{9}$/},
    userPassword       : {type:String,required:true}
  });



SomeModelSchema.statics.checksignup=function(request){
console.log("inside signup");
var password=encrypt(request.body.password);
var userdetail=new this({
  userName:request.body.username,
  userEmail:request.body.email,
  userMobile:request.body.mobile,
  userPassword:password
})

    return new Promise(function(resolve, reject) {
    console.log("inside promise");

console.log("hi");
console.log(userdetail);
  userdetail.save(function(err,data){
    if(err){
      console.log(err);
    reject(err);

    }
    else {
      resolve("Successfully registred",data);
    }
  });

console.log("executed");
});

}


SomeModelSchema.statics.checklogin=function(request){

  return new Promise(function(resolve, reject) {
    console.log("inside login");

    userSchema.findOne({userEmail: request.body.email}, function(err, docs) {
      console.log(docs);
      if (docs) {
        console.log(docs.userPassword);

        var password = decrypt(docs.userPassword);
        console.log(password);
        console.log(request.body.password);
        if (request.body.password == password) {
          resolve("login Successfully");
        } else {
          reject("invalid user");
        }
      } else {
        reject("Email_id is not registered with us");
      }
    })
  })

}

var userSchema =mongoose.model('registration',SomeModelSchema);


function encrypt(data){

  console.log("plain text:: ",data);
  var cipher = crypto.createCipher(algorithm, key);
  var encrypted = cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
  console.log("encrypted text::",encrypted);
  return encrypted;

}
function decrypt(data)
{
  var decipher = crypto.createDecipher(algorithm, key);
  var decrypted = decipher.update(data, 'hex', 'utf8') + decipher.final('utf8');
  console.log("decrypted text:",decrypted);
  return decrypted;
}
module.exports=userSchema;
