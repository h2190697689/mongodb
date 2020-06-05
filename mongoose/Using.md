# mongoose模块

## 安装
- npm install --save mongoose  

## 使用
- const mongoose=require("mongoose");

## 创建连接
- mongoose.connect("mongodb://localhost/my_database",{useNewUrlParser:true});

## 创建模型
- const Schema=mongoose.Schema;
- const ObjectId=Schema.ObjectId;
- const BlogPost=new Schema({author: ObjectId,title:String,body:String,date:Date})
- const Comment=new Schema({name:{type:String,default:"hahaha"},age:{type:Number,min:18,index:true},bio:{type:String,match:/[a-z]/},date:{type:Date,default:Date.now},buff:Buffer})

## 获取模型
- const myModel=mongoose.model("model_name");

## 设置模型
- const myModel=mongoose.model("model_name",mySchema)

## 创建数据
- myModel.create({name:"min",age:21})

## 查询数据
- myModel.find({name,pwd:"123"},{pwd:0},function(err,doc){})
- myModel.findOne({name,pwd:"123"},{pwd:0},function(err,doc){})

## 更新数据
- myModel.update({from,to},{$set:{read:true}},{multi:true},function(err,raw){})