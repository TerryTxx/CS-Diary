
### Because the questions are progressive, my understanding is Q3 to use the strategy pattern.
### Therefore, although the code is completed in question 2, it only follows the question idea and does not improve the code.

### [For the final optimal code, please refer to the code in question 3](#q3-final-codes)

##  1. What are the negatives/drawbacks with the approach to override a method to do nothing?

```java
import static java.lang.System.out;
/*
 * Abstract class defines "the Duck interface",
 *	i.e. what someone would expect a Duck can do.
 *
 *  When we say "the Duck interface" what we mean is
 *	the set of methods that can be called through
 *	a reference of type Duck
 *	i.e. {Duck(), quack(), swim(), display()} below
 */
 
abstract class Duck {
    Duck() {
        out.println(" a "+this.getClass().getName());
    }
    void quack(){
        out.println( this.getClass().getName()+":\n\t quacks...");
    }
    void swim() {
        out.println("\t..."+"swims and...");
    }
    void fly(){
        out.println("\t..."+"flys");
    }
    //Force sub-classes to implement a display() method
    abstract void display();
}
class MallardDuck extends Duck {
    //implements the abstract method from Duck
    void display() {
        System.out.println("MallardDuck shows its feathers");
    }
}
class RedHeadDuck extends Duck {
    //implements the abstract method from Duck
    void display() {
        System.out.println("RedHeadDuck shows its feathers");
    }
}
class RubberDuck extends Duck {
    void display() {
        System.out.println("RubberDuck floats");
    }
}

/
Write comments here:
1. Client Programmer's Expectations Conflict with Actual Behavior: 
      In the Duck class, the client programmer expects that subclasses of Duck will perform meaningful actions 
      when calling the quack(), swim(), and fly() methods to reflect the behavior of a particular duck. 
      This is because these methods are defined in the Duck class, which is an abstract class 
      that describes the "duck interface" that the client programmer expects.

2. Contract Integrity: 
      The Duck class forces subclasses to implement the display() method, 
      which is good design practice because it ensures a consistent contract in the duck inheritance hierarchy. 
      However, RubberDuck violates this contract when it overrides the quack() method to perform no action. 
      This can lead to design inconsistencies.

3. Client programmer and end-user expectations do not match: 
      Not only are the client programmer's expectations compromised, but the end-user's expectations are not met. 
      The client programmer expected that the quack() method should perform barking, 
      while the end user expected that the program would mimic real-world behavior, 
      i.e., it would bark in the RubberDuck case. However, since RubberDuck overrides the quack() method to perform no action, 
      neither expectation is met.

4. Need for a strategy pattern: 
     A strategy pattern may be a better solution when there are multiple possible behaviors. 
     In the case of RubberDuck, if different barking behaviors are required, 
     the strategy pattern can be used to encapsulate these behaviors into their respective strategies instead of overriding the methods in an inherited class. 
     This makes the code easier to maintain and extend. Therefore, the expectations of client programmers and end-users can be better met by using the strategy pattern.
*/
class Main
{
    public static void main(String[] args)
    {
        Duck[] ducks = new Duck[]{  new RedHeadDuck()
                , new MallardDuck()
                //, new RubberDuck() //ADD THIS
        };
        System.out.println();

        demonstrateDucks(ducks);
    }

    //A polymorphic method designed to work over each element in a
    //	Duck array, and call all of the methods on each Object
    //	(i.e. all methods in the Duck interface)
    static void demonstrateDucks(Duck[] duckArray){
        for (Duck d : duckArray){
            d.quack();
            d.swim();
            d.fly();
            System.out.println("\n\n");
        }

    }
}      
```


## 2. **What design issue results from trying to replace inheritance with the use of interfaces?**
Q7 in the secend codes
```java
/*
Q1,Q2,Q3--In codes below;

Write comments here:
Q4/Q6: What is wrong with this code from the point of view
1. From the client programmer's point of view, this approach requires additional work to 
     continually create new subclasses to handle new behaviors. As the class hierarchy continues to expand, 
     client programmers may find it more difficult to understand and maintain the code. 
     The implication is that the number of classes will increase rapidly, resulting in a complex class hierarchy 
     that is difficult to maintain and understand.
2. From the client programmer's point of view, each new subclass will need to repeatedly implement the associated methods,
     which can lead to significant code duplication. In the code above, both RubberDuck and DecoyDuck 
     have their own quack() and fly() methods, which are implemented separately in the RubberDuck and DecoyDuck classes, 
     leading to code duplication.

Q5: we have the following classes:

Duck (base class)
MallardDuck (specific behavior for a Mallard duck)
RedHeadDuck (specific behavior for a RedHead duck)
RubberDuck (specific behavior for a Rubber duck)
DecoyDuck (specific behavior for a Decoy duck)

Now, let's consider the number of classes that can result for N behaviors using the formula:
Total Classes = 2^N
Here, N represents the number of behaviors accommodating. In this case, N is 5 because we have five specific behaviors for different types of ducks.
Total Classes = 2^5 = 32 classes
So, with these five specific behaviors, you would have 32 classes if we create a specific subclass for each behavior. This shows how quickly the class hierarchy can expand as the number of behaviors (N) increases. Managing and maintaining such a large number of classes can become challenging, leading to code duplication and complexity.
*/

class Main
{
    public static void main(String[] args)
    {
        Duck[] ducks = new Duck[]{new RedHeadDuck(), new MallardDuck(), new RubberDuck(), new DecoyDuck()};
        System.out.println();
        demonstrateDucks(ducks);
    }
    //A polymorphic method designed to work over each element in a
    //	Duck array, and call all of the methods on each Object
    //	(i.e. all methods in the Duck interface)
    static void demonstrateDucks(Duck[] duckArray){
        for (Duck d : duckArray){
            d.quack();
            d.swim();
            d.fly();
            System.out.println("\n\n");
        }

    }
}
/**
 A DecoyDuck should be able to swim only.
 **/
class DecoyDuck extends Duck {
    void display() {
        System.out.println("DecoyDuck floats");
    }
    void fly() {
        // DecoyDuck cannot fly
        System.out.println("DecoyDuck cannot fly.");
    }
    void quack() {
        // DecoyDuck cannot quack
        System.out.println("DecoyDuck cannot quack.");
    }
}
//Write code here:
abstract class FlyingDuck extends Duck {// FlyingDuck should subclass Duck and also be abstract
    abstract void fly();
}
class MallardDuck extends Duck {

    //implements the abstract method from Duck
    void display() {
        System.out.println("MallardDuck shows its feathers");
    }
}
class RedHeadDuck extends Duck {
    //implements the abstract method from Duck
    void display() {
        System.out.println("RedHeadDuck shows its feathers");
    }
}
class RubberDuck extends Duck {
    
    void display() {
        System.out.println("RubberDuck floats");
    }

```
Q7:Select appropriate sample output and show an issue from an end-user point of view

1. In my case, I will show how the behavior of a RubberDuck may lead to a problem from an end-user point of view.
2. have a RubberDuck class, which is intended to represent a rubber duck. Typically, rubber ducks don't make realistic quacking sounds, but they may float in water. However, in the code, the RubberDuck class overrides the quack() method to do nothing, as follows:
```java
class RubberDuck extends Duck {
    void quack() {
        // RubberDuck quack() does nothing
    }

    void display() {
        System.out.println("RubberDuck floats");
    }
}
```
3. then consider an end-user's perspective. An end-user interacts with  program and encounters a RubberDuck:
```java
RubberDuck rubberDuck = new RubberDuck();
rubberDuck.quack();
```
4. The end-user may reasonably expect that when they call quack() on a rubber duck, it should simulate the quacking sound of a rubber duck because that's a common and expected behavior for a rubber duck. However, the code does not provide this behavior because the quack() method is overridden to do nothing in the RubberDuck class.

and we get out as below:
```java
RubberDuck:
     quacks...
```
5. This is the problem of behavior inconsistency when specific behaviors are managed through subclasses.




## 3. What are the drawbacks/negatives with the approach to create specific sub-classes for specific behaviours?
    ** (e.g. QuackingDuck, NonQuackingDuck, QuackingFlyingDuck etc.)**
1. Coldes below;
2. Coldes below;
3. Show the client-programmer code needed: 
   - Created different types of duck objects in the Main class and demonstrated their behavior. Use the demonstrateDucks method to loop through different duck objects to demonstrate their characteristics;
4. Show the repeating code that is neressary by walking through another type such as RedlleadDuck:
```java
RedHeadDuck(FlyBehavior flyBehavior, SwimBehavior swimBehavior, QuackBehavior quackBehavior) {
    super(flyBehavior, swimBehavior, quackBehavior);
}
//Here, the constructor of RedHeadDuck accepts FlyBehavior, SwimBehavior and QuackBehavior objects, 
//and then calls the constructor of the base class Duck through super. 
//This is a repetitive part of the code because the constructor of each duck class is very similar and just accepts different behavior objects.
//Duplicate code in other duck classes (like MallardDuck)
//Although these constructors exist in every duck class, this is part of the strategy design pattern that allows different behaviors to be combined in a flexible way rather than through inheritance.
```
### Q3 final codes
```java
import java.util.Arrays;

// FlyBehavior interface
interface FlyBehavior {
    void fly();
}
// give demo class as flyingBird and FlightlessBird
class FlyingDuck implements FlyBehavior {
    public void fly() {
        System.out.println("flies with wings");
    }
}
class FlightlessDuck implements FlyBehavior {
    public void fly() {
        System.out.println("cannot fly");
    }
}

// QuackBehavior interface
interface QuackBehavior {
    void quack();
}
class QuackingDuck implements QuackBehavior {
    public void quack() {
        System.out.println("quacks normally");
    }
}
class QuackSqueak implements QuackBehavior {
    public void quack() {
        System.out.println("squeaks");
    }
}
class NoQuackingDuck implements QuackBehavior {
    public void quack() {
        System.out.println("NoQuacking");
    }
}

// SwimBehavior interface
interface SwimBehavior {
    void swim();
}
class SwimNormal implements SwimBehavior {
    public void swim() {
        System.out.println("swims normally");
    }
}
class NoSwimDuck implements SwimBehavior {
    public void swim() {
        System.out.println("cann't swim");
    }
}

class Main {
    public static void main(String[] args) {  Duck[] ducks = new Duck[]{
                new RedHeadDuck(new FlyingDuck(), new SwimNormal(), new QuackingDuck()),
                new MallardDuck(new FlyingDuck(), new SwimNormal(), new QuackingDuck()),
                new RubberDuck(new FlightlessDuck(), new SwimNormal(), new QuackSqueak()),
                new DecoyDuck(new FlightlessDuck(), new SwimNormal(), new NoQuackingDuck())
        };
        System.out.println();
        demonstrateDucks(ducks);
    }
    static void demonstrateDucks(Duck[] duckArray) {
        for (Duck d : duckArray) {
            d.display();
            d.performQuack();
            d.performSwim();
            d.performFly();
            System.out.println("\n");
        }
    }
}

abstract class Duck {
    private FlyBehavior flyBehavior;
    private SwimBehavior swimBehavior;
    private QuackBehavior quackBehavior;

    Duck(FlyBehavior flyBehavior, SwimBehavior swimBehavior, QuackBehavior quackBehavior) {
        this.flyBehavior = flyBehavior;
        this.swimBehavior = swimBehavior;
        this.quackBehavior = quackBehavior;
    }
    abstract void display();
    void performFly() {
        flyBehavior.fly();
    }
    void performSwim() {
        swimBehavior.swim();
    }
    void performQuack() {
        quackBehavior.quack();
    }
}

class MallardDuck extends Duck {//Show how this proposed solution would work for MallardDuck
    MallardDuck(FlyBehavior flyBehavior, SwimBehavior swimBehavior, QuackBehavior quackBehavior) {
        super(flyBehavior, swimBehavior, quackBehavior);
    }
    void display() {
        System.out.println("MallardDuck shows its feathers");
    }
}

class RedHeadDuck extends Duck {
    RedHeadDuck(FlyBehavior flyBehavior, SwimBehavior swimBehavior, QuackBehavior quackBehavior) {
        super(flyBehavior, swimBehavior, quackBehavior);
    }

    void display() {
        System.out.println("RedHeadDuck shows its feathers");
    }
}

class RubberDuck extends Duck {
    RubberDuck(FlyBehavior flyBehavior, SwimBehavior swimBehavior, QuackBehavior quackBehavior) {
        super(flyBehavior, swimBehavior, quackBehavior);
    }
    void display() {
        System.out.println("RubberDuck floats");
    }
}

class DecoyDuck extends Duck {
    DecoyDuck(FlyBehavior flyBehavior, SwimBehavior swimBehavior, QuackBehavior quackBehavior) {
        super(flyBehavior, swimBehavior, quackBehavior);
    }
    void display() {
        System.out.println("DecoyDuck floats");
    }
}
```