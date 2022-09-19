## Redux Practice 

## Here is a file of redux practice

### redux-starter-3

It is basic redux file with webpack compile in vanilla js

### redux-custom-store

It is also basic redux file with custom store file. Where we can see redux has immutable functionality. So we have to use method for maintain immutable functionality.

### redux-devtools

- We check devtools here. We add redux devtools extextion and pass extention function as a argument.

```bash
const store = createStore(
   reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```

- If we want trace our reducer action we can use dependency `redux-devtools-extension`.
We can install the dependency by `npm i redux-devtools-extension`;

```bash
import {devToolsEnhancer} from 'redux-devtools-extension';
const store = createStore(reducer, devToolsEnhancer({trace: true}));
```

- Now we set vscode as our editor from redux extension, also add path there. We can easily get path by typing `pwd` in our terminal.

### redux-clean-code

To write clean code we use redux toolkit. We can install it by `npm i @redux/toolkit`.

First we havee configure our store.

```bash
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({ reducer });
```

We can also write action type like 

```bash
import { createAction } from "@reduxjs/toolkit";
const name = createAction("name")
```

We have to disppatch our payload as a object here.
We can also create reducer as immutable or we  can use `createReducer` to handle our action. 

```bash
import { createReducer } from "@reduxjs/toolkit";
createReducer(initialState, {
  [name.type]: (state, action) => { //action type
    state.push({
        description: action.payload.description
    });
  }
})
```

Actually `createReducer` is a mutable object that take two argument. First the initial state, and second one draft, that will update the initial option. 

We can also clean this code using `createSlice`

```bash
import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    name: (name, action) => {  //name is the form of state, so that we can identify which state change
      names.push({
          description: action.payload.description
      });
    }
  }
})
```

### redux-multiple-reducer

Here we use multiple reducer and use it in a store.

```bash
import { combineReducers } from "redux";
export default combineReducers({
    bugs: bugsReducer,
    projects: projectsReducer,
    users: usersReducer
});
```

Here we wrap reducr in entities and wrap this entitiesinto reducer file, export this reducer into store file

Here we use `selector` to filter data, also use `memorization` to optimize state performance. We install selector by `npm i reselect`

```bash
import { createSelector } from "reselect";
export const getUnresolveBugs = createSelector(
    state => state.entities.bugs, //input
    (bugs, projects)=> bugs.filter(bug=> !bug.resolved) //output
);
```

Here we filter unresolved bugs.

### redux-middleware

Middleware is a path that inter connet action dispatch with store with adddional information. Like log information of every action dispatch.

Wec can build midle ware by that is mention in `middleware` folder. Connect it with store as a middleware.


```bash
configureStore({
    reducer,
    devTools: true,
    middleware: [
      logger({ description: 'logger' }),
      toast,
      middleFunc
    ] 
});
```

 we can use `thunk` as a middleware. We use thunk what is done in middleFunc. In redux tool kit thunk automitically install. but if we use other middleware then thunk got displace. So to use it we have use `getDefaultMiddleware` function.

 ```bash
 import { getDefaultMiddleware } from "@reduxjs/toolkit";
 
configureStore({
    reducer,
    devTools: true,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ description: 'logger' }),
      toast
    ] 
});
```

***