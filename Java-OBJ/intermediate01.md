[back to root list](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/intermediate.md)


### [The concept of package](#the-concept-of-packages-)
### [Access modifiers](#access-modifiers-)

---

### The concept of packages :
1. Different classes are generally placed in different folders, i.e. packages
2. Packages can also control the scope of access
```text
java.lang.* //lang is basic package
java.util.* // util is tool package, like Scanner
java.net.*//webpack
java.awt.*//GUI
```
notics of package:
```text
1. the role of package is to affirm the current class is located in the package, so it needs to be placed at the top of the class, a maximum of one sentence package in a class.
2. the import directive is below the package, before the class definition, and can be multiple sentences and no order requirement
```
---

### Access modifiers : 
```text
java provides four access modifiers that control access to methods and properties (member variables).
1. public (+): public to the outside world. 
2. protected (#): public for subclasses and classes in the same package.
3. default (no content): no written modifier, public to classes in the same package.
4. private (-): only accessible on the class itself, not public
```
| 1  | Access Level | type      | Same Class | Same Package | sub Class | deff Pack |
|----|--------------|-----------|------------|--------------|-----------|-----------|
| 2  | public       | public    | √          | √            | √         | √         |
| 3  | protected    | protected | √          | √            | √         | X         |
| 4  | (null)       | default   | √          | √            | X         | X         |
| 5  | private      | private   | √          | X            | X         | X         |

notice of Access Modifier:
1. Modifiers can be used to modify attributes in a class ---- member methods and classes;
2. Only the default and public can modify the class, and follow the above characteristics;
3. Subclass access rights will be repeated after inheritance ();
4. The access rules and attributes of member methods are consistent;

