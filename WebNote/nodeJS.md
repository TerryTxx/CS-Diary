## Nodejs General


### What is Nodejs
```   
 js runtime powered by Chrome V8
```

### download and install
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
Demo to set a server:
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
use brower access to localhost:3000
![show in screen.png](pics%2Fshow%20in%20screen.png)
![show in s2.png](pics%2Fshow%20in%20s2.png)
### use npm
```text

```
### commonjs

### debug

### the difference between nodejs and js