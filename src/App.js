import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './layouts/layout'
import { Home } from './pages/HomePage/Home'
import { CommonCatalog } from './pages/CommonCatalog/CommonCatalog'
import { CommonCart } from './pages/CommonCartPage/CommonCart'
import { CommonProduct } from './pages/CommonProductPage/CommonProduct'
import { ReduxCatalog } from './pages/ReduxCatalog/ReduxCatalog'
import { ReduxCart } from './pages/ReduxCartPage/ReduxCart'

// Создание ссылок по сайту с помощью плагина react-router

const router = createBrowserRouter([
	{
		// Определение шаблона (шапка, подвал)
		element: <Layout />,
		// Домашний адрес
		path: '/',
		// Перечисление вложенных страниц
		children: [
			{
				// Главная страница. Index: true означает, что это основная страница с начальным адресом
				index: true,
				element: <Home />,
			},
			{
				// Страница корзины. Ссылка /path
				path: 'commoncatalog',
				element: <CommonCatalog />,
			},
			{
				// Страница корзины. Ссылка /path
				path: '/commoncatalog/cart',
				element: <CommonCart />,
			},
			{
				// Страницы продоктов
				path: 'id:/*',
				element: <CommonProduct />,
			},
			{
				// Страница корзины. Ссылка /path
				path: 'reduxcatalog',
				element: <ReduxCatalog />,
			},
			{
				// Страница корзины. Ссылка /path
				path: 'reduxcatalog/cart',
				element: <ReduxCart />,
			},
		],
	},
])

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
