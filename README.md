### mongodb  (nosql 非关系型数据库)

#### 创建数据库
- use db_name   (没有则创建,有则切换)
- db  (当前数据库)
- show dbs  (显示所有数据库)

#### 删除数据库
- db.dropDatabase()    (切换到要删除的数据库执行)

#### 创建集合  (集合相当于表的概念)
- db.createCollection(collection_name,options)   (collection_name 加双引号)
- show collections
- show tables

#### 删除集合
- db.collection_name.drop()   

#### 插入文档
- db.collection_name.insert({})
- db.collection_name.insertOne({})  (v3.2)
- db.collection_name.insertMany({},{})  (v3.2)

#### 更新文档
- db.collection_name.update({"id":1},{$set:{"name":"mayun"}},options)
- 完整替换不需要$set 关键字
- db.collection_name.updateOne()  (v3.2)
- db.collection_name.updateMany()  (v3.2)
- db.collection_name.replaceOne()  (v3.2)

##### options 为一个对象,内容如下 
- upsert(布尔值),默认false,找不到update记录时，不自动插入新值
- multi(布尔值),默认值false,只更新找到的第一个记录值
- writeConcern,抛出异常的级别

#### 更新文档(save既可以为插入方法,也可以为更新方法)
- db.collection.save({"id":2,"age":22},{writeConcern:<document>})


#### 删除文档
- db.collection_name.remove({"id":1},options)
- options: {justOne:false(默认,删除所有匹配),writeConcern:(异常级别)}
- db.collection_name.remove({"id":1},1) (只删除一条匹配记录，这样书写也可以)
- db.collection_name.deleteMany({})  (v3.2)
- db.collection_name.deleteOne({})   (v3.2)

#### 查询文档
- db.collection_name.find(query,projection)  (projection:返回的键值,1为返回,0为不返回)
- db.collection_name.find().pretty()  (pretty():标准json格式)
- db.collection_name.find({"id":1,"name":"hejiamin"})
- db.collection_name.find({"likes":{$lt:50}})   ($lt: 小于;   $lte: 小于等于;  $gt: 大于,  $gte:大于等于, $ne:不等于)
- db.collection_name.find({$or:[{"id":1},{"id":2}]})   (或者选择)
- db.collection_name.findOne({name:"min"})  (v3.2)

#### 条件操作符
- $gt  $gte  $lt  $lte
- db.collection_name.find(likes:{$lt:200,$gt:100})   (likes大于100,且小于200的数据)

#### $type操作符
- db.collection_name.find({"title":{$type:2}})
- db.collection_name.find({"title":{$type:"string"}})

#### $exists
- db.users.find({name:{$exists:false}})   (该查询只返回那些没有包含条目字段的文档)

#### limit和skip
- db.collection_name.find()

#### 排序sort
- db.collection_name.find().sort({key:1})   (1为升序排列，而-1是用于降序排列)

#### 创建索引
- db.collection_name.createIndex(keys, options)
- db.collection_name.createIndex({"title":1,"name":-1},background: true)  (1为升序创建索引，-1为降序创建索引)

#### 聚合
- db.mycol.aggregate([{$group:{id:"$by_user",num_tutorial:{$sum:1}}}])

#### 数据库复制

#### 数据库分片

#### 数据备份
##### 导入单文件
- mongoimport --db db_name --collection collection_name --drop --file file.json  (--drop把集合清空)

##### 导出整个数据库
- mongodump -h dbhost -d dbname -o dbdirectory

##### 导入整个数据库
- mongorestore -h <hostname><:port> -d dbname <path>
