import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { productsData } from '../Data/Data';
import { initialState, productReducer } from '../State/ProductState/ProductsReducers';
import { actionTypes } from '../State/ProductState/ActionType';

const Product_context = createContext();

const ProviderContext = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    console.log("state", state);
    useEffect(() => {
        dispatch({ type: actionTypes.Fetching_START });
        setTimeout(() => {
            try {
                dispatch({ type: actionTypes.Fetching_Success, payload: productsData });
                dispatch({ type: actionTypes.TOP_RATED, payload: productsData.filter(data=> data.rating>=4) });
            }
            catch (err) {
                dispatch({ type: actionTypes.Fetching_Error });
            }   
        }, 1000);
    }, []);

    const value = {
        state,
        dispatch
    }
    return (
        <Product_context.Provider value={value}>
            {children}
        </Product_context.Provider>
    );
};

export const useProducts = ()=>{
    const context = useContext(Product_context);
    return context;
}

export default ProviderContext;