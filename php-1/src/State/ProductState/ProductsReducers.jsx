import { actionTypes } from "./ActionType"

export const initialState = {
    loading: false,
    products: [],
    error: false,
    top_rated: [],
    cart: [],
    show_delete_button: false,
}


export const productReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.Fetching_START:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case actionTypes.Fetching_Success:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: false,
            }
        case actionTypes.Fetching_Error:
            return {
                ...state,
                loading: false,
                error: true,
            }
        case actionTypes.TOP_RATED:
            return {
                ...state,
                loading: false,
                error: false,
                top_rated: action.payload,
            }
        case actionTypes.ADD_TO_CART:
            const newCartItem = { ...action.payload, newID: (state.cart.length + 3) * 99 };
            return {
                ...state,
                cart: [...state.cart, newCartItem],
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.newID !== action.payload.newID),
            }
        case actionTypes.SHOW_DELETE_BUTTON:
            return {
                ...state,
                show_delete_button: action.payload
            }
        default:
            return state;
        
    }
}