
## Object Geleral 02
##### [back to Root list](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/object-general.md)


### Overload
- [Concept of Overload](#concept-of-overload-)
- [case understanding of overload](#case-understanding-of-overload-)
- [Overload usage notes](#overload-usage-notes-)
  
### Variable Parameter
- [Basic syntax](#basic-syntax-)
- [demo of Variable Parameter](#case-of-variable-parameter-)
- [Note for Variable Parameter](#notes-of-variable-parameter-)

### Scope
- [scope concept](#field-concept)
- [notice of scope](#notice-of-scope-)

### [Constructor](#needs-of-constructor-)

### [Process Analysis of Object Creation](#process-of-object-creation)

### [this concept]（#）
- [JVM drawing of this](#jvm-showing----this-)
- [Notice of using this](#notes-of-using-this-)


---

### Concept of Overload:
```text
In the same java class, multiple methods with the same name are allowed, but the formal parameters must be different, which is overloading
```
### Case understanding of overload:
```java
class MyCalculator{
   public int calculate(int a, int b){ return a+b; }
    public double calculate(int a, double b){ return a+b; }
    public double calculate(double a, int b){ return a+b; }
    public int caculate(in a, int b, int c){return a+b+c;}
}
```
### Overload usage notes:
```text
1. The method name must be the same;
2. Formal parameter list: the content must be different, and the parameter name does not affect;
3. Return type is not required
```
[[back to list]](#object-geleral-02)


### variable parameter:
```
Java allows multiple methods with the same name and function but different parameters in the same class to be encapsulated into one method;
```
### Basic syntax: 
```
access modifier + return type + method name (data type...parameter name) {}
```
### case of Variable Parameter:

- make a method could count 2,3,4,5....of ints' sum
```java
public class main{
    public static void main(String[] args) {
        
    }
}
class SumMethod{
    //int... means get variable parameters ,type is int, also could accept ints from 0 to ...
    // to use, we consider nums as array
    public int sum(int...nums){
        int total = 0;
        for (int i = 0; i < nums.length; i++) {
            total += nums[i];
        }
        return total;
    }
}
```
### Notes of Variable Parameter:
in main：
1. The actual parameters of variable parameters can be any number, including 0;
2. The actual parameter of the variable parameter can be an array;
3. The essence of variable parameters is an array;
4. Variable parameters can be placed in the formal parameter list together with ordinary type parameters, but it must be ensured that the variable parameters are at the end;
5. A formal parameter list can only have one variable parameter
```java
//demo:
public class main {
    public static void main(String[] args) {
        //as note 2,3
        int[] arr = {1, 2, 3};
        T t = new T();
        t.f1(arr);
    }
}

class T {
    public void f1(int... nums) {//as note3. in fact nums is array basically
    }
    
    public void f2(String str, double seperated, double...nums){//as note4,5
    }
}

```

[[back to list]](#object-geleral-02)

### field concept
The scope in JAVA is generally divided into global variables and local variables:
1. Global variables are attributes, and the scope is the entire cat class;
2. A local variable is a variable outside an attribute, and its scope is in the code block in which it is defined;
```java
class cat{
//  -----global variables here  
    //could be assigned directly or not assigned with default value and all cat class could access
    int age = 10;
    
    public void cry(){
//  -----local variables here
//        1. Local variables generally refer to variables defined in member methods;
//        2. n and name are local variables, should be assigned before usage
        int n = 10;
        String name = "jack";
    }
    
    public void eat(){
        System.out.println(age);//global variables could directly use
    }
}
```

### notice of scope:

1. Attributes and local variables can have the same name, and the principle of proximity should be followed when accessing;
2. In the same scope, such as in the same member method, two local variables cannot have the same name.
3. The attribute has a long life cycle, which is created when the object is created and destroyed when the object is destroyed;
   Local variables are created with the execution of the code block and disappear with the end of the code block, that is, they are destroyed every time the method creation method is called;

```java
class main {
   public static void main(String[] args) {
      Person person1 = new Person();
      person1.say();//will have Marry, because note 1.
      // if deleate String name = "Marry", will have Peter, because note 2.
      // name= Marry in the function say() is expired because of note 3.
//-----------------------------------------------------
      T t = new T();
      t.test1();//because note4.
      t.test2(person1);//because note4.
   }
}

class Person {
    public int age = 20;//because note 5.
   String name = "Peter";

   public void say() {
      String name = "Marry";
      System.out.println("say name: " + name);
   }

   public void hi() {
      String address = "Paris";
      //String address = "Dublin";//wrong, because note 2.
   }
}
```
4. Different scope
- Global variables: can be used by this class, and can be called by other classes by creating objects;
- Local variables: can only be used in the corresponding method in this class;

5. Different modifiers:
- Global variables: / attribute can be modified;
- Local variables: cannot add modifiers

```java
//the Person class as above
class T {
    //lobal variables: can be used by this class, and can be called by other classes by creating objects;
   public void test1() {
      Person person = new Person();
      System.out.println(person.name);//Peter
   }
   // or you can:
   public void tes2(Person p) {
      System.out.println(person.name);//Peter
   }
}
```
[[back to list]](#object-geleral-02)

### Constructor

### Needs of Constructor:
```
While creating an object, you can directly input the required attributes as assignments;
So we also call the constructor a construction method, which is a method for initializing properties;
```
### basic structure:

[modifier] method name (formal parameter list) {method body}

### note for constructor
```text
1 .Modifiers can be default or public
2. The constructor does not return anything !!! (because the goal is to initialize properties)
3. The method name must be consistent with the class name! ! !
4. The rules for parameter lists are the same as for member methods
5. The constructor call is done by the system -- means when new an obj, the system will automatically call the corresponding constructor in this class to complete the initialization of the object;
6. Because the essence of a constructor is a method, a class can have multiple constructors, that is, constructor overloading;
```
```
7. If there is no special constructor defined in the class, the system will automatically generate a default constructor, which can also be called a parameterless constructor; you can use javap to check the default constructor
8. Once you define your own constructor with parameters, the system's default constructor without parameters will be overwritten and cannot be used again unless it is explicitly written out, that is, cat(){}
```
DEMO:
```java
public class main {
   public static void main(String[] args) {
      Person person = new Person();//default constructor
      System.out.println("person info: name: "+person.name+" age: "+age);
      //null   18
   }
}

class Person {
   String name;//null
   int age;//0

   public Person() {
      age = 18;
   }

   public Person(String pName, int pAge) {
      name = pName;
      age = pAge;
   }
}
```

### Process of Object Creation
#### codes:
```java
class main{
   public static void main(String[] args) {
      Person p = new Person("Terry",20);
   }
}
class Person{
    int age = 90;
    String name ;
    Person(Sring n, int a){
        name = n;
        a![1.jpeg](pics%2F1.jpeg)ge = a;
    }
}
```
#### Analysis: 
- 1. s1 has a classperson, so it will load class Person in the method area. This process is only once, no matter how many times the object is created in the heap;
- 2. s2 new person will create a Person object in the heap, load the attributes in the person class, age and name, the initial value is 0 and null, the age in the class is assigned, so it becomes 90, and the name is still null;
- 3. s3("terry", 20), is to call the constructor, assign 20 to age, fill the address with name, and point to "terry" with the same address in the method pool;
- 4. s4 Person p, create a currently empty p in the stack that can point to the heap;
- 5. s5 links through "=", that is, the address is assigned to p, and p points to the object with the same address in the heap through the address;
![1.jpeg](pics%2F1.jpeg)

[[back to list]](#object-geleral-02)




### this concept
JVC will assign a "this" to each object, representing the current object;

```java
class Dog {
   String name;
   int age;
   public Dog(String name, int age) {
//     name is the name closest to the scope, which is the name passed in by the method,
//    this.name is the name of the current object;
      this.name = name;
      this.age = age;
   }
   public String toString() {
      return "Dog{" +
              "name='" + name + '\'' +
              ", age=" + age +
              '}';
   }
}
public class main {
   public static void main(String[] args) {
      Dog dog1 = new Dog("Puppy", 3);
      dog1.toString();
   }
}
```
### JVM showing -- this:
![2.jpeg](pics%2F2.jpeg)

- can use hashcode to check the address, if the attribute is right or not;

- It must be remembered that this is always accompanied by the created object and acts within the scope of the corresponding object;

### Notes of using this:
1. The this keyword can be used to access the original properties, methods, and constructors; (note:3,4)
2. this is used to distinguish the attributes and local variables of the current class;
3. The syntax for accessing member methods ---- this.method name (parameter list);
4. The syntax for accessing the constructor ---- this(parameter list);! ! ! Can only be used in constructors;
5. This cannot be used outside the class definition, it can only be used in the method defined by the class;

##### We'll come back after inheriting it, we'll understand better
```java
class main {
   public static void main(String[] args) {
      
   }
}
class T{
    //note.3.
   public void f1(){ System.out.println("f1() is working");}
   public void f2(){
      System.out.println("f2() is working");
      // want to use f1 in f2
      //1. 
      f1();
      //2.
      this.f1();
   }
}

class T2{
    // note 4.
   public T2(){
      // want to use T2(String name, int age) constructor:
//************** this() and super() should in the first line of the constructor
      this("jacky", 20);
      System.out.println("T2() constructor");
      
     
   }
   public T2(String name, int age){
      System.out.println("T2(String name, int age) constructor");
   }
}
```

[[back to list]](#object-geleral-02)
