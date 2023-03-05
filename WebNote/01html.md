# Frame of HTML

#### GENERAL
### [Back to Root Catalogue](https://github.com/TerryTxx/CS-Diary/blob/master/WebNote/html:css:js.md)

```TEXT
1.[DTD]: document type definition(Browser compatibility issues)
        lang:language
        
2.label pairs:
```
```html
<!--start-->
    <html>
<!--  better indent of head and body labels-->
    <head></head>
<!--Configuration of the web page(cannot be seen by cus)-->
    <body></body>
<!--content of web(customer could see)-->
    "</html>"
<!--end-->
```
```text
3. in <head></head>
   mata--general
   (<label parameter = "value">)
   (1) char set
   (2)Adaptation settings(later)
   (3)title (The title of the page, which is also a SEO)
  ```
```html
   <meta name="Keywords" content="Milk,fresh,good">
<!--<label parameter = "value">-->
   <meta name="Description" content="long history of our factory">
```
 ```text
4. in<body></body>
   labels are always in pair
   <h></h>(1-6) headline
    <p></p> paragraph
5."<div></div>"：Divided structure(box)
   more connected with CSS"(<div class="">)
   "header/logo/nav/banner/content/footer/tool"
   
6. charter of HTML:
   blank in label
   (1)Blank fold， all blanks into one
   (2)Spaces in the inner wall of the label are ignored
   Escape character
   & l t; === <
   & g t; === >
   & nbsp;===space could not be fold
   & copy;=== copyright
```


DEMO:
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Milk Factory</title>
    <meta name = "keywords" content="Milk, fresh, nice">
    <meta name="Description" content="long history of our factory">
</head>
<body>

<div>
    <div class="logo">
        Web logo</div>
    <h1>Good Delivery</h1>
</div>

<h2>Good milk</h2>
<h4>fresh</h4>
<h4>nice grass</h4>
<h2>Good factory</h2>

<div>
<p>Pasta concentrada de castanha de caju crua para preparo de leite vegetal,
    creme de leite, leite condensado, queijos,
    iogurtes veganos e mais o que a sua imaginação permitir.</p>
<p>Os rótulos de alimentos são de extrema importância,
    pois trazem ao consumidor todas as informações nutricionais a respeito do produto.
    De uma atenção especial na lista de produtos: o ingrediente que estiver
    em maior quantidade vem primeiro, e assim por diante.</p>
</div>
</body>
</html>
```
###### [[TOP]](#general)

---

Copyright notice:

Copyright © 2023, Tanxiaoxu
Unauthorized copying or usage of the contents of this article is prohibited.
