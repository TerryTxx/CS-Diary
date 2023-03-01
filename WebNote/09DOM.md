# DOM of Nodes
### JS can manipulate HTML and CCS, via the DOM.

```text

1. why need DOM:
```
```html
    <div id = "box">
    <p>milk</p
    <p>coffee</p
    <p>juice</p
</div>
<!--If you want to add coke after the milk tag, the HTML is counted as a string.-->
<!--The DOM treats the div as a node with three P's as children inside,-->
<!--and then inserts it after the original node 0.-->
```

```
2. What is DOM, Document Object Model, is an interface for js to manipulate HTML documents. 
    (1) It is intended to make document manipulation easier.
     （like a flowchat for a DOM of HTML）
    (2) Nodes relations: children, parent, firstElementChild, lastElementChild, previousElementSibiling, nextElementSilbing

3. (1) document is an object in DOM, we can regard document object is a HTML, its DOM nodeTree, is the root
*****JS code is generally written after the corresponding HTML node, otherwise JS cannot find the HTML node.
*****Delayed run: you can make the interface load and then execute the specified code 
*****by using window.onload = function(){}   -- Can be interpreted as a project or code listener
```

```js
    var a =  document.getElementById();//by id element
    var b = document.getElementByTagName();//by tag name in ARRAY
    var c = document.getElementByClassName();//by Class name in Array   
    var d = document.querySelector();// only get the first matched element
    var e = document.querySelectorAll();//get an array, of all elements, must be an array
```

```
*4. Node：
    Node Type <p>/<div>(1) char(3)  remark(8)   document(9)   DTD(10)
    （1）Create, Remove, Clone
      a. Create:
        document.creatElement() create a pointed tag name
          step1:  -> var oDiv = document.creatElement('div');
        this is a orphan Node,is not on the DOM tree;
        useing appendChild()/   base.~(orphanNode)    end of the DOM
           step2:     insertBefore()/     base.~(orphanNode, slotNode);    in DOM before slot
      b. Moving the node;
      
      (2) Delete/remove
           base.removeChild(thechildnode)   the child node should be deleted by base
           
      (3) colonNode(), get a orohanNode, and use append or insert as 3.1.a
            var opNode = postNode.cloneNode();  --colon the opNode itself
            var opNode = postNode.cloneNode(true);  -- colon the opNpde and all its subNodes

5. Change the element Node of HTML:
    (1)innerHTML: HTML language to set the content in the node;
    (2)innerText: TEXT parameter to set the content in the node;

6. Change the element Node of CSS:
    (1) oBox.style.backgroundColor = 'red';
    (2) oBox.style.backgroundImage = 'url(images/1.jpg)';
    (3) oBx.style.fontSize = '32px';
    (4) oBx.setAttribute('data-n',10);  if the data is not under W3C
         
```
### Exercise

### [3.1 onload the Node](#onload-the-node)
### [4.1.a.  Creat a Node](#creat-a-node)
### [4.1.b. Moving Node](#moving-node) 
### [4.2. Deleting Node](#deleting-nodes)
### [4.3. Clone Node](#colne-node)
### [5. DOM for change elements of HTML](#dom-for-change-elements-of-html)
### [6. DOM for CSS](#dom-for-css)


#### onload the Node
```html
```
#### Creat a node
exercise01: cereat a oBox with 3 p labels, and an op node, use append and insert
exercise02: creat a 20*12 form by DOM node

#### Answer:
```html
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <title>My Milk Factory</title>
    <style>
        td{
            width:20px;
            height: 20px;
            border: 1px solid #000;
        }
    </style>
</head>
<body>

<div class="box">
    <p>I'm P0</p>
    <p>I'm P1</p>
    <p>I'm P2</p>
    <!--      3.1  creat a node-->
    <script>
        var oBox = document.getElementById('box');
        var Ps = oBox.getElementsByTagName('p')
        var oP = document.createElement('op');
        // appendChild
        oBox.appendChild(oP);
        oP.innerText = 'Im new member';
        // insertBefore
        oBox.insertBefore(oP, Ps[0]);
    </script>
    <!--  3.1 exercise :get a 20*12 form auto -->
    <table id="mytable"></table>
    <script>
        var mytable = document.getElementById('mytable');
        for (var i = 0; i < 20; i++) {
            //creat tr label
            var tr = document.creatElement('tr');
            for (var j = 0; j < 20; j++) {
                //creat td label
                var td = document.creatElement('td');
                //tr append to td
                tr.appendChild(td);
            }// mytable append tr
            mytable.appendChild(tr);
        }
    </script>
    </script>
</div>

</body>
</html>
```
###### [[back to list]](#exercise)
#### Moving node
exercise01: move the label p from one div(box1) to another box2
#### Answer:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="box1">
    <p id="para">I'm a paragraph</p>
</div>
<div id="box2">
    <p>Im old member in box2</p>
    <p>Im old member in box2</p>
    <p>Im old member in box2</p>
</div>
<!--moving the p label from box1 to box2-->
<script>
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var para = document.getElementById('para');
    var ps_inbox2 = document.getElementById('p');

    //(1)box2.appendChild(para);
    //(2)
    box2.insertBefore(para,ps_inbox2[0]);

</script>
</body>
</html>
```
###### [[back to list]](#exercise)
#### Deleting Nodes
#### Answer:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div id="box">
        <p>I'm a p node</p>
    </div>
<!--deleting the node-->
        <script>
            var box = document.getElementById('box');
            var the_first_p = document.getElementsByTagName('p')[0];

            box.removeChild(the_first_p);
        </script>
</body>
</html>
```
###### [[back to list]](#exercise)
#### Colne Node
#### Answer:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div id="box1">
        <ul>
        <li>milk</li>
            <li>coke</li>
            <li>coffee</li>
        </ul>
    </div>
    <div id="box2"></div>
    <script>
            var box1 = document.getElementById('box1');
            var box1 = document.getElementById('box2');
            var theul = box1.getElementsByTagName('ul')[0];
<!--cloning the node-->
           // var new_ul = theul.cloneNode();
            var new_ul = theul.cloneNode(true);
            box2.appendChild(new_ul);

    </script>
</body>
</html>
```
###### [[back to list]](#exercise)
#### DOM for change elements of HTML
#### Answer:
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
      oBox.innerHTML = 'Maynooth';
      // html content could be used also:
      oBox.innerHTML = '<ul><li>milk</li><li>coffee</li></ul>>';
      //text only
      oBox.innerText ='Maynooth'
    </script>
</html>
```
###### [[back to list]](#exercise)
#### DOM for CSS
#### Answer:
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
<div class="box" id="box">box</div>
<img src="pics/0.jpg" height="360" width="650" id="src"/>
<a href="http://www.google.ie" id="link"></a>
</body>
<script>
    var oBox =document.getElementById('box');
    var olink = document.getElementById('link');
    var oPic = document.getElementById('src');
    oBox.style.backgroundColor = 'red';
    olink.href ='http://www.apple.com';
    oPic.src = 'pics/0.jpg';
</script>
</html>
```
###### [[back to list]](#exercise)
