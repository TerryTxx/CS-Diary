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
- [nodejs connect mongoDB]


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
