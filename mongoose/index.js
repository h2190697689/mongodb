const mongoose = require("mongoose");
const url="mongodb://localhost:27017/runoob";

mongoose.connect(url,{useNewUrlParser: true})

mongoose.connection.on("connected",function(){
    console.log('已成功')
})
mongoose.connection.on('error',function () {
    console.log('失败')
})
mongoose.connection.on('disconnected',function () {
    console.log('连接断开')
})

const Schema=mongoose.Schema;
const book=mongoose.model("book",new Schema({name:String,age:Number,content:String}))

// book.create({id:3,name:"c++",age:30,content:"指针+模块化编程"},function(err,doc){
// 	if(err) throw err;
// 	console.log(doc);
// });
book.deleteOne({age:18},function(err,doc){
	if(err) throw err;
	console.log(doc);
})


