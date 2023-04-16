import React, { useEffect } from 'react';
import { useProducts } from '../ProviderContext/ProviderContext';
import Card from '../Card/Card';
import './Home.css';
import { LoaderProductList } from '../Function/LoaderFunction';
import { actionTypes } from '../State/ProductState/ActionType';

const Home = () => {
    const {
        state: { products, loading, error },
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
    // if (!loading && !error && products.length === 0) {
    //     content = <p>Nothing to show, product list is empty</p>;
    // }
    // if (!loading && !error && products) {
    //     content = <div className="products-list">
    //         {
    //             products.map(product =>
    //             (
    //                 <Card product={product} key={product._id}/>
    //             ))
    //         }
    //     </div>;
    // }


    return (
        <div>
            <div className="content">'
                <LoaderProductList loading={loading} error={error} data={products} />
            </div>
        </div>
    );
};

export default Home;