import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	addItem,
	decrementItem,
	removeItem,
} from '../../../redux/slices/cartSlice'

import styles from './ReduxCartItemStyle.module.scss'

export const ReduxCartItem = ({ item }) => {
	const dispatch = useDispatch()

	const onClickIncrementItem = () => {
		dispatch(
			addItem({
				id: item.id,
			})
		)
	}

	const onClickDecrementItem = () => {
		dispatch(
			decrementItem({
				id: item.id,
			})
		)
	}

	const onClickRemoveItem = () => {
		dispatch(removeItem(item.id))
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
						<p onClick={onClickRemoveItem}>Удалить</p>
					</div>
					<div className={styles.item__info}>
						<p>Цена за штуку: {item.price}</p>
					</div>
					<div className={styles.item__counter}>
						<p>
							{item.count === 1 ? (
								<span style={{ opacity: '0.5', cursor: 'not-allowed' }}>
									&#60;
								</span>
							) : (
								<span onClick={onClickDecrementItem}>&#60;</span>
							)}
							{item.count > 1 ? item.count : '1'}
							<span onClick={onClickIncrementItem}>&#62;</span>
						</p>
					</div>
					<div className={styles.item__total}>{item.price * item.count}</div>
				</div>
			</div>
		</div>
	)
}
