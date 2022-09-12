import { createSlice } from "@reduxjs/toolkit";

//reducers
const initialState = [];
let lastId = 0;

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded: (users, action) => {
            users.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },
        userResolved: (users, action) => {
            const index = users.findIndex(user => user.id === action.payload.id);
            user[index].resolved = true;
        },
        userRemoved: (users, action) => {
            const index = users.findIndex(user => user.id === action.payload.id);
            users.splice(index, 1);
        }
    }
});

export const { userAdded, userResolved, userRemoved } = slice.actions;
export default slice.reducer;