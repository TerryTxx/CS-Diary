
- ## the static keyword and it's effect in Java

[Codes from my git](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/IBobj01.md#using-details-of-code-block)

```text
When creating a subclass, the order of creation of static code blocks, static properties, non-static code blocks, non-static properties, constructors
1. static code blocks and static properties of the parent class (same priority, in code order)
2. the static code and static properties of the subclass (same priority, in code order)

-- this also prove that static members (static variables, static methods, and static code blocks) are initialized with the loading of the class,
and they belong to the class itself rather than an instance of the class.

3. non-static code blocks and non-static properties of the parent class (same priority, in code order)
4. the constructor of the base class
5. non-static code and non-static properties of the child class (same priority, in code order)
6. constructors of subclasses
```
```java
public class Main {
    public static void main(String[] args) {
        A a = new A();
   //out flows:    followed as 4.(1)
        //1. A static method getN1
        //2. A static block code
   // then non-static follow as 4.(2)
        //3. A non-static method getN2
        //4. A non-static block code
    //then comes to constructor
        //5. A non-arg constructor
    }
}

class A {
    private int n2 = getN2();
    private static int n1 = getN1();
    {
        System.out.println("A non-static block code");
    }
    static {
        System.out.println("A static block code");
    }
    
    public A(){
        System.out.println("A non-arg constructor");
    }

    public static int getN1() {
        System.out.println("A static method getN1");
        return 100;
    }

    public int getN2() {
        System.out.println("A non-static method getN2");
        return 200;
    }
}
```


- ## the essential parts of a simple Singleton (non-threaded) in Java

```Text
1. Private Constructor Methods: Constructor methods are made private to prevent direct external instantiation of the class.

2. Private static instance variable: this variable is used to hold the unique instance of the class and is usually initialized to null.

3. Public static method to access the instance: this method is responsible for providing access to the unique instance of the class. It checks if the instance is null and if so, creates the instance and returns it.
```
```java
public class Singleton {
    // private static variable used to hold a unique instance of the class
    private static Singleton instance = null; // Private constructor to prevent direct external instantiation.

    // private constructor to prevent direct external instantiation
    private Singleton() {
        // Implementation of the constructor method
    }

    // public static method to get instance
    public static Singleton getInstance() {
        // Check if the instance is null, if so, create and return it
        if (instance == null) {
            instance = new Singleton(); }
        }
        return instance; }
    }

    // Other methods and properties can be added here
    // ...
}
```

- ## a singleton with 'eager' initialisation compared to 'lazy' initialisation

### [eager](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/IBobj01.md#eager-initialization-singleton-pattern)
1. steps of creating the Pattern:
```text
1. constructor private => prevent direct new to get the object
2. Creating objects inside classes
3. expose a static public method to the outside => getInstance
```
2. why call it eager?
```text
1. even we don't create onlyFriend object, we have it already in the class by class loading, and created the object;
2. so, it could cause the waste of memory
```
3. Demo Codes:
```java
class onlyFriend {
    private String name;

    //1. private the constructor:
    private onlyFriend(String aName) {
        this.name = aName;
    }
    //2. Creating objects inside classes
    private static onlyFriend terry = new onlyFriend("Terry");
        // the obj should be static as getInstance function is static;
    //3. expose a static public method to the outside => getInstance
    public static onlyFriend getInstance() {
        return terry;
    }
    @Override
    public String toString() {
        return "onlyFriend{" + "name='" + name + '\'' + '}';
    }
}
class main {
    public static void main(String[] args) {
        onlyFriend a1 = onlyFriend.getInstance();
        System.out.println(a1);
    }
}
```
### [lazy](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/IBobj01.md#lazy-initialization-singleton-pattern)
1. steps of creating the Pattern:
```text
1. private the constructor;
2. define static attribute object
3. supply public static method , return a new obj(if current!=null)
```
2. why called lazy?
```text
1. Because the object will only be returned or created when the user call getInstance(), while calling it again will only return the last created object
2. Avoid memory wastage, but there are thread safety issues
```
3. Demo of codes:
```java
import java.sql.SQLOutput;

public class main {
    public static void main(String[] args) {
        //1. 
        // System.out.println(Cat.n1);
        // we call the static attribute, will make class Cat load
        // but no new, so the constructor will not call or load;
        //2.
        Cat c1 = Cat.getInstance();//have a Cat object, as null at running,constructor run also
        System.out.println(c1);//MIMI
        //3. call getinstance again
        Cat c2 = Cat.getInstance();// the object is not null, as name is MIMI
        System.out.println(c2);//MIMI

        System.out.println(c1 == c2);//ture
    }
}

// we want the processing of the running ,have only one Cat object
class Cat {
    private String name;
    //1. private the constructor;
    public static int age = 999;

    private Cat(String cName) {
        System.out.println("Cat constructor");
        this.name = cNmae;
    }

    //2. define static attribute object
    private static Cat cat;

    //3. supply public static method , return cat obj
    public static Cat getInstance() {
        if (cat == null) {// not create yet
            cat = new Cat("Mimi");
        }
        return cat;
    }
    @Override
    public String toString() {
        return "Cat{" + "name='" + name + '\'' + '}';
    }
}
```

- ## a thread-safe singleton approach 1: using 'synchronized' block

```java
/**
 * use 'synchronized' block
 * 
 * In Java, you can use synchronized blocks to ensure that a single case is created in a multi-threaded environment.
 * The following is an example of a thread-safe singleton pattern implemented using a synchronized block:
 */
public class ThreadSingleton {
    private static ThreadSingleton instance;

    // private constructor
    private ThreadSingleton() {
        // Implementation of the constructor method
    }

    /**
     * 1. public static methods are thread-safe using the synchronized keyword
     * 2. When multiple threads try to get an instance, only one thread has access to the method.
     * 3. This ensures that in concurrent environments, there will not be multiple threads creating multiple instances at the same time.
     * 4. Although this approach ensures thread-safety, synchronization is performed each time the getInstance() method is called.
     *
     * There may be some performance overhead.
     * We can explore other more efficient thread-safe singleton implementations later:
     */
    public static synchronized ThreadSingleton getInstance() {
        if (instance == null) {
            instance = new ThreadSingleton();
        }
        return instance; }
    }

    // Other methods and properties can be added...
    // ...
}

```

- ## a thread-safe singleton approach 2: using 'double-checked locking'

```java
/**
 * using 'double-checked locking'
 * 
 * Using double-checked locking ensures that single cases are created in a multi-threaded environment to reduce the overhead of synchronization.
 * The following is an example of a thread-safe singleton pattern implemented using double-checked locking:
 */
public class ThreadSingleton {
    private static volatile ThreadSingleton instance;

    // private constructor
    private ThreadSingleton() {
        // Implementation of the constructor method
    }

    /**
     * Public static methods are thread-safe using double-checked locks.
     * The double-checked locking mechanism reduces synchronization overhead by only synchronizing when the instance is null.
     * This ensures that in concurrent environments, there is no chance of multiple threads creating multiple instances at the same time.
     */
    public static ThreadSingleton getInstance() {
        if (instance == null) {
            synchronized (ThreadSingleton.class) {
                if (instance == null) {
                    instance = new ThreadSingleton();
                }
             }
        }
          return instance; 
        }
    }

    // Other methods and properties can be added after
    // ...
}

```

- ## a thread-safe singleton approach 3: using the Bill Pugh method (or similar other approach)

```java
/**
 * :: Method 3: Use of the Bill Pugh methodology
 * 
 * Bill Pugh has proposed a safer and more efficient way to implement singleton, based on delayed loading of static inner classes.
 * The following is an example of a thread-safe singleton pattern implemented using this method:
 */
public class ThreadSingleton {

    // private constructor
    private ThreadSingleton() {
        // Implementation of the constructor method
    }

    // Static inner class for instantiating singleton objects.
    private static class SingletonHelper {
        private static final ThreadSingleton INSTANCE = new ThreadSingleton();
    }

    /**
     * Public static method to get a singleton instance.
     * This method does not need to be synchronized and when the getInstance() method is first called.
     * The static inner class SingletonHelper is loaded to instantiate the singleton object.
     * This approach ensures that lazy loading is also thread-safe.
     */
    public static ThreadSingleton getInstance() {
        return SingletonHelper.INSTANCE;
    }

    // Other methods and properties can be added...
    // ...
}
```

