import React from 'react';
import Card from '../../Components/Card';
import { useSelector,useDispatch } from "react-redux";
const Cart = () => {
    const dispatch = useDispatch()
    const {cart} = useSelector(store => store.comp)


    return (
        <section className="cart">
            <div className="container">
                <div className="cart__row">
                    {
                        cart.length ? cart.map(item => (
                            <Card item={item}/>
                        )) : <p style={{fontSize:"30px"}}>
                            Корзина пуста
                        </p>
                    }
                </div>
            </div>
        </section>
    );
};

export default Cart;