
# CSS learning：   
## cascading style sheet
```text
        1. Basic Syntax
           in  <style></style>
           -- Selector   h { (access to the label)
           K:V;    color: green;
           font-weight: bold;
           font-style: italic;}
        
                           .spec{}(access to all class named spec)
        
        2. CSS placement:
           (1)in<head></head>,by<style></style>
           
           (2)<link> label
           <link rel="stylesheet" href="css/css.css">
           relationship stylesheet    path
           
           (3)import
           in <style>
           @import ul(css/css.css)
           </style>(not recommended)
        
            (4) for separate line
               <h2 style="color:red;">
        
        3. CSS selector
               Pseudo-classes
               <style>
               a:link{color:blue;}
               a:visited{color:brown;}
               a:hover{background-color:gold}
               a:active{font-size:50px;}
               </style>
               <p><a href="http://www.google.com">google</a></p>
               a:link
               a:visited
               a:hover
               a:active
               --others
               a：empty  a:focus  a:enabled  a:disabled   a:checked   a:root(html)
        
                (2) Compound selector
                //sub selector  ".box(a space)p{}"    means the p in class box
                .box .spec
        
                //Intersection selector "    h3.spec{}" means both in h3 and .spec
                li.spec
        
                //Group selector     use"," to group
                ul,ol
                
                (3) label selector
                (general initialized the label: list-style:none   text-decoration:none)
                (span usually have no mean, we use to css it)
                span{color:red}  all label named span use red
                
                (4) ID selector
                <p id="paral1">XXXX</p>
                ***   #paral1{color:red;}
                
                (5) Class selector
                (Atomic Class is often used)
                <p class="warning">WARNING</p>
                .warning{color:red}
                
                         <p class="warning spec"></p>  (should be in both class)
                            .warning{color:red}
                            .spec{font-style:italic}   //()
                
                （6）Number selector
                :first-child    choose the first sub element (.box1 p:first-child{color:red;})
                <div class="box1"><p>1</p><p>2</p></div> (2 changed)
                :last-child                last
                :nth-child(3)    find the third element (Continuity)
                (an+b), form b, every a choose one like(3n+2) 2ed <p>  fifth<p>    eighth<p>
                could think n start from0        (2n+1)  odd <p> change ;   (2n) change even
                :nth-of-type(3)  find the third element（no need find the third element, just same label）
                :nth-last-child(3)
                :nth-last-of-type(3)
                
                (7) Attribute selector(not common)
        
                (8) Element Relation Selector
                div>p   (> sub selector, match the direct sub, compatre .box p{})
                <div><p></p>(p1)<div><p></p>(p2)</div></div><p></p>(p3)
                .box>p{color:red;} (p1)
                img+p   (both subs form same base, and second behind first)
                (a+b, b will be chosen)
                p~span   all <span> in same level/tier of <p> will be chosen
        
        
        4. Pseudo-Elements and selector
               (1)::before and :: after ( and content to links)
               a::before{content:'☆；}
               a::after{content:'○';}
               <p>
               <a href="">links</a>
               </p>
               
               (2)::selection
               .box1::selection{
               background:red;
               color:yellow;
               }
               <p>
               <div class="box1">AAAAA</div>
               </p>
               
               (3)::first-letter   ::first-line
               （Elements in the block）
        
        5. Cascading Conflicts
             (1) Weights：ID>class>label
           #> .spec > p
            
            (2)ID nums, class nums, label nums   (2,1,2)  (2,0,1)  (0,3,1)
        
             (3)!important(not recommend)
           .spec{
           color:blue !important;
           }

```
