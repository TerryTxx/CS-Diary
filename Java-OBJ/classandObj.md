## Object General 01

##### [back to Root list](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/object-general.md)

---
### Classes and Objects
#### [An overview of classes and object](#an-overview-of-classes-and-objects-)
#### [Demo of class attribute](#demo-of-class-attribute-)
#### [!!! Graphical representation of objects in memory-](#---graphical-representation-of-objects-in-memory)
#### [Java's Memory Distribution](#java-memory-distribution-)
#### [notice of attribute](#notice-of-attribute)
### Member method
#### [!!! Memory graph showing how method called](#---memory-graph-showing-method-calls)
#### [!!! Create a method](#---create-a-method)
### Member method parameter passing mechanism
#### [!!! The parameter passing in method](#---the-parameter-passing-mechanism-of-the-method-)
- 1. [Case1 -- Parameter passing of basic data types](#case1----parameter-passing-of-basic-data-types)
- 2. [Case2 -- Parameter passing by reference data type](#case2----parameter-passing-by-reference-data-type)
- 3. [Demo of copy Object](#demo-of-copy-object-)
---

#### why we need obj and classes:
```text
A zoo, a variety of animals, age, diet will be different; 
so constantly refer to variables, data management is very troublesome
```


### An overview of classes and objects:
```text
Every program is a world, and there are many things, 
which are realized through objects [properties, behaviors].
```
```
Taking the zoo as an example, we extract all cats as data types, 
and corresponding to different animals, we have specific object instances;
```
- #### According to the above, Class CatType is a class, a data type，is the catfamily we named with same attribute and function
- #### CatType Tiger = new CatType, Objcet Tiger, which is a specific example of the cat family

[[back to list]](#class-attribute-member-variable)

##### Demo of class attribute:

```java
class CatFamily {//could consider all this family has name, age color attribute
    String name;
    int age;
    String color;
}

//oop in main,create a tiger or instantiate a catFamily
class Zoo {
    public static void main(String[] args) {
        //we create a tiger
        // and make tiger's confirmed attributes access to the catFamily's
        CatFamily Tiger = new CatFamily();
        Tiger.name = "Tiger";
        Tiger.age = 5;
        Tiger.color = "Gold";

        // and We can creat a lion, make line common attributes access to the catFamily's
        CatFamily Lion = new CatFamily();
        Lion.name = "Lion";
        //...
    }
}
```
[[back to list]](#class-attribute-member-variable)
### !!! Graphical representation of objects in memory：
- s1: new CatFamily() ---- we have a new obj copied attribute from Class Catfamily and with unique access 0x0011(just demo)
- s2: CatFamily Tiger ---- we have access pointer names Tiger, but if no "=", no access yet，the empty key
- s3: "=" ---- we fill empty Tiger key by unique access 0X0011 , making it point to the object CatFamily with address 0X0011
- s4: Tiger.name ="Tiger"; ---- Because string is also a reference data type, it actually links the corresponding data through the equal sign from the method pool in the method area（Demo as 0X0022）

- #### ***the class Catfamily's Attributes and Methods is stored in method area and when new(), general attribute is attached with new obj ,but others are just address(0x0022,0x0033),details are still in method pool with the unique corresponded address***

- s5: Tiger.age = 5;----Because int is a conventional data type, it is automatically carried by new obj, so it can be assigned directly.
- s6: The last one is color ---- string can be understood as accompanying obj, and it also exists after new, but in fact it exists address information, which needs to be called in the method area
![objJVM.jpeg](pics%2FobjJVM.jpeg)

### Java memory distribution:
1. Stack: generally stores basic data and local variables;
2. Heap: store objects (OBJ, Array, etc.);
3. Method area: constant pool (constant, string with address), class loading information
"=" for general constants, it is assignment, and for reference types, it means pointing to the corresponding address，or assign the address;

[[back to list]](#class-attribute-member-variable)

### member variable/attribute
```
1. Conceptually speaking, it is the corresponding attribute (CatFamily(name,colour,age))
2. Attributes are part of a class and consist of basic data types and reference data types
```
### notice of attribute
```text
1. Except for access modifiers, there is no difference from the general ones;
```
[Object-oriented intermediate level, access modifiers, need the concept of package]()
```
2. The definition type of the attribute can be any type, basic and reference type

3. If the attribute is not assigned a value, it is the default value, and the rules are the same as the array
```
[[back to list]](#class-attribute-member-variable)
### class method / member method
###### Similar to cats, there are many behaviors, can eat meat, can bark, etc.
### demo:

```java
    class Cat {![memberMethod.jpeg](..%2F..%2F..%2F..%2FDownloads%2FmemberMethod.jpeg)
    String name;
    int age;
    int num1;
    int num2;

    //add a method
    //mow method, sout"mow~~"
    //1.public could be accessed by no limit
    //2. void: no return
    //3. mow():  mow is method name,  ()no paramater, you can add formal ones also
    //4. {} : method body
    public void mow() {
        System.out.println("mow~~~");
    }
}

class Num {
    int num1;
    int num2;

    public int getSum(int num1, int num2) {
        int res = num1 + num2;
        return res;
    }
}

//then u can use in main
class main {
    public static void main(String[] args) {
        Num numA = new Num();
        int returnAll = numA.getSum(10,20);
        System.out.println("sum: "+ returnAll);

        Cat cat = new Cat();
        cat.mow();
    }
}
```
[[back to list]](#class-attribute-member-variable)
### !!! Memory graph showing method calls
- s1: new a Num() obj ,and numA point to the address of the new Num() by "=";
- s2:
- - 1. use the method getSum(), bring the (10,20),from".", the method points the separet area in stack with the function of getSum;
- - 2. as the getSum() defualt in Num, the space in stack call the details form classNum(address also),and attach num1 and num2 with(10,20)
- s3: follow the mothod getSum() line by line, when at the end, return means return the function where it calls, so back to the main, and go on after the getSum(10,20), with the res value;

![memberMethod.jpeg](pics%2FmemberMethod.jpeg)

1. When the program executes the method, it will open an independent stack space, and execute the corresponding method step by step;
2. When the execution of the method ends, or when the execution reaches return, it will return with the execution result;
3. The returned address is the location of the call, and continue to execute the following code from this location;

[[back to list]](#class-attribute-member-variable)
### !!! Create a method:
- "access modifier" "return data type" "method name" (parameter list) {method body...}
     
- => public int getSum(int a, int b){return a+b;}

1. Formal parameter list, indicating the input of the member method;
2. Return type: It should correspond to the return in the method body, if it does not return, it is void;
3. Method body: the code block that realizes the function,have no direct method in the body again
4. The method of this class can be called directly in the same class; 
5. Cross-class methods can only be used by creating an object of the target class and then calling the object name;
   (Access modifiers are used here)


### !!! The parameter passing mechanism of the method:
#### Case1 -- Parameter passing of basic data types
```java
class main{
    public static void main(String[] args) {
        int a = 10,b =20;
        AA obj = new AA();
        obj.swap(a,b);
        System.out.println("in main a: "+a+" b: "+b);
    }
}
class AA{
    public void swap(int a, int b){
        System.out.println("before change: a:"+a+" b :"+b);
        int temp =a;
        a = b;
        b = temp;
        System.out.println("after change: a:"+a+" b :"+b);
    }
}
```
analyse:
```text
1. start from main, we have a=10, b=20,  and new AA(), point by obj, as obj.swap(a,b), come to method swap in AA
2. duplicated numbers of (10,20) to AA(),sout(a=10,b=20) in first line
3. then do swap, so second sout in swap of AA(), (a=20,b=10), as no return, function swap finished, and return to back of swan(a,b)in main
4. in main, as all change happened in separate space in stack just duplicated attribute from main, but have nothing to do with the attribute main in stack after duplication then, so sout(10,20)
```

#### Case2 -- Parameter passing by reference data type

```java
class main {
   public static void main(String[] args) {
      BB bb = new BB();
      int[]array = {1,2,3};
      bb.test100(array);
      for (int i = 0; i < ; i++) {
         System.out.println("in main: "arr[1]);
      }
   }
}
class BB {
   public void test100(int[] arr) {
      for (int i = 0; i < ; i++) {
         System.out.println("before adding in test: "arr[1]);
      }
      arr[0] = 200;
      for (int i = 0; i < ; i++) {
         System.out.println("after adding in test: "arr[1]);
      }
   }
}
```
analyse:
```
1. in main ,have new BB() obj ,pointed by bb;
2. have a int array, content{1，2，3} in heap，pointed by array from stack;
3. bb.test100(array), so creat a new space in stack funcion of test100(), but as sent by array, this is just an address in stack
4. so we have an arr in test100() in stack, ues the same address and point to same{1,2,3} in heap as the in[]array in main;
5. if arr changes ,will affect {1,2,3} in heap, as main's array points to it too, the out will change also

same as boject, array and object is a reference data;
```
[[back to list]](#class-attribute-member-variable)

### Demo of copy Object:

```java
    public class main {
   public static void main(String[] args) {
      Person p = new Person();
      p.name = "Ali";
      p.age = 25;
      Mytools tools = new Mytools();
      Person colonP = tools.copyPerson(p);
      // colonP and p is seperate Person with different obj, but the attribute is the same, 
      // and change will not affect the other
      

   }
}

class Person {
   String name;
   int age;
}

class Mytools {
   public Person copyPerson(Person p) {//colone a new Person, with the access p2
      Person p2 = new Person();
      p2.age = p.age;
      p2.name = p.name;
      return p2;
   }
}


```













