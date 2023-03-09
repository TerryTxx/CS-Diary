### koa2 framework
- [What is Koa2](#what-is-koa2)
- [Creat a router](#create-a-router)
- [koa2 Handling of http requests](#koa2-handling-of-http-requests)
- [koa2 and middleware](#middleware)
- [onion ring model](#onion-ring-model)
### MangoDB

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
```text

```

```js

```



