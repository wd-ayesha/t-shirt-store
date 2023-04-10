import React from 'react';
import './Cart.css'

const Cart = ({cart, haldleRemoveFromCart}) => {
    let message;
    // conditional if/else rendering
    if(cart.length === 0){
        message = <p>Please add some products!</p>
    }
    else{
        message = <div>
            <h4>wealthy</h4>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            {/* conditional css(common case) */}
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summery: {cart.length}</h2>
            {/* conditional css(without common case) */}
            <p className={`bold bordered ${cart.length === 3 ? 'orange' : 'green'}`}>something</p>

            {/*  conditional ternary operator rendering */}
            {
                cart.length > 2 ? <span>Buy More</span> : <span>Fokira</span>
            }
            {message}
            {
                cart.map(tshirt=> <p
                    key={tshirt._id}
                >{tshirt.name} <button onClick={()=>haldleRemoveFromCart(tshirt._id)}>Delete</button></p>)
            }
            {/*  conditional && rendering */}
            {
                cart.length ===2 && <p>Double Bonas!!!</p>
            }
             {/*  conditional || rendering */}
             {
                cart.length ===3 || <h3>3 ta to hoilo na!</h3>
            }
        </div>

    );
};

export default Cart;