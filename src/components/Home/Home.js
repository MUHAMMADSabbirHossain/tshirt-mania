import React, { useState } from 'react';
import "./Home.css";
import Cart from '../Cart/Cart';
import useTShirts from '../../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    // console.log(tShirts);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (seletedItem) => {
        const exsits = cart.find(tShirt => tShirt._id === seletedItem._id);
        if (!exsits) {
            setCart([...cart, seletedItem]);
        }
        else {
            alert("This Item is already added.");
        }
    };

    const handleRemoveFromCart = (seletedItem) => {
        console.log(seletedItem);
        const rest = cart.filter(tShirt => tShirt._id !== seletedItem._id);
        setCart(rest);
    };

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt key={tShirt._id} tShirt={tShirt}
                        handleAddToCart={handleAddToCart}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;