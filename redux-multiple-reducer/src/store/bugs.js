import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

//reducers
const initialState = [];
let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState,
    reducers: {
        bugsAssignedToUsrer: (bugs, action) => {
            const { bugsId, userId} = action.payload
            const index = bugs.findIndex(bug => bug.id === bugsId);
            bugs[index].userId = userId;
        },
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
        bugRemoved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs.splice(index, 1);
        }
    }
});

export const { bugAdded, bugResolved, bugRemoved, bugsAssignedToUsrer } = slice.actions;
export default slice.reducer;

//selector
// export const getUnresolveBugs = state => state.entities.bugs.filter(bug => !bug.resolved);

//Memorization
export const getUnresolveBugs = createSelector(
    state => state.entities.bugs, //input
    state => state.entities.projects, //input
    (bugs, projects)=> bugs.filter(bug=> !bug.resolved) //output
);

// Here is currying. createseletor return a id and userId return curent State.
//const selectotr = getBugsByUser(1);
//seletor(state)
export const getBugsByUser = userId => createSelector(
    state => state.entities.bugs,
    (bugs)=> bugs.filter(bug=> bug.userId === userId)
);


//action type
// export const bugAdded = createAction("Bug_Added");
// export const bugRemoved = createAction("Bug_Removed");
// export const bugResolved = createAction("Bug_Resolved");
// export const bugDeleted = createAction("Bug_Deleted");

// this is mutatable process, this process do immutable process 
// under the hood using emer in redux using redux-toolkit. Here it defalt send return data

// export default createReducer(initialState, {
//     [bugAdded.type]: (state, action) => {
//         state.push({
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false
//         });
//     },
//     [bugResolved.type]: (state, action) => {
//         const index = state.findIndex(bug => bug.id === action.payload.id);
//         state[index].resolved = true;
//     },
//     [bugRemoved.type]: (state, action) => {
//         const index = state.findIndex(bug => bug.id === action.payload.id);
//         state.splice(index, 1);
//     }
// });


// this is immutable process with return data

// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case bugAdded.type:
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false
//                 }
//             ];
//         case bugRemoved.type:
//             return state.filter(bug => bug.id !== action.payload.id);
//         case bugResolved.type:
//             return state.map(bug =>
//                 bug.id !== action.payload.id ? bug : {
//                     ...bug, resolved: true
//                 });

//         default:
//             return state;
//     }
// }