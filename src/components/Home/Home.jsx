import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div className='home-container'>
            <div className='product-container'>
                {/* <h2>Product: {tshirts.length}</h2> */}
                {
                    tshirts.map(tshirt=><TShirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    ></TShirt>)
                }
            </div>
            <div className='product-summery'>
                <h2>bcjdshgd</h2>
            </div>
        </div>
    );
};

export default Home;