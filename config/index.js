var mongoose=require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/Mydb';
mongoose.connect(mongoDB);

module.exports=mongoose;

// module.exports=function(){
// console.log("Successfully connected to db");
// }
