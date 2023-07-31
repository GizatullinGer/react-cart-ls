import React, { useEffect, useState } from 'react'

import icon from '../../../assets/image/shopping_cart_icon.svg'

import styles from './CommonCartIconStyle.module.scss'

export const CartIcon = props => {
	return (
		<div className={styles.cart__icon} onClick={props.toggleShow}>
			<img src={icon} alt='' />
			{props.length !== 0 && <span>{props.length}</span>}
		</div>
	)
}
