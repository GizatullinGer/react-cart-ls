import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { products } from '../../data/products'
import { ReduxProductItem } from '../../components/ReduxCart/ReduxProductItem'

import styles from './ReduxCatalog.module.scss'

export const ReduxCatalog = () => {
	return (
		<div className={styles.home}>
			<div className={styles.toCart}>
				<Link to={'/commoncatalog/cart'}>Корзина</Link>
			</div>
			<section className={styles.startSection}>
				<h1>Redux корзина</h1>
				<p>
					На данной странице представлен обычный каталог с добавлением товаров в
					корзину без сторонних библиотек
				</p>
			</section>
			<section className={styles.catalog}>
				<h2>Каталог</h2>
				<div className={styles.catalog__items}>
					{products.map(item => (
						<ReduxProductItem key={item.id} item={item} />
					))}
				</div>
			</section>
		</div>
	)
}
