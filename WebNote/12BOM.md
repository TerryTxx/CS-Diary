# BOM
### Browser Object Model
###### Change browser size, scrollbar effects etc.

#### [Back to Root Catalogue](https://github.com/TerryTxx/CS-Diary/blob/master/WebNote/html:css:js.md)
## ----------------------
##
### 1. BOM common objects
###### ------------------------------------------------------
#### [2. BOM effects development](#bom-effects-development)
##### [2.1 Back to top Button(Animation)](#back-to-top-button)
##### [2.2 Floor navigation effect](#floor-navigation-effect)
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
   
  (5) 
   a. size of window:
    innerHieght; --The height of the content area of the browser window, including the horizontal scroll bar
    innerWidth;  --The width of the content area of the browser window, including the vertical scroll bar.
    outerHieght; --External height of the browser window
    outerWidth;  --External width of the browser window
   b. resize event, which could be listened
    window.onresize or window.addEventListener('resize')
   c.  window.scroollY   --to find the real scroll size
                        --Often used for positioning, scrolling to where on the page the image will pop up, etc.
```
```
2. window.navigator
     --property retrieves the navigator object, 
       which contains the relevant properties and identifier of the active browser
     ie.
     appName;     -- Brower name
     appVersion;  -- Browser version
     userAgent;   -- Browser user agent (kernel information and wrapper shell information)
     platform；   -- user Operating systems
     
     you can use console.log(navigator.XXXXX) to find your browser details
```
```
3. windows.history
     provides the interface for manipulating the browser callback history.
        A common operation is to simulate a browser back button.
        history.back();
        history.go(-1);
```
```html
        <h1>History function page</h1>
        <a href="javascript:history.back()"></a>
<!--usage of .back()-->
<script>
        <botton id="btn">back</botton>
        btn.onclick = function(){
             history.go(-1);
<!--usage of .go(-1)-->
        };
</script>
```
```
4. window.location
       Identifies the current URL and can be used to command the browser 
       to make a page jump by assigning a value to this property
```
```html
<!--use location to jump-->
<!--ues reload to reload the page-->
    <botton id="btn">GOOGLE</botton>
    <botton id="btn2">Reload</botton>
    <script>
        btn.onclick = function (){
            window.location = 'http://www.google.com';
        };
        btn2.onclick = function (){
            window.location.reload(true);
    </script>
```
```text
***location ,get request query parameter
<!--This will be explained in detail later-->

    ie. http://www.google.com/?a=1&b2
    console.log(window.location.search);
    
```

### BOM effects development
###
##### Back to top button    
###### (with animation)
```text
    1. Back to top button;
        Principle: By changing the document.doucmentElement.scrollTop property, 
           the value is gradually changed by a timer to give the effect of an animated return.
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body {
            height: 5000px;
            background-image: linear-gradient(to bottom, blue,green,yellow);
        }
        .backtop{
            width: 60px;
            height: 60px;
            background-color: blueviolet;
            position: fixed;
            bottom: 100px;
            right: 100px;
        /*    change the mouse point to hand*/
            cursor: pointer;
        }
    </style>
</head>
<body>
   <div class="backtop" id="backtopBTN">
       BackTOP
   </div>
  <script>
      var btn = document.getElementById('backtopBTN');
      var timer;
      btn.onclick = function (){
          //use timer close first
          clearInterval(timer);
          //set timer
          timer = setInterval(function (){
              //downsize the scrollTOP
                document.documentElement.scrollTop -= 150;
                // to check the timer stopped
              if (document.documentElement.scrollTop <= 0){
                  clearInterval(timer);
              }
          },20);
      };
  </script>
</body>
</html>
```
###### [Back to Demo LIST](#------------------------------------------------------)

##### Floor navigation effect
```text
DOM elements all have the offsetTop attribute, which identifies the vertical distance 
            of this element to the positioned ancestor element.
  
  Positioning ancestor: the closest element with a positioning attribute.
```
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .content-part {
            width: 1000px;
            margin: 0px auto;
            margin-bottom: 30px;
            background-color: #ccc;
            font-size: 50px;
        }

        .floornav {
            position: fixed;
            right: 40px;
            top: 50%;
            margin-top: -100px;
            width: 120px;
            height: 200px;
            background-color: orange;
        }

        .floornav ul {
            list-style: none;
        }

        .floornav ul li {
            width: 120px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 26px;
            /* 小手指针 */
            cursor: pointer;
        }

        .floornav ul li.current {
            background: purple;
            color: white;
        }
    </style>
</head>

<body>
    <nav class="floornav">
        <ul id="list">
            <!--   self data for naming the li position-->
            <li data-n="Science" class="current">Science</li>
            <li data-n="Sports">Sports</li>
            <li data-n="NEWS">NEWS</li>
            <li data-n="Food">Food</li>
            <li data-n="Video">Video</li>
        </ul>
    </nav>

    <section class="content-part" style="height: 674px;" data-n="Science">
        Science
    </section>
    <section class="content-part" style="height: 567px;" data-n="Sports">
        Sports
    </section>
    <section class="content-part" style="height: 343px;" data-n="NEWS">
        NEWS
    </section>
    <section class="content-part" style="height: 733px;" data-n="Food">
        Food
    </section>
    <section class="content-part" style="height: 244px;" data-n="Video">
        Video
    </section>


    <script>
        // Event Delegation add listener of li
        var list = document.getElementById('list');
        var contentParts = document.querySelectorAll('.content-part');
        var lis = document.querySelectorAll('#list li');

        list.onclick = function (e) {
            if (e.target.tagName.toLowerCase() == 'li') {
                // getAttribute of data-n's attribute
                //  alert(e.target.getAttribute('data-n'));
                var n = e.target.getAttribute('data-n');
                //so use attribute to find the same data-n's content part
                var contentPart = document.querySelector('.content-part[data-n=' + n + ']');
                // console.log(contentPart.offsetTOP);

                //Let the scrolling of the page be the offsetTop value of this box
                document.documentElement.scrollTop = contentPart.offsetTop;
            }
        }



        var offsetTopArr = [];

        for (var i = 0; i < contentParts.length; i++) {
            offsetTopArr.push(contentParts[i].offsetTop);
        }
        //Push the offsetTop values of all content-part boxes into the array after the page has loaded.
        offsetTopArr.push(Infinity);

        console.log(offsetTopArr);
        //Function Throttle: now floor to check i and curr
        var nowfloor = -1;

        //Listening to window scrolling
        window.onscroll = function () {
            // curr roll value
            var scrollTop = document.documentElement.scrollTop;

            // loop the arr do the checking
            for (var i = 0; i < offsetTopArr.length; i++) {
                if (scrollTop >= offsetTopArr[i] && scrollTop < offsetTopArr[i + 1]) {
                    break;
                }
            }
            // outloop，index i is number of floor alos
            // nowfloor!=i，wrong floor
            if (nowfloor != i) {
                console.log(i);
                // global value to change the index
                nowfloor = i;

                // set index i of current
                for (var j = 0; j < lis.length; j++) {
                    if (j == i) {
                        lis[j].className = 'current';
                    } else {
                        lis[j].className = '';
                    }
                }
            }
        };
    </script>
</body>

</html>
```
###### [Back to Demo LIST](#------------------------------------------------------)
###### [[TOP]](#----------------------)


---

Copyright notice:

Copyright © 2023, Tanxiaoxu
Unauthorized copying or usage of the contents of this article is prohibited.


