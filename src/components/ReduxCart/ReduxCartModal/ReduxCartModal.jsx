import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ReduxCartItem } from '../ReduxCartItem/ReduxCartItem'

import styles from './ReduxCartModalStyle.module.scss'

export const ReduxCartModal = ({ toggleShow }) => {
	const dispatch = useDispatch()
	const { totalPrice, items } = useSelector(state => state.cart)

	return (
		<div className={styles.modal}>
			<i className={styles.modal__close} onClick={toggleShow}>
				x
			</i>
			<h5 className={styles.modal__title}>Ваша корзина</h5>
			{items.length ? (
				<div>
					{items.map(item => (
						<ReduxCartItem key={item.id} item={item} />
					))}
				</div>
			) : (
				<p>Ваша корзина пуста</p>
			)}

			<div>Общая сумма: {totalPrice}</div>

			<Link to={'/reduxcatalog/cart'}>В корзину</Link>
		</div>
	)
}
