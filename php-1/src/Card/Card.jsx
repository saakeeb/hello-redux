import React from 'react';
import './Card.css';
import { actionTypes } from '../State/ProductState/ActionType';
import { useProducts } from '../ProviderContext/ProviderContext';

const Card = ({ product }) => {
    // console.log("product", product);
    const {
        dispatch,
        state: { show_delete_button }
    } = useProducts();
    return (
        <div className='product-item'>
            <h3>{product.model}</h3>
            <p>{product.rating}</p>
            <h5>${product.price}</h5>
            <button
                onClick={


                    () => {
                        dispatch({ type: actionTypes.ADD_TO_CART, payload: product })
                        console.log('click', product);
                    }
                }
            >
                Add to cart
            </button>
            {
                show_delete_button &&
                (
                    <div>
                        <br />
                        < button
                            onClick={
                                () => dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product })
                            }
                        >
                            Delete Item
                        </button>
                    </div>
                )
            }
            <br />
            <button>Add to wishlist</button>
        </div >
    );
};

export default Card;