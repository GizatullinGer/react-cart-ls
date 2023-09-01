import React from 'react'
import { Link } from 'react-router-dom'

import { products } from '../../data/products'
import { ReduxProductItem } from '../../components/ReduxCart/ReduxProductItem/ReduxProductItem'
import { ReduxCartIcon } from '../../components/ReduxCart/ReduxCartIcon/ReduxCartIcon'
import { ReduxCartModal } from '../../components/ReduxCart/ReduxCartModal/ReduxCartModal'

import styles from './ReduxCatalog.module.scss'

export const ReduxCatalog = () => {
	const [showCart, setShowCart] = React.useState(false) // модальное окно

	const toggleShow = () => setShowCart(!showCart)
	return (
		<div className={styles.home}>
			<ReduxCartIcon toggleShow={toggleShow} />
			<div className={styles.toCart}>
				<Link to={'/reduxcatalog/cart'}>Корзина</Link>
			</div>
			<section className={styles.startSection}>
				<h1>Redux корзина</h1>
				<p>
					На данной странице представлен каталог с помощью библиотеки Redux
					Toolkit
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

			{showCart ? <ReduxCartModal toggleShow={toggleShow} /> : null}
		</div>
	)
}
