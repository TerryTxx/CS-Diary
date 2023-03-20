
[back to Root list](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/object-general.md)

---

### Exercises for Object-Basic： 
 
1. Write class A1, implement the method max(), find the maximum value of a double array, and return it;

[answers](#exercise-01-)
2. Write class A2, define the method find(), realize the search for the elements of a certain string array, and return the corresponding index, notfound return -1;

[answers](#exercise-02-)
3. Write the class Book, define the method updatePrice, and change the price of a book. 
Specifically: if the price is > 150, change it to 150; if the price is > 100, change it to 100; otherwise, it will remain unchanged.

[answers](#exercise-03-)
4. Write class A3, the method copyArr that realizes the array copy function, input the array, return the new array, and the elements are the same as the old array;

[answers](#exercise-04-)
5. Define a circle class Circle, define the attribute radius, and provide the function of calculating the circumference and calculating the area;

[answers](#exercise-05-)
6. Write a cale class, which defines 2 variables to represent two operands, defines 4 methods to implement summation, difference, product and quotient (if it is 0, give a hint), and creates two objects to test separately

[answers](#exercise-06-)
7. Design a dog class with name, color and age attributes, set a method show() to display these information, and create an object for testing [tip: use this]

[answers](#exercise-07-)
8. what will print out?:

```java
public class Test {
    int count = 9;

    public void count1() {
        count = 10;
        System.out.println("count1=" + count);//10
    }

    public void count2() {
        System.out.println("count1=" + count++);//9   then count+1 = 10 in Test class
    }

    public static void main(String[] args) {
        new Test().count1();//10 count in count1()
        Test test1 = new Test();
            test1.count2();//9 count in Test
            test1.count2();//10  count is now 11 in Test class
    }
}
```

9. Define the music class, which contains the music name, times attribute, and the function of playing and returning its own attributes

[answers](#exercise-09-)
10. what value will run out?:
```java
class Demo{
    int i = 100;
    public void m(){
        int j = i++;
        System.out.println("i = "+ i);
        System.out.println("j = "+ j);
    }}
class Main{
    public static void main(String[] args) {
        Demo d1 = new Demo();
        Demo d2 = d1;//point to same object
        d2.m();//m()woring, j assigned by i, then i++ ,then sout,     1.i:101, j:100
        System.out.println(d1.i);//2. 101
        System.out.println(d2.i);//3. 101
    }}
```

11. In the test method, call the method method, the input and output in main are as follows, please write method; sout(method(menthod(10.0,20.0),100);

[answers](#exercise-11-)
12. Create an employee class with attributes (name, gender, age, position, salary), provide 3 constructors, and initialize：
- (1) Name, gender, age, position, salary;
- (2) Name, gender, age;
- (3) Position, salary. 
- ！！（it is required that the constructor must be reused;）

 [answers](#exercise-12-)
13. Pass the object as a parameter to the method.
- (1) Define a circle class, including the radius attribute of double type, and findArea() returns the area of the circle;
- (2) Define a pass class, and please complete the method: public void printAreas(Circle c, int times)
- (3) In the printArea method, print the radius and corresponding area of each integer between 1 and times
- (4) Call printAreas() in the main method and output the current radius

[answers](#exercise-02-)
14. Someone named Tom designed his member variables and methods, which can be played with the computer.
The computer will randomly generate 0, 1, 2 each time (0 means rock, 1 means scissors, 2 means cloth) and can display the list of tom's wins and losses
    
[answers](#exercise-02-)

-------
### Exercise 01:
```java
class A1{
    public double max(double[]arr){
        double max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if(max < arr[i]) max = arr[i];
            return max;
        }
    }
}

```
[[back]](#exercises-for-object-basic)
------
### Exercise 02:
```java
class A2 {
    public int find(String[] arr, String str) {
        for (int i = 0; i < arr.length; i++) {
            if (str = arr[i])
                return i;
        }
        return -1;
    }
}
```
[[back]](#exercises-for-object-basic)
### Exercise 03:
```java
class Book{
    String name;
    double price;
    public void updatePrice() {
        if (this.price > 150) this.price = 150;
        else if (this.price > 100) this.price =100;
       
    }
}
```
[[back]](#exercises-for-object-basic)
### Exercise 04:
```java
class A3{
    public <T> T[] copyArray(T[] array) {
        T[]newArray;
        for (int i = 0; i < array.length; i++) {
            newArray[i] = array[i];
        }return newArray;
    }
}
```
[[back]](#exercises-for-object-basic)
### Exercise 05:
```java
class circle{
public double getArea() {
        return Math.PI * radius * radius;
        }

public double getCircumference() {
        return 2 * Math.PI * radius;
        }
}
```
[[back]](#exercises-for-object-basic)
### Exercise 06:
```java
class cale{
    double a;
    double b;
    public double sum(double a1, double b1){
        return a1+b1;
    }
    public double pro(double a1, double b1){
        return a1*b1;
    }
    public double minuse(double a1, double b1){
        return Math.abs(a1-b1);
    }
    public double quo(double a1, double b1){
        if(b1 ==0 ) System.out.println("b1 should not be 0");
        else return a1+b1;
    }
}
```
[[back]](#exercises-for-object-basic)
### Exercise 07:
```java
class Dog {
    String name;
    String color;
    int age;
    public String show() {
        return "Dog: " +
                 + name + '\'' +
                ", color is '" + color + '\'' +
                ", age is " + age +
                '}';
    }
}
```
[[back]](#exercises-for-object-basic)
### Exercise 09:
```java
    class music {
    String name;
    double times;

    public String showMusic() {
        return "music--" +
                "name='" + name + '\'' +
                ", times=" + times +
                ' ';
    }
    public void playing(){
        System.out.println(this.showMusic()+"is playing");
    }
}
```
[[back]](#exercises-for-object-basic)
### Exercise 11:
```java
class main{
    public static void main(String[] args) {
        System.out.println(method(menthod(10.0,20.0),100));
    }
    public double method(double a, double b){
        return a+b;//a-b//a*b just return a double, b could not be 0 if a/b
    }
}
```
[[back]](#exercises-for-object-basic)
### Exercise 12:
```java
class employee{
    String name;
    String gender;
    int age;
    String possiton;
    double salary;
    employee(String possition, double salary){
        this.possition = possition;
        this.salary = salary;
    }
    employee(String name, String gender, int age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    employee(String name, String gender, int age,String possition, double salary){
        this(name, gender,age);
        this.possition = possition;
        this.salary = salary;
    }
}
```
[[back]](#exercises-for-object-basic)
### Exercise 13:
```java
public class Main {
    public static void main(String[] args) {
        PassObject passObject = new PassObject();
        Circle circle = new Circle();
        System.out.println("Radius"+"\t"+"Area");
        passObject.printAreas(circle, 5);
    }
}
class Circle {
    double radius;
    public double findArea() {
        return Math.PI * radius * radius;
    }
}

class PassObject {
    public void printAreas(Circle c, int times) {
        for (int i = 1; i <= times; i++) {
            c.radius = i;
            System.out.println(i + "\t" + c.findArea());
        }
    }
}
```
[[back]](#exercises-for-object-basic)
### Exercise 14:
```java
public class Main {

    public static void main(String[] args) {
        Tom tom = new Tom();
        Computer computer = new Computer();
        tom.play(computer,15);
    }
}
class Tom{
    int toms = (int) (Math.random() * 3);
    public void play(Computer c,int playingtimes){
        int lose = 0, win = 0;
        for (int i = 0; i < playingtimes; i++) {
            if((toms == 0 && c.Mora()==2)||(toms == 1 && c.Mora() == 0)||(toms == 2 || c.Mora()==1)){
                lose++;
                System.out.println("lose the "+ lose+" times");}
            else if((toms == 0 && c.Mora()==1)||(toms == 1 && c.Mora()==2)||(toms == 2 && c.Mora()== 0)){
                win++;
                System.out.println("win the "+ win+" times");}
        }
        System.out.println("totally win: "+win+" time and totally lose: "+lose+" times");
    }
}
class Computer{
    public int Mora(){
        return (int) (Math.random() * 3);
    }
}
```

[[back]](#exercises-for-object-basic)

```java