## Nodejs Advanced

----
### Handling http with nodejs
- #### [How nodejs listens to http requests](#how-nodejs-listen-http)
- #### [Request (req) and Response (res)](#req-and-res)
- #### [Define router and usage](#define-router)
- #### querystring
- #### res returns data
- #### Get the req body



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
```text

```

[[Back to list]](#handling-http-with-nodejs)


### querystring
[[Back to list]](#handling-http-with-nodejs)

### res returns data
[[Back to list]](#handling-http-with-nodejs)


### Get the req body
[[Back to list]](#handling-http-with-nodejs)


