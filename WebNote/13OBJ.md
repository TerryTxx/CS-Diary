# Object
####  this is the first part of the advanced start so that a complete understanding of ES6 (which makes extensive use of inheritance),
#### and access to the framework, can be achieved.
###### [java OBJ learning link](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/13OBJ-js.md)
###### -------------------------------------
### Understanding of OBJ
[1. WHAT IS object](#what-is-object)

[2. object method](#object-method)
3. Traversal object
4. Shallow copy and Deep copy
#### Understanding the context of functions
1. general 6 rules
2. call and apply
#### Creat Function
1. 4 steps of new a function
2. Construct a function
3. Classes & Instances
#### Prototype and prototype chains 
1. prototype and prototype chain search
2. Adding methods on prototype
3. find the end of the prototype chain
4. Inheritance
##### Up to object-oriented（upcasting）
case1.
case2.
##### Built-in objects in js
1. Wapper class
2. Math obj
3. Date obj
4. ##### Built-in objects and inheritance
```text


```


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
[back to list](#understanding-of-obj)

3. Traversal object

[back to list](#understanding-of-obj)
4. Shallow copy and Deep copy

[back to list](#understanding-of-obj)