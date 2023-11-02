## 1. `abstract class Pet` as compared to just `class Pet`

TIPS of abstract classes(1-8)
[--tips from my study diary](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/IBobj01.md)
```test
1. the abstract class itself cannot be instantiated; 
   as could not be new XXX().
```
```java
//general class
Class Per{}
new Pet();//OK

Abstract Class Per{}
new Pet();//Fail
```
```
2. abstract classes do not necessarily have to have abstract methods; no-abstract class can not have abastract methods
3. abstract methods must be in the abstract class;
4. 'abstract' can only modify classes and methods, not other attributes;
5. abstract classes can have arbitrary members， they are essentially classes, e.g., non-abstract methods, constructors, static attributes, etc.
7. if a class inherits from an abstract class, it must implement all the abstract methods in the abstract class, unless i it is also an abstract class.
8. abstract methods cannot use private, final and static(it make go with class out of obj) together; these keywords contradict overwriting;
```

## 2. data-types for `name` `gender` and `sound`
```java
 abstract class Pet{
        //abstract  String name;// erro, Q2--tips4:'abstract' can only modify classes and methods, not other attributes;
        private String name;// String
        private String gender;//boolean is better
                        /Q2--tips5: abstract classes can have arbitrary members,they are essentially classes,e.g., 
                     //non-abstract methods, constructors, static attributes, etc.
        private String sound;//String
     //!! getter and setter for complete the Encapsulation  
......
```
## 3. `Pet(...)` constructor options for client programmers
```java
  Pet(String name, String gender, String sound) { 
        //`Pet(...)` Constructors with three parameters covered noparameter/orginal constructor
        // Enables three properties of a class to be passed directly into an object via a constructor.
        this.name = name;
        //The name passed in by the constructor are assigned to 'name' already in this class, and 'this' indicates that the scope is in this class, locating.
                this.gender = gender;
        //The gender passed in by the constructor are assigned to 'gender' already in this class, and 'this' indicates that the scope is in this class, locating.
                this.sound = sound;
        //The 'sound' passed in by the constructor are assigned to 'sound' already in this class, and 'this' indicates that the scope is in this class, locating.
            }
            
        //!! getter and setter for complete the   Encapsulation  
```
## 4. `abstract String makeSound()` compared to just `String makeSound()` or `void makeSound()`
```java
        abstract String makeSound();//abstract method in abstract class
        String saySomething(){XXX};//general method
```

## 5.  Adding attribute `FoodThing food` with the introduction of `class FoodThing` from which `Bone` and `Fish` are derived.
```java
class FoodThing {
    String foodName;
    
    FoodThing(String foodName) {
        this.foodName = foodName;
    }

    public void feed(Pet pet) {
    //passing in a reference to Pet will derive the corresponding name against the instantiated cat or dog according to the polymorphism principle.
        if (pet != null) {
         System.out.println("Feeding " + foodName + " to " + pet.getName() + ".");
    }
}
```

## Dog.java (and equivalent for similar: Cat.java)
- `Bone bone;` with line `bone = new Bone();` (inside Dog(...) as compared to `Bone bone = new Bone();`
```html
1. firstly I modified the Bone property and getBone access to be more conducive to encapsulation and coding security.
2. checking remarks of `Bone bone;` with line `bone = new Bone();` (inside Dog(...) below
3. Bone bone = new Bone(); means creat an Object of Bone(), and have a bone assigned(=) to this newly object
```
- `Dog(...)` constructor options for client programmers
- - [check the dog.jave below](#dog-class-explaination)
- `super(name, gender, "Woof");`
- - [check the dog.jave below](#dog-class-explaination)
- `getBone()` as compared with making attribute `Dog.bone` accessible for direct access
```
1. I changed the Bone access as private, so Dog.bone could be used inner Dog only;
2. get()Bone() helps to ensure data integrity and security, reduce errors and improve code maintainability. Dog.bone could not.
```

### Dog class explaination
```java
// Dog.java
class Dog extends Pet {//Inherit an abstract class, taking care to implement the abstract methods of the parent class
    privare Bone bone;// Subclass' specific properties
       //Declare a reference variable named 'bone' of type Bone
       // accessable in Dog class only

    Dog(String name, String gender) {
        super(name, gender, "Woof");
        // super is used to call the constructor of the parent class, passing name, gender, and the string "Woof" as parameters.
        // These parameters are passed to the constructor of the parent class and are used to initialize the properties of the parent class.
       bone = new Bone();
        //Create a new instance of class Bone and point the specific reference value bone in this class to this object and get a unique address.
    }
    String makeSound() {//tips7: if a class inherits from an abstract class, it must implement all the abstract methods in the abstract class
        return "Woof";
         }//Implement parent class abstract methods

    public Bone getBone() {
        return bone;
     }//Return a reference to the 'Bone' class instance held by this class.
}
```


## Bone.java (and equivalent for similar: Fish.java)
- worthy of a class? if so why?
- attribute `printString` - worth having this or not?
```
1. If there is only one string attribute, just use the Foodstring call directly. No needs for different classes;
2. if printString is only call out this attrbute, using override toString will be mor efficient
3. But if for the sake of code robustness, Bone and Fish will have a lot of different attributes in the future, 
   we need seperate class and attributes:
    (1) through the encapsulation of different classes, and then through the inheritance of Foodstring, 
    (2) to ensure the safety and efficiency of the data and code, the call can be used to polymorphism, 
    (3) but also conducive to the maintenance of the code later.
```
//Other
- Include any other points of your choosing
```angular2html
details in fully codes
```


-----



### detailed analysis in fully codes
```java
    abstract class Pet{
        private String name;//Q2--tips4
        private String gender;//Q2--tips5
        private String sound;
        
       Pet(String name, String gender, String sound) { 
        //`Pet(...)` Constructors with three parameters covered noparameter/orginal constructor
        // Enables three properties of a class to be passed directly into an object via a constructor.
        this.name = name;
        //The name passed in by the constructor are assigned to 'name' already in this class, and 'this' indicates that the scope is in this class, locating.
                this.gender = gender;
        //The gender passed in by the constructor are assigned to 'gender' already in this class, and 'this' indicates that the scope is in this class, locating.
                this.sound = sound;
        //The 'sound' passed in by the constructor are assigned to 'sound' already in this class, and 'this' indicates that the scope is in this class, locating.
            }
        
        public void printInfo() {// Abstract classes can contain non-abstract methods.--Q4
            System.out.println("This is a Pet."); }
        }
        abstract String makeSound();//Q4--tips6
        String saySomething(){};//Q4--tips 6 in general method
     public String getName() {
        return name;
    }

    public String getGender() {
        return gender;
    }

    public String getSound() {
        return sound;
    }
    }

// Dog.java
class Dog extends Pet {//Inherit an abstract class, taking care to implement the abstract methods of the parent class
    privarte Bone bone;// Subclass' specific properties
        //Declare a reference variable named 'bone' of type Bone

    Dog(String name, String gender) {
        super(name, gender, "Woof");
        // super is used to call the constructor of the parent class, passing name, gender, and the string "Woof" as parameters.
        // These parameters are passed to the constructor of the parent class and are used to initialize the properties of the parent class.
    bone = new Bone();
        //Create a new instance of class Bone and point the specific reference value bone in this class to this object and get a unique address.
    }

    String makeSound() {//tips7: if a class inherits from an abstract class, it must implement all the abstract methods in the abstract class
        return "Woof";
         }//Implement parent class abstract methods

    public Bone getBone() {
        return bone;
     }//Return a reference to the 'Bone' class instance held by this class.
}

// Cat.java

class Cat extends Pet {//Inherit an abstract class, taking care to implement the abstract methods of the parent class
      private Fish fish;// Subclass' specific properties
                //Declare a reference variable named 'fish' of type Fish
      Cat(String name, String gender) {
          super(name, gender, "Meow");
            // super is used to call the constructor of the parent class, passing name, gender, and the string "Meow" as parameters.
            // These parameters are passed to the constructor of the parent class and are used to initialize the properties of the parent class.
          fish = new Fish();
            //Create a new instance of class Bone and point the specific reference value fish in this class to this object and get a unique address.
     }

    String makeSound() {//tips7
        return "Meow";
    }//Implement parent class abstract methods

    public Fish getFish() {
        return fish;
    }//Return a reference to the 'Fish' class instance held by this class.}

// Bone.java
class Bone extends foodThing {// an outter class
    String printString = "$==$";// with a porperty String in Bone Class definied as "$==$"

    String toString() {
        return printString;
    }//toString method return the property of printString
}

// Fish.java
class Fish extends foodThing {// an outter class
    String printString = "$==$";// with a porperty String in Fish Class definied as "$==$"

    String toString() {
        return printString;
    }//toString method return the property of printString
}

// FoodThing Class
class FoodThing {
    String foodName;
    
    FoodThing(String foodName) {
        this.foodName = foodName;
    }

    public void feed(Pet pet) {
    //passing in a reference to Pet will derive the corresponding name against the instantiated cat or dog according to the polymorphism principle.
        if (pet != null) {
            System.out.println("Feeding " + foodName + " to " + pet.getName() + ". " + pet.saySomething());
        } 
}


// PersonWithAPet.java
class PersonWithAPet {// an class named 'PersonWithAPet'
    Pet pet;// Subclass' specific properties
    //Declare a reference variable named 'pet' of type Pet

    void setPet(Pet pet) {
//Define a method 'setPet' to set the value of the 'pet' property with a 'Pet' class instance as the input parameter.
    this.pet = pet;
//Use 'this' reference to specify the 'pet' attribute of the current object,
// and let the pet attribute passed in by the constructor replace the 'pet' attribute in this class
    }
    String toString() {// override the toString method
        return "Person's Pet: " + pet.toString();
//Returns a string description containing the pet property
    }
}

// Main.java
class Main {
    public static void main(String[] args) {
        Cat cat = new Cat("Whiskers", "Female");
// Create an instance of the Cat class named cat,
// passing in the attributes via the constructor: the cat's name is "Whiskers" and her gender is "Female".
        Dog dog = new Dog("Buddy", "Male");
// Create an instance of the Dog class named dog,
// passing in the attributes via the constructor: the dog's name is "Buddy" and his gender is "Male".

        PersonWithAPet person1 = new PersonWithAPet();
// Create an instance of the PersonWithAPet class named person1, representing a person who owns a pet.
        PersonWithAPet person2 = new PersonWithAPet();
// Create an instance of the PersonWithAPet class named person2, representing a person who owns a pet.
//The above are two references pointing to two different instances
        person1.setPet(cat);
//Pass cat properties through the set method in the Pet class to the instance object pointed to by person1
        person2.setPet(dog);
//Pass dog properties through the set method in the Pet class to the instance object pointed to by person2

//printout, actually use the tostring to show the properties in the corresponding instance
        System.out.println(person1);
        System.out.println(person2);
        
        System.out.println("==============")
        FoodThing food1 = new FoodThing("Biscuit");
        FoodThing food2 = new FoodThing("Fish food");

        food1.feed(cat); // Feeding Biscuit to Whiskers. I'm a cat!
        food2.feed(dog); // Feeding Fish food to Buddy. I'm a dog!
    }
}
```
