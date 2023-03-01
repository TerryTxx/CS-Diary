# Animation by JS and CSS

```text
1. The CSS transition over property allows for simple animations.
   JS can use this property to easily animate elements (a bonus question for food pyramids).
   
   we generally combine, rather than use, the timers created in the previous chapter.
   
2. Function Throttling（delayer）
    After a function has been executed once, a second execution is only allowed after a period greater than the set period；
```
```js
    var lock = true;
    function//to be throttling()
    {
        // if the lock if false(locked), no go through
        if (!lock) return;
        //here is funcion body of the function
        lock = false;//close the lock
        setTimeout(function () {
            lock = true;
        }, 2000);
    }
```


Demo1: we made a box, press move to control it from left to right, and press move again make it moving from right to left.

???What should we do if we want to press move again after the box has reached the bottom in order to return? See part 2, Function throttling.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #box{
            position: absolute;
            top: 100px;
            left: 100px;
            width: 100px;
            height: 100px;
            background-color: orange;
        }
    </style>
</head>
<body>
    <div id="box"></div>
    <button id="btn1">Move</button>
    <script>
        //get element
        var oBox = document.getElementById('box');
        var oBtn1 = document.getElementById('btn1');
        //Set a marker value to confirm the current position of the box.
        var pos =1; //1 left, 2 right
        // add listener
        oBtn1.onclick = function (){
         //and transition
            oBox.style.transition = 'all 2s linear 0s';
            if(pos ==1 ) {
                oBox.style.left = '1100px';
                pos = 2;
            }else if(pos ==2 ){
                oBox.style.left = '100px';
                pos =1;
            }
        };
        </script>
</body>
</html>
```
