# HTTP
____________________________
#### [Back to RootPage](https://github.com/TerryTxx/CS-Diary/blob/master/README.md)

----
#
### [Front-end and back-end interaction with HTTP](#front-end-and-back-end-interaction-with-http)
### [understand HTTP (just know)](#understand-http--just-know-)
- [HTTP Method (just know)](#http-method)
- [Get and Post difference (just know)](#get-and-post-difference)
- [HTTP Statue Code (just know)](#http-code)
###


------

#### Front-end and back-end interaction with HTTP
![web-network.png](pics%2Fweb-network.png)
when we click something, the network will start communicate, and by html and codes
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Front-end and back-end</title>
  </head>
  <body>
    <script>
      // 1. What is front-end and back-end communication
      // The process of data interaction between front-end and back-end
      // The process of data interaction between the browser and the server

      // 2. Sending data from the back-end to the front-end
      // Accessing pages

      // 3. Sending data from the front-end to the back-end
      // User registration

      // 4. The process of front and back-end communication
      // communication between the front and back ends is done in a 'request-response' process

      // 5. Explanation of concepts
      // Front-end: the browser side
      // Client side: anything that can communicate with the server is called a client side
      // Command line tools
      // curl https:www.google.com

      // back-end: server-side

      // 6. Accessing a web page using a browser
      // Type the URL in the address bar of your browser and press enter

      // 7. HTML tags
      // When the browser parses the HTML tags, it will send another request to the server when it encounters some special tags
      // link/img/script/iframe

      // There are also tags that the browser parses without sending a request to the server, but the user can use them to send a request to the server
      // a/form

      // 8. Ajax and Fetch
    </script>
  </body>
</html>
```
### [[back to list]](#http)
### understand HTTP (just know)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Understand HTTP</title>
  </head>
  <body>
    <script>
      // 1. What is HTTP
      // HyperText Transfer Protocol
      // HTML: HyperText Markup Language

      // Hypertext: A single text is linked together by hyperlinks. From the original single text into an infinitely extendable and expandable hypertext, three-dimensional text

      // HTML, JS, CSS, images, fonts, audio, video, etc. are all transferred between the server and the browser via HTTP (Hypertext Transfer Protocol)

      // Each time the front-end and back-end communicate, the front-end needs to actively send a request to the back-end, and the back-end receives the request from the front-end and can give a response
      // HTTP is a request-response protocol

      // 2. HTTP request-response process
      // https://www.google.com

      // 3. What is an HTTP message
      // When the browser sends a request to the server, the request itself is the message, called the request message
      // When the server sends a response to the browser, the information transmitted is called the response message.

      // 4. HTTP message format
      // Request
      // Request header: start line + first part
      // Request body

      // GET request, there is no request body, the data is carried in the request header
      // POST request, with request body, data is carried in request body
      // Front and back-end interactions are also detailed

      // Response
      // Response header: start line + first part
      // response body
    </script>
  </body>
</html>
```
### HTTP Method
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>HTTP Method</title>
  </head>
  <body>
    <script>
      // 1. Common HTTP methods
      // The method used by the browser to send the request, independent of the response

      // GET, POST, PUT, DELETE

      // Used to define what action to take on a resource, with their own semantics

      // 2. Semantics of HTTP methods
      // GET to get data
      // Get a resource (file)

      // POST to create data
      // Register

      // PUT Update data
      // Modify personal information, change password

      // DELETE Delete data
      // Delete a comment

      // add, delete, edit

      // These methods have their own semantics, but they are not mandatory

      // 3. RESTful interface design
      // An interface design style that takes advantage of the semantics of HTTP methods

      // Get personal information by user ID, using the GET method
      // https://www.imooc.com/api/http/getUser?id=1

      // GET
      // https://www.imooc.com/api/http/user?id=1

      // Registering a new user, using the POST method
      // https://www.imooc.com/api/http/addUser

      // POST
      // https://www.imooc.com/api/http/user

      // Modify a user, using the POST method
      // https://www.imooc.com/api/http/modifyUser

      // PUT
      // https://www.imooc.com/api/http/user

      // Delete a user, using the POST method
      // https://www.imooc.com/api/http/deleteUser

      // DELETE
      // https://www.imooc.com/api/http/user
    </script>
  </body>
</html>
```
### Get and Post difference
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>GET and POST difference</title>
  </head>
  <body>
    <script>
      // 1. Semantics
      // GET: Get the data
      // POST: creating data

      // 2. Sending data
      // GET carries data in the request header by means of an address
      // The amount of data that can be carried depends on the length of the address, which is usually a few kilobytes at most

      // POST can carry data both in the request header via the address and in the request body
      // The amount of data that can be carried is theoretically unlimited

      // A GET request can be used for small amounts of data, and a POST request can be used for large amounts of data

      // 3. Caching
      // GET can be cached, POST cannot be cached

      // 4. Security
      // ?username=alex
      // Neither GET nor POST is secure

      // Don't use GET when sending passwords or other sensitive information, mainly to avoid having your password snooped on directly or found through your history
    </script>
  </body>
</html>
```
### HTTP Statue Code
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>HTTP statue Code</title>
  </head>
  <body>
    <script>
      // 1. What is an HTTP status code
      // Defines the result of the server's processing of the request, which is returned by the server

      // 2. Semantics of HTTP status codes
      // 100~199 messages: means the request has been accepted and needs to be processed further
      // websocket

      // 200~299 Success
      // 200

      // 300~399 Redirect
      // http://www.google.com/
      // https://www.google.com/

      // 301 Moved Permanently
      // 302 Move Temporarily

      // 304 Not Modified

      // 400~499 Request Error
      // 404 Not Found

      // 500~599 Server Error
      // 500 Internal Server Error
    </script>
  </body>
</html>
```
#### [[back to list]](#http)