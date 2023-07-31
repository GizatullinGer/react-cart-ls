import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { CartItem } from '../../components/CommonCart/CommonCartItem/CommonCartItem'

import styles from './CommonCartStyle.module.scss'

// Получаем продукты с локального хранилища
// let productList = localStorage.getItem('cart');
export const CommonCart = () => {
	const [cartItems, setCartItems] = useState(
		localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
	)
	const [priceCart, setPriceCart] = useState(0)

	const getAllPriceCart = cartItems => {
		let result = 0
		cartItems.forEach(cartItem => {
			result += cartItem.price * cartItem.quantity
		})
		setPriceCart(result)
	}

	useEffect(() => {
		const json = JSON.stringify(cartItems)
		localStorage.setItem('cart', json)
		getAllPriceCart(cartItems)
	}, [cartItems])

	return (
		<div className={styles.cart}>
			<div className={styles.goBack}>
				<Link to={'/commoncatalog'}>Назад</Link>
			</div>
			<section className={styles.cart__startsection}>
				<h1>Корзина</h1>
			</section>

			<section className={styles.cart__content}>
				{cartItems.map(item => (
					<CartItem
						item={item}
						cartItems={cartItems}
						setCartItems={setCartItems}
					/>
				))}
			</section>

			<section>
				<h3>Общая стоимость: {priceCart}</h3>
			</section>
		</div>
	)
}
