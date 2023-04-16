import { Outlet, Link } from "react-router-dom";
import './Layouts.css';

const Layouts = () => {
    return (
        <>
            <div className="layout">
                <div className="navbar">
                    <Link to='/' aria-label='Link to home page'>
                        Home
                    </Link>
                    <Link to='/top-rated' aria-label='Link to home page'>
                        Top Rated
                    </Link>
                    <Link to='/cart' aria-label='Link to home page'>
                        Cart
                    </Link>
                </div>
                <Outlet />
            </div>

        </>
    );
};

export default Layouts;