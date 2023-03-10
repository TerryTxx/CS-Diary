# TypeScript & react.js

### TypeScript
###### es5 and es6,7,8 and decorator
### basic data type
- declare variable
- number,string,boolean
- [Array and Tuple](#array)
- [union type and literal type](#union-type)
- [Enum type usage](#enum-type)
- [any & unknown](#any-and-unknown)
- [void, undefined and never](#void-undefined-never)
- [type assertions (type fit)](#type-assertions)
- [function type usage](#function-type)
---

### typeScript and Object
- [object types](#object-types)
- [Interface](#interface)
- [class AccessModifier](#class--accessmodifier)
- [Modules](#module)
- [Generics usage](#generics)

---
### typeScript and Advanced
- [TypeGuards]
- [FunctionOverloading]
- [CallSignatures]
- [IndexSignatures]
- [readonly]
- [DoubleAssertion]
- [constAssertion]
- [this]
- [typeof operator]
- [keyof operator
- [lookuptypes]
- [MappedTypes]
- [MappedModifier]
---

### TypeScript

strong typing
```
tanxiaoxu@asahis-MacBook-Pro test4 % tsc main.ts
tanxiaoxu@asahis-MacBook-Pro test4 % node main.js
hello world
```
```text
workflow
code.ts -> tsc -> code.js
```
### declare variable
```text
let -- prevent scope confusion
const -- It is specially used to declare output and cannot be modified;
```
### General data types
```text
number
(Integer, Float, Sign and Negative)

boolean
for logic checking

string
("", '', `` -- for string module)
```
### Array
Store any type of data in [ ]
```ts
let list1: number[ ] = [1,2,3,4]
let list2: Array<number> = [1,2,3,4]
let list3 = [1,2,3,4]

let list4 = [1,"ddd"]
let list5: any[] = [1,'ddd',true]
```
### Tupple
###### should declare the data type in first
is a fixed length
and an array of fixed types
```ts
let person1: [number,string] = [1,'terry']
//first one should be number, second one should be string, no other content
```
### !! but we have bug some times for tupple
```ts
person1[2]=3//wrong
//but!
person1.push(3)//could compile run and compile ,but this is not right
```
### union type
```ts
let union: string | number
union = 2;
union = 'hello';
let union2: number | string | boolean | string[]

//usage in function
function merge(n1:number | string , n2: number | string){
    if(typeof n1 === "string" || typeof n2 === "string")
       return n1.toString()+n2.toString();
    else return n1 + n2
}
let mergeNumber = merge(2,5)
let mergeString = merge("hello","world")

// decare numbers different
let nuion3:0|1|2
```
### literal type
```ts
let literal : 1 | "2" | true | [1,2,3,4]

//as the union demo:
function merge(n1:number | string ,
               n2: number | string,
               resultType:"as-number" | "as-string"
){
    if(resultType === "as-string"){
        return n1.toString()+n2.toString();
    }
    if(typeof n1 === "string" || typeof n2 === "string")
        return n1.toString()+n2.toString();
     else return n1 + n2
}
let mergeNumber = merge(2,5,"as-number")
let mergeNumber2 = merge(2,5,"as-string")
let mergeString = merge("hello","world")
```

### Enum type
```ts
enum Color {//similar c++
    red,
    green,
    blue
}
let color = Color.blue
console.log(color)
```

### any and unknown
```ts
//any
let randonValue: any = 666;
randomValue = true;
randomValue = "abada";
randonValue = {};
randomValue()//×,this is an empty obj ,could not be run by js
randomValue.toUpperCase()

//unknown
let randonValue: unknown = 666;
randomValue = true;
randomValue = "abada";
randonValue = {};

if(typeof randomValue === 'function')
randomValue()

if(typeof randomValue === 'string')
randomValue.toUpperCase()//
```
### void, undefined, never
```ts
//void ： means have nothing, have no variable
// undefined ：variable exists, but is not initialized
function printResult() : void{//general in void already
    console.log("lalalala")
}
console.log("hello",printResult())//all void show as undefined in js

//never
function throwError(message:string, errorCode:number): never{
    throw{
        message,
        errorCode
    }
}//never comes to this line
throwError("not found", 404);

function whileloop():never{
    while(true){
        console.log("hahaha")
    }
}
```

### type assertions
```ts
let message: any;
message = "abc";//still any type
//message.endsWith("c")//could not use directly

//1. (<string>message)
let ddd = (<string>message).endsWith("c");
//2. as   : (message as string)
let ddd2 = (message as string).endsWith("c")
```
### function type
```ts
//ES6:
let log = function (message){
    console.log(message);
}
let log2 = (message) => console.log(message)

//TS:
let log3 = (message:string) => console.log(message)

let log4 = (messaage : string , code : number = 0) =>{
    console.log(messaage.code)
}
log4("hello",666)
```
[[back to list]](#typescript)
### object types
key to type
```ts
const person = {
    firstName : "Terry",
    lastName : "Tan",
    age : 18
}
console.log(person.age)
```
### Interface
```ts
let drawPoint = (point) =>{
    console.log({x: point.x,  y: point.y})
}

drawPoint({x: 105, y: 24});

let getDistance = (a:Point , b: Point) =>{
    return a+b;
}
interface IPoint{
    x:number;
    y:number;
}
```
### class & AccessModifier

```ts
//in above
interface IPoint {
    x: number;//but if you need private in class point, this should be delated, as interface all public
    y: number;
    drawPoint: () => void;
    getDistance: (p: IPoint) => number;
}

class Point implements Ipoint {
    // x: number;
    // y: number;//public protected,private in constructor, no needs for declare in class
    constructor(public x:number,public y:number) {//constructor could not be overload,only one constructor
        this.x=x;
        this.y=y;
    }
    // constructor(x?:number, y?:number) {
    //     this.x=x;
    //     this.y=y;
    // }
    //seter and geter for private paramaters, and could add if in set for value filter
    drawPoint = () => {
        console.log({x: point.x, y: point.y})
    }
    getDistance = (p: IPoint) => {
        return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
    }
}

const point = new Point(2,3)
point.drawPoint()
```
[[back to list]](#typescript)
### Module
###### We combine hundreds of classes and interfaces into one program through modules
```ts
export class Point implements Ipoint {}
// in another ts at top
import { Point } from "./point";
```

### Generics
###### Commonly used in java and C +

```ts
//demo1 for all
let lastInArray = <T> (arr: T[]) => {
    return arr[arr.length-1]
}
const l1 = lastInArray([1,2,3,4]);
const l2 = lastInArray<string>(["a","b","c"]);
const l3 = lastInArray<string | number>(["a","b","c"]);

//demo2 for different 
//let makeTuple = (x:number,y:string) => [x,y]
let makeTuple = <X,Y>(x:X,y:Y) => [x,y]
const v1 = makeTuple(1,"one");
const v2 = makeTuple<boolean,number>(true , 1);
```
[[back to list]](#typescript)

