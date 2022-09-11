import { configureStore } from "@reduxjs/toolkit";
// import devToolsEnhancer from 'remote-redux-devtools';
// import reducer from "./bugs";
import reducer from "./projects";

export default function (){
    return configureStore({ reducer, devTools: true });
};

