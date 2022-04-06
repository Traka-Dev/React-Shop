import React from 'react'
import '../styles/Order.scss'
import { ShoppingCartItem } from '../components/ShoppingCartItem.jsx'

export const Order = ({ flecha, details }) => {
    return (
        <div class="my-order-content">
            <div class="order">
                <p>
                    <span>03.25.21</span>
                    <span>6 articles</span>
                </p>
                <p>$560.00</p>
                {flecha ? <img src="./icons/flechita.svg" alt="arrow" /> : null}
                {details ? /* Loop */ <ShoppingCartItem /> : null}
            </div>
        </div>
    )
}
