## OBJ- Intermediate 02

[back to root list](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/intermediate.md)

---
### override
- [concept](#concept-of-override-)
- [notice of usage](#notes-of-override-)

### !!!! Polymorphic
- [method polymorphic ](#method-polymorphic)
- [<span style="color: lightcoral;">object polymorphic (core)</span>](#span-stylecolor-red-object-polymorphic-span)
- [Upcasting](#upcasting)
- [DownCasting](#downcasting)
- [Attribute Notices in Poly](#attribute-in-poly)
- [<span style="color: lightcoral;">!!! Dynamic binding mechanism ](#dynamic-binding-mechanism)
- [<span style="color: lightcoral;">polymorphic array ](#polymorphic-array)
- [polymorphic parameters](#polymorphic-parameters)

### [equals and "=="](#equals-and-symbol)

### [Usage: hashCode, toString and finalize](#hashcode-tostring-and-finalize)

### [Breakpoint/Debugging Usage](#breakpointdebugging)

---
### override
#### concept of override:
The subclass has a method with the same name, return type and parameters as the parent class, then the method of the subclass overrides that of the parent class;

### notes of override:
1. The name of the parameters of the subclass method must be exactly the same as that of the parent class;
2. The return type of the subclass must be the same as that of the parent class, or a subclass of the return type of the parent class (commonly used in generics);
3. The access rights of subclass methods cannot be narrowed; (the scope of access modifiers)

[[back to list]](#override)
### Polymorphic
Polymorphism is based on encapsulation and inheritance

### method polymorphic
###### Overload and override of methods to reflect polymorphism
```java
class Main {
    public static void main(String[] args) {
        //example of overload is poly
        A a = new A();
        System.out.println(a.sum(10, 20) + " " + a.sum(10, 20, 30));
        // example of override is poly
        B b = new B();
        a.say();
        b.say();
    }}
class B {
    public void say() {
        System.out.println("B say");
    }}
class A extends B {
    public int sum(int a, int b) {// with the sum(a,b,c) , making the overload
        return a + b;
    }
    public int sum(int a, int b, int c) {
        return a + b + c;
    }
    public void say() {//override of B
        System.out.println("A say");
    }}
```
[[back to list]](#----polymorphic)

### <span style="color: lightcoral;">object polymorphic
Polymorphism presupposes that there is an inheritance relationship between two objects (classes)
```
1. the compile type and running type of an object can be inconsistent.</span>
2. the compile type is determined when the object is defined and cannot be changed;</span>
3. the running type can change.</span>
```
<span style="color: olivedrab;">
4. the compiled type looks to the left of the "=" at the time of definite object, and the running type looks to the right of the "="</span>

Demo:
```java
//image we have three class ,Animal,Dog,Cat, all have method call()
// animal's compile type is Animal and running type is Dog
//in main:
    Animal animal = new Dog();
    animal.call(); // because when run, animal running type is Dog, so the call is "dog bark"
            
 // then, change the Running type to Cat, and the compiling type is still Animal
  animal = new Cat();
  animal.call();//because when run ,animal running type is Cat, so the call is "cat miao"
```
Going back to the beginning when we wanted to register different classes of animals in the zoo, we had the flexibility to use polymorphism and their diets, habits etc. could also be written as different classes.

[[back to list]](#----polymorphic)

### Upcasting：
** we confirm the classes have extends relations**
1. essence: it is the reference of the parent class  pointing to the object of the child class.

2. format: 
- (parent class type) (reference name) = new (subclass type) ()；

3. features: compile to look left, run to look right.
- 1. Because the compiled type is the parent class: all members of the parent class can be called (note the access modifier)
- 2. Because the compiled type is the parent class: members specific to the subclass cannot be called. 
- 3. Because the run type is subclass:  the result looks from the subclass.

```java
class Animal{
    String name = "Animal";
    int age = 0;
    public void sleep(){System.out.println("sleeping");}
    public void eat(){System.out.println("eating");}
    public void run(){System.out.println("running");}
    public void show(){System.out.println("hi~");}}

class Cat extends Animal{
    public void eat(){System.out.println("cat is eating");}
    public void catchMouse(){System.out.println("cat is catching Mouses");}}

class PolyDetail{
    public static void main(String[] args) {
        //1. it is the reference of the parent class to the object of the child class
        Animal animal = new Cat();  //Object obj = new Cat();
        //2. format: - (parent class type) (reference name) = new (subclass type) ()；
        animal.eat();// cating is eating//the result looks from the subclass, running Cat, so find if have eat function in Cat class
        animal.sleep();//sleeping
        animal.run();//running
        animal.show();//hi
        // animal.catchMouse(); will error
    }
}
```
[[back to list]](#----polymorphic)

### DownCasting：
** we confirm the classes have extends relations**
1. Format: 
- (subclass type) reference name = (subclass type) (reference to parent class).
2. can only strongly transfer references of the parent class, not objects of the parent class.
3. requiring that the reference to the parent class must point to the current current type.
4. can call all members of the subclass type.

```java
class Animal{
    String name = "Animal";
    int age = 0;
    public void sleep(){System.out.println("sleeping");}
    public void eat(){System.out.println("eating");}
    public void run(){System.out.println("running");}
    public void show(){System.out.println("hi~");}}

class Cat extends Animal{
    public void eat(){System.out.println("cat is eating");}
    public void catchMouse(){System.out.println("cat is catching Mouses");}}

class PolyDetail{
    public static void main(String[] args) {
        Animal animal = new Cat(); 
        // animal.catchMouse();  now we want this line works
//       1 Format:
//        - (subclass type) reference name = (subclass type) (reference to parent class).
        Cat cat = (Cat) animal;
            cat.catchMouse();
            //or using directly no need declare Cat again
         ((Cat) animal).catchMouse();
         //3. requiring that the reference to the parent class must point to the current current type.
        // animal is point to Cat class by :Animal animal = new Cat(); 
    }}
```
[[back to list]](#----polymorphic)

### Attribute in poly
1. the attribute is not Overridden.
- Attributes determined by compile types.

Demo:

```java
class Base { int age = 50; }

class Sub extends Base { int age = 20; }
class main {  public static void main(String[] args) {
        Base base = new Sub();//upcasting
        System.out.println(base.age);// compile type Base, so age=50;
        Sub base2 = new Sub();
        System.out.println(base2.age);//20, compile type is Sub
    }}
```
2. the instanceOf comparison operator.
- Used to determine if an object is of type XXX or a subclass of class XXX

###### we will have a demo in polymorphic array;
[[back to list]](#----polymorphic)

### dynamic binding mechanism
<span style="color: lightcoral;">1. when an object method is called, the method is bound to the memory address/run type of that object.

<span style="color: lightcoral;">2. when an object property is invoked, there is no dynamic binding mechanism and the location of the declaration currently determines where it is used.

Demo:
```java
public class Person{
    private String name;
    private int age;
    public Person(String name, int age) {
        this.name = name;
        this.age = age;  }
    public String say(){  return "I am "+ name +" ，I'm "+ age;  }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() {  return age; }
    public void setAge(int age) {  this.age = age;}
}

class Student extends Person{
    private double score;
    public Student(String name, int age, double score) {
        super(name, age);
        this.score = score; }
    @Override
    public String say() {
        return super.say() + ", my score is: "+score;
    }
    public void Study(){ System.out.println(this.getName()+" is studying");}
    public double getScore() { return score; }
    public void setScore(double score) { this.score = score; }
}

class Teacher extends Person{
    private double salary;
    public Teacher(String name, int age, double salary) {
        super(name, age);
        this.salary = salary;
    }
    @Override
    public String say() {return super.say() +", salary is "+ salary; }
    public void Teach(){System.out.println(this.getName()+" is teaching");}
    public double getSalary() {return salary;}
    public void setSalary(double salary) {this.salary = salary;}
}
```

[[back to list]](#----polymorphic)

### polymorphic array
```text
Case: 
Create a Person object, 2 Student objects and 2 Teacher objects. person has a name and int attribute, student has a separate score attribute and method for study, and teacher has a separate salary attribute and method for teach

1. Put them in an array uniformly and call the say method of each object?
2. How do you call the independent STUDY and TEACH methods of STUDENT and TEACHER?
```
```java

public class dynamicBinding {
    public static void main(String[] args) {
        A a = new B();
     //Step1:
        System.out.println(a.sum());//40//running type B(), i is local i =20;
        System.out.println(a.sum1());//30//running type B(), i is local i =20;
     //Step2:
         //running type class B, but no sum() in class B, so jvm search in class A;
         //jvm find sun() in A ,and run ,but return getI()--both have in A and B;
         //getI() is dynamic mechanism, as running type is B, so go to B find getI(), and out 30;
         //=========
         //a.sum1(),running type B, so out 30(20+10)
        // if we delete the public int i =20; then jvm will find form base;
        System.out.println(a.sum());
        System.out.println(a.sum1());
     //Step3:
        //a.sum() still like Step 2, out 30
        //==========
        //a.sum1() running type B, not find in B, so search in base A;
        //we find sum1() in A, so return i+10;  ?? what i should be?
        // as now i'scope is in A, by using sum1(), so i = 10
        // out 20;
        System.out.println(a.sum());
        System.out.println(a.sum1());
    }}
class A{
    public int i =10;
    public int sum() { return getI()+10;}
    public int sum1(){ return i+10;}
    public int getI() { return i;}}
class B extends A {
    public int i =20;
// step 2   after first running, we delete sum() in B
    // public int sum() { return i+20; }
//Step 3: after step 2 finished, we delete sum1() in B also
//    public int sum1(){ return i+10;}
    public int getI() {  return i;}}
```
in main: 
```java
public class polyArray {
    public static void main(String[] args) {
        //2 student and 2 Person in an array
        Person [] persons = new Person[5];
        // upcasting to construct the Person Array
        persons[0] = new Person("Jack",30);
        persons[1] = new Student("Tom",18,100);
        persons[2] = new Student("Hib",17,96);
        persons[3] = new Teacher("Granny",42,4200);
        persons[4] = new Teacher("Brand", 51,5000);
        //loop the array,using say
        for (int i = 0; i < persons.length; i++) {
            //compile type is Person ,running type is dynamic bind for loop
            System.out.println(persons[i].say());
        }
        // if we want get the function separately in Teacher and Student
        for (int i = 0; i < persons.length; i++) {
            if(persons[i] instanceof Student){
              ((Student)persons[i]).Study();
            }
            if (persons[i] instanceof Teacher){
                ((Teacher)persons[i]).Teach();
            }
        }}
}
```
[[back to list]](#----polymorphic)

### polymorphic parameters
```text
Case: 
Define the employee class, including name and monthly salary, and the method getAnn() for calculating salary; define ordinary employee and manager classes that inherit it, managers have bonus attributes and manage methods, and ordinary workers have independent work methods. Two subclasses override the getAnn method;

Add a showEmpAnnual method to the test class to get the annual salary of any employee object;

Add a method in the test class, testWorkType, if it is an ordinary employee, call the work method, otherwise call the manage method
```
```java
public class Employee {
    private String name;
    private double salary;
    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary; }
    //get annual
    public double getAnn(){   return salary*12;  }
    public String getName() {  return name; }
    public void setName(String name) { this.name = name; }
    public double getSalary() {  return salary;  }
    public void setSalary(double salary) {  this.salary = salary;  }
}
public class generalWorker extends Employee{
    public generalWorker(String name, double salary) {
        super(name, salary);
    }
    public void work(){ System.out.println(getName() + "is working") ;}

    @Override
    public double getAnn() {   return super.getAnn(); }
}
public class Manager extends Employee{
    private double bonus;
    public Manager(String name, double salary, double bonus) {
        super(name, salary);
        this.bonus = bonus;}
    public void manage(){  System.out.println(getName()+" is managing"); }
    @Override
    public double getAnn() {   return super.getAnn()+bonus; }

    public double getBonus() {  return bonus;}
    public void setBonus(double bonus) {  this.bonus = bonus;}
}
```
```java
public class PloyParamater {
    public static void main(String[] args) {
       generalWorker tom =  new generalWorker("Tom",2500);
       Manager marry = new Manager("Marry", 5000, 20000);
        PloyParamater ployParamater = new PloyParamater();
        ployParamater.showEmpAnnual(tom);
        ployParamater.showEmpAnnual(marry);
        ///
        ployParamater.testWorkType(tom);
        ployParamater.testWorkType(marry);
    }
    public void showEmpAnnual(Employee e){
        System.out.println(e.getAnn());//dynamic binding
    }
    public void testWorkType(Employee e){
        if(e instanceof generalWorker){
            ((generalWorker) e).work();
        } else if (e instanceof Manager) {
            ((Manager) e).manage();
        }
    }
}
```
[[back to list]](#----polymorphic)

### equals and symbol
"=="
1. is a comparison operator;
2. Judging the basic data type and whether the judged values are equal;
3. Judging the reference data type, the judgment is whether the address is consistent, that is, the same object;

equals:
1. It is a method in the Object class, so it can judge the reference data type by itself;
2. Direct use the method : ---- determine whether the address is the same;
3. Subclasses override the method : ---- generally used to determine whether the content is the same;（For example, in the String class, it comes with rewriting to judge whether the content is consistent）

[[back to list]](#----polymorphic)



### hashCode toString and finalize
hashCode
1. Improve the efficiency of containers with hash structures;
2. Two references, if they point to the same object, have the same hash value, otherwise they must be different;
3. Therefore, it is also detailed and mainly written according to the address number;

toString:
1. Default: hexadecimal of full class name + 2 + hash value. Subclasses often return the attribute information of the object;
2. Rewriting is, generally splicing into a string, return;
3. When directly outputting an object, the toString method will be called by default;

finalize:
1. When the object is recycled, the system automatically calls the finalize method in the object. Subclasses can override this method to do some operations to release resources;
2. Recycling time: When an object does not have any references, jvm considers the object to be a garbage object, and uses the garbage collection mechanism to destroy the object. Before destroying, call this method;
3. The call of the garbage collection mechanism: It is determined by the system, or it can be passed through the system. gc() triggers actively
[[back to list]](#----polymorphic)


### Breakpoint/Debugging
1. During the development process, breakpoint debugging will be used to find the location of the problem;
2. During the debugging process, it is in the running state, that is, it is executed according to the running type of the object;



[[back to list]](#----polymorphic)

