
[back to  list](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/intermediateBoost.md)

-----

## Object Oriented Intermediate Boost01
### [Class static variable](#class-variables-static-attributes)
### [Class static method](#class-static-methods)
#### - [quize for static attribute and method](#test-for-static-attribute-and-method)
### [Understanding the Use of main](#deep-understanding-of-main)
### Code blocks
- [Concept of code block](#code-block)
- [** using details of code block](#using-details-of-code-block)
### Singleton Design Pattern
- [Eagerly Initialized Singleton](#eager-initialization-singleton-pattern)
- [Lazy Initialized Singleton](#lazy-initialization-singleton-pattern)
### [Usage of final](#use-of-final)
### [Abstract class](#abstract-classes)
- [Abstract Class, Template Design Pattern](#abstract-class-template-design-pattern)
### Interfaces
- [Basic understanding of Interface](#basic-understanding-of-interface)
- [Notes on the interface and details of its use](#notes-on-the-interface-and-details-of-its-use-)
- [Interface implementation and inheritance:](#interface-implementation-and-inheritance-)
- [Polymorphism in interface](#polymorphism-in-interfaces)


---
### Class variables/ static attributes
- concept:
```
Attributes that are independent of the object and can be called by multiple objects with shared data;

in-memory, effectively a separate space in the heap, as a static property that ssu all objects can point to, call data and update content together;
```
- structure :
```
[modifer] [static]  [datatype] [variable name];
```
- how to access: 
```java
class A {
    public static String name = "Hello";
}

public class Main {
    public static void main(String[] args) {
        //the static attribute create by the class run, so no obj, it is assigned and access also
        System.out.println(A.name);
        A a = new A();
        System.out.println(a.name);
    }
}
```
- **Notice of usage:**
```
1. timing of use: consider using static class attributes when there is a need for all objects of a class to share a variable; for example: defining an employee class that counts the total amount of wages that all employees need to be paid;
2. The difference between static class attributes and ordinary (instance) class attributes:
static class attributes are shared by all objects of the class, instance variables are exclusive to each object;
3. the difference is that static class attribute have statics and ordinary class properties do not;
4. static classes can be accessed via ------ class names. class variable name / or / object name. Class variable names;
   It is recommended to use the class name for direct access (note the access rights)
```
[[back to list]](#object-oriented-intermediate-boost01)


### Class static methods
#### The general form is as follows:
```java
[access modifier] [static] [return data type] [method name] () { }
```
#### Static method calls:
- Class name. Method name 
or
- The name of the object. Method name (requires access rights)
```
Math，String, Utility... all have static method to use by customer
```
#### Notice of usage:
```
1. static methods and normal methods, both generated with class loading, with structural information stored in the method area, static methods without a this parameter and normal methods with a this parameter;
2. static methods can be invoked by class name or by object name
3. ordinary methods are object-related and need to be called by the object name, but cannot be called by the class name;
4. static methods are not allowed to use object-related keywords, such as this, super, etc., ordinary methods are;
5. static methods in which only static variables or static methods are allowed to be accessed;
6. ordinary member methods, which can access both ordinary and static variables;
```
[[back to list]](#object-oriented-intermediate-boost01)

### test for static attribute and method
test 01 :
what will print out? count=9 /  count=10/  11
```java
public class Test{
    static int count = 9 ;
    public void count(){
        System.out.println("count="+(count++));
    }
}
public class Main{
    public static void main(String[] args) {
        new Test().count;
        new Test().count;
        System.out.println(Test.count);
    }
}
```
test 02 :
what will print out?
1. id++ is non-static attribute, so wrong in static method; delete id++
2. then,all right in Person
3. testPerson, Person can access gettotalperson function and no new obj ,no constructor run,so out 0;
4. new Person obj accessed by p1, consturctor run, total is 1 and id is 1; then out 1;
```java
class Person{
    private int id;
    private static int total =0;
    public static int getTotalPerson(){
        id++;
        teturn total;
    }
    public Person(){
        total++;
        id = total;
    }}
public class TestPerson{
    public static void main(String[] args) {
        System.out.println("Number of total is"+ Person.getTotalPerson());
        Person p1 = new Person();
        System.out.println("Number of total is"+ p1.getTotalPerson());
    }
}
```

test 03:
what will print out?
1. this is forbidden in the static function, delete it, the next line is the right usage;
2. in TestPerson, put 3 in the function of Person, static total is 3 now;
3. new a Person, constructor run , total++;
4. so out total is 4;
```java
class Person {
    private int id;
    private static int total = 0;
    public static int setTotalPerson(int total) {
        this.total = total;
        Person.total = total;
    }
    public Person() {
        total++;
        id = total;
    }
    public static int getTotal() {
        return total;
    }
}

public class TestPerson {
    public static void main(String[] args) {
        Person.setTotalPerson(3);
        new Person();
        System.out.println(Person.total);
    }
}
```
[[back to list]](#object-oriented-intermediate-boost01)

### Deep understanding of main
```java
public static void main(String[]args){}
```
1. why public?  -  jvm needs to call the main method of the class, so access to that method must be main;
2. why static? -   jvm does not have to create an object when executing the main method, so the method must be static;
3. the method takes an array of arguments of type String, which holds the parameters passed to the class being run when executing the java command
4. the program executed by java, parameter 1, parameter 2, parameter 3
```java
class argstest{
    public static void main(String[] args) {
        for (int i = 0; i < args.length; i++) {
            System.out.println("no "+ (i+1) +" = " +args[i]);
        }
    }
}
```
![IMG_FCE277348103-1.jpeg](pics%2FIMG_FCE277348103-1.jpeg)
#### Notes of using main:
```
1. main method can access static members of this class;

2. main method can not access non-static members in class
```
Demo:
```java
class Main{
    public static void main(String[] args) {
        System.out.println(name);//note 01;
        hi();//note 01;
        // System.out.println(n1);//wrong, note 02;
        // sing(); // wrong, note 02;
        // we need:
        new Main().sing();
        System.out.println(new Main().n1);
    }
    private static String name = "Terry";
    public static void hi(){  System.out.println("hi"); }
    private int n1 = 1000;
    public void sing(){  System.out.println("sing");  }
}
```
[[back to list]](#object-oriented-intermediate-boost01)


### Code block
#### Concept of code block
```
Code blocks, also known as initialization blocks, are part of the class members and are similar to methods;
Logical statements are encapsulated in the method body, wrapped in { };
```
difference with method
```
Unlike methods, however, there is no method name, no return, no parameters, only the method body, and it cannot be called explicitly through an object or class, but implicitly when the class is loaded, or when the object is created.
```
Basic syntax:
```
[modifier] {code block};
```
Notes:
```
1. modifiers may be left out and written only as static;
2. code blocks are divided into two categories, static and non-static
3. logical statements can be anything, such as input, output, method calls, loops, judgements, etc;
4. semicolons; may or may not be present
```
Principle of the code block:
```
(1) The equivalent of another form of constructor, doing the initialization;
(2) If there is duplicate language in multiple constructors, it can be extracted into the initialization code block to improve code reuse;
```
Examples are as follows:
```java
class Movie{
    private String name;
    private double price;
    private String director;
    {
        System.out.println("open the screen");
        System.out.println("Advertisement");
        System.out.println("movie start");
    }
}
```
### using details of code block
1. The static block, which initialises the class, is executed as the class is loaded and is executed only once.
   Non-static code blocks, which are executed once for each object created;

2. when is the class loaded?
- (1) When an instance of the object is created (new);
- (2) When an instance of a subclass object is created and the parent class is loaded in first;
- (3) when using static members of the class (static properties and static methods)

3. non-static code blocks, which are called implicitly when creating object instances. It is called once when an object is created.
   If only the static members of the class are used, the ordinary code block is not executed.
4. ***Order of invocation in a class when creating an object:
- (1) Calling static code blocks and static property initialization;

  (Code blocks and attributes have the same order of priority; if there are multiple static code blocks and multiple static variable initialisations, they are called in code order)
- (2) invoke non-static code blocks and non-static property initialization;

  (The order of priority is the same for code blocks and attributes; if there are multiple non-static code blocks and multiple non-static variable initializations, call them in code order)
- (3) call the constructor

Demo for 4:

```java
public class Main {
    public static void main(String[] args) {
        A a = new A();
   //out flows:    followed as 4.(1)
        //1. A static method getN1
        //2. A static block code
   // then non-static follow as 4.(2)
        //3. A non-static method getN2
        //4. A non-static block code
    //then comes to constructor
        //5. A non-arg constructor
    }
}

class A {
    private int n2 = getN2();
    private static int n1 = getN1();
    {
        System.out.println("A non-static block code");
    }
    static {
        System.out.println("A static block code");
    }
    
    public A(){
        System.out.println("A non-arg constructor");
    }

    public static int getN1() {
        System.out.println("A static method getN1");
        return 100;
    }

    public int getN2() {
        System.out.println("A non-static method getN2");
        return 200;
    }
}
```

5. ** in the very top line of the constructor, which actually hides super() and then calls to non-static blocks of code, statically related code, which is executed when the class is loaded;

- here is demo, how it works, and why code block before constructor:
```java
class A{
    {
        System.out.println("A non-static code-block");
    }
    public A(){//non-art constructor
        // two hidden lines here
        // 1. super();
        // 2. initialize non-static attribute and call the non-static code block;
        System.out.println("A constructor");
    }
}
class B extends A{
    {
        System.out.println("B non-static code-block");
    }
    public B(){//non-art constructor
        // two hidden lines here
        // 1. super();
        // 2.  initialize non-static attribute and call the non-static code block;
        System.out.println("B constructor");
    }
}

// so the step above,
// 1. new B, check as no static attribute and code-block in A and B;
// 2. go through B()constructor, super() in first line, then go A()constructor
// 3. A extends Object, super() has nothing, then go though A's non-static attribute and block-code, OUT A non-static code-block
// 4. then out A constructor, go back to B constructor, as super() all finished;
// 5. go though step 2 in B constructor, out B non-static code-block
// 6. then out B constructor, finished the new B(); and to the other codes in line;
```
6. ******When creating a subclass, the order of creation of static code blocks, static properties, non-static code blocks, non-static properties, constructors***
- 1. static code blocks and static properties of the parent class (same priority, in code order)
- 2. the static code and static properties of the subclass (same priority, in code order)
- 3. non-static code blocks and non-static properties of the parent class (same priority, in code order)
- 4. the constructor of the base class
- 5. non-static code and non-static properties of the child class (same priority, in code order)
- 6. constructors of subclasses

```java
class main {
    public static void main(String[] args) {
        new BBB();
// steps:
    // step 1:
        //1.loading the class before BBB obj in heap, BBB extends AAA, so AAA first ,then BBB
        //2.static attribute run with the class loading, so static one by one in AAA, the static one by one in BBB
        //3. so static nA, static{} in A, then static nb, then static{} in B
       // "AAA static attribute and method","AAA static codeblock". "BBB static attribute and method","BBB static codeblock"
    //step2:
        //4. then comes to BBB's non-arg constructor, has super() and then non-static calling;
        //5. super() in BBB calls super() in AAA, has super() and then non-static calling;
      //a. a=111 initialized in AAA class;  b. non-static codeblock in AAA, c. then AAA constructor third line out, d. then AAA constructor finished;
      //e. then come back to BBB constructor, super()finished;  f. then b = 222 initialized in BBB class;  g. BBB non-static codeblock load;  h.then back to the BBB constructor 3rd line;
    }
}

class AAA {
    private static int nA = getNA();
    public int a = 111;
    {
        System.out.println("AAA non-static code-block");
    }

    static {
        System.out.println("AAA static code-block");
    }

    public static int getNA() {
        System.out.println("AAA static attribute and method");
        return 100;
    }

    public A() {//non-art constructor
        // two hidden lines here
        // 1. super();
        // 2. initialize non-static attribute and call the non-static code block;
        System.out.println("AAA constructor");
    }
}

class BBB extends AAA {
    private static int nb = getNB();
    public int b = 222;
    {
        System.out.println("BBB non-static code-block");
    }

    public static int getNB() {
        System.out.println("BBB static attribute and method");
        return 200;
    }

    static {
        System.out.println("BBB static code-block");
    }

    public B() {//non-art constructor
        // two hidden lines here
        // 1. super();
        // 2.  initialize non-static attribute and call the non-static codeblock;
        System.out.println("BBB constructor");
    }
}
```

[[back to list]](#object-oriented-intermediate-boost01)



### Eager Initialization Singleton Pattern
- #### steps of creating the Pattern:
```
1. constructor private => prevent direct new to get the object
2. Creating objects inside classes
3. expose a static public method to the outside => getInstance
```
- #### codes demo of Eager Initialization:
```java
class onlyFriend {
    private String name;

    //1. private the constructor:
    private onlyFriend(String aName) {
        this.name = aName;
    }
    //2. Creating objects inside classes
    private static onlyFriend terry = new onlyFriend("Terry");
        // the obj should be static as getInstance function is static;
    //3. expose a static public method to the outside => getInstance
    public static onlyFriend getInstance() {
        return terry;
    }
    @Override
    public String toString() {
        return "onlyFriend{" + "name='" + name + '\'' + '}';
    }
}

class main {
    public static void main(String[] args) {
        onlyFriend a1 = onlyFriend.getInstance();
        System.out.println(a1);
    }
}
```
- #### why call it eager?
```
1. even we don't create onlyFriend object, we have it already in the class by class loading, and created the object;
2.  so, it could cause the waste of memory
```
[[back to list]](#object-oriented-intermediate-boost01)

### Lazy Initialization Singleton Pattern
- #### steps of creating the Pattern:
```
1. private the constructor;
2. define static attribute object
3. supply public static method , return a new obj(if current!=null)
```
- #### codes demo of Lazy Initialization

```java
import java.sql.SQLOutput;

public class main {
    public static void main(String[] args) {
        //1. 
        // System.out.println(Cat.n1);
        // we call the static attribute, will make class Cat load
        // but no new, so the constructor will not call or load;
        //2.
        Cat c1 = Cat.getInstance();//have a Cat object, as null at running,constructor run also
        System.out.println(c1);//MIMI
        //3. call getinstance again
        Cat c2 = Cat.getInstance();// the object is not null, as name is MIMI
        System.out.println(c2);//MIMI

        System.out.println(c1 == c2);//ture
    }
}

// we want the processing of the running ,have only one Cat object
class Cat {
    private String name;
    //1. private the constructor;
    public static int age = 999;

    private Cat(String cName) {
        System.out.println("Cat constructor");
        this.name = cNmae;
    }

    //2. define static attribute object
    private static Cat cat;

    //3. supply public static method , return cat obj
    public static Cat getInstance() {
        if (cat == null) {// not create yet
            cat = new Cat("Mimi");
        }
        return cat;
    }

    @Override
    public String toString() {
        return "Cat{" + "name='" + name + '\'' + '}';
    }
}
```
- ### why called lazy?
```
1. Because the object will only be returned or created when the user call getInstance(), while calling it again will only return the last created object
2. Avoid memory wastage, but there are thread safety issues
```
- ### "Double-checked locking" mode 
- can ensure thread safety, but will reduce performance
```java
public static Cat getInstance() {
     if (cat == null) { // first check
         synchronized (Cat.class) { // Synchronized
             if (cat == null) { // Second check
                 cat = new Cat("Mimi");
             }
         }
     }
     return cat;
}
```

[[back to list]](#object-oriented-intermediate-boost01)


### Use of final
Purpose of use:
```
1. when it is not desired that the class be inherited，modified with final；
2. when it is not desired that a method of a parent class be overridden or overridden by a child class, qualified with final;
3. when a property is not expected to be modified, use the final modifier;
4. when you do not want a local variable to be modified, use final
```
Details and precautions for use:
1. final-modified properties are also called constants, and generally all constant names are capitalized:
```
public final double XXX_XXX_XXXX = 0.88.
```
2. because it is a final property, it must be assigned a value, and cannot be modified:
- (1) When defined, public final double TAX_RATE = 0.88.
- (2) in the constructor
- (3) in the code block
3. if the final is static, the initialisation cannot be in the constructor, but only at definition time, or in a static code block
4. final classes cannot be inherited, but can be instantiated;
5. if the class is non-final, but has a final method, the method cannot be overridden, but can be inherited
```java

```
6. in general, when a class is already final, there is no need for the methods in that class to be final again;
7. that final cannot modify transformers;
8. final and static, generally used together for efficiency;
9. wrapper classes (Integer, Double, Float, Bolean, etc.), String classes, are all final classes

[[back to list]](#object-oriented-intermediate-boost01)


### Abstract classes
- #### Abstract class requirements:
```
1. What if we have an animal class with name and age attributes, with its own eating behaviour, but no way to determine exactly what it eats in the animal class, herbivorous or carnivorous?
2. That is, the parent method is indeterminate, so we consider designing the method as an abstract method
===> An abstract method is a method that has no implementation, i.e. no method body
3. then when a class has abstract method, the class should be abstract
4. and if need to initialized by its sub class;
```
5 .demo：
```java
abstract class Animal{
    private String name;
    public Animal(String name){this.name = name;}
//    public void eat(){ System.out.println("eat sth?"); }
    public abstract void eat();}
```
- #### Notes and details of the abstract class:
1. the abstract class itself cannot be instantiated; could not be new XXX().
2. abstract classes do not necessarily have to have abstract methods;
3. abstract methods must be in the abstract class;
4. abstract can only modify classes and methods, not other attributes;
5. abstract classes can have arbitrary members， they are essentially classes, e.g., non-abstract methods, constructors, static attributes, etc.
6. abstract methods cannot have a body, nor can they be implemented, i.e. they cannot carry { };
7. if a class inherits from an abstract class, it must implement all the abstract methods in the abstract class, unless i it is also an abstract class.
8. abstract methods cannot use private, final and static(it make go with class out of obj) together; these keywords contradict overwriting;

#### Abstract Class, Template Design Pattern
- Case:
```text
1. there are multiple classes that do different jobs;
2. require the ability to get the time to complete the respective tasks;
```
- Codes:
```java
public class main{
    public static void main(String[] args) {
        AA aa = new AA();
        aa.job();
        BB bb = new BB();
        bb.job();
    }
}
public class AA{
    //cal task: 1 count to 1000
    public void job(){
        //start time
        long start = System.currentTimeMillis();
        long sum = 0;
        for (long i = 0; i < 1000000; i++) {
            sum += i;
        }
        long end = System.currentTimeMillis();
        System.out.println("AA running time: "+ (end - start));
    }
}
public class BB{
    public void job(){
        //start time
        long start = System.currentTimeMillis();
        long sum = 0;
        for (long i = 0; i < 100000; i++) {
            sum *= i;
        }
        long end = System.currentTimeMillis();
        System.out.println("BB running time: "+ (end - start));
    }
}
```
consider AA and BB have a lot of codes are same;
```java
// we can add each AA and BB with
 public void calculateTime(){
        long start = System.currentTimeMillis();
       job();
        long end = System.currentTimeMillis();
        System.out.println("running time: "+ (end - start));
        }
// but if comes with CC ,DD ...?
```
so we can extends from a class ,just make job() function abstract, and add into caculate()
- then ,this is emplate Design Pattern

```java
abstract class Template {
    public abstract void job();

    public void calculateTime() {
        long start = System.currentTimeMillis();
        job();
        long end = System.currentTimeMillis();
        System.out.println("running time: " + (end - start));
    }
}

public class AA extends Template {
    @Override
    public void job() {
        long sum = 0;
        for (long i = 0; i < 1000000; i++) {
            sum += i;
        }
    }
}
public class BB extends Template {
    @Override
    public void job() {
        long sum = 0;
        for (long i = 0; i < 100000; i++) {
            sum *= i;
        }
    }
}
public class main{
    public static void main(String[] args) {
        AA aa = new AA();
        aa.calculateTime();
        BB bb = new BB();//poly also
        bb.calculateTime();
    }
}
```
[[back to list]](#object-oriented-intermediate-boost01)



### Interfaces
#### Basic understanding of Interface

- Concept of interfaces:
```
An interface is a way of giving methods that are not implemented, encapsulated together, and then written out on a case-by-case basis when a class is to use them;
```

- Format of an interface:
```java
interface [interface name] {
    //1. attributes;
        public int n1 = 10;
    //2. attribute methods, can not have abstract modifier
        public void hi();
    //3. nonstatic method with body, with body need default
        default public void ok(){ System.out.print("OK"); }
    //4. static method:
        public static void say(){ System.out.print("cry");  }
}

// if implements, then need initialize all abstract method
class [class name] implements [interface name] {
        //class own attributes;
        //class own methods;
       // the abstract methods in the interface that must be implemented in class;
       @Override
       public void hi(){System.out.print("hi"); }
}
```
- Common scenarios for interfaces:
```
If a project manager, managing three programmers, functions to develop a piece of software, in order to manage and control the process, interfaces are defined and implemented by different people.
```
![IMG_4EA8E53B4509-1.jpeg](pics%2FIMG_4EA8E53B4509-1.jpeg)

#### Notes on the interface and details of its use:

1. interfaces cannot be instantiated;
2. all methods in the interface are public, and methods abstracted by the interface may not be used abstract.
```
void aaa() is actually abstract void aaa().
```
3. an ordinary class that implements an interface must implement all abstract methods of that interface;
4. an abstract class may not implement the methods of an interface, but directly implements
5. a class may implement more than one interface at a time;
6. the properties in an interface can only be finial and public static final
   
For example:
```
int a = 1; is actually: public static final int a = 1 ; (must be initialized)
```
7. The form of access to attributes in an interface: 
```
[interface name]. [attribute name].
```
8. An interface cannot inherit from other classes, but can inherit from multiple interfaces, e.g:
```
interface A extends B,C{ }
```
9. modifiers for interfaces, which can only be public and default, are the same as for classes;
  
[[back to list]](#object-oriented-intermediate-boost01)
#### Interface implementation and inheritance:
- (1.) The value of inheritance: addressing the reusability of code;
- (2.) Value of interfaces: design and specification to accomplish various methods for other classes to implement;

- (3.) Interfaces are more flexible than inheritance.
- - 1. Inheritance is similar to "is ... a" relationship.
- - 2. Interfaces are similar to "like ... a" relationship;


- (4.) Interfaces enable a degree of decoupling of code;

（In collections, such as Lists and Sets, interfaces are used extensively）
```
1. when a child class inherits from a parent class, it automatically has the functionality of the parent class;
2. if a subclass needs to extend functionality, it can do so by interface implementation and method overriding;
3. interface implementation, therefore, is primarily intended to complement java single inheritance;
```
```java
public class ExtendsVsInterface{
    public static void main(String[] args) {
        LittleMonkey Wu = new LittleMonkey("WU");
        Wu.climbing();
        Wu.swimming();
        Wu.flying();
    }
}
class Monkey{
    private String name;
    public Monkey(String name){
        this.name = name;
    }
    public void climbing(){
        System.out.println(name + " is climbing");
    }
    public String getName(){
        return name;
    }
}
// interface
interface Fishable{
    void swimming();
}
interface Birdable{
    void flying();
}
// inheritance VS implements
class LittleMonkey extends Monkey implements Fishable,Birdable{
    public LittleMonkey(String name){
        super(name);
    }
    
    @Override
    public void swimming(){
        System.out.println(getName() + " is learning to swim like fish");
    }

    @Override
    public void flying(){
        System.out.println(getName() + " is learning to fly like birds");
    }
}
```
[[back to list]](#object-oriented-intermediate-boost01)


#### Polymorphism in interfaces
1. Polymorphic parameters:

Demo: The variable "if01 "of type interface, which can point to all instances of objects that implement the "IF" interface;
```java
public class InterfacePolyParameter(){
    public static void main(String[] args) {
        //1. poly in interface
        // variable of interface, could point all instant objects that the classes implement it;
        IF if01 = new Monster();
        if01 = new Car();
        
      //2. poly in inhier extends
        // base variable, could point to any of its sub class
        AAA a = new BBB();
        a = new CCC();
    }
}
interface IF{}
class Monster implements IF{}
class Car implements IF{}

class AAA{}
class BBB extends AAA{}
class CCC extends AAA{}
```
2. polymorphic arrays:

```java
import java.util.Calendar;

public class InterfacePolyArr {
    public static void main(String[] args) {
        Usb[] usbs = new Usb[2];
        usbs[0] = new Phone();
        usbs[1] = new Camera();
        for (int i = 0; i < usbs.length; i++) {
            usbs[i].work();
            if (usbs[i] instanceof Phone){
                ((phone).usbs[i]).call;
            }
        }
    }
}

interface Usb { void work();
}

class Phone implements Usb {
    @Override
    public void work(){
        System.out.println("Phone start to work...");
    }
    public void call(){
        System.out.println("calling by phone...");}
}

class Camera implements Usb {
    @Override
    public void work(){
        System.out.println("Camera start to work...");
    }
}
```

3. The existence of polymorphic passing of interfaces

```java
public class InterfacePolyPass {
    public static void main(String[] args) {
        IG ig = new Teacher();
        // as IG extends IH, and Teacher implements IG, si Teacher implements IH autolly
        // this is poly passing
        IH ih = new Teacher();
    }
}
interface IH {}
interface IG extends IH{}
class Teacher implements IG{}
```

[[back to list]](#object-oriented-intermediate-boost01)