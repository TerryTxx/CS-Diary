# TypeScript & react.js

#### [Back to RootPage](https://github.com/TerryTxx/CS-Diary/blob/master/README.md)

----
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
### typeScript Advanced
- [TypeGuards](#typeguards)
- [Function Overloading](#functionoverloading)
- [Call Signatures](#callsignatures)
- [Index Signatures](#indexsignatures)
- [readonly](#readonly)
- [Double Assertion](#doubleassertion)
- [const Assertion](#constassertion)
- [this usage](#this-usage)
- [typeof operator](#typeof-operator)
- [keyof operator](#keyof-operator)
- [lookup types](#lookuptypes)
- [Mapped Types](#mappedtypes)
- [Mapped Modifier](#mappedmodifier)
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

---
### TypeGuards
```typescript
type Square ={
    size:number;
};
type Rectangle = {
    width: number;
    hight: number;
};
type Shape = Square | Rectangle;
//
//function ifSquare(shape: Shape):boolean {
function ifSquare(shape: Shape):shape is Square {
    return "size" in shape;
}
//function ifRectangle(shape :Shape):boolean{
function ifRectangle(shape :Shape):shape is Rectangle{
    return "size" in shape;
}

function area(shape:Shape){
    //if("size" in shape){
    if(ifSquare(shape)){
        return shape.size * shape.size;
    }
   // if ("width" in shape){
    if(ifRectangle(shape)){
        return shape.width * shape.width;
    }
}
```

### FunctionOverloading
```typescript
//demo1
    function reverse(string: string):string;
    function reverse(array: string[]):string[];
    // ts should compile by overload ,as run still by js
    function reverse(stringOrArray: string | string[]){
        if (typeof stringOrArray == "string") 
            return stringOrArray.split("").reverse().join("");
        else
            return stringOrArray.slice().reverse()
    }
    const hello = reverse("hello")
    const helloa = reverse(['h','e','l','l','o'])//both string if not overload

//demo2
    function makeDate(timestamp:number):Date;
    function makeDate(year:number,month:number,day:number);
    
    function makeDate(timeStampOrYear: number, month?:number, day?:number){
        if(month != null && day!=null)
            return new Date(timeStampOrYear,month-1,day);
        else
            return new Date(timeStampOrYear);
    }
    const day1 = makeDate(2023,03,10);
    const day2 = makeDate(1234567789);
    const day33 = makeDate(2021,1);//error, if not overload
```
[[back to list]](#typescript-advanced)

### CallSignatures

```typescript
type//interface
    Add = {//(a:number,b:number) =>number;
    (a: number, b: number): number;
    //(a:number,b:number,c:number) :number;
    //debugName: string;
}

const add: Add = (a: number, b: number) => {
    return a + b;
};
//const add:Add = (a:number, b:number, c?:number) => {return a+b+(c != null?c:0); };
//add.debugName="apendex thing"

// new function
type Point = {//new (x:number,y:number) =>{x: number,y:number};
    new (x:number,y:number) :{x: number,y:number};
    new (x:number,y:number,z:number) :{x: number,y:number,z:number};
}
const point = class {
    constructor(public x: number, public y:number,public z?:number) {}
};
```
### IndexSignatures
```typescript
const obj = {
    hello:"world",
};
const ddd = obj["hello"];//world

////////////////
const nums ={
    1234:"leet",
}
console.log(nums[1234]);//leet

//demo
type Dictionary = {
    [key:string]:any;
};
type Person = {
    name: string;
    email:string;
};
type PersonDictionary ={
    [username:string]: Person;
};
const persons:PersonDictionary = {
    terry:{
        name:"Terry",
        email:"terry@123.com"
    },
    marry:{
        name:"marry",
        email:"marry@123.com"
    },
}

const terry = persons["terry"]
persons["ddd"]={
    name:"Terry2",
    email:"terry2@123.com"
};
delete persons["terry"]

//caution!!!
const abc = persons["missing"]//undifined
abc.name // ts will still work!!!!
```
[[back to list]](#typescript-advanced)

### readonly
```typescript
function reverseSorted(input:number[]):number[]{
    return input.sort().reverse();
}
const started = [1,2,3,4,5]
const result = reverseSorted(started)

//side-effect
//pure function return what we want, 
//side-effect return nothing to do with the function
//AJAX mix dom, even console.log in most function

//so change the function above
function reverseSorted(input:readonly number[]):number[]{
  //1  return input.slice().sort().reverse();
  //2.
    return [...input].sort().reverse()
}
```
[[back to list]](#typescript-advanced)

### DoubleAssertion
```typescript
type Point2D = {x:number, y:number};
type Point3D = {x:number, y:number, z:number};
type Person = {name:string; email:string};

let point2:Point2D = {x:0,y:0};
let point3:Point3D = {x:10,y:10,z:10};
let person:Person ={name:"terry",email:"terry@123.com"};

point2 = point3;
//point3 = point2; wrong
point3 = point2 as Point3D//cheat ts by assertion, but not good operation

// person = point3;//error
// person3 = person//error
point3 = person as any as Point3D
```
### constAssertion
```typescript
//const
 let  king = "elvis"
//js ,string is immutable
king = 'terry'

```
[[back to list]](#typescript-advanced)
### this usage
usage with the context in the js
```typescript
function double() {
    this.value = this.value*2
}
const vaild = {
    value:10,
    double,
};
vaild.double();
vaild.value//20

const invaild={
    valve : 10,//wrong here
    double,
}
invaild.double()//still run

// so we change the double in case of mistakes
function double(this:{value:number}) {//should be the first paramater
    this.value = this.value*2
}//will find the problem in invaild function
```
[[back to list]](#typescript-advanced)
### typeof operator
```typescript
//demo1
const center ={
    x:0,
    y:0,
    z:0
};
// type Point ={
//     x:number;
//     y:number;
//     z:number
// }

type Point = typeof center;

const unit:Point = {
    x: center.x+1,
    y:center.y+1,
    z:center.z+1
};

//demo2
const personResponse = {
    name:"Terry",
    email:"terry@123.com",
    firstName:"xiaoxu",
    lastName:"tan"
};
type PersonResponse = typeof personResponse;

function porcess(person: typeof personResponse){
    console.log("name",person.firstName,person.lastName)
}
```
### keyof operator
```typescript
type Person = {
    name:string;
    age:number;
    location:string;
}
const terry : Person ={
    name:"Terry",
    age:18,
    location:"Paris"
}
function getValueByKey(obj:any, key:string){
    const value = obj[key];
    return value;
}
const age = getValueByKey(terry,"age");
//the function is dangerous
const email = getValueByKey(terry,"age");//????

//so:
type PersonKey = keyof Person
function getValueByKey<Obj,Key extends keyof Obj>(obj:Obj, key: Key){
    const value = obj[key];
    return value;
}
function setValueKey  <Obj,Key extends keyof Obj>(
    obj:Obj, 
    key: Key,
    value:Obj[key]
){
    obj[key] = value;
}
```
[[back to list]](#typescript-advanced)
### lookuptypes
```typescript
// a demo we received from server
// We'll re-match the backend data
// reanctionID   USER    
export type RequestData = {
  transactionId: string;
  user: {
    name: string;
    email: string;
    phone: string;
    nickname: string;
    gender: string;
    dob: string;
    nationality: string;
    address: {
      stress: string;
      unitNumber: string;
      city: string;
      provance: string;
      contury: string;
    }[];
  };
  dirverInfo: {
    licenceNumber: string;
    exporyDate: string;
    classes: string;
    status: string;
  };
  payment: {
    creditCardNumber: string;
  };
  //   payment: PaymentRequest
};
```
```typescript
//1. get creditCardNo:
// type PaymentRequest = {
//   creditCardNumber: string;
// };
type PaymentRequest = RequestData["payment"];

// export function getPayment(): PaymentRequest {
//   return {
//     creditCardNumber: "1234567890",
//   };
// }
export function getPayment(): RequestData["payment"] {
  return {
    creditCardNumber: "1234567890",
  };
}

export function getAddress(): RequestData["user"]["address"][0] {
  return {
    stress: "maynooth",
    unitNumber: "no1",
    city: "Dublin",
    provance: "Killdare",
    contury: "Ireland",
  };
}
```
### MappedTypes
```typescript
type Point = {
  x: number;
  y: number;
  z: number;
};

// type ReadonlyPoint = {
//   readonly x: number;
//   readonly y: number;
//   readonly z: number;
// };

type ReadonlyPoint = {
  readonly [item in keyof Point]: Point[item];
};

export type ReadOnly<T> = {
  // [item in Union] : Output
  // readonly [item in "x" | "y" | "z"]: number;
  readonly [item in keyof T]: T[item];
};

// const center: Point = {
const center: ReadOnly<Point> = {
  x: 0,
  y: 0,
  z: 0,
};  

center.x = 100;
```
### MappedModifier
```typescript
type Point = {
  readonly x: number;
  y?: number;
};

type Mapped<T> = {
  -readonly // readonly [P in keyof T]: T[P]
  [P in keyof T]-?: T[P];
};

type Result = Mapped<Point>;


//////////////

export class State<T> {
  constructor(public current: T) {}
  //  update(next: T){
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

export type Partial<T> = {
    [P in keyof T]?: T[P];
};

const state = new State({ x: 0, y: 0 });
state.update({ y: 123 });
console.log(state.current);
```
[[back to list]](#typescript-advanced)
