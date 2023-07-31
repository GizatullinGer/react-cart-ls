import React from 'react'

import styles from './CommonCartItemStyle.module.scss'

export const CartItem = ({ item, cartItems, setCartItems }) => {
	const quantityCounter = (item, type) => {
		const productList = localStorage.getItem('cart')

		if (productList) {
			const items = JSON.parse(productList)

			const itemIndex = items.findIndex(value => value.id === item.id)

			let newItem = {}

			if (type === 'plus') {
				newItem = {
					...items[itemIndex],
					quantity: items[itemIndex].quantity + 1,
				}
			}
			if (type === 'minus') {
				newItem = {
					...items[itemIndex],
					quantity:
						items[itemIndex].quantity > 1 ? items[itemIndex].quantity - 1 : 1,
				}
			}
			const newCart = items.slice() // копия массива cartItems
			newCart.splice(itemIndex, 1, newItem)
			setCartItems(newCart)
		}
	}

	const removeFromCart = id => {
		const newCart = cartItems.filter(item => item.id !== id)
		setCartItems(newCart)
	}

	return (
		<div className={styles.item}>
			<div className={styles.item__inner}>
				<div className={styles.item__img}>
					<img src={item.img} alt='Стикер' />
				</div>
				<div className={styles.item__content}>
					<div className={styles.item__title}>
						<h3>{item.name}</h3>
						<p onClick={() => removeFromCart(item.id)}>Удалить</p>
					</div>
					<div className={styles.item__info}>
						<p>Цена за штуку: {item.price}</p>
					</div>
					<div className={styles.item__counter}>
						<p>
							<span onClick={() => quantityCounter(item, 'minus')}>&#60;</span>
							{item.quantity > 1 ? item.quantity : '1'}
							<span onClick={() => quantityCounter(item, 'plus')}>&#62;</span>
						</p>
					</div>
					<div className={styles.item__total}>{item.price * item.quantity}</div>
				</div>
			</div>
		</div>
	)
}
