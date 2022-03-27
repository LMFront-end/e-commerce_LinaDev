import React from 'react';
import Footer from '../components/Footer';
import { HomeServices } from '../components/HomeServices';


const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white image_home">
                <img className="welcome"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">

                <div className="container">

                    <h5 className="card-title display-3 fw-bolder mb-0">STYLE, SELF-LOVE, INSPIRATION</h5>

                    <p className="card-text lead fs-2">
                        CHECK OUT THIS WEEK'S TOP SELLERS
                    </p>
                </div>
            </div>
        </div>
        <HomeServices />
        <Footer />
        </div>
        );
};

export {Home};
