import React from 'react'

import styles from './headerstyle.module.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>Logo</div>
			<div className={styles.header__nav}>
				<nav>
					<ul>
						<li>
							<Link to={'/'}>Главная</Link>
						</li>
						<li>
							<Link to={'/commoncatalog'}>Обычный каталог</Link>
						</li>
						<li>
							<Link to={'/reduxcatalog'}>Redux каталог</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
