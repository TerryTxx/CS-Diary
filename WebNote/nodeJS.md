## Nodejs General

----
### Basic-
#### What is Nodejs 
###### js runtime powered by Chrome V8
#### Installing
- [download and install Nodejs](#download-and-using-nodejs-path)
- [ Demo to set a server](#demo-to-set-a-server-)
- [use npm](#use-npm)
- [lodash](#lodash-)
#### commonjs
- #### [commonjs for module](#commonjs-usage)
- #### [three level of commonjs](#three-levels-of-commonjs)
- #### [Differences in commonjs and ES6module](#commonjs-and-es6modules)
#### [Nodejs debug](#debug)
#### [The difference between nodejs and js](#the-difference-nodejs-js)



---

### Download and using Nodejs path
```text
----check your versio
  tanxiaoxu@asahis-MacBook-Pro ~ % node -v
        v18.14.2
  tanxiaoxu@asahis-MacBook-Pro ~ % npm -v
        9.5.0
  tanxiaoxu@asahis-MacBook-Pro ~ % node
  Welcome to Node.js v18.14.2.
        Type ".help" for more information.
        > let a = 100;
        undefined
        > let b = 200;
        undefined
        > function fn(a,b){return a+b}
        undefined
        > fn(5,10)
        15
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
```
### Demo to set a server:
```text
    Last login: Mon Mar  6 23:01:32 on ttys000
    tanxiaoxu@asahis-MacBook-Pro ~ % ls
    Applications		Movies			TXX
    Desktop			Music			WebstormProjects
    Documents		Pictures		iCloud Drive (Archive)
    Downloads		Public			vedio
    Library			Sites
    tanxiaoxu@asahis-MacBook-Pro ~ % mkdir TXX
    mkdir: TXX: File exists
    tanxiaoxu@asahis-MacBook-Pro ~ % cd TXX
    tanxiaoxu@asahis-MacBook-Pro TXX % mkdir demo-code
    tanxiaoxu@asahis-MacBook-Pro TXX % cd demo-code
    tanxiaoxu@asahis-MacBook-Pro demo-code % mkdir test1
    tanxiaoxu@asahis-MacBook-Pro demo-code % cd test1
```
![add in file.png](pics%2Fadd%20in%20file.png)
```js
    const http = require('http')
    
    //req==request  res==response
    const server = http.creatServer((req,res)=>{
    const url = req.url//'/index.html?a=100'
    const path = url.split('?')[0]//'/index.html'
    res.end(path)
    })
    
    server.listen(3000)
```
```text
tanxiaoxu@asahis-MacBook-Pro test1 % ls
index.js
tanxiaoxu@asahis-MacBook-Pro test1 % node index.js
```
use brower access to localhost:3000:

![show in screen.png](pics%2Fshow%20in%20screen.png)
![show in s2.png](pics%2Fshow%20in%20s2.png)

[[Back to list]](#basic-)
### use npm
```text
tanxiaoxu@asahis-MacBook-Pro test1 % npm init 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (test1) 
version: (1.0.0) 
description: test1 code demo
entry point: (test1.js) 
test command: 
git repository: 
keywords: 
author: TerryTan
license: (ISC) 
About to write to /Users/tanxiaoxu/TXX/demo-code/test1/package.json:

{
  "name": "test1",     (the name you want to use can search in npm web in case of conflict)
  "version": "1.0.0",
  "description": "test1 code demo",
  "main": "test1.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "TerryTan",
  "license": "ISC"
}

Is this OK? (yes) 
tanxiaoxu@asahis-MacBook-Pro test1 % 
```
[[Back to list]](#basic-)
### lodash:
```text
tanxiaoxu@asahis-MacBook-Pro test1 % npm i lodash --save

up to date, audited 2 packages in 412ms

found 0 vulnerabilities
tanxiaoxu@asahis-MacBook-Pro test1 % 
```
```javascript
{
  "name": "test1-icon-demo01",
  "version": "1.0.0",
  "description": "test1 code demo",
  "main": "test1.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "TerryTan",
  "license": "ISC",
  "dependencies": {//will have
    "lodash": "^4.17.21"
  }
}
```
```js
    const _ = require('lodash')//commonjs
    
    const arr = [1,1,2]
    const otherArr = _.concat(arr,4,5)
    
    console.log(otherArr)
```
[[Back to list]](#basic-)

### commonjs usage
```text
Modularity in ES6
export or export default
import... . from...
```
```js
function sum (a, b) {
    return a + b
}

function test() {
    console.log('this is test')
}

module.exports = {
    sum,
    test
}
```
```js
console.log('start...')

const flag = true

if (flag) {
    const { sum, test } = require('./utils') // dynamic

    test()

    const res = sum(15, 30)
    console.log(res)
}
```
[[Back to list]](#basic-)
### Three levels of commonjs
```text
Three levels
The modules that come with nodejs
Modules installed by npm
Modules written by hand
```

### commonjs and ES6modules
```text
Introduced at common execution and is dynamic
ES6 Module is introduced at packaging time and is static
```
### Why use modular
```text
Facilitates the development of multi-person projects, splitting modules and allowing for quick organisation and management of code.
```
[[Back to list]](#basic-)

### Debug
```text
1. inspect debugging
    Modify scripts, add inspect, then open the page and debug in chrome
    Add debugger and restart the server to debug
2. like breakpoint in java
```

### the difference nodejs 
```text
    Both are in js syntax
    
    Front-end js using web API
    DOM BOM events, Ajax etc
    Front-end js is used in the browser environment and therefore not available
    
    nodejs uses the nodejs API
```
```js
// const _ = require('lodash')

// const arr = [1, 2, 3]
// const otherArr = _.concat(arr, 4, 5)

// console.log(otherArr) // [1, 2, 3, 4, 5]

// in the terminal to recall this file, will have'window is not defined'
console.log(window)
// in the terminal to recall this file, will have'document is not defined'
console.log(document)
```
[[Back to list]](#basic-)