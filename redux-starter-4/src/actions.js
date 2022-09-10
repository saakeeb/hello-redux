import { bugAdded, bugRemoved, bugResolved } from "./constant";

export const bugAddedFunc = description => ({
    type: bugAdded,
    payload: {
        // description: description
        description
    }
});
export const bugRemovedFunc = item => ({
    type: bugRemoved,
    payload: {
        id: item
    }
});
export const bugResolvedFunc = id => ({
    type: bugResolved,
    payload: {
        id
    }
});