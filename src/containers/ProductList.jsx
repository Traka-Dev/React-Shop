import React from 'react'
import '../styles/ProductList.scss'
import { ProductCard } from './ProductCard'

export const ProductList = () => {

    return (
        <section class="main-container">
            <div class="cards-container">
                { /* Loop */}
                <ProductCard />
            </div>
        </section>
    )
}