 ### Exercises for Object-Basic： 
 
1. Write class A1, implement the method max(), find the maximum value of a double array, and return it;

[answers](#exercise-01-)
2. Write class A2, define the method find(), realize the search for the elements of a certain string array, and return the corresponding index, notfound return -1;

[answers](#exercise-02-)
3. Write the class Book, define the method updatePrice, and change the price of a book. 
Specifically: if the price is > 150, change it to 150; if the price is > 100, change it to 100; otherwise, it will remain unchanged.

4. Write class A3, the method copyArr that realizes the array copy function, input the array, return the new array, and the elements are the same as the old array;

5. Define a circle class Circle, define the attribute radius, and provide the function of calculating the circumference and calculating the area;

6. Write a cale class, which defines 2 variables to represent two operands, defines 4 methods to implement summation, difference, product and quotient (if it is 0, give a hint), and creates two objects to test separately

7. Design a dog class with name, color and age attributes, set a method show() to display these information, and create an object for testing [tip: use this]

8. Judgment

9. Define the music class, which contains the music name, times attribute, and the function of playing and returning its own attributes

10. Judgment

11. In the test method, call the method method, the input and output in main are as follows, please write method; sout(method(menthod(10.0,20.0),100);

12. Create an employee class with attributes (name, gender, age, position, salary), provide 3 constructors, and initialize：
- 1.Name, gender, age, position, salary;
- 2.Name, gender, age;
- 3.Position, salary. 
- ！！（it is required that the constructor must be reused;）


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
### Exercise 03:
```java
class Book{
    public double updatePrice(double price) {
        if (price > 150) return 150;
        else if (price > 100) return 100;
        else return price;
    }
}
```
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




