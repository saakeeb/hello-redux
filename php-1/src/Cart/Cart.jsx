import React, { useEffect } from 'react';
import { LoaderProductList } from '../Function/LoaderFunction';
import { useProducts } from '../ProviderContext/ProviderContext';
import Card from '../Card/Card';
import { actionTypes } from '../State/ProductState/ActionType';

const Cart = () => {
    const {
        state: { loading, error, cart },
        dispatch,
    } = useProducts();

    useEffect(() => {
        dispatch({type: actionTypes.SHOW_DELETE_BUTTON, payload: true})
    }, []);

    return (
        <div>
            <h3>Cart Data</h3>
            <br />
            <div className="content">
                <LoaderProductList loading={loading} error={error} data={cart} />
            </div>
        </div>
    );
};

export default Cart;