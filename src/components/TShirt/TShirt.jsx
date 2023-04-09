import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt}) => {
    const {_id, price, picture, name, gender} = tshirt;
    return (
        <div className='product-cart'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <p>{gender}</p>
            <button>Details</button>
        </div>
    );
};

export default TShirt;