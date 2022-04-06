import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import add_to_cart_icon from '@icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {

	const { images, title, price } = product
	const [cart, setCart] = useState([])

	const handleClick = () => {
		setCart([])
	}

	return (
		<div className="ProductItem">
			<img src={images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>$ {price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={add_to_cart_icon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
