
# Box Module:
#### important

### [Back to Root Catalogue](https://github.com/TerryTxx/CS-Diary/blob/master/WebNote/html:css:js.md)

```text
1. Concept of box
   (1) types
   all labels could be thought as Rectangular box, consist of
   width(content), height(content), padding, border

   (2) width and height
   width: content width, px in general();
   Automatically filled by div, li, h esc;
   height: content height, px in general();
   Automatically filled, no content, default as 0

   (3) padding
   padding-top/right/bottom/left

   (4) margin
   out box distance to other box,
   top and bottom the distance not added, use the longest
   margin-top/right/bottom/left
```
```css
     /*(body,ul,pl)has default margin,*/
        body,ul,p {      
      /*Concatenation selectors，clear the defaults*/
            margin : 0;
              padding: 0;
                 }
        box{ margin:0 auto;/*Vertical*/
        text-align: center;/*in line*/
        } 
```
```
   (5) calculation
   base box

   (6) box-sizing
   box-sizing:border-box
   200-(10+10)-(10+10)

2. In-line and block-level elements
   (1) difference
   In-line : width auto contract
   block：width autofill
   <span1><span2>
   <box1> <box2>
   <img1><img2>
   <input1><input2>

   (2) display
   (3) interchange
   display:block   change the elements into block;
   display:inline(not common)   change ~ into inline;
   display:inline-block    change ~ inline block;

   (4) hide the elements
   display:none;  ~=dispose the label
   visibility:hidden;  still there but could not be seen;
```


DEMO:
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .box1 {
            width: 200px;
            height: 200px;
            background-color: gold;
            border: 10px solid darkred;
            padding: 20px;
            margin-bottom: 20px;
        }
        .box2{
            width: 200px;
            height: 200px;
            background-color: gold;
            border: 10px solid darkred;
            padding-top: 10px;
            padding-right: 30px;
            padding-bottom:  70px;
            padding-left: 50px;
            margin-top: 50px;
        /*    padding: 10px 30px 70px 50px (clock pointer)
              padding:10px 20px 30px
              padding:10px 20px*/
            /*padding: 50px;
              padding-bottom:0; use small one to cover*/
        }
        span{border: 2px solid darkblue}
        .span1{
            margin-right: 30px;
        }
        .span2{
            margin-left: 50px;
        /*    total in 80*/
        }

        .base {
            width: 400px;
            height: 300px;
            padding: 10px;
            border: 6px solid blue;
            margin: 40px auto;
        }
        .base .first{
            width:388px;
            height:188px;
            border: 6px solid green;
            margin-bottom: 20px;
        }
        .base .second{
            width:388px;
            height:48px;
            padding: 10px 0;
            border: 6px solid orangered;
        }
        .box6 {
            box-sizing: border-box;
            width:200px;
            height:200px;
            border:10px solid #000;
            padding: 10px;
            margin: 40px auto;
        }
        .pressIn{
            display:block;
            background-color: orangered;
            width: 200px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            text-decoration: none;
            border-radius: 8px;

        }
        .pressIn:hover {
            background-color: darkslategray;
        }
        span6 {
            background-color: pink;
            border: 10px solid darkred;
            width: 150px;
            height: 30px;
            display: inline-block;
        }


    </style>
</head>
<body>
<div class="box1">
    this is a box; this is a box;
    this is a box; this is a box; this is a box
</div>
<div class="box2">
    this is a box; this is a box;
    this is a box; this is a box; this is a box
</div>

<span class="span1">Im a span</span><span class="span2">Im a span</span>


<div class="base">
    <div class="first">first box in base</div>
    <div class="second">second box in base</div>
</div>

<div class="box6">
    a inner box
</div>

<a href="" class="pressIn">press</a>
<span6>for inLine block</span6><span6>for inline block</span6>
</body>
```
###### [[TOP]](#important)


---

Copyright notice:

Copyright © 2023, Tanxiaoxu
Unauthorized copying or usage of the contents of this article is prohibited.

