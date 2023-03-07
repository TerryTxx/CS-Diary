# Vue.js

## - [Sass](#)
##  Vue General
- []

----
### Sass:
###### a CSS extension language
#### 1. Demo:
```scss
    .header {
      span{
        color: red;
        &: active{
          color: green;
        }
        &: hover{
          color:blue;
        }
      }
  }
```
#### 2.Variable
```scss
    $text-color: #444;
    $small-font:14px;
    $default-font:'microsoft yashei';

    .tittle {
      color:$textcolor;
      font-size: $small-font;
    }
    .subtittle {
      color:$textcolor;
    }
    .text {
      color:$textcolor;
      font-size: $small-font;
    }
```
#### 3.Nesting and introduction
```scss
@import 'XXX';
div{
      span{
        color: red;
        a {
          color: blue;
        }
      }
}
```
#### 4.mixin
```scss
@mixin singleline-ellipsis($width){
.text {
  overflow: hidden;
  width: $width;
  white-space: nowrap
}
}
  //in main
  @import "mixin";
.text{overflow:hidden;
  @include singleline-ellipsis(600px);
  width:600px;
  white-space:nowrap
  text-overflow:ellipsis;
}
```

#### 5. @content
```scss
    @content

