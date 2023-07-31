import React, { useEffect, useState } from 'react'

import styles from './HomeStyle.module.scss'
import { Link } from 'react-router-dom'

// Главная страница сайта
export const Home = () => {
	return (
		<div className={styles.home}>
			<div className={styles.home__inner}>
				<div className={styles.home__top}>
					<h1>
						Этот проект существует, чтобы понять как работает: localStorage,
						Redux и Mobx - и понять как они работают. Ниже представлены корзины
						на каждой из технологий
					</h1>
				</div>
				<div className={styles.home__content}>
					<div className={styles.home__column}>
						<Link to='/commoncatalog'>
							<div className={styles.column__inner}>
								<div className={styles.column__img}>
									<img
										src={
											require('../../assets/image/face_frown_icon.svg').default
										}
										alt=''
									/>
								</div>
								<div className={styles.column__content}>
									<h2>Обычная корзина без стейт менеджеров</h2>
									<button>Перейти</button>
								</div>
							</div>
						</Link>
					</div>

					<div className={styles.home__column}>
						<Link to='/reduxcatalog'>
							<div className={styles.column__inner}>
								<div className={styles.column__img}>
									<img
										src={
											require('../../assets/image/face_frown_icon.svg').default
										}
										alt=''
									/>
								</div>
								<div className={styles.column__content}>
									<h2>Redux корзина</h2>
									<button>Перейти</button>
								</div>
							</div>
						</Link>
					</div>

					<div className={styles.home__column}>
						<Link to='/commoncatalog'>
							<div className={styles.column__inner}>
								<div className={styles.column__img}>
									<img
										src={
											require('../../assets/image/face_frown_icon.svg').default
										}
										alt=''
									/>
								</div>
								<div className={styles.column__content}>
									<h2>Обычная корзина без стейт менеджеров</h2>
									<button>Перейти</button>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
