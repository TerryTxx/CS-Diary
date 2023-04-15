
### The four inner classes
- [Local Inner Classes](#internal-class)
- [***Anonymous InnerClasses**](#anonymous-innerclasses)
- Member Inner Class
- Static Inner Class
### Enumerated classes
### The four meta-annotations
### Exception handling mechanisms


-----

**The five main members of the class**
- Properties, methods, constructors, code blocks, internal classes;

### Internal class
—— are classes that are contained within a class 

—— there are a large number of internal classes in the underlying source code;

### Local Inner Classes
```
        1. local class is a class that is locally located in an external class, usually defined in the method body;
        2. have direct access to all members of the external class, including private ones;
        3. has no access modifier, as its status is that of a local variable, which can only with finalx;
        4. scope : only in the method or code block that defines it
        5. the local internal class ---- directly accesses members of ---->external classes
        6. the external class ---- creates objects in the scope of local class----> then access members of the local internal class 
```

```java
    class Outer {//external class
    private int n1 = 100;

    private void m2() {
        System.out.println("outer m2");
    }

    //4. scope {}, innerLocal in m1() method body only
    public void m1() {//1.Local class usually defined in the method body
        class InnerLocal { //3.has no access modifier, only final
            //2. have direct access to all members of the external class, including private attr
            public void f1() {
                System.out.println("innerlocal f1: "+n1);
                m2();
            }//5. the local internal class,directly accesses members of external classes members--n1/m2()
        }//outside innerlocal
        //6. the external class ---- creates objects in the scope of the local class 
        // ----> then access members of the local internal class 
        InnerLocal innerlocal = new InnerLocal();
        innerlocal.f1();
    }//outside m1()
}

class main {
    public static void main(String[] args) {
        Outer outer = new Outer();
        outer.m1();// new an innerlocal obj
                    // f1run, then out n1, m2()
    }
}
```
[[back to list]](#enumerated-classes)


### Anonymous InnerClasses
```
Still essentially a class, it is an internal class and is shown externally without a name
Generally defined in a local of an external class, such as a method. No class name

1. Syntax of anonymous internal classes:
new class or or interface (parameters) {
        class body};
```
```java
interface IA{
    public void cry();
}

class main{
    public static void main(String[] args) {
        IA tiger = new IA(){
            public void cry(){
                System.out.println("crying......")
            }
        };

        tiger.cry(); 
    }
}

```
```text
The run type is IA
Compile type is anonymous internal class(outer04$1)
```
```java
class Father{
    public Father(String name){}
    public void test(){}
    } 
class MAIN{
    public static void main(String[] args) {
        new Father("Tan"){};
    }
}
```
```text
The run type is IA
Compile type is outer04$2(anonymous internal class)
```

