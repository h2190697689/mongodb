# mongodb安装配置
(https://pan.baidu.com/s/1mhPejwO#list/path=%2F)
(https://www.cnblogs.com/jacksoft/p/6910709.html)

## 安装包下载

## 配置(mongodb数据库需要先启动，然后进入命令窗口)

### 文件夹
- 创建data文件夹
- 创建log文件夹，里面建立mongo.log文件  
- 创建etc文件夹，里面建立mongo.conf文件  

### mongo.conf
#数据库路径
dbpath=c:\MongoDB\data\
#日志输出文件路径
logpath=c:\MongoDB\logs\mongodb.log
#错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
logappend=true
#启用日志文件，默认启用
journal=true
#这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
quiet=false
#端口号 默认为27017
port=27017
#指定存储引擎（默认先不加此引擎，如果报错了，大家在加进去）
storageEngine=mmapv1

### 不使用mongo.conf,而直接启动mongodb(需要在mongodb的bin目录下)
- mongod --dbpath c:\MongoDB\data --logpath c:\MongoDB\log\mongo.log --journal

### 通过配置文件启动数据库，同时按照到window服务中
- cd c:\Program Files\MongoDB\Server\3.2\bin>
- mongod --config c:\MongoDB\etc\mongo.conf --install --serviceName "MongoDB"
-  或者,不推荐 mongod --dbpath "E:\MongoDB\data\db" --logpath "E:\MongoDB\data\log\mongo.log" -install -serviceName "MongoDB"

### 如果需要删除服务
- mongod --config c:\MongoDB\etc\mongo.conf --remove

### 环境变量配置(这样就不用每次都进入bin目录执行)
- 打开path
- 输入  ;C:\Program Files\MongoDB\Server\3.2\bin

