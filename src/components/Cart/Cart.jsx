import React from 'react';

const Cart = ({cart, haldleRemoveFromCart}) => {
    return (
        <div>
            <h2>Order Summery: {cart.length}</h2>
            {
                cart.map(tshirt=> <p
                    key={tshirt._id}
                >{tshirt.name} <button onClick={()=>haldleRemoveFromCart(tshirt._id)}>Delete</button></p>)
            }
        </div>

    );
};

export default Cart;