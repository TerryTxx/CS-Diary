# Object Junior

#### [Back to OBJ Catalogue](https://github.com/TerryTxx/CS-Diary/blob/master/WebNote/140BJlist.md)
# ----------------------------

### Understanding of OBJ
[1. WHAT IS object](#what-is-object)

[2. object method](#object-method)

[3. Traversal object](#traversal-object)

[4. Shallow copy and Deep copy](#shallow-copy-and-deep-copy)


### Understanding the context of functions
[1. General 6 rules](#general-6-rules-of-function-context)

[2. Call and Apply](#call-and-apply-of-function-context)


#### Creat Function
[1. Four steps of new a function](#four-steps-of-new-a-function)

[2. Classes & Instances](#classes--instances)

# -------------------------
### What is Object
```text
1. A collection of key-value pairs that represent a mapping relationship between attributes and values.
```
```js
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
<style>
</style>
</head>
<body>
    <script>
// 1. Assignment of attributes
        var peter = {//in JS, use{} to represent object
        name : 'Peter',  //key: value ,   key for attributes(k:v pair)
        age: 12,
        gender: 'male',
        hobbies:'Compiling',
        'favourite-book':'harry potter' // if the keyname is not under js rules, '' to cover them
    };
  //(2)or you can add attribute directly by objname.keyname = value;
        var peter2 ={};
        peter2.b =10;
        peter2.name='Peter';
        //then we can recall the attribute by .
        console.log(peter.name);
        console.log(peter.age);
        console.log(peter['favourite-book']);//[] access to 'keyname'

 //*** If the attributes are stored in variable form, they must be called using [ ] 
       //ie.
        var obj1 = {a:1, b:2,};
        var key = 'b';
        console.log(obj1.key);//undefined
        console.log(obj1[key]);//2
//2. Attribute modification
        var obj2 = {a:1, b:2,};
        obj2.a =30;
        console.log(obj2.a);
 //3. delete attribute
        delete obj1.a;
    </script>
</body>
</html>
```
[back to list](#understanding-of-obj)
####
### object method
```text
1. If an attribute value is a function, it can also be a method of an object.
2. A method is essentially a function, but is a function property of the object 
     and needs to be called by the object via 'obj.function()'；
```
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
  <script>
      var peter = {//in JS, use{} to represent object
          name : 'Peter',  //key: value ,   key for attributes(k:v pair)
          age: 12,
          gender: 'male',
          hobbies:'Compiling',
          'favourite-book':'harry potter' // if the keyname is not under js rules, '' to cover them
          sayHello: function (){
              console.log('hello world')
          }
      };
      peter.sayHello();
      //console.log();    Math.ceil()
  </script>
</body>
</html>
```
[back to list](#understanding-of-obj)

#### Traversal object
#### for (var k in obj)
###### we have more methods in ES6
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
  <script>
      var obj = {
          a:11,
          b:22,
          c:88,
          d:2
      };
      for (var key in obj) {
          console.log('obj value'+ key+': '+obj[key]);
      }
  </script>
</body>
</html>
```
[back to list](#understanding-of-obj)
### Shallow copy and Deep copy
```text
  1. Basic and reference types difference:
    var a = b; BASIC will have new copy but REFERENCE is a point the same obj of b
    ==;        BASIC is checking the value, REFERENCE is checking same address of obj
  2. obj is also a reference type, so "=" will not work for clone, and '==,===' is checking add only
```
```
  3. Shallow copy: forin
```
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
    <script>
        var obj1 = {
            a:1,
            b:2,
            c:[44,55,66]
        };

        var obj2 ;// no copy
        for (const k in obj1) {
            obj2[k]=obj1[k];
        }
    </script>
</body>
</html>
```
```text
    4. Deep copy
    recursion to get the obj by different value types
```
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
    <script>
        var obj1 = {
            a:1,
            b:2,
            c:[55,66,{
                m:33,
                n:77,
                p:[88,99]
            }],
            e:'miao'
        };
        // deepClone function
        function deepClone(){
            if(Array.isArray(0)){
                //if array
                var result = [];
                for (let i = 0; i < o.length; i++) {
                    result.push(deepClone(o[i]));
                }
            }else if(typeof o == 'object'){
                //if obj
                var result = {};
                for (const k in o) {
                    result[k]= deepClone(o[k]);
                }
            }else{
                // if general value
                var result = o;
            }
            return result;
        }
        var obj2 = deepClone(obj1);
        console.log(obj2);
    </script>
</body>
</html>
```

[back to list](#understanding-the-context-of-functions)

### general 6 rules of function context
```text
this: means the attribute in the nearest field of this OBJ
```
DEMO of This
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
    <script>
        var peter = {
           name: 'peter',
            age: 12,
            sayHello: function () {
                console.log('Hello, Myname '+this.name+'; IM '+this.age);
            }
        };
        var sayHello = peter.sayHello();//collect the function as attribute and use as a value
        sayHello();//then use directly
 // if not declared it will not show:
        var obj ={a:1,b:2,
        fn:function () {
            console.log(this.a+this.b);
            //it will show nothing in console
            console.log(this === window);
        }
        }
        //show be used fn, then could show
        var a =4; var b=9;
        var fn = obj.fn;
        fn();
    </script>
</body>
</html>
```
```
RULE One:   OBJ.FUNCTION()
        In JS, functions are runtime contextual policies

RULE Two: function()
        will use the window obj, upcasting
```
InterviewQ--Rule1&Rule2
```js
    function fun(){
    return this.a + this.b;
}
    var a = 1;
    var b = 2;
    var obj = {
        a:3,
        b:fun(),//rule 2
        fun:fun
    };
    var result = obj.fun();//rule 1
    console.log(resule);//out 6
```
```text
RULE Three: arr[index]()
            loop the function by text
```
InterviewQ--Rule3
```js
    var arr = ['A','B','C',function(){
            console.log(this[0]);
         }]
        arr[3]();//rule3
```
```text
RULE Four: function is LIFE
            (function(){
            
            })()
```
InterviewQ--Rule4
```js
    var a =1;
    var obj ={
        a:2;
        fun:(function(){
            var a = this.a;
            return function (){
                console.log(a+this.a)
            }
        })()//rule4
    };
    obj.fun();//rule1
    
```

```text
RULE Five : setInterval(function,time)
            setTimeout(function,time)
            this use the global value in windows
```
InterviewQ--R5
```js
    var obj ={
        a:1,
        b:2,
        fun:function (){console.log(this.a+this.b);}
    }   
    var a =3;
    var b =4;
    setTimeout(obj.fun,2000);//rule5
    setTimeout(function (){
        obj.fun();//rule1
    },2000)
```
```text
RULE Six : DOMELEMENT.onclick = function(){};
            The event handler context is the DOM element to which the event is bound
```
InterviewQ--Rule6
'Implement an effect where whichever box is clicked turns red, 
requiring the same event handler to be used to implement it.'
```js
  <!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    div{
    width: 200px;
    height: 200px;
    float: left;
    border: 1px solid #000;
    margin-right: 10px;
}
</style>
</head>
<body>
    <div id="box1"></div>
    <div id="box2"></div>
    <div id="box3"></div>

    <script>
        function setColorToRed() {
        // contest
        var self = this;
        setTimeout(function() {
        self.style.backgroundColor = 'red';
    }, 2000);
    }

        var box1 = document.getElementById('box1');
        var box2 = document.getElementById('box2');
        var box3 = document.getElementById('box3');

        box1.onclick = setColorToRed;
        box2.onclick = setColorToRed;
        box3.onclick = setColorToRed;
    </script>
</body>
</html>
```
[back to list](#understanding-the-context-of-functions)

### call and apply of function context
```text
    function.call(context);
    function.apply(context);
```
```html
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function sum(){
        alert(this.c + this.m+  this.e);
    };
        function sum2(b1,b2){
        alter(this.c+this.m+this.e+b1+b2);
    }
        var peter = {
        c:100,
        m:90,
        e:80
    };
        sum.call(peter);
        sum.apply(peter);

        sum2.call(peter,5,3);
        sum2.call(peter,[5,3]);
    </script>
</body>
</html>
```
[back to list](#understanding-the-context-of-functions)
### Creat functions
#### Four steps of new a function
```text
    use new to creat function in 4 steps:
    new function()
    s1: a blank obj auto created in the function body
    s2: this in context/field of the function point to the obj
    s3: the codes in the function will run auto
    s4: the function will return to the context obj, even no return in it;
```
[back to list](#creat-function)
#### Classes & Instances
```text
   like Dog is a class, Poppy is a Instance， WitePoppy is a Instance
   
   we will have details in ES6
```


[[TOP]](#object-junior)