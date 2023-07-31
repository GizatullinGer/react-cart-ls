import React, { useEffect, useState } from 'react'

import styles from './CommonProductItemStyle.module.scss'

export const ProductItem = ({ item, appendToCart, cartItems }) => {
	const [quantityItems, setQuantutyItems] = useState(0)
	const product = {
		id: item.id,
		img: item.img,
		name: item.name,
		price: item.price,
	}

	useEffect(() => {
		cartItems.filter(cartItem => {
			if (cartItem.id === item.id) {
				return setQuantutyItems(cartItem.quantity)
			}
			return null
		})
	}, [cartItems, item.id])

	return (
		<div className={styles.product}>
			<div className={styles.product__inner}>
				<div className={styles.product__img}>
					<img src={item.img} alt='картинка продукта' />
				</div>
				<div className={styles.product__content}>
					<h3>{item.name}</h3>
					<p>Стоимость: {item.price}</p>
					<p>В корзине: {quantityItems}</p>
					<button onClick={() => appendToCart(product, 1)}>В корзину</button>
				</div>
			</div>
		</div>
	)
}
