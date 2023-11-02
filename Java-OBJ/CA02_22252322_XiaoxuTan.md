![TASK_ChangeCodeToWhiteboardDesign.JPG](..%2F..%2F..%2F..%2FDownloads%2FTASK_ChangeCodeToWhiteboardDesign.JPG)

-----

### Below is my understanding of the requirements along with the three changes I made during the implementation by characterizing the code reusability, maintainability and OOP;
### [Go directly to the final code:](#make-a-seperate-song-class)

-----
## Analysis： 
### A. Firstly, the image gives me 6 classes：
#### 1. Abs class of Bird
#### 2. Abs class FlyingBird, (sing:void, fly():boolean, flybird constructor)
#### 3. Abs class FlightlessBird, (sing:void, fly():boolean, flghtlessBird constructor)
#### 4. Blackbird class inherits flyingBird and implements the sing method
#### 5. Emu inherits from flghtlessBird, implements sing method
#### 6. BirdMaker class, main method, implement instantiation, and pass BlackBird's sing and Emu's sing.
### [1. so I listed all classes with interaction](#list-the-demands-by-pic)

------

### B. Then：If there is another monkey class, insect class, judgment and verification will appear a lot of difficulties, so this ability to judge as an interface to write separatly
```
It was just a just single class to call and inheritance, I'd be done, but this code is very poorly reusable and doesn't fit the object-oriented purpose,
so I've made the following changes based on the characteristics of class inheritance and interfaces:
1. take the abilities like fly and sing and make them into interfaces;
2. by default, all birds should be able to sing, that is, sing:boolean in the bird class returns ture by default, 
3. while FlyingBird implements the canFly interface, and Flightless doesn't, and after that, their subclasses will be able to determine whether they can fly or not by instanceof canfly. return fly method ture or false
```
### [2. make fly/sing as interface，Polymorphic(instance of) make Judgments](#make-ability-as-interface)

-----

### C. Finally: In CA01, we have the creation of the Food class, as an object to contain food paramaters, so:
```
the bird singing may have different content and characteristics, 
so I created a Song class, as a unique object to pass in, if there is another animal class in the future with a different call, 
you can add it directly in the Song.
```
**as the fly and sing, only can not, so the use of direct interface implementation; 
if the fly has goodAtFly, noFly, badFly, multiple judgments, as well as Sing has multiple possibilities, 
it should choose the strategy mode**

### [3. add Song class,for subsequent cross-class, feature addition and maintenance](#make-a-seperate-song-class)

------------------------

### List the demands by pic
```java
// The abstract class Bird is used to represent a bird
abstract class Bird {
    private boolean canSing; // Constructor accepting a parameter indicating whether the bird can sing.

    // Constructor that takes a parameter indicating whether the bird can sing or not.
    public Bird(boolean canSing) {
        this.canSing = canSing; }
    }

    // abstract method, subclasses need to implement the logic of singing
    public abstract void sing(); // Returns whether the bird can sing.

    // Returns whether the bird can sing
    public boolean canSing() {
        return canSing; }
    }
}

// Abstract class for flying birds, inheriting from Bird.
abstract class FlyingBird extends Bird {
    public FlyingBird() {
        super(true); // Flying birds can sing by default.
    }

    // Abstract methods, subclasses need to implement the logic of flying
    public abstract boolean canFly(); // The abstract method, the subclass needs to implement the logic of flying.
}

// abstract class for flightless birds, inheriting from Bird
abstract class FlightlessBird extends Bird {
    public FlightlessBird() {
        super(true); // Flightless birds can sing by default.
    }

    // abstract method, subclasses need to implement flight logic
    public abstract boolean canFly();
}

// The BlackBird class, which inherits from FlyingBird.
class BlackBird extends FlyingBird {
    public BlackBird() {
        public abstract boolean canFly(); } // BlackBird class, inheriting from FlyingBird.
    }
    
    }
    public void sing() {
        System.out.println("BlackBird is singing."); }
    }

    } @Override
    public boolean canFly() {
        return true; }
    }
}

// Emu class, inherited from FlightlessBird
class Emu extends FlightlessBird {
    public Emu() {
        super(); }
    }

    public void sing() { super(); }
    public void sing() {
        System.out.println("Emu is singing."); }
    }

    } @Override
    public boolean canFly() {
        return false; }
    }
}

// The BirdMaker class is used to create instances of birds and call their methods
class BirdMaker {
    public static void main(String[] args) {
        BlackBird blackBird = new BlackBird();
        Emu emu = new Emu();

        blackBird.sing(); // Output BlackBird is singing. emu.sing(); // Emu = new Emu().
        emu.sing(); // Output Emu is singing.
    }
}
```
[bakc to list](#1-so-i-listed-all-classes-with-interaction)

### make ability as interface
```java
// Define the interface that can sing
interface CanSing {
    boolean sing();
}

// Define the interface that can fly
interface CanFly {
    boolean fly();
}

// The Bird class implements the CanSing and CanFly interfaces
class Bird implements CanSing, CanFly {
    private String birdName;

    public Bird(String birdName) {
        this.birdName = birdName;
    }

    public boolean sing() {
        return true; // Birds usually sing.
    }

    public void displayFlyAbility() {
        if (this instanceof CanFly) {
            System.out.println(getBirdName() + " can fly.");
        } else {
            System.out.println(getBirdName() + " cannot fly.");
        }
    }

    public String getBirdName() {
        return birdName;
    }

    public boolean fly() {
        return false; // Default implementation for birds that cannot fly.
    }
}

// The FlyingBird class inherits from Bird.
class FlyingBird extends Bird {
    public FlyingBird(String birdName) {
        super(birdName);
    }

    @Override
    public boolean fly() {
        return true; // By default, flying birds can fly.
    }
}

// The FlightlessBird class inherits from Bird.
class FlightlessBird extends Bird {
    public FlightlessBird(String birdName) {
        super(birdName);
    }
}

// The BlackBird class inherits from FlyingBird.
class BlackBird extends FlyingBird {
    public BlackBird() {
        super("BlackBird");
    }

    @Override
    public boolean sing() {
        System.out.println(getBirdName() + " is singing.");
        return true;
    }
}

// The Emu class inherits from FlightlessBird.
class Emu extends FlightlessBird {
    public Emu() {
        super("Emu");
    }

    @Override
    public boolean sing() {
        System.out.println(getBirdName() + " is singing.");
        return true;
    }
}

// The BirdMaker class is used to create instances of birds and call their methods.
public class BirdMaker {
    public static void main(String[] args) {
        BlackBird blackBird = new BlackBird();
        Emu emu = new Emu();

        blackBird.displayFlyAbility();
        emu.displayFlyAbility();
    }
}
```

[bakc to list](#1-so-i-listed-all-classes-with-interaction)

----------

## make a seperate Song class

```java
// Define the interface that can sing
interface CanSing {
    boolean sing();
}

// Define the interface that can fly
interface CanFly {
    boolean fly();
}

// The Song class encapsulates the details of a song
class Song {
    private String name;
    private String Singer;

    public Song(String name, String Singer) {
        this.name = name;
        this.Singer = Singer;
    }

    public String getName() {
        return name;
    }

    public String getArtist() {
        return Singer;
    }

    @Override
    public String toString() {
        return name ; // +" by " + Singer; if more parameter can add more
    }
}

// The Bird class implements the CanSing and CanFly interfaces
class Bird implements CanSing {
    private String birdName;
    private Song song;

    public Bird(String birdName, Song song) {
        this.birdName = birdName;
        this.song = song;
    }

    public boolean sing() {
        System.out.println(getBirdName() + " is singing " + song);
        return true; // Birds usually sing.
    }


    public void displayFlyAbility() {
        if (this instanceof CanFly) {//only FlyingBirds implements CanFly
            System.out.println(getBirdName() + " can fly.");
        } else {
            System.out.println(getBirdName() + " cannot fly.");
        }
    }

    public String getBirdName() {
        return birdName;
    }

    public boolean fly() {
        return true; // Default implementation for birds that can fly.
    }
}

// The FlyingBird class inherits from Bird
class FlyingBird extends Bird implements CanFly {
    public FlyingBird(String birdName, Song song) {
        super(birdName, song);
    }

    @Override
    public boolean fly() {
        return true; // By default, flying birds can fly.
    }
}

// The FlightlessBird class inherits from Bird
class FlightlessBird extends Bird {
    public FlightlessBird(String birdName, Song song) {
        super(birdName, song);
    }
}

// The BlackBird class inherits from FlyingBird
class BlackBird extends FlyingBird {
    public BlackBird(String songName, String birdName) {
        super(birdName, new Song(songName, birdName));
    }
}

// The Emu class inherits from FlightlessBird
class Emu extends FlightlessBird {
    public Emu(String songName, String birdName) {
        super(birdName, new Song(songName, birdName));
    }
}

// The BirdMaker class is used to create instances of birds and call their methods
class BirdMaker {
    public static void main(String[] args) {
        BlackBird blackBird = new BlackBird("WhiteBird","BlackBird");
        Emu emu = new Emu("Meow","Emu");

        blackBird.displayFlyAbility();
        blackBird.sing();

        emu.displayFlyAbility();
        emu.sing();
    }
}
```
[bakc to list](#1-so-i-listed-all-classes-with-interaction)
