import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { logger } from "./middleware/logger";
import middleFunc from "./middleware/middleFunc";
import toast from "./middleware/toast";
// import devToolsEnhancer from 'remote-redux-devtools';
// import reducer from "./bugs";
import reducer from "./reducer";

/** 
 * when we use redux tolkit then we use middleware object and pass logger as a array
 * when we use normal redux then we will use middleware from redux and pass logger as a parameter.
 * createStore(reducer, middleware(logger))
*/

/**
 * we can use thunk as a middleware, we do it by thunk what is done in middleFunc. In reduxtool kit 
 * thunk automitically install. but if we use other middleware then thunk got displace. So use it we
 * have use getdefaultmiddleware.
*/

export default function (){
    return configureStore(
        {
            reducer,
            devTools: true,
            middleware: [
                ...getDefaultMiddleware(),
                logger({ description: 'logger' }),
                toast,
                // middleFunc
            ] 
        });
};