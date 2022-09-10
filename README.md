## hello-redux


## Here is a file of redux practice

- redux-starter-3

It is basic redux file with webpackcopile in vanilla js

- redux-custom-store

It is also basic redux file with custom store file. Where we can see redux has immutable functionality. So we have to use method for maintain immutable functionality.

- redux-devtools

1. We check devtools here. We add redux devtools extextion and pass extention function as a argument.

```bash
const store = createStore(
   reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```

2. If we want trace our reducer action we can use dependency `redux-devtools-extension`.
We can install the dependency by `npm i redux-devtools-extension`;

```bash
import {devToolsEnhancer} from 'redux-devtools-extension';
const store = createStore(reducer, devToolsEnhancer({trace: true}));
```

3. Now we set vscode as our editor from redux extension, also add path there. We can easily get path by typing `pwd` in our terminal.
