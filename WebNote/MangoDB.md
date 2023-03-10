### koa2 framework
- [What is Koa2](#what-is-koa2)
- [Creat a router](#create-a-router)
- [koa2 Handling of http requests](#koa2-handling-of-http-requests)
- [koa2 and middleware](#middleware)
- [onion ring model](#onion-ring-model)
### MongoDB
- [install](#mongodb-installing)
- [mongoDB compass usage](#mongodb-compass)
- [know the console command line to operate](#use-the-console-command-line-to-operate)
### just know nodejs connect mongoDB
###### (mongose is quite more used)
- [MongoDB NPM plug-in](#nodejs-connect-mongodb)
### mongoose
- [schema and model](#schema-and-model)
- [model basic data](#model-basic-data)
- [Improve the route of the message board](#improve-the-route-of-the-message-board)


----

What is a fram (VS vue)
```
Encapsulate native API

Standardize the process and format

Can help focus on code business and improve development efficiency
```
```
The framework is unique, and the library lib can coexist;

The framework focuses on the whole process, and the library focuses on a single function;

Analogy Vue and lodash (JQuery)
```

### what is koa2
```text
koa2 is a nodejs web server framework

Efficiently write web servers through async/await syntax

The middleware mechanism can reasonably split the business code
```
```js
const Koa = require('koa'); // CommonJS Level 2 (http, npm, self-designed)
const app = new Koa();
// ctx context
app.use(async (ctx) => {
    ctx.body = 'hello world';
});

app.listen(3000);
```
### Create a router
```js
const router = require('koa-router')()

router.prefix('/api')

router.get('/list', async (ctx) =>{
    ctx.body = 'api list'
})

router.post('/create', async (ctx) =>{
    ctx.body = 'api create'
})
module.exports = router // sout
```
### koa2 Handling of http requests
```text
Receiving and returning data.

querystring and Request body
ctx, the collection of res and req
```
```js
const router = require('koa-router')()

router.prefix('/api')

router.get('/list', async (ctx) =>{
    const query = ctx.query//reqstring
    ctx.body = 'api list'//res
})
router.post('/create', async (ctx) =>{
    const body = ctx.request.body//reqbody
    ctx.body = 'api create'
})
module.exports = router // sout
```



### middleware
```text
What is middleware: the property block from start to finish;
Split business, clear modules, easy to expand and delete;
```
### Koa b is middleware
```text
app.js:
app.use(...) are middleware
routers are all middleware, restricting url rules
```
![httpinREQRES.jpeg](pics%2FhttpinREQRES.jpeg)
we can add check before routes
### onion ring model
![IMG_0513.jpg](pics%2FIMG_0513.jpg)


### mongoDB installing
1. instiall:

[ brew](https://brew.sh/)
```text
brew --version
```
2. mongoDB
```
brew tap mongodb/brew
brew install mongodb-community
export PATH="/usr/local/opt/mongodb-community/bin:$PATH"
brew install mongodb/brew/mongodb-community-shell
```
brew services start mongodb-community
mongo
brew services stop mongodb-community
brew services restart mongodb-community
```
tanxiaoxu@-MacBook-Pro ~ % brew services start mongodb-community
==> Successfully started `mongodb-community` 
tanxiaoxu@asahis-MacBook-Pro ~ % brew services stop mongodb-community
Stopping `mongodb-community`... (might take a while)
==> Successfully stopped `mongodb-community` 
```
### [mongoDB compass](https://www.mongodb.com/try/download/compass)
1. usage of mongo Compass
![Screenshot 2023-03-10 at 08.37.10.png](pics%2FScreenshot%202023-03-10%20at%2008.37.10.png)
2. Data hierarchical management
```text
add collection user and comments
in collection：
We got two customers, both of which have unique IDs
```
3. CRUD in filter by yourself
![Screenshot 2023-03-10 at 08.49.46.png](pics%2FScreenshot%202023-03-10%20at%2008.49.46.png)

### Use the console command line to operate
start and in mongo
```text
> show dbs
admin   0.000GB
config  0.000GB
demo    0.000GB
local   0.000GB
> use demo
switched to db demo
> show collections
comments
users
> db.users.find()
{ "_id" : ObjectId("640aee34daf79c497ec1e03d"), "unsername" : "peter", "password" : "abc", "age" : "20", "city" : "Dublin" }
{ "_id" : ObjectId("640aeef4daf79c497ec1e040"), "unsername" : "Marry", "password" : "abc", "age" : "25", "city" : "Parise" }
> 
```
[[back to list]](#mongodb)
### nodejs connect mongoDB
connect directly
```js
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'demo';

MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (err, client) => {
    if (err) {
        console.error('连接 MongoDB 失败', err);
        return;
    }
    console.log('连接 MongoDB 成功');

    const db = client.db(dbName);
    const usersCollection = db.collection('user');

    usersCollection.findOne({username: 'Marry'}, (err, user) => {
        if (err) {
            console.error('查询数据失败', err);
            return;
        }
        console.log('该用户数据：', user);
        client.close();
    });
});

```

[[back to list]](#mongodb)

###### why mongoos: Reasons for use, mongodb is too flexible
### schema and model
```
schema specification data format
model specification collection
API that regulates data manipulation
```
```js
// connect db（mongodb server）

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'comment2'

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', true)

// start
mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const conn = mongoose.connection

conn.on('error', err => {
    console.error('mongoose 连接出错', err)
})

module.exports = mongoose
```
[[back to list]](#mongodb)
#### shecma module:
```js
// data module（data format）

const mongoose = require('./db')

// name Schema （specify data format）
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true, // must
        unique: true // unique no duplicate
    },
    password: String,
    age: Number,
    city: String,
    // gender
    gender: {
        type: Number,
        default: 0 // 0 - secret，1 male，2 female
    }
}, {
    timestamps: true // timestamp autofill text update time
})

//  User Model
const User = mongoose.model('user', UserSchema)

//  Comment Schema
const CommentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true // must
    },
    username: String
}, { timestamps: true })

//  Comment Model
const Comment = mongoose.model('comment', CommentSchema)

module.exports = {
    User,
    Comment
}
```
### model basic data
test1
```js
// use module

const { User } = require('./model')

// get async function，and run。for await inside
!(async () => {

// new data- 1
//     const peter = new User({
//         username: 'Peter',
//         password: 'abc',
//         age: 20,
//         city: 'Londom',
//         gender: 1
//     })
//     peter.save()

//
    //new data- 2
//     const lici = await User.create({
//         username: 'lici',
//         password: '123',
//         age: 23,
//         city: 'Dublin'
//     })
//     console.log('lici created', lici)
// })()
//     // // search data, return array
//     const userList = await User.find({ username: 'Peter' })
//     //const usersList = await User.find().sort({ _id: -1 })
//     console.log('userList is: ', userList)
//
//
//     const user = await User.findOne({ username: 'Peter' })
//     console.log('user select', user)
 })()
```
test2
```js
//use model to operate

const { User } = require('./model')

// name async function，run for await
!(async () => {
    // // update
    // const updateResult = await User.findOneAndUpdate(
    //     { username: 'Peter' }, // fliter to change
    //     { age: 30 }, // update content
    //     {
    //         new: true // return data updated
    //     }
    // )
    // console.log('result', updateResult)

    // delete
    // const removeResult = await User.remove({ username: 'lici' })
    // console.log('deleted: ', removeResult)
})()
```
[[back to list]](#mongodb)


### Improve the route of the message board
in model
```js
// data module（data format）

const mongoose = require('./db')

// name userSchema （specify data format）
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true, // must
        unique: true // unique no duplicate
    },
    password: String,
    age: Number,
    city: String,
    // gender
    gender: {
        type: Number,
        default: 0 // 0 - secret，1 male，2 female
    }
}, {
    timestamps: true // timestamp autofill text update time
})

//  UserModel
const User = mongoose.model('user', UserSchema)

//  Comment Schema
const CommentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true // must
    },
    username: String
}, { timestamps: true })

//  Comment Model
const Comment = mongoose.model('comment', CommentSchema)

module.exports = {
    User,
    Comment
}
```
in router
```js
const router = require('koa-router')()
const { Comment } = require('../db/model')
const loginCheck = require('../middlewares/loginCheck')

router.prefix('/api')

// Define the route: Simulate getting the list of message boards
router.get('/list', loginCheck, async (ctx, next) => {
    const query = ctx.query // req function
    console. log('query', query)
    // ctx.body = 'api list' // res function

    // Get a list of databases
    const commentList = await Comment. find(). sort({ _id: -1 })

    ctx. body = {
        errno: 0,
        data: commentList
    }
})

// Define routing: simulate creating a message
router. post('/create', async (ctx) => {
    const body = ctx. request. body // request body
    console. log('body', body)

    // retrieve data
    const { content, username } = body
    // insert into database
    const newComment = await Comment. create({
        content,
        username
    })

    ctx. body = {
        errno: 0,
        message: 'success',
        data: newComment
    }
})

module.exports = router // output
```
[[back to list]](#mongodb)