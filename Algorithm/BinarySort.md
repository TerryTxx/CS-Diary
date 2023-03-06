# Binary Sort

[Back to Catalogue](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/self_study.md)


- Basic Understanding and Usage
- General question types
- 1. [Binary Index](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/leetcode/binaryIndex.md)
- 2. [Binary answers](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/leetcode/Binaryanswers.md)
- 3. [Binary complex conditions](https://github.com/TerryTxx/CS-Diary/blob/master/Algorithm/leetcode/ComplexBinary.md)

### Basic Understanding and Usage
```text
Generally speaking it is in a sequential array that will look for a Target number, whether it is in this array or not, 
   we set a middle, between index[0] and index.arr.length, by binary sort. 
    Find return index of target, not find return -1. (leetcode 704)

```
### Two easy points of error in dichotomous solutions
#### 1. while(left ? right) Is there a = in the middle of <?
#### 2. if(num[middle] > target){right = middle ? middle-1}  In the next step of splitting is, how is right defined?

### So is the interval [left,right] or [left,right)?
```text
The interval can be understood as an invariant, we search for target by a while loop, a segment of the interval, 
  i.e. in whiled single loop, this interval cannot be changed.
```
Demo of codes: -- [left,right]
```java
    left = 0;
    right = num.size -1 ;//1. as right coud be accessed
    while (left <= right){//2.!!! so it is a [left,right] interval, means left = right is OK
        middle = left+(right-left)/2;  //incase of overboadary
        
        if(nums[middle] > target){//means middle index in right of target, the interval should keep left, recaret right
            right = middle - 1;//3.!!! as it is [] inter,so nums[middle] must not be the target，shoudl be [left,middle-1]
                                   //if you inist[left,middle]，wrong! because we check numb[middle]>target already, so you add worong value in to the[] for next loop 
        
        }else if(nums[middle] < target){
            left = middle +1 ;//3.!! same as 3, as we check middle already in the else if, so should skip this index, fron[middle+1,right]
        }else{
            return middle;
        }
    }return -1;
```
Demo of codes: -- [left,right)
```java
    left = 0;
    right = num.size ;//1. as right could not be accessed
    while (left < right){//2.!!! so it is a [left,right) interval, means left never equal right
        middle = left+(right-left)/2;  //incase of binary
        
        if(nums[middle] > target){//means middle index in right of target, the interval should keep left, recaret right
            right = middle ;//3.!!! as it is [) inter,as we do not have" = "access of right, 
                                    // means the next interval in loop do not cantain middle index
        }else if(nums[middle] < target){
            left = middle +1 ;//3.!! left have access of "=", as we check middle already in the else if, so must skip this index, fron[middle+1,right]
        }else{
            return middle;
        }
    }return -1;
```

