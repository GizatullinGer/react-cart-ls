import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { products } from '../../data/products'
import { ProductItem } from '../../components/CommonCart/CommonProductItem/CommonProductItem'
import { CartIcon } from '../../components/CommonCart/CommonCartIcon/CommonCartIcon'
import { CartModal } from '../../components/CommonCart/CommonCartModal/CommonCartModal'

import styles from './CommonCatalog.module.scss'

export const CommonCatalog = () => {
	// let productList = localStorage.getItem('cart');
	const [cartItems, setCartItems] = useState(
		localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
	) // объявление состояния массива в котором будут хранится добавленные продукты
	const [showCart, setShowCart] = useState(false) // модальное окно

	// Основная логика добавления товара в корзину и хранение возвращаемых данных в setCartItems
	const appendToCart = (item, quantity = 1) => {
		const productList = localStorage.getItem('cart')

		if (productList) {
			const items = JSON.parse(productList)

			// нужно проверить, нет ли уже такого товара в корзине
			const itemIndex = items.findIndex(value => value.id === item.id)
			if (itemIndex < 0) {
				// такого товара еще нет
				// принимает в себя продукты с бд
				const newItem = {
					...item,
					quantity: quantity,
				}
				setCartItems([...items, newItem])
			} else {
				// такой товар уже есть
				const newItem = {
					...items[itemIndex],
					quantity: items[itemIndex].quantity + quantity,
				}
				const newCart = items.slice() // копия массива cartItems
				newCart.splice(itemIndex, 1, newItem)
				setCartItems(newCart)
			}
		} else {
			localStorage.setItem('cart', JSON.stringify([item]))
			setCartItems([{ ...item, quantity: quantity }])
		}
	}

	const toggleShow = () => setShowCart(!showCart)

	useEffect(() => {
		const json = JSON.stringify(cartItems)
		localStorage.setItem('cart', json)
	}, [cartItems])

	// При рендере страницы, получаем товары
	useEffect(() => {
		// Получаем продукты с локального хранилища
		const productList = localStorage.getItem('cart')
		if (!productList) return
		const list = JSON.parse(productList)
		setCartItems(list)
	}, [])

	return (
		<div className={styles.home}>
			<CartIcon length={cartItems.length} toggleShow={toggleShow} />
			<div className={styles.toCart}>
				<Link to={'/commoncatalog/cart'}>Корзина</Link>
			</div>
			<section className={styles.startSection}>
				<h1>Обычная корзина</h1>
				<p>
					На данной странице представлен обычный каталог с добавлением товаров в
					корзину без сторонних библиотек
				</p>
			</section>
			<section className={styles.catalog}>
				<h2>Каталог</h2>
				<div className={styles.catalog__items}>
					{products.map(item => (
						<ProductItem
							key={item.id}
							cartItems={cartItems}
							item={item}
							appendToCart={appendToCart}
						/>
					))}
				</div>
			</section>

			{showCart ? (
				<CartModal
					items={cartItems}
					toggleShow={toggleShow}
					setCartItems={setCartItems}
				/>
			) : null}
		</div>
	)
}
