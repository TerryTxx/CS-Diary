## Server/Back-end and Front-end

### [Server/back-end Understanding](#server-side-back-end)
### How the front-end and server ports interact
- [1. HTTP](#1-http)

- [2. Message boards could ust the pics above also](#2-message-boards-could-ust-the-pics-above-also)

- [3. The front-end does not necessarily have only one server port](#3-the-front-end-does-not-necessarily-have-only-one-server-port)

### How the server processes and returns data
- [1. Define the front-end request url rule --router](#1-define-the-front-end-request-url-rule---router)

- [2. Get data with Request and return data with Response](#2-get-data-with-request-and-return-data-with-response)

- [3. Reading and storing data](#3-reading-and-storing-data)

----

### Server-side back-end
```text
The front end is visible to the user; the client port.
The back-end provides the data to be displayed by the front-end, receives the data to be submitted by the front-end and stores the data.

The front-end has to call the interface via Ajax (get/post data), which is provided by the server.
```
Examples of common message board functions in backend and frontend
```text

Interface 1: The front-end can create messages and then publish them, i.e. send them to the back-end via the Ajax interface
Interface 2: Extracted from the interface via Ajax to the back-end

Server-side interface.
Interface 3: An interface to obtain or create new messages.
    To:
    Database storage of messages.
    To:
Interface 4: Get a list of messages
```
#### [[Back to list]](#how-the-front-end-and-server-ports-interact)

### How the front-end and server interact
#### 1. HTTP
```text
   url;(back-end address ji'kou interface)
   method;(GET POST PUT DELETE)
   state code;(200 302 404 500)
```
```text
    Request: Request
    Request Body: the data the request is sending to the back-end
    Request Content-type: the format of the data sent; e.g. json.
```
![getforBtoF.jpeg](pics%2FgetforBtoF.jpeg)
![Post.jpeg](pics%2FPost.jpeg)

#### 2. Message boards could ust the pics above also;

server returns:
```text
    errno:0;
    data:{.....}
    message:"..."
```
    
#### 3. The front-end does not necessarily have only one server port.
```text
what a webpage needs?
-html
-css
-js
-pics
-vedio
-data******
(May all be from separate domains, i.e. from separate servers or different ports on the same server)
```
#### [[Back to list]](#how-the-front-end-and-server-ports-interact)
### How the server processes and returns data:

#### 1. Define the front-end request url rule --router
```text
(1) That is, the entry rules of the server and the agreement with the front end;
   Basically, each router means different functions, so it needs to be well corresponded;

(2) Included content: -- This is also the part that needs to be communicated and debugged at the front and back ends
    Define method, such as GET/POST, etc.;
    Define url rules, such as api/list and /api/create;
    Define input (request body) and output (response body) formats
(3) router and urls
    router is a rule, and url is a specific form
```
DEMO:
```javascript
    router.prefix('/api')
    router.get('list', loginCheck, async function(ctx,next)){
    ctx.body{
        errno:0;
        data: commentList;
    }
}
```
```text
    
```
#### 2. Get data with Request and return data with Response
```text
    like the board example;
    
    and we need request to meet router rules:
    (1) use router to determine method, url
    (2) by using Request, can get method url
    (3) inspect method and url match the router or witch router
```

#### 3. Reading and storing data
```text

Interface 1: The front-end can create messages and then publish them, i.e. send them to the back-end via the Ajax interface
Interface 2: Extracted from the interface via Ajax to the back-end

Server-side interface.
Interface 3: An interface to obtain or create new messages.
    To:
    Database storage of messages.
    To:
Interface 4: Get a list of messages
```
##### as the demo above:
```text
    The database is an independent system; it can be simply understood as JSON in the early stage;
    
    Basic operations: add, delete, modify, check and sort
```

#### [[Back to list]](#how-the-front-end-and-server-ports-interact)



