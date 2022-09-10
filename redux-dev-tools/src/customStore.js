import reducer from "./reducers";

const customStore = (reducer) => {
    let state;
    let listensers = [];

    function subscribe(listener) {
        listensers.push(listener);    
    }

    function dispatch(action) {
        state = reducer(state, action);
        for (let i = 0; i < listensers.length; i++) {
            listensers[i]();
        }
    }

    function getState() {
        return state;
    }

    return {
        subscribe,
        dispatch,
        getState,
    }
}

export default customStore(reducer);