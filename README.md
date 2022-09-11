## hello-redux


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

