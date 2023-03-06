
## Binary Index
[704. Binary Search](#704-binary-search)

[153.Find Minimum in Rotated Sorted Array](#153-find-minimum-in-rotated-sorted-array)

[154.Find Minimum in Rotated Sorted Array II](#154-find-minimum-in-rotated-sorted-array-ii)

[33. Search in Rotated Sorted Array](#33-search-in-rotated-sorted-array)

[81. Search in Rotated Sorted Array II](#81-search-in-rotated-sorted-array-ii)

[278. First Bad Version](#278-first-bad-version)

[374. Guess Number Higher or Lower](#374-guess-number-higher-or-lower)

[852. Peak Index in a Mountain Array](#852-peak-index-in-a-mountain-array)

[1095. Find in Mountain Array](#1095-find-in-mountain-array)

[4. Median of Two Sorted Arrays](#4-median-of-two-sorted-arrays)

### 704. Binary Search
```java
class Solution {
    public int search(int[] nums, int target) {
        int len = nums.length;
        int left  = 0;
        int right = len -1; //[left,right]
        while(left <= right ){ //[left,right]
          int mid = left+(right-left)/2;
           if(nums[mid]==target){
                return mid;
           }else if(nums[mid]<target){
                left = mid+1;
           }else{ 
            right = mid -1; 
           }
        }
        return -1;
    }
}
```


### 153. Find Minimum in Rotated Sorted Array
    
```java
class Solution {
    public int findMin(int[] nums) {
        int min=Integer.MAX_VALUE;
        for(int i=0;i<nums.length;i++){
            if(nums[i]<min)
            min=nums[i];
        }
        return min;
    }
}
```


### 154. Find Minimum in Rotated Sorted Array II
```java
class Solution {
    public int findMin(int[] nums) {
        int low = 0;
        int high = nums.length-1;//[left,right]

        while(low < high){//[low,high)
            int mid = low + (high-low)/2;
            if(nums[mid] < nums[high]){
                high = mid;//for high is not accessable
            }else if(nums[mid] > nums[high]){
                low = mid +1;//skip index mid
            }else{
                high -= 1;//decending
            }
            
        }return nums[low];
    }
}
```

### 33. Search in Rotated Sorted Array

```javascript


```


### 81. Search in Rotated Sorted Array II
```javascript

```

### 278. First Bad Version

```javascript

```

### 374. Guess Number Higher or Lower
```javascript

```

### 852. Peak Index in a Mountain Array
```javascript

```
### 1095. Find in Mountain Array
```javascript

```
### 4. Median of Two Sorted Arrays
```javascript

```





