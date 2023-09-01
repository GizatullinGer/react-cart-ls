import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addItem } from '../../../redux/slices/cartSlice'

import styles from './ReduxProductItem.module.scss'

export const ReduxProductItem = ({ item }) => {
	const dispatch = useDispatch()
	const cartItem = useSelector(state =>
		state.cart.items.find(obj => obj.id === item.id)
	)

	const onClickAdd = () => {
		dispatch(addItem(item))
	}

	return (
		<div className={styles.product}>
			<div className={styles.product__inner}>
				<div className={styles.product__img}>
					<img src={item.img} alt='картинка продукта' />
				</div>
				<div className={styles.product__content}>
					<h3>{item.name}</h3>
					<p>Стоимость: {item.price}</p>
					<p>В корзине: {cartItem ? cartItem.count : 0}</p>
					<button onClick={onClickAdd}>В корзину</button>
				</div>
			</div>
		</div>
	)
}
