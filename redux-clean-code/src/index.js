import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
// import store from "./store";
import configureStore from './store/configureStore';
import { projectAdded } from "./store/projects";

const store = configureStore();

// console.log("store", store);
store.subscribe(() => {
    console.log("Store has change");
});
// store.dispatch(bugAdded({description: "bug 10"}));
// store.dispatch(bugAdded({description: "bug 1"}));
// store.dispatch(bugAdded({ description: "bug 2" }));
// store.dispatch(bugAdded({ description: "bug 3" }));
// store.dispatch(bugAdded({ description: "bug 4" }));
// store.dispatch(bugRemoved({ id: 3}));
// store.dispatch(bugResolved({ id: 4 }));
// store.dispatch(bugAdded({ description: "bug 5" }));
// store.dispatch(bugAdded({ description: "bug 6" }));
// store.dispatch(bugRemoved({ id: 5 }));

store.dispatch(projectAdded({description: "project 1"}));


console.log("store after dispatch", store.getState());