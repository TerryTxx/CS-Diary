## Cookie Store in local Ajax&Fetch

____________________________
#### [Back to RootPage](https://github.com/TerryTxx/CS-Diary/blob/master/README.md)

----

### Store in local
- [Cookie](#)
- [localStorage](#)


#### what is Cookie

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
#### [back to list](#store-in-local)
