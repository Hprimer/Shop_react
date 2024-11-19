import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) =>{
	let summa = 0
	let countOrders = 0
	props.orders.forEach(el => summa += Number.parseFloat(el.price))
	props.orders.forEach(el => countOrders++)
	return (
	<div>
		{props.orders.map(el => (
			<Order key={el.id} item={el} onDelete = {props.onDelete}/>
		))}
		<p className='shop-cart-footer'>Товаров в корзине: {countOrders}</p>
		<p className='shop-cart-footer'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>{/*new Intl нужен чтобы js адекватно считал сумму, иногда считает как 23,000000000002$ */} 

	</div>)	
}
const showNothing = () => {
	return(
		<div className='emptyOrders'>
			<h2>Товаров нет</h2>
		</div>
	)
}

export default function Header(props) {//необходимо написать пропс так как это не класс а функция
	let [cartOpen, setCartOpen] = useState(false) //хук состояния, по умолчанию false (корзина закрыта)
	return (
	<header>
		
		<span className='logo'>House Staff</span>
		
		<ul className='nav'>
			<li>О нас</li>
			<li>Контакты</li>
			<li>Кабинет</li>
			<li><FaShoppingCart 
				onClick={() => setCartOpen(cartOpen = !cartOpen)} 
				className={`shop-cart-btn ${cartOpen && 'active'}`}/>
				{/* ///если cartOpen - true, то применяется еще и класс актив */} 
			</li>
		</ul> 
			{cartOpen && (
				<div className='shop-cart'>
					{props.orders.length > 0 ?
					showOrders(props) : showNothing()}
				</div>
			)}
			

		<div className='block'>
			<div className='presentation'></div>
		</div>
	</header>
	)
}
