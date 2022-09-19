import { bugAdded, bugRemoved, bugResolved, bugsAssignedToUsrer, getBugsByUser, getUnresolveBugs } from "./store/bugs";
// import store from "./store";
import configureStore from './store/configureStore';
import { getUnresolvedProjects, projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

// console.log("store", store);
store.subscribe(() => {
    console.log("Store has change");
});
// store.dispatch(userAdded({description: 'user 1'}));
// store.dispatch(userAdded({description: 'user 2'}));
// store.dispatch(bugAdded({description: "bug 1"}));
// store.dispatch(bugAdded({ description: "bug 2" }));
// store.dispatch(bugAdded({ description: "bug 3" }));
// store.dispatch(bugAdded({ description: "bug 4" }));
// store.dispatch(bugRemoved({ id: 3}));
// store.dispatch(bugResolved({ id: 4 }));
// store.dispatch(bugsAssignedToUsrer({bugsId: 1, userId: 1}));
// store.dispatch(projectAdded({description: "project 1"}));
store.dispatch((dispatch, getState) => {
    dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
    console.log('getState', getState());
});

store.dispatch(()=> {
    store.dispatch(
        {
            type: "error",
            payload: { message: 'An error occoured' }
        }
    );
});


// console.log("store after dispatch", store.getState());

// console.log("store bug unresolve", getUnresolveBugs(store.getState()));
// console.log("store project unresolve", getUnresolvedProjects(store.getState()));
// const x = getUnresolveBugs(store.getState());
// const y = getUnresolveBugs(store.getState());
// console.log('x, y: ', x === y);

// const bugs = getBugsByUser(1)(store.getState());
// console.log('Bugs by user', bugs);