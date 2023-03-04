## Cookie Store in local Ajax&Fetch

____________________________
#### [Back to RootPage](https://github.com/TerryTxx/CS-Diary/blob/master/README.md)

----


### Cookie
- [what is Cookie](#what-is-cookie)
- [Cookie Attribute](#cookie-attribute)
- [Cookie encapsulation](#cookie-encapsulation)
- [Cookie Notice](#cookie-notice)
### Localstorage (just know)
- [localStorage usage](#localstorage-usage)
- [localStorage notice](#localstorage-notice)

---
#### what is Cookie
![cookie in browser.png](pics%2Fcookie%20in%20browser.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Understand Cookie</title>
  </head>
  <body>
    <script>
      // 1. What is a cookie?
      // A cookie is an HTTP cookie, or simply a cookie
      // It is a way for the browser to store data
      // Because they are stored locally by the user, rather than on the server, they are stored locally
      // Generally sent automatically to the server with each browser request

      // 2. What are cookies used for?
      // Cookies are used to track the habits of users visiting the site, such as when they visit, which pages they visit, how long they stay on each page, etc.

      // 3. Handling cookies in the browser
      // Do not store sensitive information such as passwords in cookies
    </script>
  </body>
</html>
```
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Cookie general usage</title>
  </head>
  <body>
    <script>
      // 1. Writing a cookie
      // document.cookie = 'username=zs';
      // document.cookie = 'age=18';

      // You can't set them all together, only one by one
      // document.cookie = 'username=zs; age=18';

      // 2. Read the cookie
      console.log(document.cookie);

      // Reads a string of name-value pairs, each separated by a ";" (a semicolon and a space)
      // username=zs; age=18
    </script>
  </body>
</html>
```
#### [back to list](#cookie)


### Cookie Attribute
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Cookie Attribute</title>
  </head>
  <body>
    <script>
// 1. Name and Value of the cookie
      // The two most important attributes that must be filled in when creating a cookie, 
//          the other attributes can use the default values



// 2. Expiry (expiry) time
      // For cookies that expire, they will be cleared by the browser
      // If no expiry time is set, such a cookie is called a session cookie
          // It is stored in memory and disappears when the session ends, i.e. when the browser is closed

      // document.cookie = 'username=alex';

      // If you want to keep it around for a long time, set Expires or Max-Age
          // expires
          // value is of type Date
          // document.cookie = `username=alex; expires=${new Date(
          // '2100-1-01 00:00:00'
          // )}`;

          // max-age
          // The value is a number indicating the current time + how many seconds it will expire in in seconds
          // document.cookie = 'username=alex; max-age=5';
          // document.cookie = `username=alex; max-age=${24 * 3600 * 30}`;

          // If the value of max-age is 0 or a negative number, the cookie will be deleted
          // document.cookie = 'username=alex';
          // document.cookie = 'username=alex; max-age=0';
          // document.cookie = 'username=alex; max-age=-1';

      // 3. Domain domain（Just know）
      // Domain limits the scope of access to cookies (different domains)

      // Using JS you can only read and write cookies from the current domain or parent domain, not from other domains
      // document.cookie = 'username=alex; domain=www.google.com';

      // Parent domain: .google.com

      // 4. Path path (Just know)
      // Path limits access to the cookie (under the same domain)

      // Using JS you can only read and write cookies for the current path and the parent path, not for the parent path
      // document.cookie = 'username=alex; path=/course/list';
      // document.cookie = 'username=alex; path=/1.Cookie/';

      // A cookie is only the same when the Name, Domain and Path fields are all the same

      // 5. HttpOnly(Just know)
      // A cookie with the HttpOnly property set cannot be accessed by JS

      // 6.Secure in http
      // Secure restricts the sending to the server only if https is used instead of http

      // Domain, Path, and Secure must all be satisfied before a cookie can be sent to the server with a request that has not yet expired
    </script>
  </body>
</html>
```
#### [back to list](#cookie)


### Cookie encapsulation
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Cookie encapsulation</title>
  </head>
  <body>
    <button id="cn">Chinese</button>
    <button id="en">English</button>

    <script type="module">
   //find JS below module
      // from '. /cookie.js' import { set, get, remove }
      // from '. /cookie.js' import { set, get, remove }
      // set('username', 'alex');
      // set('username', 'zs');
      // set('age', 18);
      // set('username', 'zhang san');

      // set('sex', 'male', {
      // maxAge: 30 * 24 * 3600
      // });

      // remove('username');
      // remove('username');

      // console.log(get('username') ).
      // console.log(get('age')).
      // console.log(get('username')).
      // console.log(get('sex')).

      // Use encapsulated cookies to switch the language of the site
     // From '. /cookie.js' leads to { set }.
      const cnBtn = document.getElementById('cn');
      const enBtn = document.getElementById('en');
      cnBtn.addEventListener(
              'click'.
              () => {
        set('language', 'cn', {
          maxAge: 30 * 24 * 3600
        });
        window.location = '. /2-6.Cookie's wrapper.html'.
      },
      false
      );
      enBtn.addEventListener(
              'click'.
              () => {
        set('language', 'en', {
          maxAge: 30 * 24 * 3600
        });
        window.location = '. /2-6.Cookie's wrapper.html'.
      },
      false
      );
    </script>
  </body>
</html>
```
### IN js：
#### if hard to read, review ES6 Module in first
```js
// Write the cookie
const set = (name, value, { maxAge, domain, path, secure } = {}) => {
    Let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`.
// encodeURICompondent is used for other languages with English
    if (typeof maxAge == 'number'){
        cookieText += `; max-age=${maxAge}`;
    }
    if (domain) {
        cookieText += `; domain=${domain}`;
    }
    if (path) {
        cookieText += `; path=${path}`;
    }
    if (secure) {
        cookieText += `; secure`;
    }
    document.cookie = cookieText;
// document.cookie = 'username=alex; max-age=5; domain='
    };
// Get the value of the cookie by name
    const get = name => {
    name = `${encodeURIComponent(name)}`;
// encodeURICompondent is used for other languages with English
    const cookies = document.cookie.split('; ');
    for (const item of cookies) {
        const [cookieName, cookieValue] = item.split('=');
        if (cookieName == name) {
            return decodeURIComponent(cookieValue);
        }
    }
    Return;
// "username=alex; age=18; sex=male
// ["username=alex", "age=18", "sex=male"]
// ["username", "alex"]

// get('username').

// Delete cookies based on name, domain and path
    const remove = (name, { domain, path } = {}) => {
        set(name, '', { domain, path, maxAge: -1 });
    };
    
    export { set, get, remove };
```
#### [back to list](#cookie)

### Cookie Notice
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Cookie Notice</title>
  </head>
  <body>
    <script>
      // 1. Both front and back ends can create cookies

      // 2. Cookies are limited in number
      // The number of cookies per domain is limited

      // When the limit for a single domain is exceeded and a cookie is set, the browser will clear the previously set cookie

      // 3. Cookies are limited in size
      // The storage capacity of each cookie is small, at most 4KB
    </script>
  </body>
</html>
```
#### [back to list](#cookie)

### Localstorage usage
general usage:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>understand localStorage</title>
  </head>
  <body>
    <form id="login" action="https://www.imooc.com" method="post">
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="submit" id="btn" value="登录" />
    </form>

    <script>
      // 1. What is localStorage
      // localStorage is also a way of storing data in the browser (local-storage), it is only stored locally and not sent to the server

      // There is a limit to the total size of localStorage under a single domain

      // 2. Manipulating localStorage in the browser

      // 3. Basic usage of localStorage
      // console.log(localStorage);

      // // setItem()
      // localStorage.setItem('username', 'alex');
      // localStorage.setItem('username', 'zs');
      // localStorage.setItem('age', 18);
      // localStorage.setItem('sex', 'male');

      // // length
      // // console.log(localStorage.length);

      // // getItem()
      // // console.log(localStorage.getItem('username'));
      // // console.log(localStorage.getItem('age'));

      // // // // Get non-existent returns null
      // // console.log(localStorage.getItem('name'));

      // // // removeItem()
      // // localStorage.removeItem('username');
      // // // localStorage.removeItem('age');

      // // // // Remove non-existent key, no error
      // // // localStorage.removeItem('name');

      // // // clear()
      // localStorage.clear();

      // console.log(localStorage);

      // 4. Use localStorage to implement autofill
      const loginForm = document.getElementById('login');
      const btn = document.getElementById('btn');

      const username = localStorage.getItem('username');
      if (username) {
        loginForm.username.value = username;
      }

      btn.addEventListener(
              'click',
              e => {
                e.preventDefault();
                // Data validation
          // console.log(loginForm.username.value);

          localStorage.setItem('username', loginForm.username.value);

          loginForm.submit();
        },
        false
      );
    </script>
  </body>
</html>
```
### Localstorage notice
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>localStorage Notice</title>
  </head>
  <body>
    <script>
      // 1. The storage duration of localStorage
      // localStorage is persistent local storage that never expires unless it is manually cleared (e.g. by js delete, or by clearing the browser cache)

      // sessionStorage
      // sessionStorage is emptied when the session ends (e.g. by closing the browser)
      // sessionStorage.setItem('username', 'alex');
      // sessionStorage.getItem('username');
      // sessionStorage.removeItem('username');
      // sessionStorage.clear();

      // 2. localStorage Types of keys and values
      // localStorage can only store keys and values of string type
      // If they are not strings, they will be converted to strings before being stored

      // localStorage.setItem({}, 18);
      // // localStorage.setItem('students', [{},{}]);
      // console.log(
      // typeof localStorage.getItem('[object Object]'),
      // localStorage.getItem('[object Object]')
      // );

      // console.log({}.toString());

      // 3. Can localStorage be shared across domains?
      // You can't share localStorage between different domains

      // 4. Compatibility of localStorage
      // IE7 and below do not support localStorage, IE8 supports it from now on

      // caniuse.com
    </script>
  </body>
</html>
```
#### [back to list](#localstorage--just-know-)