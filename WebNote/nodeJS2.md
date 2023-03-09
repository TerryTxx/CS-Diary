## Nodejs Advanced

----
### Handling http with nodejs
- #### [How nodejs listens to http requests](#how-nodejs-listen-http)
- #### [Request (req) and Response (res)](#req-and-res)
- #### [Define router and usage](#define-router)
- #### [querystring and usage](#querystring)
- ####  res returns data***
- 1. [return json](#return-json)
- 2. [return html](#return-html)
- #### [Get the req body***](#get-the-req-body)



### How nodejs listen http
```text
nodejs starts webf service
Use the httpm module to start the service
Local IP127.0.0.1
The domain name of this machine localhost
```
write in index.js in test2
```javascript
const http = require('http');

const server = http.createServer(() => {
    console.log('Server recive http ');
    //no response return
});

server.listen(3000);//listen the http now
console.log('http is listened now, http://localhost:3000')
```
terminal shows : 
```text
tanxiaoxu@asahis-MacBook-Pro test2 % node index.js
http is listened now, http://localhost:3000
Server running at http://localhost:3000/
^C
```
npm init
```text
tanxiaoxu@asahis-MacBook-Pro test2 % npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (test2) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/tanxiaoxu/WebstormProjects/WEB230/test2/package.json:

{
  "name": "test2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) 
tanxiaoxu@asahis-MacBook-Pro test2 % 
```
install nodemon
```text
tanxiaoxu@asahis-MacBook-Pro test2 % npm i nodemon --save-dev

added 33 packages, and audited 34 packages in 849ms

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
check your json dependencies
```json
{
  "name": "test2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js"
    //    add dev here "
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.21"
  }
}
```
then in terminal
```text
tanxiaoxu@asahis-MacBook-Pro test2 % npm run dev

> test2@1.0.0 dev
> nodemon index.js

[nodemon] 2.0.21
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
http is listened now, http://localhost:3000
^C
```
[[Back to list]](#handling-http-with-nodejs)

### req and res
rewrite the index.js in test2(res)
```javascript
const http = require('http');

const server = http.createServer((req,res) => {//add req and res
    //console.log('Server recive http ');
    res.end('get the signal')//response return string to front
});

server.listen(3000);//listen the http now
console.log('http is listened now, http://localhost:3000')
```
```text
tanxiaoxu@asahis-MacBook-Pro test2 % npm run dev

> test2@1.0.0 dev
> nodemon index.js

[nodemon] 2.0.21
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
http is listened now, http://localhost:3000
```
And we have get the signal in browser,
then we add req also, we have a very simple server
```javascript
const http = require('http');

const server = http.createServer((req,res) => {//add req and res
    //console.log('Server recive http ');
    const url = req.url//http://localhose:3000/index.html
    console.log('url is:', url)// /index.html
    res.end('get the signal')//response return string to front,could be json also
});

server.listen(3000);//listen the http now
console.log('http is listened now, http://localhost:3000')
```
```text
tanxiaoxu@asahis-MacBook-Pro test2 % npm run dev

> test2@1.0.0 dev
> nodemon index.js

[nodemon] 2.0.21
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
http is listened now, http://localhost:3000
url is: /
url is: /favicon.ico
```

[[Back to list]](#handling-http-with-nodejs)


### Define router
#### use method and url to define
1. define a get-router
```js
const http = require('http');

const server = http.createServer((req,res) => {//add req and res
        const url = req.url
        const method = req.method
    //3. we donot need ?a=100
        const path = url.split('?')[0]  // /api/list
    // 1. console.log('url is ',url)
    //   console.log('method is ', method)
   // 2. if (url === '/api/list' && method ==='GET') {//url is  /api/list?a=100
     if (path === '/api/list' && method ==='GET') {//url is  /api/list?a=100
        res.end('this is list router')
    }else{
     res.end('404')}
})

server.listen(3000);//listen the http now
console.log('http is listened now, http://localhost:3000')
```
2. define a post-router
###### we can test post by postman
```js
const http = require('http');

const server = http.createServer((req,res) => {//add req and res
        const url = req.url
        const method = req.method
    //we donot need ?a=100
        const path = url.split('?')[0]  // /api/list
    //  console.log('url is ',url)
    // console.log('method is ', method)
   // if (url === '/api/list' && method ==='GET') {//url is  /api/list?a=100
     if (path === '/api/list' && method ==='GET') {//url is  /api/list?a=100
        res.end('this is list router')
    }

//1. the method is get, so postman needed to test post
    // console.log('method is ', method)
     if(path === '/api/create' && method == 'POST'){
         res.end('this is create router')
     }


     res.end('404')
})

server.listen(3000);//listen the http now
console.log('http is listened now, http://localhost:3000')
```

[[Back to list]](#handling-http-with-nodejs)


### querystring
what is querystring
```text
in url,after ? are querystring, also called url parameters;
& split, in the form of key=value, can continue to expand;
```
```javascript
const http = require('http');
const querystring = require('querystring')

const server = http.createServer((req,res) => {//add req and res
    const url = req.url
    const method = req.method
    //we donot need ?a=100
    const path = url.split('?')[0]  // /api/list
    const queryStr = url.split('?')[1]  // return querystring
    //  console.log('url is ',url)
    // console.log('method is ', method)


    // check querystring
    //const query = {}
    // if(queryStr){
    //     queryStr.split('&').forEach(item => {
    //         //item like a=100
    //         const key = item.split('=')[0]  //'a'
    //         const val = item.split('=')[1]  //'100
    //         query[key] = val  //{a:'100', b :'200'}
    //     })
    // }
    const query = querystring.parse(queryStr||'')

    console.log('query is ', query)
    // if (url === '/api/list' && method ==='GET') {//url is  /api/list?a=100
    if (path === '/api/list' && method ==='GET') {//url is  /api/list?a=100]
        if(query.filterType === '1'){
            res.end('this is a list router, all')
        }
        if(query.filterType === '2'){
            res.end('this is a list router, only mine')
        }
        //   res.end('this is list router')
    }
//1. the method is get, so postman needed to test post
    // console.log('method is ', method)
    else if(path === '/api/create' && method == 'POST') {
        res.end('this is create router')
    }else {
        res.end('404')
    }
})

server.listen(3000);//listen the http now
console.log('http is listened now, http://localhost:3000')
```
```text
http is listened now, http://localhost:3000
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
http is listened now, http://localhost:3000
query is  { a: '100', b: '200' }
query is  {}
```
URL's hash could not return to server

```text
structured and unstructured

Commonly used structured
Strings are unstructured
Objects and arrays are structured
```

[[Back to list]](#handling-http-with-nodejs)


### return json
```js
const http = require('http');
const querystring = require('querystring')

const server = http.createServer((req,res) => {
    const url = req.url
    const method = req.method
    const queryStr = url.split('?')[1]
    const path = url.split('?')[0]
    const query = querystring.parse(queryStr||'')

    if (path === '/api/list' && method ==='GET') {
        const result = {
            errno: 0,
            data: [
                {user: 'terry', content: 'board1'},
                {user: 'jasmine', content: 'board2'}
            ]
        }
        res.writeHead(200, {'Content-type': 'application/json'})
        res.write(JSON.stringify(result))
        res.end()
        return;
    }

    if (path === '/api/create' && method === 'POST') {
        const result = {
            errno: 0,
            message: 'working'
        }
        res.writeHead(200, {'Content-type': 'application/json'})
        res.write(JSON.stringify(result))
        res.end()
        return
    }

    res.writeHead(404, {'Content-type': 'text/plain'})
    res.end('404 Not Found')

})

server.listen(3000);//listen the http now
console.log('http is listened now, http://localhost:3000')
```
### return html (use for pics,html,css)
```js
const http = require('http');
const querystring = require('querystring')

const server = http.createServer((req,res) => {
    const url = req.url
    const method = req.method
    const queryStr = url.split('?')[1]
    const path = url.split('?')[0]
    const query = querystring.parse(queryStr||'')

    // if (path === '/api/list' && method ==='GET') {
    //     const result = {
    //         errno: 0,
    //         data: [
    //             {user: 'terry', content: 'board1'},
    //             {user: 'jasmine', content: 'board2'}
    //         ]
    //     }
    //     res.writeHead(200, {'Content-type': 'application/json'})
    //     res.write(JSON.stringify(result))
    //     res.end()
    //     return;
    // }
    //
    // if (path === '/api/create' && method === 'POST') {
    //     const result = {
    //         errno: 0,
    //         message: 'working'
    //     }
    //     res.writeHead(200, {'Content-type': 'application/json'})
    //     res.write(JSON.stringify(result))
    //     res.end()
    //     return
    // }

    // res.writeHead(404, {'Content-type': 'text/plain'})
    // res.end('404 Not Found')
    res.writeHead(404, { 'Content-type': 'text/html' })
    res.end(`
        <!DOCTYPE html>
        <html>
           <head>
            <tittle>404</tittle>
          </head>
          <body>
            <h1>404 NOT FOUND</h1>
          </body>
        </html>
    `)

})

server.listen(3000);//listen the http now
console.log('http is listened now, http://localhost:3000')
```

[[Back to list]](#handling-http-with-nodejs)


### Get the req body
- stream
```text
stream:  
  back: res.end(...),will return as stream
  front: browser will recognize the stream, and provide the file continuously
```

- how to get: 
```js
const http = require('http');
const querystring = require('querystring')

const server = http.createServer((req,res) => {
    const url = req.url
    const method = req.method
    const queryStr = url.split('?')[1]
    const path = url.split('?')[0]
    const query = querystring.parse(queryStr||'')

    if (path === '/api/list' && method ==='GET') {
        const result = {
            errno: 0,
            data: [
                {user: 'terry', content: 'board1'},
                {user: 'jasmine', content: 'board2'}
            ]
        }
        res.writeHead(200, {'Content-type': 'application/json'})
        res.write(JSON.stringify(result))
        res.end()
        return;
    }

    if (path === '/api/create' && method === 'POST') {
        const reqType = req.headers['content-type']
        let bodyStr = ''
        req.on('data', chunk => {//server to recognize stream
            //chunk is stream's signal by chunck
            bodyStr = bodyStr + chunk.toString()
        })
        req.on('end', () => {//recognize the stream is over
            if(reqType === 'application/json'){
                const body  = JSON.parse(bodyStr)
                console.log('body is', body)
            }
            console.log('bodyStr is', bodyStr)
            res.end('stream over')
        })

        //
        //     const result = {
        //         errno: 0,
        //         message: 'working'
        //     }
        //     res.writeHead(200, {'Content-type': 'application/json'})
        //     res.write(JSON.stringify(result))
        //     res.end()
        //     return
        // }

        // res.writeHead(404, {'Content-type': 'text/plain'})
        // res.end('404 Not Found')
        res.writeHead(404, {'Content-type': 'text/html'})
        res.end(`
        <!DOCTYPE html>
        <html>
           <head>
            <tittle>404</tittle>
          </head>
          <body>
            <h1>404 NOT FOUND</h1>
          </body>
        </html>
    `)
    }
server.listen(3000);//listen the http now
console.log('http is listened now, http://localhost:3000')})
```

[[Back to list]](#handling-http-with-nodejs)


