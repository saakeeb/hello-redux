const middleFunc = ({dispatch, getState}) => next => action => {
    if (typeof action === 'function') {
        action(dispatch, getState);
    }
    else {
        next(action);
    }
}

// const middleFunc = store => next => action => {
//     if (typeof action === 'function') {
//         action();
//     }
//     else {
//         next(action);
//     }
// }

export default middleFunc;