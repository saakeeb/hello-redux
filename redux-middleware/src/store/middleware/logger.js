export const logger = param => state => next => action => {
    console.log('logger param', param);
    // console.log('state', state);
    // console.log('next', next);
    console.log('action', action);
    next(action);
}