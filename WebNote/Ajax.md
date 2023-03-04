#  Ajax & Fetch
____________________________
#### [Back to RootPage](https://github.com/TerryTxx/CS-Diary/blob/master/README.md)


# Ajax
### Ajax General
- [Basic Understanding of Ajax](#understand-ajax)
- [General usage of Ajax](#general-usage-of-ajax)
- [GET request](#get-request)
- [POST request](#post-request)
### json
- [understand of json](#understand-of-json)
- [three kinds of writing json](#three-kinds-of-writing-json)
- [General usage of json](#general-usage-of-json)
### Cross domain 
(just know, back-end for different browser)
- [understand of crossing domain](#understand-of-crossing-domain)
- Two ways of crossing domain
- 1. [CORS--Cross-domain resource sharing](#cors--cross-domain-resource-sharing)
- 2. [JSONP](#jsonp)
### XHR object
- [Attribute of XHR](#attribute-of-xhr)
- [Methods of XHR](#methods-of-xhr)
- [Events of XHR](#events-of-xhr)
-----
### Ajax Advanced
- [FormData](#formdata)
- [Wrap Ajax](#wrap-ajax)
- [Transforming wrapped Ajax using promise](#transforming-wrapped-ajax-using-promise)
### Ajax Application
- [Search tips](#search-tips)
- [Secondary Menu](#secondary-menu)
- [Concurrent execution of multiple Ajax requests](#concurrent-execution-of-multiple-ajax-requests)
### expands for Ajax
- [axios](#axios)
- [Fetch](#fetch)

---

### Understand Ajax
and set up a server environment
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Understand Ajax</title>
  </head>
  <body>
    <script>
      // 1. What is Ajax
      // Ajax is shorthand for Asynchronous JavaScript and XML

      // Asynchronous in Ajax: you can send requests to the server asynchronously, 
      //   without blocking the current page while waiting for a response, and the browser can do its own thing. 
      //   The browser does not start processing the response data until it has successfully fetched the response

      // XML (Extensible Markup Language) is a format for transferring data when communicating between front and back end data

      // XML is not used much anymore, JSON is more commonly used nowadays

      // Ajax is actually a form of asynchronous communication between the browser and the server

      // Ajax can be used to update a part of a page without reloading the whole page

      // ① google registration detection
      // ② google search tips

      // 2. Setting up the Ajax development environment
      // Ajax requires a server environment, and many browsers will not work properly with Ajax in a non-server environment

      // Live Server
      // windows phpStudy
      // Mac MAMP
    </script>
  </body>
</html>
```
#### [[back to list]](#ajax-general)

### General usage of Ajax
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Ajax general USAGE</title>
  </head>
  <body>
    <script>
      // 1. XMLHttpRequest
      // console.log(Ajax);

      // Ajax relies on XMLHttpRequest, which is a constructor, to enable asynchronous communication between the browser and the server

      // Neither XMLHttpRequest, nor Ajax, is bound to a specific data format

      // 2. Steps for using Ajax
      // 2.1. Create the xhr object
      // const xhr = new XMLHttpRequest();

      // 2.2. Listen for events and process the response
      // When the response is fetched, it will trigger the readystatechange event of the xhr object, where the response can be processed

      // xhr.addEventListener('readystatechange', () => {}, fasle);

      // xhr.onreadystatechange = () => {
      // if (xhr.readyState ! == 4) return;

      // // // HTTP CODE
      // // // When the response is fetched, the content of the response is automatically populated with the xhr object's properties
      // // xhr.status: HTTP 200 404
      // // xhr.statusText: HTTP status statement OK Not Found
      // if ((xhr.status >= 200) & (xhr.status < 300) || xhr.status === 304) {
      // // console.log('Normal use of response data');
      // console.log(xhr.responseText);
      // }
      // };

      // readystatechange events can also be used with addEventListener, but note that IE6~8 do not support addEventListener
      // For compatibility reasons, instead of using this in readystatechange, just use xhr
      // For compatibility reasons, it's best to put it before open

      // the readystatechange event listens for changes to the readyState state
      // It has values from 0 to 4, with 5 states
      // 0: not initialised. Open() has not been called yet
      // 1: Started. open() has been called, but send() has not yet been called
      // 2: Sending. send() has been called, but no response has been received
      // 3: receive. Partial response data has been received
      // 4: Complete. All response data has been received and is ready to be used in the browser

      // 2.3. Preparing to send the request
      // xhr.open(
      // 'HTTP methods GET, POST, PUT, DELETE',
      // 'Address URL https://www.imooc.com/api/http/search/suggest?words=js . /index.html . /index.xml . /index.txt',
      // true
      // );

      // The call to open does not actually send the request, but only prepares it for sending

      // 2.4. Sending the request
      // Call send() to send the request formally

      // The parameters to send() are the data carried in the request body
      // xhr.send(null);

      // 3. Use Ajax to complete the front and back end communication
      const url = 'https://www.google.com/api/http/search/suggest?words=js';

      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;

        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log(xhr.responseText);
          console.log(typeof xhr.responseText);
        }
      };
      xhr.open('GET', url, true);
      xhr.send(null);
    </script>
  </body>
</html>
```
#### [[back to list]](#ajax-general)

### GET request
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>GET</title>
  </head>
  <body>
    <!-- <form action="https://www.google.com/api/http/search/suggest" method="get">
      <input type="text" name="username" />
      <input type="text" name="words" />
      <input type="password" name="password" />
      <input type="submit" value="load" />
    </form> -->

    <script>
      // 1. Carrying data
      // GET requests cannot carry data through the request body, but can carry it through the request header
      // const url =
      // 'https://www.google.com/api/http/search/suggest?words=js&username=alex&age=18';
      // const xhr = new XMLHttpRequest();

      // xhr.onreadystatechange = () => {
      // if (xhr.readyState ! = 4) return;

      // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      // console.log(xhr.responseText);
      // }
      // };

      // xhr.open('GET', url, true);

      // xhr.send(null);

      // no error will be reported, but no data will be sent
      // xhr.send('sex=male');

      // 2. Data encoding
      // If you are carrying data that is not alphabetic, such as Chinese characters, you need to encode it before sending it to the backend, otherwise it will cause garbled code problems
      // You can use encodeURIComponent() to encode the data
      const url = `https://www.google.com/api/http/search/suggest?words=${encodeURIComponent(
              'front-end'
      )}`;
      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = () => {
        if (xhr.readyState != 4) return;

        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log(xhr.responseText);
        }
      };

      xhr.open('GET', url, true);

      xhr.send(null);
    </script>
  </body>
</html>
```
#### [[back to list]](#ajax-general)

### POST request
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>POST</title>
  </head>
  <body>
    <form
      action="https://www.google.com/api/http/search/suggest?words=js"
      method="post"
    >
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="submit" value="load" />
    </form>

    <script>
      // 1. Carrying data
      // POST requests carry data primarily in the request body, but also in the request header
      // const url = 'https://www.google.com/api/http/search/suggest?words=js';
      // const xhr = new XMLHttpRequest();

      // xhr.onreadystatechange = () => {
      // if (xhr.readyState ! = 4) return;

      // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      // console.log(xhr.responseText);
      // }
      // };

      // xhr.open('POST', url, true);

      // If you want to send data, write it directly to the send() parameter position, usually a string
      // xhr.send('username=alex&age=18');

      // You can't pass an object directly, you need to convert it to a string first
      // xhr.send({
      // username: 'alex',
      // age: 18
      // });
      // [object Object]

      // 2. Data encoding
      // xhr.send(`username=${encodeURIComponent('Zhang San')}&age=18`);
    </script>
  </body>
</html>
```
#### [[back to list]](#ajax-general)




### understand of json
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>know JSON</title>
  </head>
  <body>
    <script>
      // 1. What is JSON?
      // A format for Ajax to send and receive data
      // XML
      // username=alex&age=18
      // JSON

      const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = () => {
        if (xhr.readyState != 4) return;

        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log(xhr.responseText);
        }
      };

      xhr.open('GET', url, true);

      xhr.send(null);

      // {"code":200, "data":[{"word": "jsp"},{"word": "js"},{"word": "json"},{"word": "js \u5165\u95e8"},{"word": "jstl"}]}
      // HTML/XML

      // JSON is JavaScript Object Notation

      // 2. Why JSON is needed
      // There are 3 forms of JSON, each of which is written like a JS data type and can be easily converted to and from JS data types

      // JS->JSON->PHP/Java
      // PHP/Java->JSON->JS
    </script>
  </body>
</html>
```
#### [[back to list]](#json)


### Three kinds of writing json
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JSON 3 types</title>
  </head>
  <body>
    <script>
      // 1. Simple value form
      // .json

      // The simple value form of JSON corresponds to the basic data types in JS
      // numbers, strings, booleans, null

      // Caveats
      // ① There are no undefined values in JSON
      // ② Strings in JSON must be enclosed in double quotes
      // ③ JSON cannot be commented out

      // 2. Object form
      // The object form of JSON corresponds to the object in JS

      // Caution
      // The attribute name of the object in JSON must be in double quotes, and the attribute value must be in double quotes if it is a string
      // Double quotes must be used whenever a string is involved in JSON
      // undefined is not supported

      // 3. Array form
      // The array form of JSON corresponds to the array form in JS

      // [1, "hi", null]

      // Caution
      // Strings in arrays must be enclosed in double quotes
      // Double quotes must be used whenever strings are involved in JSON
      // undefined is not supported

      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = () => {
        if (xhr.readyState != 4) return;

        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log(xhr.responseText);
          console.log(typeof xhr.responseText);
        }
      };

      // xhr.open('GET', './plain.json', true);
      // xhr.open('GET', './obj.json', true);
      xhr.open('GET', './arr.json', true);

      xhr.send(null);
    </script>
  </body>
</html>
```
#### [[back to list]](#json)


### General usage of json
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JSON methods</title>
  </head>
  <body>
    <script type="module">
   // 1. JSON.parse()
              // JSON.parse() can parse a JSON-formatted string into its JS counterpart
              // must be a legal JSON string, otherwise it will report an error
              // const xhr = new XMLHttpRequest();

              // xhr.onreadystatechange = () => {
              // if (xhr.readyState ! = 4) return;

              // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
              // console.log(xhr.responseText);
              // console.log(typeof xhr.responseText);

              // console.log(JSON.parse(xhr.responseText));
              // // console.log(JSON.parse(xhr.responseText).data);
              // }
              // };

              // // xhr.open('GET', '. /plain.json', true);
              // // xhr.open('GET', '. /obj.json', true);
              // xhr.open('GET', '. /arr.json', true);

              // // xhr.open(
              // // 'GET',
              // // 'https://www.google.com/api/http/search/suggest?words=js',
              // // true
              // // // );

              // xhr.send(null);

              // 2. JSON.stringify()
              // JSON.stringify() converts a JS basic data type, object or array into a JSON formatted string
              // console.log(
              // JSON.stringify({
              // username: 'alex',
              // age: 18
              // })
              // );

              // const xhr = new XMLHttpRequest();

              // xhr.open(
              // 'POST',
              // 'https://www.google.com/api/http/search/suggest?words=js',
              // true
              // );
              // xhr.send(
              // JSON.stringify({
              // username: 'alex',
              // age: 18
              // })
              // );

              // 3. Wrap localStorage with JSON.parse() and JSON.stringify()
              import { get, set, remove, clear } from '. /storage.js';

      set('username', 'alex');
      console.log(get('username'));

      set('zs', {
        name: 'alex',
        age: 18
      });
      console.log(get('zs'));

      remove('username');
      clear();
    </script>
  </body>
</html>
```
3. localstorage by JSON
```js
const storage = window.localStorage;
// set
const set = (key, value) => {
  // {
  // username: 'alex'
  // }
  storage.setItem(key, JSON.stringify(value));
};

// Get
const get = key => {
  // 'alex'
  // {
  // "username": "alex"
  // }
  return JSON.parse(storage.getItem(key));
};

// Remove
const remove = key => {
  storage.removeItem(key);
};

// Clear
const clear = () => {
  storage.clear();
};

export { set, get, remove, clear };
```
#### [[back to list]](#json)



### Understand of crossing domain
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Beginning to understand cross-domain</title>
  </head>
  <body>
  <script>
   // 1. What is a cross-domain
  
  // Same domain, not cross-domain
  // const url = '. /index.html';

  // http://127.0.0.1:5500

  // Different domain, cross-domain, blocked by browser
  // const url = 'https://www.google.com';
  // const xhr = new XMLHttpRequest();

  // Access to XMLHttpRequest at 'https://www.google.com/' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control- Allow-Origin' header is present on the requested resource

  // A request to a domain is called cross-domain if the domain to be requested is different from the current domain
  // A request between different domains is a cross-domain request

  // xhr.onreadystatechange = () => {
  // if (xhr.readyState ! = 4) return;

  // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
  // console.log(xhr.responseText);
  // }
  // };

  // xhr.open('GET', url, true);

  // xhr.send(null);

  // 2. What is a different domain and what is the same domain
  // https (protocol):// www.googlec.com (domain):443 (port number) /course/list (path)

  // protocol, domain name, port number, any one of them is different, it's a different domain
  // It doesn't matter if the paths are different, it doesn't matter if the paths are different

  // Different domain
  // https://www.google.com:443/course/list
  // http://www.google.com:80/course/list

  // http://www.google.com:80/course/list
  // http://m.google.com:80/course/list
  // http://google.com:80/course/list

  // Same domain
  // http://google.com:80
  // http://google.com:80/course/list

  // 3. Why cross-domain requests are blocked
  // The blocking of cross-domain requests is actually a security policy of the browser itself - the same-origin policy

  // No other client or server has the problem of cross-domain blocking

  // 4. Cross-domain solutions
  // ① CORS cross-domain resource sharing
  // ② JSONP

  // Prefer CORS cross-domain resource sharing, then JSONP if the browser doesn't support CORS
    </script>
  </body>
</html>
```
#### [[back to list]](#ajax-cross-domain)


### CORS--Cross-domain resource sharing
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CORS Cross-Domain Resource Sharing</title>
  </head>
  <body>
  <script>
  // 1. What is CORS?
  // const url = 'https://www.google.com';

  // const url = 'https://www.google.com/api/http/search/suggest?words=js';
  // const xhr = new XMLHttpRequest();

  // xhr.onreadystatechange = () => {
  // if (xhr.readyState ! = 4) return;

  // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
  // console.log(xhr.responseText);
  // }
  // };

  // xhr.open('GET', url, true);

  // xhr.send(null);

  // Access-Control-Allow-Origin: *
  // indicates that all domains are allowed to request it across domains, * is a wildcard, there are no restrictions

  // only allow cross-domain requests for the specified domain
  // Access-Control-Allow-Origin: http://127.0.0.1:5500

  // 2. The process of using CORS to cross domains
  // ① The browser sends the request
  // ② The backend adds the Access-Control-Allow-Origin header to the response header
  // ③ The browser receives the response
  // ④ If it is a request under the same domain, the browser does not do anything extra and the communication between the front and back ends is successfully completed
  // ⑤ If it is a cross-domain request, the browser looks in the response headers to see if cross-domain access is allowed
  // ⑥ If cross-domain access is allowed, the communication completes successfully
  // ⑦ If the domain name you want to cross is not found or not included, the response is discarded

  // 3. CORS compatibility
  // Browsers with IE10 and above will work fine with CORS

  // https://caniuse.com/

  // JSONP
    </script>
  </body>
</html>
```
#### [[back to list]](#ajax-cross-domain)


### JSONP
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JSONP</title>
  </head>
  <body>
  <script>
    // 1. The principle of JSONP
    // script tag cross-domain will not be blocked by the browser
    // JSONP mainly uses script tags to load cross-domain files

    // 2. Use JSONP to achieve cross-domain
    // The server is ready for the JSONP interface
    // https://www.google.com/api/http/jsonp?callback=handleResponse

    // Manually load the JSONP interface or dynamically load the JSONP interface
    const script = document. createElement('script');
    script.src =
            'https://www.google.com/api/http/jsonp?callback=handleResponse';
    document.body.appendChild(script);

    // declare function
    const handleResponse = data => {
      console. log(data);
    };

    // handleResponse({
    // code: 200,
    // data: [
    // {
    // word: 'jsp'
    // },
    // {
    // word: 'js'
    // },
    // {
    // word: 'json'
    // },
    // {
    // word: 'getting started with js'
    // },
    // {
    // word: 'jstl'
    // }
    // ]
    // });

    // Use CORS first, if the browser does not support CORS, then use JSONP
  </script>
  <!-- <script src="https://www.google.com/api/http/jsonp?callback=handleResponse"></script> -->
  <!-- Equivalent to -->
  <!-- <script>
    handleResponse({
      code: 200,
      data: [
        {
          word: 'jsp'
        },
        {
          word: 'js'
        },
        {
          word: 'json'
        },
        {
          word: 'getting started with js'
        },
        {
          word: 'jstl'
        }
      ]
    });
  </script> -->
  </body>
</html>
```
#### [[back to list]](#ajax-cross-domain)


### Attribute of XHR
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>XHR Attribute</title>
  </head>
  <body>
    <script>
      // 1. responseType and response attributes
      // const url = 'https://www.google.com/api/http/search/suggest?words=js';
      // const xhr = new XMLHttpRequest();

      // xhr.onreadystatechange = () => {
      // if (xhr.readyState ! = 4) return;

      // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      // // The response content in text form
      // // // responseText can only be used if responseType is not set or if responseType = '' or 'text'
      // // console.log('responseText:', xhr.responseText);

      // // can be used instead of responseText
      // console.log('response:', xhr.response);
      // // console.log(JSON.parse(xhr.responseText));
      // }
      // };
      // xhr.open('GET', url, true);

      // // xhr.responseType = '';
      // // xhr.responseType = 'text';
      // xhr.responseType = 'json';

      // xhr.send(null);

      // Not supported by IE6~9, supported by IE10 onwards

      // 2. timeout property
      // Set the timeout for the request (in ms)
      // const url = 'https://www.google.com/api/http/search/suggest?words=js';
      // const xhr = new XMLHttpRequest();

      // xhr.onreadystatechange = () => {
      // if (xhr.readyState ! = 4) return;

      // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      // console.log(xhr.response);
      // }
      // };

      // xhr.open('GET', url, true);

      // xhr.timeout = 10000;

      // xhr.send(null);

      // IE8 starts to support

      // 3. withCredentials property (just know)
      // Specify whether to carry cookies when sending requests using Ajax

      // By default, requests sent using Ajax will carry a cookie if they are in the same domain, but not if they are cross-domain
      // xhr.withCredentials = true;
      // The final success of carrying cookies across domains depends on whether the server agrees

      // const url = 'https://www.google.com/api/http/search/suggest?words=js';
      // // // const url = '. /index.html';

      // const xhr = new XMLHttpRequest();

      // xhr.onreadystatechange = () => {
      // if (xhr.readyState ! = 4) return;

      // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      // console.log(xhr.response);
      // }
      // };

      // xhr.open('GET', url, true);

      // xhr.withCredentials = true;

      // xhr.send(null);

      // IE10 starts to support
    </script>
  </body>
</html>
```
#### [[back to list]](#xhr-object)

### Methods of XHR
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>XHR Methods</title>
  </head>
  <body>
  <! -- <form
          action="https://www.google.com/api/http/search/suggest?words=js"
          method="post"
  >
    <input type="text" name="username" />
    <input type="password" name="password" />
    <input type="submit" value="submit" />
  </form> -->
  
    <script>
    // 1.abort()
    // terminates the current request
    // Typically used in conjunction with the abort event
    // const url = 'https://www.google.com/api/http/search/suggest?words=js';
  
    // const xhr = new XMLHttpRequest();
  
    // xhr.onreadystatechange = () => {
    // if (xhr.readyState ! = 4) return;
  
    // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    // console.log(xhr.response);
    // }
    // };
  
    // xhr.open('GET', url, true);
  
    // xhr.send(null);
  
    // xhr.abort();
  
    // 2.setRequestHeader()
    // You can set the request header information
    // xhr.setRequestHeader(name of the header field, value of the header field);
    // const url = 'https://www.google.com/api/http/search/suggest?words=js';
    const url = 'https://www.google.com/api/http/json/search/suggest?words=js';
  
    const xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;
  
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    console.log(xhr.response);
    }
    };
    xhr.open('POST', url, true);
  
    // The Content-Type field in the request header is used to tell the server what format the browser is sending the data in
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Content-Type', 'application/json');
  
        // xhr.send(null);
        // xhr.send('username=alex&age=18');
        xhr.send(
          JSON.stringify({
            username: 'alex'
          })
        );
    </script>
  </body>
</html>
```
#### [[back to list]](#xhr-object)

### Events of XHR
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>XHR Event</title>
  </head>
  <body>
    <script>
      // 1.load event
      // Triggered when response data is available
      // const url = 'https://www.google.com/api/http/search/suggest?words=js';
      // const xhr = new XMLHttpRequest();

      // // xhr.onload = () => {
      // // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      // // console.log(xhr.response);
      // // }
      // // };
      // xhr.addEventListener(
      // 'load',
      // () => {
      // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      // console. log(xhr. response);
      // }
      // },
      // false
      // );

      // xhr. open('GET', url, true);

      // xhr. send(null);

      // IE6~8 does not support the load event

      // 2. error event
      // Triggered when an error occurs in the request

      // const url = 'https://www.google.com/api/http/search/suggest?words=js';
      // const url = 'https://www.google.com/api/http/search/suggest?words=js';
      // const xhr = new XMLHttpRequest();

      // xhr.addEventListener(
      // 'load',
      // () => {
      // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      // console. log(xhr. response);
      // }
      // },
      // false
      // );
      // xhr.addEventListener(
      // 'error',
      // () => {
      // console. log('error');
      // },
      // false
      // );

      // xhr. open('GET', url, true);

      // xhr. send(null);

      // IE10 starts to support

      // 3. abort event
      // Triggered when abort() is called to terminate the request
      // const url = 'https://www.google.com/api/http/search/suggest?words=js';

      // const xhr = new XMLHttpRequest();

      // xhr.addEventListener(
      // 'load',
      // () => {
      // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      // console. log(xhr. response);
      // }
      // },
      // false
      // );
      // xhr.addEventListener(
      // 'abort',
      // () => {
      // console. log('abort');
      // },
      // false
      // );

      // xhr. open('GET', url, true);

      // xhr. send(null);

      // xhr. abort();

      // IE10 starts to support

      // 4. timeout event
      // Triggered after the request times out
      const url = 'https://www.google.com/api/http/search/suggest?words=js';

      const xhr = new XMLHttpRequest();

      xhr.addEventListener(
              'load',
              () => {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                  console.log(xhr.response);
                }
              },
              false
      );
      xhr.addEventListener(
              'timeout',
              () => {
                console.log('timeout');
              },
              false
      );

      xhr.open('GET', url, true);

      xhr.timeout = 10;

      xhr. send(null);

      // IE8 starts to support
    </script>
  </body>
</html>
```
#### [[back to list]](#xhr-object)


### FormData
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>FormData</title>
  </head>
  <body>
    <form
      id="login"
      action="https://www.google.com/api/http/search/suggest?words=js"
      method="POST"
      enctype="multipart/form-data"
    >
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <input id="submit" type="submit" value="login" />
    </form>

    <script>
      // 1. Submit the form using Ajax

      // 2. Basic usage of FormData
      // Create FormData object from HTML form element
      // const fd = new FormData(form element);
      // xhr. send(fd);

      // add data via append() method
      // const fd = new FormData(form element);
      // fd.append('age', 18);
      // fd. append('sex', 'male');
      // xhr. send(fd);

      // IE10 and above can support

      const login = document. getElementById('login');
      // console. log(login. username);
      // console. log(login. password);
      const { username, password } = login;
      const btn = document. getElementById('submit');
      const url = 'https://www.imooc.com/api/http/search/suggest?words=js';

      btn.addEventListener(
              'click',
              e => {
                // Prevent the form from being automatically submitted
                e.preventDefault();

                // form data validation

                // send an Ajax request
                const xhr = new XMLHttpRequest();

                xhr.addEventListener(
                        'load',
                        () => {
                          if (
                                  (xhr.status >= 200 && xhr.status < 300) ||
                                  xhr.status === 304
                          ) {
                            console.log(xhr.response);
                          }
                        },
                        false
                );

                xhr.open('POST', url, true);

                // assemble data
                // const data = `username=${username.value}&password=${password.value}`;

                // FormData can be used to send form data
          const data = new FormData(login);
          // data.append('age', 18);
          // data.append('sex', 'male');
          // console.log(data);
          // for (const item of data) {
          //   console.log(item);
          // }

          // xhr.setRequestHeader(
          //   'Content-Type',
          //   'application/x-www-form-urlencoded'
          // );

          xhr.send(data);

          // xhr.send('username=alex&password=12345');
        },
        false
      );
    </script>
  </body>
</html>
```
#### [[back to list]](#ajax-advanced)

### Wrap Ajax
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Encap Ajax</title>
  </head>
  <body>
    <script type="module">
      // const url = 'https://www.google.com/api/http/search/suggest?words=js';
      // const xhr = new XMLHttpRequest();
      // xhr.addEventListener(
      //   'load',
      //   () => {
      //     if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      //       console.log(xhr.responseText);
      //     }
      //   },
      //   false
      // );
      // xhr.open('GET', url, true);
      // xhr.send(null);

      import { ajax, get, getJSON, post } from './ajax/index.js';

      const url = 'https://www.google.com/api/http/search/suggest?words=js';
      // const url = 'https://www.google.com/api/http/search/suggest?words=js';

      // const url = './414.html';

      const xhr = ajax(url, {
        method: 'GET',
        params: { username: 'alex' },
        data: {
          age: 18
        },
        responseType: 'json',
        // timeoutTime: 10,

        success(response) {
          console.log(response);
        },
        httpCodeError(err) {
          console.log('http code error', err);
        },
        error(xhr) {
          console.log('error', xhr);
        },
        abort(xhr) {
          console.log('abort', xhr);
        },
        timeout(xhr) {
          console.log('timeout', xhr);
        }
      });

      xhr.abort();
    </script>
  </body>
</html>
```
#### [[back to list]](#ajax-advanced)

### Transforming wrapped Ajax using promise
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>use Promise rebuild Ajax</title>
  </head>
  <body>
    <script type="module">
      import { ajax, get, getJSON, post } from './ajax/index.js';

      const url = 'https://www.google.com/api/http/search/suggest?words=js';
      // const url = 'https://www.google.com/api/http/search/suggest?words=js';

      const p = getJSON(url, {
        params: { username: 'alex' },
        data: { age: 18 }
        // timeoutTime: 10
        // success(){},error(){}
      });
      p.xhr.abort();

      const { ERROR_HTTP_CODE, ERROR_REQUEST, ERROR_TIMEOUT, ERROR_ABORT } = p;

      p.then(repsonse => {
        console.log(repsonse);
      }).catch(err => {
        // console.log(err);
        switch (err.type) {
          case ERROR_HTTP_CODE:
            console.log(err.text);
            break;
          case ERROR_REQUEST:
            console.log(err.text);
            break;
          case ERROR_TIMEOUT:
            console.log(err.text);
            break;
          case ERROR_ABORT:
            console.log(err.text);
            break;
        }
      });
    </script>
  </body>
</html>
```
#### [[back to list]](#ajax-advanced)


### Search tips
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Search tips</title>
  </head>
  <body>
    <input id="search" type="text" />
    <ul id="result"></ul>

    <script type="module">
      import { getJSON } from './ajax/index.js';

      const searchInput = document.getElementById('search');
      const resultList = document.getElementById('result');

      const url = 'https://www.google.com/api/http/search/suggest?words=';

      const handleInputEvent = () => {
        if (searchInput.value.trim() !== '') {
          getJSON(`${url}${searchInput.value}`)
            .then(response => {
              console.log(response);
              // [{word: "jsp"}]

              let html = '';
              for (const item of response.data) {
                html += `<li>${item.word}</li>`;
              }

              resultList.innerHTML = html;

              resultList.style.display = '';

              // resultList.innerHTML = '<li>jsp</li><li>js</li>';
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          resultList.innerHTML = '';
          resultList.style.display = 'none';
        }
      };

      let timer = null;
      searchInput.addEventListener(
        'input',
        () => {
          // handleInputEvent();

          if (timer) {
            clearTimeout(timer);
          }
          // jsa
          timer = setTimeout(handleInputEvent, 500);
        },
        false
      );
    </script>
  </body>
</html>
```
#### [[back to list]](#ajax-application)

### Secondary Menu
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Secondary Menu</title>
    <style>
      /* css reset */
      * {
        padding: 0;
        margin: 0;
      }
      li {
        list-style: none;
      }

      /* menu */
      .menu {
        width: 100px;
        background-color: rgba(0, 0, 0, 0.1);
        margin: 10px;
      }
      .menu-item {
        position: relative;
        padding: 5px;
        cursor: pointer;
      }
      .menu-content {
        display: none;
        position: absolute;
        left: 100%;
        top: 0;
        width: 200px;
        height: 100px;
        padding: 0 5px;
        background-color: rgba(0, 0, 0, 0.1);
      }
      .menu-item:hover {
        background-color: rgba(0, 0, 0, 0.4);
      }
      .menu-item:hover .menu-content {
        display: block;
      }
      .menu-loading {
        margin: 45px 0 0 92px;
      }
    </style>
  </head>
  <body>
    <ul id="menu" class="menu">
      <!-- <li class="menu-item" data-key="hot" data-done="done">
        <span>hot</span>
        <div class="menu-content">
          <p><img class="menu-loading" src="./loading.gif" alt="加载中" /></p>
        </div>
      </li> -->
    </ul>

    <script type="module">
      // https://www.google.com/api/mall-PC/index/menu/hot
      // https://www.google.com/api/mall-PC/index/menu

      import { getJSON } from './ajax/index.js';
      const menuURL = 'https://www.google.com/api/mall-PC/index/menu';
      const menuEl = document.getElementById('menu');

      getJSON(menuURL)
        .then(repsonse => {
          // console.log(repsonse);

          let html = '';

          for (const item of repsonse.data) {
            html += `
              <li class="menu-item" data-key="${item.key}">
                <span>${item.title}</span>
                <div class="menu-content">
                  <p><img class="menu-loading" src="./loading.gif" alt="loading" /></p>
                </div>
              </li>
            `;
          }

          menuEl.innerHTML = html;

          // [{key: "hot", title: "hot place", subTitles: Array(5)}]

          // ...
        })
        .then(() => {
          const items = menuEl.querySelectorAll('.menu-item');

          for (const item of items) {
            item.addEventListener(
              'mouseenter',
              () => {
                // console.log(item.getAttribute('data-key'));
                // console.log(item.dataset.key);

                if (item.dataset.done === 'done') return;

                getJSON(
                  `https://www.google.com/api/mall-PC/index/menu/${item.dataset.key}`
                )
                  .then(repsonse => {
                    // console.log(repsonse);

                    // [{title: "local", cities: Array(27)}]

                    item.dataset.done = 'done';

                    let html = '';

                    for (const item of repsonse.data) {
                      html += `<p>${item.title}</p>`;
                    }

                    item.querySelector('.menu-content').innerHTML = html;
                  })
                  .catch(err => {
                    console.log(err);
                  });
              },
              false
            );
          }
        })
        .catch(err => {
          console.log(err);
        });
    </script>
  </body>
</html>
```
#### [[back to list]](#ajax-application)

### Concurrent execution of multiple Ajax requests
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Concurrent execution of multiple Ajax requests</title>
    <style>
      /* css reset */
      * {
        padding: 0;
        margin: 0;
      }
      li {
        list-style: none;
      }

      /* menu */
      .menu {
        width: 100px;
        background-color: rgba(0, 0, 0, 0.1);
        margin: 10px;
      }
      .menu-item {
        position: relative;
        padding: 5px;
        cursor: pointer;
      }
      .menu-content {
        display: none;
        position: absolute;
        left: 100%;
        top: 0;
        width: 200px;
        height: 100px;
        padding: 0 5px;
        background-color: rgba(0, 0, 0, 0.1);
      }
      .menu-item:hover {
        background-color: rgba(0, 0, 0, 0.4);
      }
      .menu-item:hover .menu-content {
        display: block;
      }
      .menu-loading {
        margin: 45px 0 0 92px;
      }

      /* loading-page */
      .loading-page {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        background-color: #eee;
        text-align: center;
      }
      .loading-img {
        position: absolute;
        top: 50%;
      }
      .ad img {
        display: inline-block;
        width: 25%;
      }
      .none {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="loading-page" class="loading-page">
      <img class="loading-img" src="./loading.gif" alt="加载中" />
    </div>

    <div id="ad" class="ad"></div>

    <ul id="menu" class="menu">
      <!-- <li class="menu-item" data-key="hot" data-done="done">
        <span>热门</span>
        <div class="menu-content">
          <p><img class="menu-loading" src="./loading.gif" alt="加载中" /></p>
        </div>
      </li> -->
    </ul>
    <script type="module">
      import { getJSON } from './ajax/index.js';

      const menuURL = 'https://www.google.com/api/mall-PC/index/menu';
      const adURL = 'https://www.google.com/api/mall-PC/index/ad';

      const loadingPageEl = document.getElementById('loading-page');
      const adEl = document.getElementById('ad');
      const menuEl = document.getElementById('menu');

      const p1 = getJSON(menuURL)
        .then(repsonse => {
          // console.log(repsonse);

          let html = '';

          for (const item of repsonse.data) {
            html += `
              <li class="menu-item" data-key="${item.key}">
                <span>${item.title}</span>
                <div class="menu-content">
                  <p><img class="menu-loading" src="./loading.gif" alt="加载中" /></p>
                </div>
              </li>
            `;
          }

          menuEl.innerHTML = html;

          // [{key: "hot", title: "hotplace", subTitles: Array(5)}]

          // ...
        })
        .then(() => {
          const items = menuEl.querySelectorAll('.menu-item');

          for (const item of items) {
            item.addEventListener(
              'mouseenter',
              () => {
                // console.log(item.getAttribute('data-key'));

                // console.log(item.dataset.key);

                if (item.dataset.done === 'done') return;

                getJSON(
                  `https://www.google.com/api/mall-PC/index/menu/${item.dataset.key}`
                )
                  .then(repsonse => {
                    // console.log(repsonse);

                    // [{title: "内地热门城市", cities: Array(27)}]

                    item.dataset.done = 'done';

                    let html = '';

                    for (const item of repsonse.data) {
                      html += `<p>${item.title}</p>`;
                    }

                    item.querySelector('.menu-content').innerHTML = html;
                  })
                  .catch(err => {
                    console.log(err);
                  });
              },
              false
            );
          }
        })
        .catch(err => {
          console.log(err);
        });

      const p2 = getJSON(adURL)
        .then(response => {
          // console.log(response);
          // [{ url: 'http://alimc.img.google.com/class/' }];

          let html = '';
          for (const item of response.data) {
            html += `<img src="${item.url}" alt="" />`;
          }
          adEl.innerHTML = html;
        })
        .catch(err => {
          console.log(err);
        });

      Promise.all([p1, p2]).then(() => {
        // loadingPageEl.style.display = 'none';

        loadingPageEl.classList.add('none');
        // loadingPageEl.classList.remove('none');
      });
    </script>
  </body>
</html>
```
#### [[back to list]](#ajax-application)


### axios
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>axios</title>
</head>
<body>
<!-- <script src="https://unpkg.com/axios/dist/axios.min.js"></script> -->
<script src="https://unpkg.com/axios@0.19.2/dist/axios.min.js"></script>

<script>
  // 1. What is axios
  // axios is a Promise-based HTTP library that can be used in browsers and node.js
  // Third-party Ajax library

  // http://www.axios-js.com/zh-cn/docs/

  // 2. The basic usage of axios
  // import axios
  // console. log(axios);

  const url = 'https://www.google.com/api/http/search/suggest?words=js';
  // axios(url, {
  // method: 'post',

  // // Header information when requesting
  // headers: {
  // 'Content-Type': 'application/x-www-form-urlencoded'
  // // 'Content-Type': 'application/json'
  // },

  // // The data carried by the request header
  // params: {
  // username: 'alex'
  // },

  // // The data carried by the request body

  // // application/json
  // // data: {
  // // age: 18,
  // // sex: 'male'
  // // }

  // // application/x-www-form-urlencoded
  // data: 'age=18&sex=male'

  // // timeout: 10

  // // withCredentials: true
  // })
  // .then(response => {
  // console. log(response);
  // console. log(response. data. data);
  // })
  // .catch(err => {
  // console. log(err);
  // });

  // axios
  // .get(url, {
  // params: {
  // username: 'alex'
  // }
  // })
  // .then(response => {
  // console. log(response);
  // });

  // axios
  // .post(url, 'username=alex&age=18')
  // .then(response => {
  // console. log(response);
  // })
  // .catch(err => {
  // console. log(err);
  // });

  axios
          .post('https://www.google.com/api/http/json/search/suggest?words=js', {
            username: 'alex'
          })
          .then(response => {
            console. log(response);
          })
          .catch(err => {
            console. log(err);
          });

  // axios. put()
  // axios. delete()
</script>
</body>
</html>
```
#### [[back to list]](#expands-for-ajax)

### Fetch
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Fetch</title>
</head>
<body>
<script>
  // 1. What is Fetch
  // Fetch is also a way of front-end and back-end communication
  // Fetch is an alternative to Ajax (XMLHttpRequest), which is Promise-based

  // Ajax compatibility is better than Fetch

  // abort timeout

  // 2. The basic usage of Fetch
  // console. log(fetch);
  // console. log(ajax);

  // fetch() returns Promise object after calling
  const url = 'https://www.google.com/api/http/search/suggest?words=js';

  // body: (...)
  // bodyUsed: false
  // ok: true
  // status: 200
  // statusText: "OK"
  // type: "cors"
  // url: "https://www.im

  // The second parameter is an object, used to configure fetch
  const fd = new FormData();
  fd. append('username', 'alex');
  fetch(url, {
    method: 'post',
    // body: null
    // body: 'username=alex&age=18',
    // body: JSON. stringify({ username: 'alex' })
    body: fd,
    // headers: {
    // // 'Content-Type': 'application/x-www-form-urlencoded'
    // 'Content-Type': 'application/json'
    // }
    mode: 'cors'
    // credentials: 'include'
  })
          .then(response => {
            console. log(response);

            // body/bodyUsed
            // body can only be read once, after reading, it will not be read again

            // ok
            // If it is true, it means that the data can be read, and there is no need to judge the HTTP status code

            if (response. ok) {
              // console. log(response. json());

              return response.json();
              // return response. text();
            } else {
              throw new Error(`HTTP CODE exception ${response.status}`);
            }
          })
          .then(data => {
            console. log(data);
          })
          .catch(err => {
            console. log(err);
          });
</script>
</body>
</html>
```
### [[TOP]](#ajax--fetch)

