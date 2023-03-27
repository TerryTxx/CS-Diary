
[back to Root list](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/object-general.md)


---

### Basic learning:
#### [Classes and Objects Learning](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/classandObj.md)
#### [Constructor learning](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/general02.md)
#### [equals and "=="](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/intermediate02.md)

---
## General Notes for Exercises:
### Classes and Objects steps
![objJVM.jpeg](..%2Fpics%2FobjJVM.jpeg)
- s1: new CatFamily() ---- we have a new obj copied attribute from Class Catfamily and with unique access 0x0011(just demo)
- s2: CatFamily Tiger ---- we have access pointer names Tiger, but if no "=", no access yet，the empty key
- s3: "=" ---- we fill empty Tiger key by unique access 0X0011 , making it point to the object CatFamily with address 0X0011
- s4: Tiger.name ="Tiger"; ---- Because string is also a reference data type, it actually links the corresponding data through the equal sign from the method pool in the method area（Demo as 0X0022）
- *the class Catfamily's Attributes and Methods is stored in method area and when new(), general attribute is attached with new obj ,but others are just address(0x0022,0x0033),details are still in method pool with the unique corresponded address*
- s5: Tiger.age = 5;----Because int is a conventional data type, it is automatically carried by new obj, so it can be assigned directly.
- s6: The last one is gold color ---- string can be understood as accompanying obj, and it also exists after new, but in fact it exists address information, which needs to be called in the method area

---

### NOTES for constructor
```
1. we also call the constructor a construction method, which is a method for initializing properties;
2. Modifiers can be default or public
3. The constructor does not return anything !!! (because the goal is to initialize properties)
4. The name must be consistent with the class name;
5. The rules for parameter lists are the same as for member methods;
6. The constructor call is done by the system -- means when new an obj, the system will automatically 
    call the corresponding constructor in this class to complete the initialization of the object;
7. Because the essence of a constructor is a method, a class can have multiple constructors, that is, constructor overloading;
----------------
**8. If there is no constructor defined in the class, the system will automatically generate a default constructor,
   which can also be type of a no-arg constructor; you can use javap to check the default constructor
**9. Once you define your own constructor with parameters, the system's default constructor without parameters will be overwritten 
   and cannot be used again unless it is explicitly written out, that is, cat(){}
```
----
### "==" and equals usage:
"==" :
```
1. It is a comparison operator;
2. Judging the basic data type and whether the judged values are equal;
3. Judging the reference data type, the judgment is whether the address is consistent, that is, the same object;
```
equals :
```
1. It is a method in the Object class, so it can judge the reference data type by itself;
2. Direct use the method : ---- determine whether the address is the same;
3. Subclasses override the method : ---- generally used to determine whether the content is the same;（For example, in the String class, it comes with rewriting to judge whether the content is consistent）
```

-----
-------------------
------
------

EXERCISE01:
![Screenshot 2023-03-23 at 20.17.29.png](screenshot%2FScreenshot%202023-03-23%20at%2020.17.29.png)
Analysis:
```
NOTE 08 constructor
         no defined consturctor in class, then have a default constructor
         has a defined contructor, no parameter, then is no-arg constructor
```
[check details](#notes-for-constructor)

---
EXERCISE02:
![Screenshot 2023-03-23 at 20.17.50.png](screenshot%2FScreenshot%202023-03-23%20at%2020.17.50.png)
Analysis:
```
NOTE 08, constructor
          no defined consturctor in class, then have a default constructor, 
          and same function with no-arg constructor
          so no need to have a seperate no-arg constructore
```
[check details](#notes-for-constructor)

---
EXERCISE03:
![Screenshot 2023-03-23 at 20.18.06.png](screenshot%2FScreenshot%202023-03-23%20at%2020.18.06.png)
Analysis:
```
NOTE 01, constructor
        constructor is used to initnilize the paramater, use the input to cover the initinal in field
        with this, then function in the class attribute of name, without this, 
        function start search name from field inside it then in class
```
[check details](#notes-for-constructor)

---
EXERCISE04:
![Screenshot 2023-03-23 at 20.18.23.png](screenshot%2FScreenshot%202023-03-23%20at%2020.18.23.png)
Analysis:
```
NOTE 01/08, constructor
            create a new obj in main in first step, then comes to the class Person;
            as we have objName as default, then it is "null", 
            and no defined constructor, means only default constructor do nothing
            then back to MAIN, objname is still "null"
```
[check details](#notes-for-constructor)

---
EXERCISE 05:
![Screenshot 2023-03-23 at 20.18.35.png](screenshot%2FScreenshot%202023-03-23%20at%2020.18.35.png)
Analysis:
```
OBJECT: new Person(); in main, then have Person obj in heap with address, 
       and access to objectName in the method pool by classPerson
        then nothing turn out, as codes finished;
```
[check details](#classes-and-objects-steps)

---
EXERCISE 06:
![Screenshot 2023-03-23 at 20.18.44.png](screenshot%2FScreenshot%202023-03-23%20at%2020.18.44.png)
Analysis:
```
OBJECT: new Person(); in main, then have Person obj in heap with address, 
        and access to objectName in the method pool by classPerson
        sout the object, will print out its unique address number
```
[check details](#classes-and-objects-steps)

---
EXERCISE 07:
![Screenshot 2023-03-23 at 20.18.55.png](screenshot%2FScreenshot%202023-03-23%20at%2020.18.55.png)
Analysis:
```
OBJECT and constructor:
class Xyz， with string _d and arg constructor defualt _d as' rpc';

a. XYZ is wrong ,should be Xyz
c. X is wrong, should be Xyz
```
[check details](#classes-and-objects-steps)

---
EXERCISE 08:
![Screenshot 2023-03-23 at 20.19.03.png](screenshot%2FScreenshot%202023-03-23%20at%2020.19.03.png)
Analysis:
```
OBJECT and constructor:
 Class Person, attribute name, arg constructor and initinalize input string as name;
 -- b. = new Person("bill")   c.Person p1   d.new Person("bill")
```
[check details](#classes-and-objects-steps)

---
EXERCISE 09:
![Screenshot 2023-03-23 at 20.19.11.png](screenshot%2FScreenshot%202023-03-23%20at%2020.19.11.png)
Analysis:
```
OBJECT and constructor:
 Class Person, attribute name, arg constructor and initinalize input string as name;
-- a. = new Person("tim")  d. Person p = 
```
[check details](#classes-and-objects-steps)

---
EXERCISE 10:
![Screenshot 2023-03-23 at 21.16.21.png](screenshot%2FScreenshot%202023-03-23%20at%2021.16.21.png)
Analysis:
```
OBJECT:
1. has class Person, with default constructor and attribute Objname;
2. Person p, we have a p type Person in the stack, but not = to point the address, so still empty as a key;
3. sout p, the it compile, out null as empty key;
```
[check details](#classes-and-objects-steps)

---
EXERCISE 11:
![Screenshot 2023-03-23 at 21.30.42.png](screenshot%2FScreenshot%202023-03-23%20at%2021.30.42.png)
Analysis:
```
== usage:
    it is a comparsion operater , 
    s1 point to "text" , s2 point to "text", "text" is in the method pools' string pool with same address;
    == is now checking the content in the string pool in the method pool with no declared object
    so ture;
    
   * and be aware the defference of exercise 12
```

[check details](#---and-equals-usage-)

-----
EXERCISE 12:
![Screenshot 2023-03-23 at 21.30.33.png](screenshot%2FScreenshot%202023-03-23%20at%2021.30.33.png)
Analysis:
```
== usage:
declare the String class in the method pool;
    s1 point String object in the heap with attribute access in the string pool
    s2 point another String Object in heap with attribute access in the string pool,
    as the address of s1 and s2 is different, so false
```
[check details](#---and-equals-usage-)

-----
EXERCISE 13:
![Screenshot 2023-03-23 at 21.30.23.png](screenshot%2FScreenshot%202023-03-23%20at%2021.30.23.png)
Analysis:
```
== usage:
        fellow the steps of staments: 1. p1 points a Person obj; 
                                      2. p2 points to another Person obj
                                      3. p1 = p2,  p1 change access to p2, 
                                           means points the same Person obj as p2 pointed to
                                      the p1 == p2 is true ,as the same obj now
            VS Exercise 14     
```
[check details](#---and-equals-usage-)

-----

EXERCISE 14:
![Screenshot 2023-03-23 at 21.30.10.png](screenshot%2FScreenshot%202023-03-23%20at%2021.30.10.png)
Analysis:
```
 fellow the steps of staments: 1. p1 points a Person obj; 
                                2. p2 points to another Person obj in heap
                                   the p1 == p2 is false ,as the different objs
```
[check details](#---and-equals-usage-)

-----
EXERCISE 15:
![Screenshot 2023-03-23 at 21.29.59.png](screenshot%2FScreenshot%202023-03-23%20at%2021.29.59.png)
Analysis:
```
equals usage:
        fellow the steps of staments: 1. p1 points a Person obj; 
                                      2. p2 points to another Person obj
                                      3. as equals is a function, no override in Person, so it is used to check the obj address as default;
                                      4. p1 = p2,  p1 change access to p2, means points the same Person obj as p2 pointed to
                                      the p1.equals( p2 )is true ,as the same obj now
```
[check details](#---and-equals-usage-)

-----
EXERCISE 16:
![Screenshot 2023-03-23 at 21.28.42.png](screenshot%2FScreenshot%202023-03-23%20at%2021.28.42.png)
Analysis:
```
equals usage:
        fellow the steps of staments: 1. p1 points a Person obj;
                                      2. p2 points to another Person obj
                                      3. as equals is a function, no override in Person, 
                                          so it is used to check the obj address as default;
                                      the p1.equals( p2 )is false ,as the different objs
```
[check details](#---and-equals-usage-)

-----
EXERCISE 17:
![Screenshot 2023-03-23 at 21.29.33.png](screenshot%2FScreenshot%202023-03-23%20at%2021.29.33.png)
Analysis:
```
equals usage:
        fellow the steps of staments: 1. p1 points a Person obj;
                                      2. p2 points to another Person obj
                                      3. as equals is a function, overrided in Person,
                                          now its function is to check the name in this object and the name in input object is same or not
                                      the p1.equals( p2 )is true  ,as both objs' name is "bill"
```
[check details](#---and-equals-usage-)

-----
EXERCISE 18:
![Screenshot 2023-03-23 at 21.28.57.png](screenshot%2FScreenshot%202023-03-23%20at%2021.28.57.png)
Analysis:
```
equals usage:
        fellow the steps of staments: 1. p1 points a Person obj;
                                      2. p2 points to another Person obj
                                      3. as equals is a function, overrided in Person, 
                                         now its function is to check the name in this object and the name in input object is same or not
                                      the p1.equals( p2 )is false ,one is "bill" the other is "bob"

```
[check details](#---and-equals-usage-)

EXERCISE 19：
![Screenshot 2023-03-23 at 22.01.23.png](screenshot%2FScreenshot%202023-03-23%20at%2022.01.23.png)
Analysis:
```
object and constuctor:
                    1. Person p2 = new Person("bill", p1);
                      so the first parrmater should be String xxx, the second should be Person xxx(p1);
                    2. as p2 point to an obj, so should return an object by the constructor
```
[check details](#constructor-learning)

EXERCISE 20:
![Screenshot 2023-03-23 at 22.01.42.png](screenshot%2FScreenshot%202023-03-23%20at%2022.01.42.png)
Analysis:
```
constuctor:
            direct usage is this(aName); use the arg constructor from this class, and in first line
```
[check details](#constructor-learning)

EXERCISE 21:
![Screenshot 2023-03-23 at 22.02.28.png](screenshot%2FScreenshot%202023-03-23%20at%2022.02.28.png)
Analysis:
```
constuctor:
            direct usage is this(aName); use the arg constructor from this class, and in first line
```
[check details](#constructor-learning)


EXERCISE 22:
![Screenshot 2023-03-23 at 22.02.40.png](screenshot%2FScreenshot%202023-03-23%20at%2022.02.40.png)
Analysis:
```
Constructor and extends:
                1.  Cat c = new Cat("tammy");-- c point to the Cat obj in heap
                2.  as new, so the constructor in Cat should work when running, 
                   in Cat constructor ,super directly, so bring the aCatName to Pet class
                3.  now name in Pet is "tammy", but c.name, the attribute is in Cat field, still "cat"
```
[check details](#constructor-learning)

EXERCISE 23:
![Screenshot 2023-03-23 at 22.02.47.png](screenshot%2FScreenshot%202023-03-23%20at%2022.02.47.png)
Analysis:
```
Constructor and extends:
                1.  Cat c = new Cat("tammy");-- c point to the Cat obj in heap
                2.  as new, so the constructor in Cat should work when running, 
                   in Cat constructor ,super directly, so bring the aCatName to Pet class
                3.  now name in Pet is "tammy", as c.getname(), return super.name, so out "tammy"
```
[check details](#constructor-learning)

EXERCISE 24:
![Screenshot 2023-03-23 at 22.03.43.png](screenshot%2FScreenshot%202023-03-23%20at%2022.03.43.png)
Analysis:
```
Constructor and extends:
                        1. Bird b1 = new Blackbird();
                            a.Blackbird extends Bird, when new BlakcBird, Bird class on running, constructor in Bird work once
                            b.then Blackbird class on running, Blackbird（）obj build in heap, constructor work once
                        so Bird() Constructor Blackbird() Constructor
                        
                        2. Bird b2 = new Duck();
                            a.Duck extends Bird, when new Duck, Bird class on running, constructor in Bird work once
                            b.then Duck class on running ,call the constructor work one time, then Duck（）obj build in heap
                         so Bird() Constructor Duck() Constructor    
```
[check details](#constructor-learning)

EXERCISE 25:
![Screenshot 2023-03-23 at 22.04.21.png](screenshot%2FScreenshot%202023-03-23%20at%2022.04.21.png)
Analysis:
```
Constructor and extends: 1. the new of two objs is same as exercise 24
                         2. b1.name, no name attribute in Blackbird， find in Bird, tippy, 
                            attribute of type is defined in Blackbird, so is blackbird
                         3. b2.name, no name attribute in Duck， find in Bird, tippy, 
                            no attribute of type in Duck, find in Bird as "robin"
```
[check details](#constructor-learning)



