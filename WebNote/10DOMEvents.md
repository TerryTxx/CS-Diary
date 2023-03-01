# Events, Timing and Delay
## Events
```text
1. Event Listening
DOM allows us to use js code to make HTML elements react to events.
    
    Events: user interaction with the web page; 
            (user clicks, mouse movements, text clicks on text boxes, web page loads...)
    listening: the computer finds this event at any time 
             and thus executes some of our pre-written programs.
    
    Two methods for setting up time listeners: 
        onXXXXX and add Eventlistener(), the difference being in the event propagation
        i.e. the next paragraph--events propagation.
    onXXXXX:
      (1) mouse:  onclick, ondblcick, onmousedown, onmouseup, 
                    onmousemove,  onmouseenter,  onmouseleave, onmousewheel
            oBox.onclick = function(){ // when click the box, the function will run}
      (2) keyboard: onkeypress , onkeydown,  onkeyup;
      (3) form: oninput ,onchange, onfocus, oblur, onsubmit, onreset
      (4) page: onload, onunload
 
2. Event propagation
    Nested boxes, order of event listening:.
(1) Capture phase; (from outer box to inner box in first)
    addEventListener() DOM2 could listen all phase;
    
    oBox.addEventListener('click', function(){}, true);
                          no on                  true is capture and false is bubbling
    
(2) bubbling phase; (from inner to outer box later)
     onXXX can only listen to the bubble phase, so it is DOM0;
     
(3) the innest is only ordered by the codes order: DOM0 cover the previous, DOM2 by order
3. Event Objects
    (1)The event handler provides a formal parameter, i.e. an object for it, 
            encapsulating the details of this event
    (2)This event is usually represented by the word Event or e
        oBox.onmouseove = function(e){};
    (3)general attribute:
        a. clientX/clientY
        b. pageX/PageY
        c. offsetX/offsetY
        e.charCode and e.keyCode
    (4) general function
        a  e.preventDefault()
        b  e.stopPropagation()
        

```
![event01.jpeg](pics%2Fevent01.jpeg)
![event02.jpeg](pics%2Fevent02.jpeg)
![event03.jpeg](pics%2Fevent03.jpeg)
```text
4. Event Delegation
      (1) a.  Add event listeners in batches, usually using loop, but can cause performance problems and excessive memory.
          b.  New elements dynamically bound to events, need to add event listeners separately, 
        cannot automatically get event listeners, memory and performance is large.
      (2) Delegation of events from descendant elements to ancestor elements, using the event bubbling mechanism.

                As follows, we can listen for the onclick event, 
                which will be passed to the ancestor via event bubbling, 
                regardless of whether any li is clicked on.
                <ul id="list">
                        <li>list</li>
                        <li>list</li>
                        <li>list</li>
                        <li>list</li>
                        <li>list</li>
                        <li>list</li>
                        <li>list</li>
                    </ul>
     *** target, the source element that triggered the sub-event.
        currentTarget, the element to which the event handler is attached.
        
        (3) characteristics opposite of (1)
       *** onmouseenter(not bubble)   onmouseover(bubble)
       
 5. 


        

```
### Exercise

### [1.1 Demo of on-sth mouse](#demo-of-on-sth-mouse)
### [1.3 Demo of on-sth form](#demo-of-on-sth-form)
### [2. Demo of Event propagation order](#demo-of-event-propagation-order)
### [3.3 Demo of Event Object functions](#demo-of-event-object-functions)
### [3.3.e. Case of using char/keyCode](#case-of-using-char-keycode)
### [3.4.a. Case of using preventDefault](#case-of-using-preventdefault)
### [3.4.b. Case of using stopPropagation](#case-of-using-stoppropagation)
### [4.Add event listeners in batches](#add-event-listeners-in-batches)
### [5.Use of Event Delegation](#use-of-event-delegation)



#### Demo of on-sth mouse

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .box{
            width: 200px;
            height: 200px;
            border: 1px solid #000;
        }
    </style>
</head>
<body>
<div id="box">
</div>
</body>
<script>
    var oBox = document.getElementById('box');
    oBox.onclick = function (){
        alert('hello')
    }
    oBox.onmousedown = function (){
        alter('mouse down')
    }
</script>
</html>
```
###### [[back to list]](#exercise)
#### Demo of on-sth form
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
    <body>
       <form id="myform">
           <p>
               Name:
               <input type="text" name="nameField">
           </p>
           <p>
               Age :
               <input type="text" name="ageField">
           </p>
       </form>
    </body>
    <script>
        var myform = document.getElementById('myform');
        var nameField = myform.nameField;
        var ageField = myform.ageField;

        nameField.oninput = function (){
            console.log('u are typing name');
        }//onchange finished change
        
    </script>
</html>
```
###### [[back to list]](#exercise)
#### Demo of Event propagation order
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #box1 {
            width:200px;
            height: 200px;
            border: 1px solid #000;
            background-color: transparent;
        }
        #box2 {
            width:100px;
            height: 100px;
            border: 1px solid #000;
            background-color: transparent;
        }
        #box3 {
            width:50px;
            height: 50px;
            border: 1px solid #000;
            background-color: transparent;
        }
    </style>
</head>
<body>
<div id="box1"></div>
<div id="box2"></div>
<div id="box3"></div>

</body>
<script>
    var oBox1 = document.getElementById('box1');
    var oBox1 = document.getElementById('box2');
    var oBox1 = document.getElementById('box3');

    oBox1.addEventListener('click',function (){
        console.log('BOX1 Capturing Phrase')
    }, true);

    oBox2.addEventListener('click',function (){
        console.log('BOX2 Capturing Phrase')
    }, true);

    oBox3.addEventListener('click',function (){
        console.log('BOX3 Capturing Phrase')
    }, true);

    oBox1.addEventListener('click',function (){
        console.log('BOX1 Bubbling Phrase')
    }, false);

    oBox2.addEventListener('click',function (){
        console.log('BOX2 Bubbling Phrase')
    }, false);

    oBox3.addEventListener('click',function (){
        console.log('BOX3 Bubbling Phrase')
    }, false);


</script>
</html>
```
###### [[back to list]](#exercise)
#### Demo of Event Object functions
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #box1 {
            width:200px;
            height: 200px;
            background-color: #000;
            margin: 100px;
        }
        #info{
            font-size: 30px;
        }
        body {
            height: 2000px;
        }
    </style>
</head>
<body>
<div id="box1"></div>
<div id="info"></div>


</body>
<script>
    var oBox1 = document.getElementById('box1');
    var oInfo = document.getElementById('info');

    oBox1.onmousemove = function (e) {
        oInfo.innerHTML ='offsetX/Y: '+e.offsetX + '  ,  '+ e.offsetY+'<br>'
                +'clientX/Y: '+ e.clientX+'  ,  '+e.clientY+'<br>'
                +'pageX/Y'+e.pageX+"  ,  "+e.pageY
    };

</script>
</html>
```
###### [[back to list]](#exercise)
#### Case of using char-keyCode
Exercise: make an orange box moving by keyboard
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #box {
            position: absolute;
           top:200px;
            left: 200px;
            width: 100px;
           height: 100px;
            background-color: orange;
       }
    </style>
</head>
    <body>
        <div id="box"></div>
    </body>
    <script>
        var oBox = document.getElementById('box');

        var t =200;
        var l = 200;

        document.onkeydown = function (e) {
            switch (e.keyCode){
                case 37:
                    l-=3;
                    break;
                case 38:
                    t -=3;
                    break;
                case 39:
                    l+= 3;
                    break;
                case 40:
                    t+= 3;
                    break;
            }
            oBox.style.left = l + 'px';
            oBox.style.top = t + 'px';
        }

    </script>
</html>
```
###### [[back to list]](#exercise)
#### Case of using preventDefault
Exercise: made a text, could not tape uppercase
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
    </style>
</head>
    <body>
        <p>
            <input type="text" id="field">
        </p>
    </body>
    <script>
        var oField = document.getElementById('field');

        oField.onkeypress = function (e) {
            if(!(e.charCode >= 48 && e.charCode <= 57 || e.charCode >= 97 && e.charCode <= 122)){
                e.preventDefault();
            }
        };

    </script>
</html>
```
Exercise: Create a function that, when the mouse is inside the box, will automatically scroll to announce the number
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #box {
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: orange;
       }
        body{
            height: 2000px;
        }
    </style>
</head>
    <body>
        <div id="box"></div>
        <h1 id="info">0</h1>
    </body>
    <script>
        var oBox = document.getElementById('box');
        var oInfo = document.getElementById('info');
        // variables Value of a
        var a = 0;

        // event listener of wheel
        oBox.onmousewheel = function (e){
            e.preventDefault();
            if(e.deltaY > 0){
                a--;
            }else{
                a++;
            }
            oInfo.innerText = a;
        }
    </script>
</html>
```
###### [[back to list]](#exercise)
#### Case of using stopPropagation
to understand the codes of the usage of stopPropagation
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #box {
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: orange;
       }

    </style>
</head>
    <body>
        <div id="box">
            <button id="btn">Press</button>
        </div>
    </body>
    <script>
      var oBox = document.getElementById('box');
      var oBtn = document.getElementById('btn');
      //could stop the phrase process
      // oBox.onclick = function (){
      //     console.log("IM box")
      // }
      // oBtn.onclick = function (){
      //     e.stopPropagation();
      //     console.log("IM botton")
      // }

      oBox.addEventListener('click',function (){
          e.stopPropagation();
          //stop the event from here
          console.log("IM box")
      },true);
      oBtn.addEventListener('click',function (){
          console.log("IM botton")
      },true);
    </script>
</html>
```
Exercise: make a div, spring out by pressing the button, and fade out by any blank place
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .modal{
            width: 400px;
            height: 140px;
            background-color: antiquewhite;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top:-70px;
            margin-left: -200px;
            display: none;
        }

    </style>
</head>
    <body>
    <div class="modal" id="modal"></div>
    <button id="btn">Press</button>
    </body>
    <script>
        var oBtn = document.getElementById('btn');
        var oModal = document.getElementById('modal');

        //when click, show the modal
        oBtn.onclick = function (e){
            // incase propagation to the document
            e.stopPropagation();
            oModal.style.display = 'block';
        }
        //when click, display the modal
        document.onclick = function (){
            oModal.style.display = 'none';
        }
        //when click the modal, not close,
        oModal.onclick = function (e){
            // incase propagation to the document
            e.stopPropagation();
        }
    </script>
</html>
```
###### [[back to list]](#exercise)
#### Add event listeners in batches
Exercise: There is an unordered list <ul> on the page, it has 20 <li> elements inside it,
        please add click event listeners to them in bulk to achieve the effect:
        which li element is clicked, which one turns red.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

</head>
    <body>
    <ul id="list">
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
    </ul>
    </body>
    <script>
        var oList = document.getElementById('list');
        var lis = oList.getElementsByTagName('li');
        //alter(lis.length) to check the compiling at current is OK
        //loop element add listener
        for (let i = 0; i < lis.length; i++) {
            lis[i].onclick = function (){
                this.style.color='red';
            };
        }
    </script>
</html>
```
Eexercise: there is an unordered list <ul> on the page which has no <li> element inside it, 
        make a button which adds a li by clicking on it and require each added li to have a click-to-red
        listener event to achieve the effect i.e. point which  turns red.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

</head>
    <body>
    <button id="btn">press to add list</button>
    <ul id="list">
    </ul>
    </body>
    <script>
      var oBtn = document.getElementById('btn');
      var oList = document.getElementById('list');
      var lis = oList.getElementsByTagName('li')

      // press button event
      oBtn.onclick = function (){
          // add a orphan node of li
          var oLi = document.createElement('li');
          oLi.innerHTML = 'This is a list'
          // append to the node tree
          oList.appendChild(oLi);
          // add onclick event listening
          oLi.onclick = function (){
              this.style.color = 'red';
          };
      };
    </script>
</html>
```
###### [[back to list]](#exercise)
#### Use of Event Delegation
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
    <body>
    <button id="btn">press to add list</button>
    <ul id="list">
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
    </ul>
    </body>
    <script>
      var oBtn = document.getElementById('btn');
      var oList = document.getElementById('list');
      //var lis = oList.getElementsByTagName('li')
        oList.onclick = function (e) {
            // e.target
            e.target.style.color = 'red';
        };
        oBtn.onclick = function (e) {
            //creat li
            var oLi = document.createElement('li');
            //content
            oLi.innerText = 'new member';
            //append to Node
            oList.appendChild(oLi);
        }
    </script>
</html>
```
###### [[back to list]](#exercise)
