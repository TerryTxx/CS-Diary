# BOM
##### Browser Object Model
###### Change browser size, scrollbar effects etc.
###### easier than DOM

##### 1. BOM common objects
```text

1. Window object
   (1)The Window object is the window that the current JS script is in, and this window contains the DOM structure.
    In short: the properties of window.document, which is the document object
  (2)In browsers with tabbed functionality, each tab has its own window object, 
    i.e. a window object is not shared between tabs of the same window.
    
 *(3)Global variables are properties of window variables:
        so we can use lots js files could use same file
```
![Screenshot 2023-03-01 at 20.23.41.png](pics%2FScreenshot%202023-03-01%20at%2020.23.41.png)
#### [pic from](https://juejin.cn/post/6844903939008102413)
```js
<!-- 1. if in js-->
    var a =10;
    console.log(window.a==a)//true

//2. if different JS files have a var m
// in js1
var m =6; 
//in js2
m++; console.log(m);
// then in HTML window
    <script src="js/js1.js"></script>
    <script src="js/js2.js"></script>
// the m is only global value, and the console will have 7

```
```text
    (4)With the above code, we proved that global variables are window's variables 
        and that built-in functions are generally window's methods. 
        For example: setInterval(), alter(), etc.
```
```js
     console.log(window.alert = alert);//true
     console.log(window.setInterval = setInterval);//true
     window.setInterval(function (){// the hi will print every second
        window.console.log('hi');
    })
// and the function hasOwnProperty to check
   console.log(window.hasOwnProperty('setInterval')) //ture
```
![Screenshot 2023-03-01 at 20.46.56.png](pics%2FScreenshot%202023-03-01%20at%2020.46.56.png)
```text
DOM area: 5 (the document, a folder written by web developers with index.html, CSS and JS, deployed on the server, 
                we can load the document locally by typing the URL in the browser's address bar 
                and then enter it, browse, right-click to view the source code, etc.) 
BOM area's: 1 (browser tabs, address bar, search bar, bookmark bar, window zoom close button, menu bar, etc.) 
            2 (scroll bar scroll bar) 
            3 (browser's right click menu) 
            4 (status bar when document is loaded, display http status code, etc.)
```
```text
   (5) size of window:
    innerHieght; --The height of the content area of the browser window, including the horizontal scroll bar
    innerWidth;  --The width of the content area of the browser window, including the vertical scroll bar.
    outerHieght; --External height of the browser window
    outerWidth;  --External width of the browser window
```

```
2. Navigator object

3. History object

4. Location object

```
##### 2. BOM effects development