import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import icon_close from '@icons/icon_close.png'
import AppContext from '@context/AppContext'

const OrderItem = ({ product }) => {

	const { price, images, title, id } = product
	const { removeFromCart } = useContext(AppContext)
	const handleRemove = (id) => {
		removeFromCart(id)
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={images[0]} alt={title} />
			</figure>
			<p>{title}</p>
			<p>{price}</p>
			<img src={icon_close} onClick={() => handleRemove(id)} alt="close" />
		</div>
	);
}

export default OrderItem;
