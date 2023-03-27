
[back to Root list](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/object-general.md)


---



Exercise 01:
![Screenshot 2023-03-26 at 22.14.27.png](screenshot%2FScreenshot%202023-03-26%20at%2022.14.27.png)
```
constructor this&super: remember this means current class, super means base class
                    1. the Pet has attribute name, and arg constructor, 
                        so no default constructor, so sub could only call super(str);
                    2. a. Dog extends Pet, aDog has arg-construc with int, 
                        and arg-con with boolean, paramater (str,int),so need keep field in Dog class, 
                        this(y) in constructor need, as Dog class has this(int) and this(boolean) only 
                    3. b. Dog extends Pet, bDog has non-arg-construc and this(Str,int), 
                       so pressing in int, only non-arg constructor could call;
                    4. c. Dog extends Pet, cDog has this(str) construc so choose this("");
```
---

Exercise 02:
![Screenshot 2023-03-25 at 21.33.25.png](screenshot%2FScreenshot%202023-03-25%20at%2021.33.25.png)
```
constructor this&super:  class has default constructor if wirte nothing, 
                           and constructor has default super(), if not define, 
                           so require base class has default constructor(not deleted by arg-constructor), 
                           or non-arg constructor define seperately
                    1. Pet has arg-construc with paramater Str, and attribute name, 
                       no default constructor as not defined;
                    2. a, Dog extends Pet,  
                       Dog(str) has default constructor, requrire Pet has , so wrong
                    3. b. Cat extends Pet,  
                       Cat class no constructor defined regard as default consturctor, so as A, wrong;
                    4. c. Rat extends Pet, Rat has non-arg constructor, 
                        but as super(str) in its first line to point the str parameter arg base constructor, has, so right
```

---
Exercise 03:
![Screenshot 2023-03-26 at 22.15.24.png](screenshot%2FScreenshot%202023-03-26%20at%2022.15.24.png)
```
method ,getter and setter:  this could regard as (this.Objectclass)
                            override the changeSurname method
                jinDoe = jonDoe.changeSurname("Dere");//find where it used
                          1. jonDeo is a variable of Object, so need method return an object, Person
                          2. and both return looks OK at current;
                          3. ("Dere"), so paramater is a String [newname]；
                          4. so surname = newname;
                          5. as replace the name, so could not return new Person with default name, so return this;
```
---
Exercise 04:
![Screenshot 2023-03-26 at 22.15.11.png](screenshot%2FScreenshot%202023-03-26%20at%2022.15.11.png)
```
method ,getter and setter： getter usage
                       sout: p.getName();// find the using position
                       1. we have objname and use constructor to default it;
                       2. getName should return the default name, so return objname, Sting as modifier;
                       3. as in main, no parameter in the getName(),so empty
```
---

Exercise 05:
![Screenshot 2023-03-26 at 22.15.33.png](screenshot%2FScreenshot%202023-03-26%20at%2022.15.33.png)
```
method ,getter and setter: methods in class
                     updater.changeSurname(joneDoe, "Dere");
                       // find the using place
                   1. use updater variable to call the method, 
                       and parameter is joneDoe(obj variable point to Person) and a String;
                   2. so changeSurname parameter is (Person thePerson, String newSurname)
                   3. Since no declared variable is used to accept the result of the method, 
                       it is a void method with no return
                   4. this means this class, but no surname in this class will compile wrong, 
                       so should ues theperson.surname
```
---

Exercise 06:
![Screenshot 2023-03-26 at 22.14.54.png](screenshot%2FScreenshot%202023-03-26%20at%2022.14.54.png)
```
method ,getter and setter: getter usage
                     sue.getAge()// used place
                1. age is int, in getter, return int(age), non-arg, method name should be same
```
---

Exercise 07:
![Screenshot 2023-03-26 at 22.15.52.png](screenshot%2FScreenshot%202023-03-26%20at%2022.15.52.png)
```
method ,getter and setter: setter usage
                p.setName("sue");
         1. Since no declared variable is used to accept the result of the method, 
             it is a void method with no return
         2. "sue" is string, so arg in is (String name)
         3. Person class, attribute is objectsName, so choose this
```
---

Exercise 08:
![Screenshot 2023-03-26 at 22.15.17.png](screenshot%2FScreenshot%202023-03-26%20at%2022.15.17.png)
```
method ,getter and setter: method usage
                    jonDoe = updater.makeOneYearOlder(jonDoe)// method usage place
                    1. use jonDoe obj varible(point to Person) to assign, so need return a Person object;
                    2. jonDoe add in arg, so method parameter should be (Person objectname)
                    3. PersonUpdater has no age attribute, 
                       so could not use this to call the age,should choose thePerson.age +=1 ;
                    4. return the obj, but should not be defaulted
```
---
Exercise 09:
![Screenshot 2023-03-26 at 22.15.04.png](screenshot%2FScreenshot%202023-03-26%20at%2022.15.04.png)
```
method ,getter and setter: getter usage
                Person friendofSue = sue.getFriend();//the using place
              1. use frinedofSue (point to Person) variable to asinge, 
                 method return an objec Person, first is Person
              2. return friend new Person friend in the Person class, 
                 and aPersonRef is not in the class, so only choice
              3. empty parameters as usage in the line;
```
---
Exercise 10:
![Screenshot 2023-03-26 at 22.15.47.png](screenshot%2FScreenshot%202023-03-26%20at%2022.15.47.png)
```
method ,getter and setter: setter usage
                    sue.setFriend(jess)//the using place
                 1. no variable to be asigned of the sue.XXX(), so void method and no return;
                 2. method name should exactly same as setFriend
                 3. jess as parameter, is variable point Person object, 
                    so should be a Person obj into the brackets
```
---

Exercise 11:
![Screenshot 2023-03-26 at 22.15.41.png](screenshot%2FScreenshot%202023-03-26%20at%2022.15.41.png)
```
method ,getter and setter： setter usage
                  1. no variable to get the return of method, so void and no return of the method;
                  2. 25 in the blankets, so parameter is int
```
---

Exercise 12:
![Screenshot 2023-03-26 at 22.16.03.png](screenshot%2FScreenshot%202023-03-26%20at%2022.16.03.png)
```
object method:
               Person sue = new Person("sue")
                  //new an obj with variable sue point to, and string name sue
               Person jin = new Person("jin")
                 //new an obj with variable jin point to
               sue.setFriend, sue obj with jin obj press-in, and make the inside obj friend as jin
               jin.setFriend, jin obj with sue obj press-in, and make the inside obj friend as sue
               so jin.getfriend, come out sue obj
               and sue.getfriend, come out jin obj, and then jin.name is "jin"
```
----

Exercise 13:
![Screenshot 2023-03-26 at 22.16.18.png](screenshot%2FScreenshot%202023-03-26%20at%2022.16.18.png)
```
object method :
               Person jim = new Person("jim");
                 // coreate the jim point to a Person obj with name as jim
               Person bob = new Person("bob");
                 // coreate the bob point to a Person obj with name as bob
               jim.friend = bob; 
                 // make the friend obj variable in jim point to bob
               bob.friend = jim; 
                 // make the friend obj variable in bob point to jim
               
               Dog fido = new Dog("fido",jim);// dog name fido, owner is jim
               Dog ruby = new Dog("ruby",bob);// dog name ruby, owner is bob
               so fido.owner get jim  ;  jim.friend get bob;  bob.name get "bob"      
```
---
Exercise 14:
![Screenshot 2023-03-26 at 22.16.31.png](screenshot%2FScreenshot%202023-03-26%20at%2022.16.31.png)
```
object method:  same as 12
```
---
Exercise 15:

![Screenshot 2023-03-26 at 22.16.09.png](screenshot%2FScreenshot%202023-03-26%20at%2022.16.09.png)
```
object method: same as 12
```
---

Exercise 16:
![Screenshot 2023-03-26 at 22.16.25.png](screenshot%2FScreenshot%202023-03-26%20at%2022.16.25.png)
```
object method: same as 13
```
---

Exercise 17:
![Screenshot 2023-03-26 at 22.16.40.png](screenshot%2FScreenshot%202023-03-26%20at%2022.16.40.png)
```
static: static method: 
        no this or super in static function, but getName() call return this.name;
        so compile error
```
---

Exercise 18:
![Screenshot 2023-03-26 at 22.16.51.png](screenshot%2FScreenshot%202023-03-26%20at%2022.16.51.png)
```
static: static attribute:
        should be called by object.[attributename]
        so compile error
```
---

Exercise 19:
![Screenshot 2023-03-26 at 22.17.00.png](screenshot%2FScreenshot%202023-03-26%20at%2022.17.00.png)
```
static usage: attribute is accessible for in the obj
              1. Ticket t1 = new Ticket();
                  // new obj, the constructor should run, ticketsold from 0 to 1;
              2. Ticket t2 = new Ticket();
                 // new an obj, the constructor should run, ticketsold form 1 to 2;
              3. out put is 2
```
---

Exercise 20:
![Screenshot 2023-03-26 at 22.16.45.png](screenshot%2FScreenshot%202023-03-26%20at%2022.16.45.png)
```
static: static attribute
 should be called by object.[attributename]
        so compile error
```
---

Exercise 21:
![Screenshot 2023-03-26 at 22.17.29.png](screenshot%2FScreenshot%202023-03-26%20at%2022.17.29.png)
```
static usage: like 19, static x is in heap, 
            access for all TicketSaleAgent obj
           every doT() make x++; so out 3
```
---


Exercise 22:
![Screenshot 2023-03-26 at 22.17.21.png](screenshot%2FScreenshot%202023-03-26%20at%2022.17.21.png)
```
static: like 21 ,out 3
```
---
Exercise 23:
![Screenshot 2023-03-26 at 22.17.36.png](screenshot%2FScreenshot%202023-03-26%20at%2022.17.36.png)
```
static: like 21 
        but y is not static, so brain and pinky, have seperate y,
        brain.y is 2    ;   brain.x is 1
        
```
---
Exercise 24:
![Screenshot 2023-03-26 at 22.17.47.png](screenshot%2FScreenshot%202023-03-26%20at%2022.17.47.png)
```
static: like 21 ,out 3      
```

---
Exercise 25:
![Screenshot 2023-03-25 at 21.32.23.png](screenshot%2FScreenshot%202023-03-25%20at%2021.32.23.png)
```
abstract class: a. super(adongname,4)
                c. we can, intinalize by super()
```

---
Exercise 26:
![Screenshot 2023-03-25 at 21.33.13.png](screenshot%2FScreenshot%202023-03-25%20at%2021.33.13.png)
```
abstract class: not compile, sub extends from an abstract, 
        you need default constructor with super() in the first line;

```