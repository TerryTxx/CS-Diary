# CSS --Animation
```text
1. animation usage
   (1) @keyframes
   @keyframes r{
   from{ transform: rotate(0);}     ----from
   to{ transform: rotate(360deg);}  ----end
   animation: r 1s linear 0s;}
   (2) alternate
   animation: movelr 2s linear 0s infinite alternate;
   (3) forwards
   animation: changeToCircle 1s linear 0s forwards;
   (4) multi Keyframes
2. animation testing
```

[pic sources](https://github.com/TerryTxx/CS-Diary/blob/master/WebNote/pics/CSS)
## test 1:
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animation</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body{
            padding: 20px;
            background-color: #f2f2f2;
        }
        .box {
            width: 508px;
            height: 107px;
            margin: 40px auto;
        }
        .box ul{
            list-style: none;
        }
        .box ul li{
            float: left;
            width: 107px;
            height: 107px;
            /*background-color: red;*/
            margin-right: 20px;
            position: relative;
        }
        .box ul li::before{
            content: '';
            display: block;
            width: 107px;
            height: 107px;
            transition: transform 1s ease 0s;
        }
        .box ul li:nth-child(1)::before{
            background-image: url(../image/a_1.png);
        }
        .box ul li:nth-child(2)::before{
            background-image: url(../image/a_2.png);
        }
        .box ul li:nth-child(3)::before{
            background-image: url(../image/a_3.png);
        }
        .box ul li:nth-child(4)::before{
            background-image: url(../image/a_4.png);
        }

        .box ul li img {
            position: absolute;
            width: 60px;
            height: 60px;
            top: 50%;
            left: 50%;
            margin-left: -30px;
            margin-top: -30px;
            transition: transform 1s ease 0s;
        }
        .box ul li:hover::before{
            transform: rotate(360deg);
        }
        .box ul li:hover img{
            transform: scale(1.2);
        }

        </style>
</head>

<body>
        <div class="box">
        <ul>
        <li>
            <img src="../image/icon1.svg" alt="">
        </li>
        <li>
            <img src="../image/icon2.svg" alt="">
        </li>
        <li>
            <img src="../image/icon3.svg" alt="">
        </li>
        <li>
            <img src="../image/icon4.svg" alt="">
        </li>
        </ul>
        </div>
</body>
</html>
```

## test 2:
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Doggy</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 200px;
            height: 200px;
            /*border:1px solid black;*/
            margin: 40px auto;
            perspective: 500px;
            position: relative;
        }
        .box img{
            width: 200px;
            height: 200px;
            border:1px solid black;
            /*border-radius: 50%;*/
        }
        .box img.dog{
            position: absolute;
            top: 0;
            left: 0;
            transform-origin: 0 0;
            transition: transform 1s ease 0s;
        }
        .box:hover img.dog{
            transform: rotateY(180deg);
        }

        .no2 img.dog{
        transform-origin: 100% 100%;
        }
        .no2:hover img.dog{
            transform: rotateY(180deg);
        }

        .no3 img.dog{
            transform-origin: 0 0;
        }
        .no3:hover img.dog{
            transform: rotateX(180deg);
        }

    </style>
</head>
<body>
 <div class="box">
     <img class="cat" src="../image/cat.jpg" alt="">
     <img class="dog" src="../image/dog.jpg" alt="">
 </div>
 <div class="box no2">
     <img class="cat" src="../image/dog.jpg" alt="">
     <img class="dog" src="../image/dog.jpg" alt="">
 </div>
 <div class="box no3">
     <img class="cat" src="../image/dog.jpg" alt="">
     <img class="dog" src="../image/cat.jpg" alt="">
 </div>
</body>
</html>
```

## test 3:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box1{
            width: 200px;
            height: 200px;
            background-color: red;
            animation: r 5s linear 0s infinite alternate;
        }
        @keyframes r {
            from{
                transform: rotate(0);
            }to{
                transform: rotate(360deg);}
        }
        .box2{
            width: 200px;
            height: 200px;
            background-color: blue;
            animation: movelr 2s linear 0s infinite alternate;
        }
        @keyframes movelr{
            from{
                transform: translateX(0);
            }to{
                 transform: translateX(360px);}
        }

        .box3{
            width: 200px;
            height: 200px;
            background-color: forestgreen;
            animation: changeToCircle 2s linear 0s infinite alternate;
        }
        @keyframes changeToCircle{
            from{
                border-radius: 10%;
            }to{
                 border-radius: 50%;}
        }

        .box4{
            width: 200px;
            height: 200px;
            background-color: dodgerblue;
            animation: changeColor 2s linear 0s infinite alternate;
        }
        @keyframes changeColor{
            0% { background-color: dodgerblue;}
            20% { background-color: cornflowerblue;}
            40% { background-color: deepskyblue;}
            60% { background-color: blue;}
            80% { background-color: mediumblue;}
            100% { background-color: darkblue;}
        }

        .bubble{
            position: absolute;
            top: 1000px;
            left: 100px;
        }
        .light{
            position: absolute;
            top: 930px;
            left: 20px;
            animation: blinking 0.8s ease 0s infinite alternate-reverse;
        }
        
        @keyframes blinking {
            from{
                opacity: 1;
            }to{
                opacity: 0;
                         }
            
        }

        .rocket{
            position: absolute;
            top: 1000px;
            left: 500px;
            animation: Vibrations 0.6s ease 0s infinite alternate-reverse;
        }
        @keyframes Vibrations{
            from{
                transform: translateX(-20px) translateY(-20px);
            }to{
            transform: translateX(20px) translateY(20px);
                         }
        }
            .line{
                width: 2px;
                height: 166px;
                background-color: blue;
                position: absolute;
                top: 1000px;
                left: 500px;
                transform: rotate(45deg);
                animation: lineMove 1s linear 0s infinite;
            }
        .line2{
            width: 2px;
            height: 166px;
            background-color: mediumblue;
            position: absolute;
            top: 1250px;
            left: 480px;
            transform: rotate(45deg);
            animation: lineMove 5s linear 3s infinite;
        }
        .line3{
            width: 2px;
            height: 166px;
            background-color: blue;
            position: absolute;
            top: 1350px;
            left: 450px;
            transform: rotate(45deg);
            animation: lineMove 1.5s linear 0s infinite;
        }
            @keyframes lineMove {
                from{
                    transform: rotate(45deg)  translateY(-200px);
                    opacity: 0;
                }50%{opacity: 0.5;}
                95%{opacity: 1;}
                to{
                    transform:rotate(45deg)  translateY(200px);
                                 }
            }
    </style>
</head>
<body>
<div class="box1"></div>
<div class="box2"></div>
<div class="box3"></div>
<div class="box4"></div>
<img class="bubble" src="../image/dengpao.png" alt="">
<img class="light" src="../image/guang.png" alt="">

<img class="rocket" src="../image/huojian.png" alt="">
<div class="line"></div>
<div class="line2"></div>
<div class="line3"></div>
<div></div>
</body>
</html>
```