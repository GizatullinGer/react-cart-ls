import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { ReduxCartItem } from '../../components/ReduxCart/ReduxCartItem/ReduxCartItem'
import { clearItems } from '../../redux/slices/cartSlice'

import styles from './ReduxCartStyle.module.scss'

export const ReduxCart = () => {
	const dispatch = useDispatch()
	const { totalPrice, items } = useSelector(state => state.cart)

	const onClickClear = () => {
		dispatch(clearItems())
	}

	return (
		<div>
			<div className={styles.cart}>
				<div className={styles.goBack}>
					<Link to={'/reduxcatalog'}>Назад</Link>
				</div>
				<section className={styles.cart__startsection}>
					<h1>Корзина</h1>
				</section>

				<section className={styles.cart__content}>
					{items.map(item => (
						<ReduxCartItem key={item.id} item={item} />
					))}
				</section>

				<section>
					<h3>Общая стоимость: {totalPrice}</h3>
				</section>
				<section>
					<button onClick={onClickClear}>Удалить</button>
				</section>
			</div>
		</div>
	)
}
