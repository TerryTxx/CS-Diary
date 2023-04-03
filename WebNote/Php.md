

#### [Back to RootPage](https://github.com/TerryTxx/CS-Diary/blob/master/README.md)

----
## PHP
### Basic front-end expressions
### Front and back-end interaction
### get and post

-----

### Basic front-end expressions

In php files, you can assign values directly like js, and also weak language

- echo, print() printf() trim()
```php
<?php
    $choice = true ;
    if($choice){
        echo "<div><vedio src='fafasfa.mp4'></vedio></div> ";
    }else{
        echo'<div>
          <audio src="audio.mp3"></audio>
        </div>'
    }
```
### Front and back-end interaction
#### 1. demo code:
```html
<body>
<from action="./form.php" method="get">
    id: <input type="number">
    <br>
    your password: <input type="password">
    <br>
    your name:<input type="text">
    <br>
    male<input type="radio" name="gender"> female<input type="radio" name="gender"> |not to say: <input type="radio" name="gender">
    <br>
    <!--        <testarea name="" id="" cols="30" rows=" 10"></testarea>>-->
    <!--        <br>-->
    <input type="submit" value="Submit">

</from>
</body>
</html>
```
----

### get and post
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <form action="re.php" method="get">
        <input type="number" name="username" id="">
        <button type="submit">submit</button>
    </form>
</body>
</html>
------------------
<?php
    $name = $_GET['username'];
    echo $name;
?>

```
---

### session
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<form action="re.php" method="post">
    <input type="text" name="username" id="">
    <button type="submit">submit</button>
</form>
</body>
</html>

<?php
session_start();
$name = $_POST['username'];
$_SESSION['uname'] = $name;

if ($_SESSION['uname'] == "TERRY"){
    echo "this is Terry";
} else {
    echo "{$name} is wrong, press the rname";
}
?>
```




