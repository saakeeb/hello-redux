import { createSlice } from "@reduxjs/toolkit";

//reducers
const initialState = [];
let lastId = 0;

const slice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        projectAdded: (projects, action) => {
            projects.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },
        projectResolved: (projects, action) => {
            const index = projects.findIndex(project => project.id === action.payload.id);
            projects[index].resolved = true;
        },
        projectRemoved: (projects, action) => {
            const index = projects.findIndex(project => project.id === action.payload.id);
            projects.splice(index, 1);
        }
    }
});

export const { projectAdded, projectResolved, projectRemoved } = slice.actions;
export default slice.reducer;

export const getUnresolvedProjects =state=> state.entities.projects.filter(project=> !project.resolved);