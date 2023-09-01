import React from 'react'
import { useSelector } from 'react-redux'

import icon from '../../../assets/image/shopping_cart_icon.svg'

import styles from './ReduxCartIconStyle.module.scss'

export const ReduxCartIcon = ({ toggleShow }) => {
	const { items } = useSelector(state => state.cart)

	const totalCount = items.reduce((sum, item) => sum + item.count, 0)

	return (
		<div>
			<div className={styles.cart__icon} onClick={toggleShow}>
				<img src={icon} alt='' />
				{items.length ? (
					items.length !== 0 && <span>{totalCount}</span>
				) : (
					<span>0</span>
				)}
			</div>
		</div>
	)
}
