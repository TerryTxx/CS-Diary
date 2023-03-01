# CSS  
## Transition & Animation

### [Back to Root Catalogue](https://github.com/TerryTxx/CS-Diary/blob/master/WebNote/html:css:js.md)

### --Transition
```text
1. Transition general usage
   transition: width 1s linear 0s;
   ·transition-property           width
   ·transition-duration           1s
   ·transition-timing-function    linear
   ·transition-delay              0s
   (1)width,height,left,top,border-radius etc.  box1-box4
   (2)background and text color
   (3)2D & 3D    box5,box6

2. Transition jogging effects (linear)   box7
   ease
   linear
   ease-in
   ease-out
   ease-in-out
   //cubic-bezier.com

3. Transition testing
   box8

```


DEMO:
```javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        *{
            margin:0;
            padding: 0 ;
        }

        .box1{
            width: 200px;
            height: 200px;
            background-color: orangered;
            transition: width 3s linear 0s;
            margin-bottom: 10px;
        }
        .box1:hover{
            width: 800px;
        }
        .box2 p {
            position: relative;
            width: 200px;
            height: 200px;
            background-color: orange;
            transition: left 1s linear 0s;
            left:0;
            margin-bottom: 10px;
        }
        .box2:hover p{
            left: 1000px;
        }
        .box3 {
            width: 200px;
            height: 200px;
            background-color: red;
            transition: background-color 4s linear 0s;
            margin-bottom: 10px;
        }
        .box3:hover{
            background-color: plum;
        }

        .box4 {
            width: 200px;
            height: 200px;
            background-color: green;
            transition: background-color 2s linear 0s;
            border-radius: 0;
            transition: border-radius 2s linear 0s;/*(all 2s linear 0s)*/
            margin-bottom: 10px;
        }
        .box4:hover{
            background-color: blueviolet;
            border-radius: 50%;
        }

        .box5 {
            width: 200px;
            height: 200px;
            background-color: darkgray;
            transition: transform 1s linear 0s;
            margin-bottom: 10px;
        }
        .box5:hover{
            transform: scale(1.2) rotate(180deg);
        }

        .box6 {
            perspective: 300px;
            width: 200px;
            height: 200px;
            border: 2px solid black;
            margin-bottom: 10px;
        }
        .box6 p{
            width: 200px;
            height: 200px;
            background-color: saddlebrown;
            transition: transform 0.5s linear 0s;

        }
        .box6:hover p{
            transform: rotateY(180deg) ;
        }

        .box7 {
            border: 1px solid black;
        }
        .box7 p{
            width: 60px;
            height: 60px;
            background-color: dodgerblue;
            margin-bottom: 10px;
            position: relative;
            left:0;
            transition: left 4s linear 0s;
        }
        .box7 p:nth-child(2){
            transition-timing-function: ease;
        }
        .box7 p:nth-child(3){
            transition-timing-function: ease-in;
        }
        .box7 p:nth-child(4){
            transition-timing-function: ease-out;
        }
        .box7 p:nth-child(5){
            transition-timing-function: ease-in-out;
        }
        .box7:hover p{
            left: 400px;
        }

        .box8 {
            width: 2000px;
            overflow: hidden;
            margin: 40px auto;
        }
        .box8 ul{
            list-style:none;
        }
        .box8 ul li{
            float:left;
            width:560px;
            height: 360px;
            margin-right: 20px;
            position: relative;
        }
        .box8 uli li img{
            width: 560px;
            height: 360px;
        }
        .box8 ul li .info{
            position: absolute;
            width: 550px;
            height: 30px;
            line-height: 30px;
            color: wheat;
            bottom: 0;
            padding-left: 30px;
            background-color: rgba(0,0,0,.5);
            opacity: 0;
            transition: opacity 1.5s ease 0s;
        }
        .box8 ul li:hover .info{
            opacity: 1;
        }


    </style>
</head>
<body>
 <div class="box1"></div>

 <div class="box2">
     <p></p>
 </div>

 <div class="box3"></div>

 <div class="box4"></div>

 <div class="box5"></div>

 <div class="box6">
     <p></p>
 </div>

 <div class="box7">
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <p></p>
 </div>

 <div class="box8">
    <ul>
        <li>
            <img src="../image/0.jpg" alt="">
            <div class="info">China Palace</div>
        </li>
        <li>

            <img src="../image/1.jpg" alt="">
            <div class="info">National Museum</div>
        </li>
        <li>

            <img src="../image/2.jpg" alt="">
            <div class="info">Ancient Bridge</div>
        </li>
    </ul>
 </div>


</body>
</html>

```