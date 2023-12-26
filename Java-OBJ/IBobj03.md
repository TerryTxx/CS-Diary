### [Back to list](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/IntermediateBoost.md)

-----

### Eight Wrapper Classes
### Boxing and Unboxing
### Collection
 - [Collection](#1-collections-and-map-framework)
 - Map
### Generics


----
## Collections

Fram works of collections:

### 1. Collections and Map Framework

- `Collection`- Singleton

    - [`List`](#4-list)
        - `Vector`
        - `ArrayList`
        - `LinkedList`

    - `Set`
        - `TreeSet`
        - `HashSet`

----------------
- `Map` - Doubleton---(K, V) pair
  - `HashMap`
    - `LinkedHashMap`
  - `HashTable`
    - `Properties`
  - `TreeMap`

### 2. Collection Methods
```java
arrayList.add("element");
arrayList.remove("element");
arrayList.contains("element");
arrayList.size();
arrayList.size();
arrayList.clear();
arrayList.addAll(otherCollection);
arrayList.containsAll(otherCollection);
arrayList.removeAll(otherCollection);
```
### 3. Loop Collection
 - Literator
```java
Iterator<String> iterator = collection.iterator();//renew the iterator
while (iterator.hasNext()) {
     String element = iterator.next();
     // use element
}
```
- **Use for-each loop**
```java
   for (String element : collection) {
       // handle element here
   }
   ```

### 4. List
    
    
       


