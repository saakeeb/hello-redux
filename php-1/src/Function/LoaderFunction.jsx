import Card from "../Card/Card";

export function LoaderProductList ({ loading, error, data }) {
    let content;

    if (loading) {
        content = <p>Data is fetching</p>;
    } else if (error) {
        content = <p>Something went wrong</p>;
    } else if (!data || data.length === 0) {
        content = <p>Nothing to show, product list is empty</p>;
    } else {
        content = (
            <div className="products-list">
                {data.map((product) => (
                    <Card product={product} key={product._id} />
                ))}
            </div>
        );
    }

    return content;
}