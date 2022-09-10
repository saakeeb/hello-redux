import { bugAddedFunc, bugRemovedFunc, bugResolvedFunc } from "./actions";
import store from "./store";

console.log("store", store);

store.dispatch(bugAddedFunc("bug 1"));
store.dispatch(bugAddedFunc("bug 2"));
store.dispatch(bugAddedFunc("bug 3"));
store.dispatch(bugAddedFunc("bug 4"));
store.dispatch(bugRemovedFunc(3));
store.dispatch(bugResolvedFunc(2));

console.log("store after dispatch", store.getState());