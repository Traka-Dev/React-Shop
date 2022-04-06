import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import add_to_cart_icon from '@icons/bt_add_to_cart.svg'
import AppContext from '@context/AppContext';

const ProductItem = ({ product }) => {

	const { images, title, price } = product
	const { addToCart } = useContext(AppContext)

	const handleClick = item => {
		addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img src={images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>$ {price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={add_to_cart_icon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
