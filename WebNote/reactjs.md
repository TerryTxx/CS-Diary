### Reactjs
#### [Back to RootPage](https://github.com/TerryTxx/CS-Diary/blob/master/README.md)

----
## react with typescript
- creat react app frame
- react with typescript
- [State and Props difference](#state-and-props)

[steps of make a robot gollary: ](https://github.com/TerryTxx/robot-gallery-Cart)
- [install the frame work](#to-install-the-robot-frame-work)
- [React to CSS module](#react-to-css-module)
- [Load image and font resources](#load-image-and-font-resources)
- [creat class components](#creat-class)
- [React Event](#react-event)
- [Get API data](#get-api-data)
- [setState asynchronous development](#setstate---asynchronous-development)
- [React component life cycle](#react-component-life-cycle)

---
## ReactHooks (advanced)
###### hooks
- [what is hooks](#what-is-hooks)
- [useState manage the state components](#usestate-manage-the-state-components)
###### effect
- [side effect](#side-effect)
- [useEffect get asynchronous data](#useeffect-get-asynchronous-data)
- [useEffect usage](#useeffect-usage)
###### global data process
- [context and useContext](#context-and-usecontext)
- [components of ContextProvider](#components-of-contextprovider)
###### HOC components
###### selfnamed Hook
- [withAddToCart()](#withaddtocart--)
- [useAddtoCart()](#useaddtocart--)

[demo of make a robot gollary: ](https://github.com/TerryTxx/robot-gallery-Cart)
---

### to install the robot frame work
1. install
```text
npx create-react-app robot-gallery --template typescript
```
2. check src/app.txs
3. check tesconfig.json
4. new src/mockdata/robots.json(add data)
5. new src/components/Robots.tsx
```tsx
import React from "react"

interface RobotProps {
    // id:string,
    id:number,
    name:string,
    email:string
}

const Robot : React.FC<RobotProps> = ({id,name,email}) => {
    return(
        <li>
            <img alt="robot" src={`https://robohash.org/${id}`} />
    <h2>{name}</h2>
    <p>{email}</p>
    </li>
);
};
export default Robot;
```
6. import in app
```tsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
import robots from './mockdata/robots.json';
import Robot from "./components/Robot";

function App() {
    return (
        <ul>
            {robots.map((r) =>(
                <Robot id={r.id} email={r.email} name={r.name}/>
            ))}
        </ul>
    )
}
export default App;
```
```
npm start
```
[[back to list]](#react-with-typescript)
### React to CSS module
1. naming:
```text
put all css in the same folder with tsx, Robot.module.css in SRC/components
```
2. global css:
```css
/*in body*/
background-color: cadetblue; 
```
3. how to CSS module
```text
import './index.css' (-> Changeto -> ) import style from'./index.css'
```
4. declare ts *.d.ts in first
src/custom.d.ts(add)
```ts
declare module "*.css" {
  const css: { [key: string]: string };
  export default css;
}
```
then
```text
APP.css rename App.module.css
```
change App.module.css content
```css
.app {
    text-align: center;
}
.appHeader{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom:24px;
}
.appLogo{
    height: 10vmin;
    pointer-events: none;
}

@media (prefers-reduced-motion:no-preference) {
    .appLogo{
        animation: App-logo-spin infinite 20s linear;
    }
}
h1 {
    font-family: 'Slidefu';
    font-size: 72px;
}
.robotList{
    width: 85vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 0 auto;
}
```
5. change App.tsx
```tsx
import React from 'react';
import logo from './logo.svg';
// import './App.module.css';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from "./components/Robot";

function App() {
  return (
      <div className={styles.app}>
      <div className={styles.robotList}>
          {robots.map((r) =>(
              <Robot id={r.id} email={r.email} name={r.name}/>
          ))}
      </div>
    </div>
  )
}
export default App;
```
```text
npm start
```
6.CSS in js(JSS)

7.make Css as js object, using in ts
```text
npm install typescript-plugin-css-modules --save-dev
```
tsconfig.json
```json
 "plugins": [
      {
        "name": "typescript-plugin-css-modules"
      }
    ]
```
/rout/.vscode/settings.json
```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePrompUseWorkspaceTsdk": true
}
```
8. src/components/Robot.module.css(add)
```css
.cardContainer{
    display: flex;
    flex-direction: column;
    background-color: #00BDAB;
    border: 1PX solid grey;
    border-radius: 5px;
    padding: 25px;
    cursor: pointer;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
}
.cardContainer:hover{
    transform:scale(1.05);
}
```
9. change Robot.tsx
```ts
import React from "react"
import styles from "./Robot.module.css";
interface RobotProps {
    // id:string,
    id:number,
    name:string,
    email:string
}
const Robot : React.FC<RobotProps> = ({id,name,email}) => {
    return(
        <div className={styles.cardContainer}>
            <img alt="robot" src={`https://robohash.org/${id}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};
export default Robot;
```
[[back to list]](#react-with-typescript)
### Load image and font resources
src/assets
index.css
```text
@font-face {
  font-family: 'Slidefu';
  src: local('Slidefu'),url("./assets/fonts/Slidefu-Regular-2.ttf") format('truetype');
}
```
```ts
import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from "./components/Robot";

function App() {
  return (
      <div className={styles.app}>
          <div className={styles.appHeader}>
              <img src={logo} className={styles.appLogo} alt="logo"/>
              <h1>Robot Gallery shopping plat</h1>
          </div>
      <div className={styles.robotList}>
          {robots.map((r) =>(
              <Robot id={r.id} email={r.email} name={r.name}/>
          ))}
      </div>
    </div>
  );
}
export default App;
```
[[back to list]](#react-with-typescript)
### creat class
1. add src/components/shoppingCart.module.css
2. add src/components/shoppingCart.tsx
3. 
css content:
```css
.cartContainer{
    display:block;
    margin-bottom: 50px;
}
.cartDropDown{
    background: white;
    box-shadow: 0 1px 7px rgba(0,0,0,0.2);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    width: 140px;
    text-align: left;
    z-index: 999;
}
.cartDropDown ul{
    list-style: none;
    margin:0;
    padding: 0;
}
.cartDropDown li{
    border-bottom: 1px solid #ccc;
    padding: 5px 0;
}
.cartDropDown li:last-child{
    border-bottom: 0;
}
.button{
    background: none;
    border: none;
    padding:0;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
}
.button svg{
    margin:0 5px 0 0;
}
```
shoppingCart.tsx:
```tsx
import React from "react";
import styles from "./ShoppingCart.module.css";
interface Props {

}
interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props,State>{
  constructor(props: Props) {
    super(props);
    this.state = { 
      isOpen: false,
    };
  }
  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button}
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
          }}
        >
          Cart 2 (pcs）
        </button>
        <div className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>robot1</li>
            <li>robot2</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default ShoppingCart;
```
add into app.tsx
```ts
import ShoppingCart from "./components/ShoppingCart";

<ShoppingCart />
```
[[back to list]](#react-with-typescript)

### State and Props
```text
props is the external interface of the component, 
state is the internal interface of the component

props is used for data transfer between components, 
state is used for data transfer inside components
```
STATE:
```text
state is private and is a private attribute of the component, 
so it needs to be modified by setting methods, as setState();
After setState, the state will not change immediately, it is asynchronous operation

and constructor is the only place to get default State

```
```ts
onClick={() => {
    this.setState({isOpen: !this.state.isOpen });
}}
```
PROPS：
```text
In essence, it is the data passed into the component, 
or the data passed from the parent component to the child component.
```
```text
obj data is immutable, only used to read the attributes
can check the obj address if the obj is changed
```

[[back to list]](#react-with-typescript)


### React Event
1. Encapsulating Events
2. Reprocessing Events
```text
npm install react-icons
```
shoppingcart.tsx
```ts
import React from "react";
import styles from "./ShoppingCart.module.css";
import {FiShoppingCart} from "react-icons/fi";
interface Props { }

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props,State>{
  constructor(props: Props) {
    super(props);
    this.state = { 
      isOpen: false,
    };
    // no arrow function，bind this
    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick(e:any) {
  //   this.setState({ isOpen: !this.state.isOpen });
  // }
  // this points to handleClick
  // handleClick(e:React.MouseEvent<HTMLButtonElement,MouseEvent>) {
  //   this.setState({ isOpen: !this.state.isOpen });
  // }
  // arrow this inShoppingCart（recommend）
  // handleClick = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
  //   this.setState({ isOpen: !this.state.isOpen });
  // }
  //no arrow
  // handleClick (e:React.MouseEvent<HTMLButtonElement,MouseEvent>){
  //   this.setState({ isOpen: !this.state.isOpen });
  // }
   
  // event obj
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("e.target", e.target)
    console.log("e.currentTarget", e.currentTarget)
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen });
    }   
  }
  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button}
          onClick={this.handleClick}
        >
           <FiShoppingCart />
          <span>cart 2 （pcs）</span>
        </button>
        <div className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>robot1</li>
            <li>robot2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;

```
[[back to list]](#react-with-typescript)

### Get API data
```text
Asynchronous processing, dynamic display
--JS: Ajax
--Before using callback by stack (but you will encounter callback hell)

So use promises:
```
1. get fake data
```text
Front-end data is generally called through the back-end API, 
you can use jsonplaceholder to try to simulate
```
[jasonPlaceholder get users](https://jsonplaceholder.typicode.com/users)

2.change the APP.tsx from functional to class
- 1. change the function to class, remove the "()" by extends ReactComponent
- 2. use render() cover all of return content
- 3. add constructor, initialize state
APP.tsx
```tsx
import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";

interface Props{
}
interface State{
    robotGallery:any[]
}
class App extends React.Component<Props,State>{
    constructor(props) {
        super(props);
        this.state = {
            robotGallery:[],
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
       .then(response => response.json())
        .then(data => this.setState({robotGallery:data}))
    }

    render() {
        return (
            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <img src={logo} className={styles.appLogo} alt="logo"/>
                    <h1>Robot Gallery shopping plat</h1>
                </div>
                <ShoppingCart/>
                <div className={styles.robotList}>
                    {this.state.robotGallery.map((r) => (
                        <Robot id={r.id} email={r.email} name={r.name}/>
                    ))}
                </div>
            </div>
        );
    }
}
export default App;
```

[[back to list]](#react-with-typescript)

### setState() asynchronous development
```text
setState(), asynchronous update, synchronous execution
```
DEMO:
```tsx
import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";

interface Props{
}
interface State{
    robotGallery:any[];
    count: number;
}
class App extends React.Component<Props,State>{
    constructor(props) {
        super(props);
        this.state = {
            robotGallery:[],
            count:0
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => this.setState({robotGallery:data}))
    }

    render() {
        return (
            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <img src={logo} className={styles.appLogo} alt="logo"/>
                    <h1>Robot Gallery shopping plat</h1>
                </div>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1},()=>{
                        console.log("count",this.state.count);
                    });
                    this.setState({count:this.state.count+1},()=>{
                        console.log("count",this.state.count);
                    });
                }}>Click</button>
                <span>count:{this.state.count}</span>
                <ShoppingCart/>
                <div className={styles.robotList}>
                    {this.state.robotGallery.map((r) => (
                        <Robot id={r.id} email={r.email} name={r.name}/>
                    ))}
                </div>
            </div>
        );
    }
}
export default App;
```
[[back to list]](#react-with-typescript)


### React component life cycle
```tsx
import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";
interface props { }

interfaceState {
    robotGallery: any[];
    count: number;
}

class App extends React. Component<Props, State> {
    // * Life is in the first phase of the cycle: initialization
    // Initialize component state
    constructor(props) {
        super(props);
        this.state = {
            robotGallery: [],
            count: 0
        };
    }
    // After the component creates the dom element, it is called when it is mounted into the page
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => this.setState({ robotGallery: data }));
    }

    // * The second phase of the life cycle: update
    // Called when the component receives a new prop (updated).

    // componentWillReceiveProps (deprecated)

    // state getDerivedStateFromProps(nextProps,prevState){}

    // shouldComponentUpdate(nextProps, nextState) {
    // return nextState.some !== this.state.some
    // }
    // Called after the component is updated

    componentDidUpdate() { }
    // * The third phase of the life cycle: destruction
    
    // Called after the component is destroyed

    // Can be used as a destructor
    componentWillUnmount(){}
    render() {
        return (
            <div className={styles.app}>
                <div className={styles. appHeader}>
                    <img src={logo} className={styles. appLogo} alt="logo" />
                    <h1>The name of the online shopping platform of Robert Robot is so cool</h1>
                </div>
                <button
                    onClick={() => {
                        this.setState((preState, preProps) => {
                            return { count: preState.count + 1 }
                        }, () => {
                            console.log("count", this.state.count);
                        });
                        this.setState((preState, preProps) => {
                            return { count: preState.count + 1 }
                        }, () => {
                            console.log("count", this.state.count);
                        });
                    }}
                >
                    Click
                </button>
                <span>count:{this.state.count}</span>
                <ShoppingCart />
                <div className={styles.robotList}>
                    {this.state.robotGallery.map((r,index) => (
                        <Robot id={r.id} email={r.email} name={r.name} key={index} />
                    ))}
                </div>
            </div>
        );
    }
}
export default App;
```
[[back to list]](#react-with-typescript)

---
### what is hooks
```
Using state in non-class components
A method of message processing, used to monitor the specified program
```
```text
types: useState, useEffect, useContext, useReducer
```
[[back to list]](#react-with-typescript)

### useState manage the state components
```tsx
const [count,setCount] =useState(0);
//   [initial state, updated state]
```
- ### initial value of the receiving function, replacing the constructor
1. First change app.js from a class component to a function component
2. import usestate
3. DEMO of changing app.js
```tsx
import React,{useState} from "react";
import logo from "./assets/images/logo.svg";
// import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props { }

interface State {
robotGallery: any[];
count: number;
}

const App: React.FC = (props) => {
const [count,setCount] = useState<number>(0)

    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>Robot Gallery online</h1>
        </div>
        <button
          onClick={() => {
            setCount(count+1)
          }}
        > 
          Click
        </button>
        <span>count:{count}</span>
        <ShoppingCart />
        {/* <div className={styles.robotList}>
          {this.state.robotGallery.map((r,index) => (
            <Robot id={r.id} email={r.email} name={r.name} key={index} />
          ))}
        </div>  */}
      </div> 
    );
}
export default App;
```


[[back to list]](#react-with-typescript)

### side effect
```text
Side Effects, Functional Programming Ideas
That is, enter the same parameters (props) for the React component, and the rendered UI will always be the same
```

### useEffect get asynchronous data
```tsx
    useEffect(()=>{
      document.title=`Click ${count} times`
    },[count]);
```
- ### Can replace lifecycle functions, componentDidMount, *DidUpdate, *WillUnmount
- ### add side effects to functions
- 1. add 2 useEffect in app.tsx :
```tsx
import React,{useState, useEffect} from "react";
import logo from "./assets/images/logo.svg";
// import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";
import robot from "./components/Robot";

interface Props { }

interface State {
  robotGallery: any[];
  count: number;
} 

const App: React.FC = (props) => {
  const [count,setCount] = useState<number>(0) // count is getter, serCount is setter
    const [robotGallery,setRobotGallery] = useState<any>([])
  useEffect(() =>{
    document.title = `press${count}times`
  },[count])

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
       .then(data=>setRobotGallery(data))
    },[])

    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>Robot Gallery online</h1>
        </div>
        <button
          onClick={() => {
            setCount(count+1)
          }}
        >Click
        </button>
          <span>count:{count}</span>
          <ShoppingCart />
          <div className={styles.robotList}>
              {robotGallery.map((r,index) => (
                  <Robot id={r.id} email={r.email} name={r.name} key={index} />
              ))}
          </div>
      </div>
    );
  }
export default App;
```
---
### useEffect usage
1. The useEffect function has fewer parameters, and the API will be uploaded infinitely, （so add an empty array to the second parameter;）
2. How to use the async/await asynchronous mode in useEffect;
```tsx
 useEffect( () =>{
      const fetchData = async() =>{
          const responses = await fetch("https://jsonplaceholder.typicode.com/users")
          //promise:
          //  .then(response => response.json())
          // .then(data=>setRobotGallery(data))
          const data = await responses.json()
          setRobotGallery(data)
      };
      fetchData()
    },[])
```
3. how to deal with loading
4. how to deal with exception
```tsx
import React,{useState, useEffect} from "react";
import logo from "./assets/images/logo.svg";
// import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";
import robot from "./components/Robot";
interface Props { }

interface State {
    robotGallery: any[];
    count: number;
}

const App: React.FC = (props) => {
    const [count, setCount] = useState<number>(0);
    const [robotGallery, setRobotGallery] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>()

    useEffect(() => {
        document.title = `点击${count}次`
    }, [count])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try{
                const responses = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                // .then(response => response.json())
                // .then(data=>setRobotGallery(data))
                const data = await responses.json();
                setRobotGallery(data);
            } catch(e) {
                setError(e as string);
            }
            setLoading(false)
        };
        fetchData()
    }, [])
    return (
        <div className={styles.app}>
            <div className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt="logo" />
                <h1>Robot Gallery online</h1>
            </div>
            <button
                onClick={() => {
                    setCount(count+1)
                }}
            >Click
            </button>
            <span>count:{count}</span>
            <ShoppingCart />
            {!error || error!=="" && <div>website: {error}</div>}
            { !loading ?
                <div className={styles.robotList}>
                    {robotGallery.map((r, index) => (
                        <Robot id={r.id} email={r.email} name={r.name} key={index}/>
                    ))}
                </div>
                :<h2>loading the page</h2>
            }
        </div>
    );
}
export default App;
```
[[back to list]](#react-with-typescript)

### context and useContext
- ### uesContext, handles data transfer across components
- ### props drilling
index.tsx demo:
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const defaultContextValue = {
    username:"Terry"
}

export const appContext = React.createContext(defaultContextValue)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <appContext.Provider value={defaultContextValue}>
            <App/>
        </appContext.Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
used to do in Robot.tsx:
```tsx
import React from "react";
import styles from "./Robot.module.css";
import {appContext} from "../index";
interface RobotProps {
    id:number,
    name:string,
    email:string
}
const Robot : React.FC<RobotProps> = ({id,name,email}) => {
    return(
        <appContext.Consumer>
            {(value) => {
                return <div className={styles.cardContainer}>
                    <img alt="robot" src={`https://robohash.org/${id}`}/>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>author:{value.username}</p>
                </div>
            }}
        </appContext.Consumer>
    );
};
export default Robot;
```
we can use useContext hook now:
```tsx
import React,{useContext} from "react";
import styles from "./Robot.module.css";
import {appContext} from "../index";

interface RobotProps {
    id:number,
    name:string,
    email:string
}
const Robot : React.FC<RobotProps> = ({id,name,email}) => {
    const value = useContext(appContext)
    return(
         <div className={styles.cardContainer}>
                    <img alt="robot" src={`https://robohash.org/${id}`}/>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>author:{value.username}</p>
                </div>
    );
};
export default Robot;
```
[[back to list]](#react-with-typescript)

### components of ContextProvider
new src/AppState.tsx
```tsx
import React, { useState } from 'react';
interface AppStateValue {
    username: string;
    shoppingCart: { items: { id: number, name: string }[] };
}
const defaultContextValue: AppStateValue = {
    username: "Terry",
    shoppingCart: { items: [] }
}
export const appContext = React.createContext(defaultContextValue);
export const appSetStateContext = React.createContext<
    React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);

export const AppStateProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
    const [state, setState] = useState(defaultContextValue)
    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>
        </appContext.Provider>
    );
};
```
change index.tsx
```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { AppStateProvider } from './AppState';

ReactDOM.render(
    <React.StrictMode>
        <AppStateProvider>
            <App/>
        </AppStateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
```
add import in robort.tsx
```tsx
import React,{useContext} from "react";
import styles from "./Robot.module.css";
import {appContext,appSetStateContext} from "../AppState";
```
change shoppingcard.tsx
```tsx
import React from "react";
import styles from "./ShoppingCart.module.css";
import {FiShoppingCart} from "react-icons/fi";
import{appContext} from "../AppState";

interface Props { }

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props,State>{
  constructor(props: Props) {
    super(props);
    this.state = { 
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("e.target", e.target)
    console.log("e.currentTarget", e.currentTarget)
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen });
    }   
  }
  render() {
    return (
        <appContext.Consumer>{(value) => {
            return <div className={styles.cartContainer}>
                <button className={styles.button}
                        onClick={this.handleClick}
                >
                    <FiShoppingCart/>
                    <span>cart{value.shoppingCart.items.length}（pcs）</span>
                </button>
                <div className={styles.cartDropDown}
                     style={{
                         display: this.state.isOpen ? "block" : "none",
                     }}
                >
                    <ul>
                        {value.shoppingCart.items.map( i =>
                            <li>{i.name}</li>
                        )}
                    </ul>
                </div>
            </div>
        }}</appContext.Consumer>

    );
  }
}
export default ShoppingCart;
```
```text
npm start
the whole project finished
```
[[back to list]](#react-with-typescript)

### withAddToCart()
### useAddtoCart()
```text
const hoc = higherOrde (wrappedComponent )
```
[[back to list]](#react-with-typescript)


