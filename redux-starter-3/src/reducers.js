import { bugAdded, bugRemoved, bugResolved } from "./constant";

const initialState = [];
let lastId = 0;

export default function reducer(state= initialState, action) {
    switch (action.type) {
        case bugAdded:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case bugRemoved:
            return state.filter(bug=> bug.id !== action.payload.id);
        case bugResolved:
            return state.map(bug =>
                bug.id !== action.payload.id ? bug : {
                    ...bug, resolved: true
            });
    
        default:
            return state;
    }
}