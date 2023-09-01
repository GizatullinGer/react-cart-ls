import React from 'react'
import { Link } from 'react-router-dom'

import { CartItem } from '../CommonCartItem/CommonCartItem'

import styles from './CommonCartModalStyle.module.scss'

export const CartModal = props => {
	const cost = props.items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	)
	return (
		<div className={styles.modal}>
			<i className={styles.modal__close} onClick={props.toggleShow}>
				x
			</i>
			<h5 className={styles.modal__title}>Ваша корзина</h5>
			{props.items.length ? (
				<div>
					{props.items.map(item => (
						<CartItem
							key={item.id}
							item={item}
							cartItems={props.items}
							setCartItems={props.setCartItems}
						/>
					))}
				</div>
			) : (
				<p>Ваша корзина пуста</p>
			)}

			<div>Общая сумма: {cost}</div>

			<Link to={'/commoncatalog/cart'}>В корзину</Link>
		</div>
	)
}
