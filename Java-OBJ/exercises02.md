[back to root list](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/intermediate.md)

---
### Exercises for Object Intermediate

1. Define a Person class {name, age, job}, initialize an array of Person objects with three person objects and sort them by age, from oldest to youngest, in a bubble sort.

[answers](#exercise-01-)

2. Write out the four access modifiers and their respective access rights
   
[answers](#exercise-01-)
3. Writing teacher classes
- 1. requiring the attributes name, age, position, and base salary.
- 2. writing the business method, introduce(), which implements outputting information about a teacher.
- 3. write subclasses for teachers: professor, associate professor and lecturer. salary levels: professor 1.3, associate professor 1.2, lecturer 1.1; override introduce() in the parent class in all three subclasses.
- 4. define and initialise a teacher object and call the business method to implement the backend printing of the object's basic information.

[answers](#exercise-01-)
4. implement the staff salary accounting printing function through inheritance
- Parent class: Employee class
- Subclasses: department manager class, ordinary employee class
- 1. department manager salary = 1000 + single day salary * number of days * grade (1.2)
- 2. ordinary employee salary = single day's salary * number of days * grade (1.0)
- 3. employee attributes: name, daily wage, number of days worked
- 4. employee method: print salary
- 5. ordinary employee and department manager are both employee subclasses and require a new print salary method.
- 6. define and initialize the ordinary employee object, call the print salary method to output his salary, and define the initialized manager to print his salary.

[answers](#exercise-01-)
5. design the parent class - employee class, subclasses: worker, farmer, teacher, scientist
- 1. where employee, farmer, and waiter have only a basic salary.
- 2. where teacher has a classroom salary ($/day) in addition to his basic salary.
- 3. where scientists have a year-end bonus in addition to their basic salary
- 4. write a test class that prints out the annual salary for each type of employee

[answers](#exercise-01-)


6. judgment questions

[answers](#exercise-01-)

7. judgment questions

[answers](#exercise-01-)

8. extend the BankAccount class
- 1. create a new class CheckingAccount that charges a $1 fee for each deposit and withdrawal.
- 2. extending the BankAccount class with a new class SavingAccount that generates interest every month (the earnMonthlyInterest method is called) and has three fee-free deposits and withdrawals every March, resetting the number of transactions in earnMoneyInterest.

[answers](#exercise-01-)

9. design a Point class whose x and y coordinates can be provided via the constructor. Provide a subclass LabeledPoint whose constructor accepts a label value and x,y coordinates, e.g.: new LabeledPoint ("Black Thursday", 1929,230.07), just write the corresponding constructor.

[answers](#exercise-01-)

10. write the corresponding getter() and setter() methods for the Doctor class {name, age, job, gender, sal}, a constructor with 5 parameters, override the equals() method of the parent class: public boolean equals(Object object), and determine the test class created by whether the two objects created in the test class are equal. equal then the properties are the same.
   
[answers](#exercise-01-)

11. existing Person class with run, eat, and Student classes inside, override run by attempting to write code that transitions up and down.

[answers](#exercise-01-)

12. the difference between euqals and ==

[answers](#exercise-01-)

13. print
    
[answers](#exercise-01-)

14. judgment questions

[answers](#exercise-01-)
---

### Exercise 01:
```java

```
[[back]](#exercises-for-object-intermediate)
