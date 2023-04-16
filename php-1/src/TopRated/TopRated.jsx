import React, { useEffect } from 'react';
import Card from '../Card/Card';
import { useProducts } from '../ProviderContext/ProviderContext';
import { LoaderProductList } from '../Function/LoaderFunction';
import { actionTypes } from '../State/ProductState/ActionType';

const TopRated = () => {
    const {
        state: { products, loading, error, top_rated },
        dispatch
    } = useProducts();

    useEffect(() => {
        dispatch({ type: actionTypes.SHOW_DELETE_BUTTON, payload: false })
    }, []);

    // let content;
    // if (loading) {
    //     content = <p>Data is fetching</p>;
    // }
    // if (error) {
    //     content = <p>Something went wrong</p>;
    // }
    // if (!loading && !error && top_rated.length === 0) {
    //     content = <p>Nothing to show, product list is empty</p>;
    // }
    // if (!loading && !error && top_rated) {
    //     content = <div className="products-list">
    //         {
    //             top_rated.map(product =>
    //             (
    //                 <Card product={product} key={product._id} />
    //             ))
    //         }
    //     </div>;
    // }


    return (
        <div>
            <div className="content">
                <LoaderProductList loading={loading} error={error} data={top_rated} />
            </div>
        </div>
    );
};

export default TopRated;        