import React from 'react'

import styles from './ReduxProductItem.module.scss'

export const ReduxProductItem = ({ item }) => {
	return (
		<div className={styles.product}>
			<div className={styles.product__inner}>
				<div className={styles.product__img}>
					<img src={item.img} alt='картинка продукта' />
				</div>
				<div className={styles.product__content}>
					<h3>{item.name}</h3>
					<p>Стоимость: {item.price}</p>
					<p>В корзине: </p>
					<button>В корзину</button>
				</div>
			</div>
		</div>
	)
}
