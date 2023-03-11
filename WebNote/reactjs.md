## Reactjs
#### [Back to RootPage](https://github.com/TerryTxx/CS-Diary/blob/master/README.md)

----

### creat-react-app
```text
npx create-react-app my-app
cd my-app
npm start
```
### react with typescript
```text
npx create-react-app my-app-ts --template typescript

We suggest that you begin by typing:

  cd my-app-ts
  npm start

Happy hacking!
tanxiaoxu@asahis-MacBook-Pro test % ls
my-app-ts
tanxiaoxu@asahis-MacBook-Pro test % cd my-app-ts
```
"noImplicitAny": false,// in tsconfig.json
check details in tsconfig
```json
{
  "compilerOptions": {
    "noImplicitAny": false,// no need to declare any again, almost same as js then
    "target": "es5",
    "lib": [
      "dom",//document.getElementByID("root")
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,//Allows mixed compilation of js and ts
    "skipLibCheck": true,
    "esModuleInterop": true,//Allows mixed compilation of js and ts .Allows us to use commonjs to import default files, which is import React from 'react';
                    //If false, import * as React from 'react';
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",//The common module system, commonjs of node.js, can be replaced with 'commonjs' here
    "moduleResolution": "node",//How the compiler works
    "resolveJsonModule": true,
    "isolatedModules": true,//The compiler treats each file as a separate module
    "noEmit": true,//when an error occurs, the compiler will not generate js code
    "jsx": "react-jsx"//Allows the compiler to support react code
  },
  "include": [
    "src"
  ]
}
```
```
can use run npm exject, can creat the fream by yourself
```











