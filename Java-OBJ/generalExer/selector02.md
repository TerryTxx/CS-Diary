
[back to Root list](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/object-general.md)


---

### Basic learning:
#### [Classes and Objects Learning](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/classandObj.md)
#### [Constructor learning](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/general02.md)
#### [equals and "=="](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/intermediate02.md)

---
## General Notes for Exercises:
### Classes and Objects steps

----

EXERCISE 01:
![Screenshot 2023-03-24 at 16.01.21.png](screen02%2FScreenshot%202023-03-24%20at%2016.01.21.png)
Analysis:
```
extends and constructor:
                a. new a sub obj, arg constructor, so base default/no-arg constructor run ,
                   Pet has, aRabbitName assign to name in Pet;
                b. new a sub obj, arg constructor, so base default/no-arg constructor run,OK;
                   then calls the super(string) in Pet's arg constructor;
                c. new a sub obj, arg constructor, so base default/no-arg constructor run, Pet has；
                   then assign aRatname to name, as no this name in Rabbit, then assign to Base
                d. same as C
```
[check details](#classes-and-objects-steps)

---
EXERCISE 02:
![Screenshot 2023-03-24 at 16.01.09.png](screen02%2FScreenshot%202023-03-24%20at%2016.01.09.png)
Analysis:
```
extends and constructor:
               a. generally Dog(str) need default constructor, 
                   but has super(str)/constructor override in the first, 
                   so require Pet(str), has, then compile;
               b. Rat(str) need default constructor, 
                   as has arg in Pet and no defined argconstructor, 
                   so could not compile
               c. same with a
               d. same with b
               
```
[check details](#classes-and-objects-steps)

---
EXERCISE 03:
![Screenshot 2023-03-24 at 16.35.53.png](screen02%2FScreenshot%202023-03-24%20at%2016.35.53.png)
Analysis:
```
extends and constructor: 1. as has arg constructor and no definned constructor in Pet,
                         2. the second constructor in Dog  Dog(str){} need a default constructor in Pet 

```
[check details](#classes-and-objects-steps)

---
EXERCISE 04:
![Screenshot 2023-03-24 at 16.36.04.png](screen02%2FScreenshot%202023-03-24%20at%2016.36.04.png)
Analysis:
```
OBJECT and constructor:
                        d
```
[check details](#classes-and-objects-steps)

---
EXERCISE 05:
![Screenshot 2023-03-24 at 16.37.12.png](screen02%2FScreenshot%202023-03-24%20at%2016.37.12.png)
Analysis:
```
extends and constructor: override constructor
                1. no attribute in Espresso, 
                   so all defined constructor connect with base Coffee, c is wrong
                2. no new obj in espresso, so d is wrong
                3. a,b is same, super(double); (= Coffee(double)in Coffee class)
```
[check details](#classes-and-objects-steps)

---
EXERCISE 06:
![Screenshot 2023-03-24 at 16.37.19.png](screen02%2FScreenshot%202023-03-24%20at%2016.37.19.png)
Analysis:
```
OBJECT and constructor:  false
                       same as exercise 05, a;  
                        but super(x) should write in the first line in the constructor
```
[check details](#classes-and-objects-steps)

---
EXERCISE 07:
![Screenshot 2023-03-24 at 16.37.24.png](screen02%2FScreenshot%202023-03-24%20at%2016.37.24.png)
Analysis:
```
exteds and constructor:  same as 06--true
```
[check details](#classes-and-objects-steps)

---

EXERCISE 08:
![Screenshot 2023-03-24 at 16.37.29.png](screen02%2FScreenshot%202023-03-24%20at%2016.37.29.png)
Analysis:
```
extends and constructor: this(xxx) should in the first line in constructor
```
[check details](#classes-and-objects-steps)


---
EXERCISE 09:
![Screenshot 2023-03-24 at 16.37.37.png](screen02%2FScreenshot%202023-03-24%20at%2016.37.37.png)
Analysis:
```
extends and constructor: same as 08
```
[check details](#classes-and-objects-steps)

---
EXERCISE 10:
![Screenshot 2023-03-24 at 16.01.37.png](screen02%2FScreenshot%202023-03-24%20at%2016.01.37.png)
Analysis:
```
extends and constructor:  
                    a. Rat needs a defualt or no-arg constructor in Pet, but not have
                    b. same as a
                    c. Cat has super(str); in the first, so go to Pet(Str) first
                    d. same as a,b
```

[check details](#classes-and-objects-steps)



---
EXERCISE 11:
![Screenshot 2023-03-24 at 16.38.07.png](screen02%2FScreenshot%202023-03-24%20at%2016.38.07.png)
Analysis:
```
extneds and constructor:
                        a. no name in the Rat, then assign to Pet, 
                          not good, call super(str) will better, to keep the name in Pet
                        b. assign the name in Pet by a sub obj ,compile but not good
                        c. same as a
                        d. good
                
```
[check details](#classes-and-objects-steps)

---
EXERCISE 12:
![Screenshot 2023-03-24 at 16.38.18.png](screen02%2FScreenshot%202023-03-24%20at%2016.38.18.png)
Analysis:
```
method override: mistake by me is 1. not read as out with string;
                                  2. method name is taste(), 
                                     ßthis is a method, so base.method(), then is super.taste();
```
[check details](#classes-and-objects-steps)

---
EXERCISE 02: