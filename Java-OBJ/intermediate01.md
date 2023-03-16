## OBJ- Intermediate 01

[back to root list](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/intermediate.md)

---
### [The concept of package](#the-concept-of-packages-)
### [Access modifiers](#access-modifiers-)
### ! ! Encapsulation
- [Encap steps](#encap-steps)
- [Encap Demo](#encap-demo)
- [Encap and constructor](#encap-and-constructor)
### !! Inheritance
- [Schematic diagram](#schematic-diagram)
- [Case Demo](#case-demo-)
- [Notice of Inheritance](#notice-of-inheritance)
- [JVM drawing of Inheritance](#jvm-drawing-of-inheritance-)
### super
- [Basic usage](#basic-use-of-super)
- [The notice of super](#the-notice-of-super-)

---

### The concept of packages :
1. Different classes are generally placed in different folders, i.e. packages
2. Packages can also control the scope of access
```text
java.lang.* //lang is basic package
java.util.* // util is tool package, like Scanner
java.net.*//webpack
java.awt.*//GUI
```
notics of package:
```text
1. the role of package is to affirm the current class is located in the package, so it needs to be placed at the top of the class, a maximum of one sentence package in a class.
2. the import directive is below the package, before the class definition, and can be multiple sentences and no order requirement
```
[[back to list]](#--encapsulation)

---

### Access modifiers : 
```text
java provides four access modifiers that control access to methods and properties (member variables).
1. public (+): public to the outside world. 
2. protected (#): public for subclasses and classes in the same package.
3. default (no content): no written modifier, public to classes in the same package.
4. private (-): only accessible on the class itself, not public
```
| 1  | Access Level | type      | Same Class | Same Package | sub Class | deff Pack |
|----|--------------|-----------|------------|--------------|-----------|-----------|
| 2  | public       | public    | √          | √            | √         | √         |
| 3  | protected    | protected | √          | √            | √         | X         |
| 4  | (null)       | default   | √          | √            | X         | X         |
| 5  | private      | private   | √          | X            | X         | X         |

notice of Access Modifier:
1. Modifiers can be used to modify attributes in a class ---- member methods and classes;
2. Only the default and public can modify the class, and follow the above characteristics;
3. Subclass access rights will be repeated after inheritance ();
4. The access rules and attributes of member methods are consistent;

[[back to list]](#--encapsulation)

---

### Encapsulation

### Encap steps
```text
1. Privatize member properties; //privat Int age, so could be accessed outsied the current class

2. Provide a public set method to assign values to attributes:
```
```java
     public void setXXXX(type parameter name){
            //Add data validation logic, etc.
            property = parameterName;
            }
```
```text
3. Provide a public get method for obtaining attribute values
```  
```java
        public void getXXXX(){
        return xxxx;
        }
```
[[back to list]](#--encapsulation)
### Encap Demo
```java
public class Test {
    public static void main(String[] args) {
        Person person = new Person();
        person.setName("FASFAFAFSFASFSAFAFSA");
        person.setAge(200);
        person.setJob("Compiler");
        person.setSalary(20000);
        System.out.println(person.info());
    }
}
class Person{
    public String name;
    private int age;
    private double salary;
    private String job;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        if(name.length() < 8 && name.length() >= 0) {
            this.name = name;
        }
        else {
            this.name = "Terry";
            System.out.println("wrong name, default your name:"+ this.name);
        }
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        if(age>=0 && age < 120) {
            this.age = age;
        }else{
            this.age = 18;
            System.out.println("wrong age, defult the age as: "+ this.age);
        }
    }
    public double getSalary() {
        return salary;
    }
    public void setSalary(double salary) {
        this.salary = salary;
    }
    public String getJob() {
        return job;
    }
    public void setJob(String job) {
        this.job = job;
    }
    public String info() {
        return "name='" + name +
                ", age=" + age +
                ", salary=" + salary +
                ", job='" + job;
    }
}
```
[[back to list]](#--encapsulation)

### Encap and constructor
If the constructor is used, the encapsulation of the above person class will be invalid

Like:
```java
// we generate a constructor in Person
   public Person(String name, int age, double salary, String job) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.job = job;
    }
 // and we can use the private attributes in main diretcy
    Person person = new Person("Terry",18,"Compiler",30000);
    person.info()
```
incase of above:
```java
  public Person(String name, int age, double salary, String job) {
//        this.name = name;
//        this.age = age;
//        this.salary = salary;
//        this.job = job;
        setName(name);
        setAge(age);
        setSalary(salary);
        setJob(job);
    }
```
[[back to list]](#--encapsulation)

---

### Inheritance
```
The purpose of inheritance is to solve code reuse and make our programming thinking closer to human thinking. When multiple classes have the same attributes (variables) and methods, the parent class can be abstracted from these classes, and these same attributes and methods can be defined in the parent class.

All subclasses do not need to be redefined, and can be used directly by declaring the inheritance relationship through extends.
```
### Schematic diagram
```text
the gold attributes in A could be used by all sub class though extends
```
![IMG_6572B8D941FA-1.jpeg](pics%2FIMG_6572B8D941FA-1.jpeg)

### Case Demo:

```java
public class Student {//base
    //common attribute
    public String name;
    public int age;
    private double score;

    //common function
    private void setScore(double score) {
        this.score = score;
    }

    public void showInfo() {
        System.out.println("Name: " + name + " Age: " + age + " score: " + score);
    }
}

public class Pupil extends Student {
    public void tesing() {
        System.out.println("Pupil " + name + " is testing..");
    }
}

public class Graduate extends Student {
    public void tesing() {
        System.out.println("Graduate " + name + " is testing..");
    }
}

class main {
    public static void main(String[] args) {
        Pupil pupil = new Pupil();
        pupil.name = "Terry";
        pupil.age = 10;
        pupil.tesing();
        pupil.setScore(60);
        pupil.showInfo();
        System.out.println("=========");
        Graduate graduate = new Graduate();
        //...
    }
}
```
[[back to list]](#--encapsulation)

### Notice of Inheritance：
```text
1. Subclasses inherit all properties and methods, but private properties cannot be accessed directly in subclasses, but through public methods (usually geter and seter);
```
```text
2. The subclass must call the constructor of the parent class to complete the initialization of the parent class;
3. To create a subclass object, regardless of the constructor of the subclass, the default constructor of the parent class will be called by default. 
If the parent class does not have a default constructor, you must use super to identify it in the subclass constructor. Which constructor of the parent class is used specifically, otherwise it cannot be compiled;
```

```java
class Base {
    public int n1 = 100;
    protected int n2 = 200;
    int n3 = 300;
    private int n4 = 400;

    public Base() {
        System.out.println("Base() constructor");
    }
    public Base(int n1){// 
        System.out.println("Base(int n1) constructor");
    }
}

class Sub {
    public Sub(){
       //computer will run this no matter it has or not in sub constructor super();
        //super(10);
        System.out.println("Sub() constructor" );
    }
    public Sub(int n1){
        //super(10);
        System.out.println("Sub(int n1) constructor");
    }
}
class main {
    public static void main(String[] args) {
        Sub sub = new Sub();//will have "Base() constructor" also----note 2.
                        // then will have "Sub() constructor"
        //======================
        //if we delete the base() default constructor note 3.
        //1. the sub()default constructor will error, as we have no base default constructor, deleted by parameter ones;
        //2. then delete sub()default constructor;
        //3. or you can add "super(10);" both in the first line for sub constructor sub(){} and sub(int n1){}
        Sub sub2 = new Sub();
    }
}
```
```text
4. If you want to specify to call a constructor of the parent class, call it explicitly;
5. When super() is used, it must be placed in the first line of the constructor;
6. Both our super() and this() can only be placed in the first line of the constructor to define the scope of the constructor, so the methods of these two constructors cannot appear at the same time;
```
```java
// note 4.
// in base
 public Base() {
        System.out.println("Base() constructor");
    }
public Base(int n1){// 
        System.out.println("Base(int n1) constructor");
        }
        
// in sub
public Sub(int n1){
      //-- note 4. if want to use the defult constructor
              // use super(); or write nothing -- note 4.
     //         if want to use base(int n1)
      // super(int n1);  so we can acceess any constructor from base, but only in first line -- note.5/6
        System.out.println("Sub(int n1) constructor");
        }
```
```text
7. Java is a single inheritance mode;
8. Do not abuse inheritance, the general relationship between a subclass and a parent class is an "is-a" relationship
```
[[back to list]](#--encapsulation)
### JVM drawing of Inheritance:
![IMG_7DF84D95213C-1.jpeg](pics%2FIMG_7DF84D95213C-1.jpeg)

Lookup relations to return information:
1. Check whether the sub-column has this attribute;
2. The subclass has and can be accessed, and returns the information directly;
3. If there is no subclass, check the parent class, and return information if it exists and can be accessed;
4. The parent class does not search for the parent class of the parent class until the Object class

[[back to list]](#--encapsulation)

### super
### basic use of super
1. What is accessed is the attribute of the parent class, but the private attribute of the parent class cannot be accessed alone;
   super. attribute name
2. Access the method of the parent class, but it cannot be a private method;
   super. method name (parameter list)
3. In the subclass constructor, when accessing the constructor of the parent class, super() is not called by default, if the default constructor of the parent class is not overwritten;
   super (parameter list);//Must be placed on the first line of the subclass constructor

## The notice of super:
1. Call the constructor of the parent class, the properties of the parent class are initialized by the parent class, and the properties of the subclass are initialized by the subclass, with a clear division of labor;
2. When the subclass has the same name as the member (property and method) in the parent class, in order to access the members of the parent class, you must pass super. If there is no duplicate name, it can actually be called directly.

[[back to list]](#--encapsulation)
