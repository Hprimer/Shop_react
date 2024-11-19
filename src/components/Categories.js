import React, { Component } from 'react'

export class Categories extends Component {
	constructor(props){
		super(props)
		this.state = {
			categories: [
				{
					key:'all',
					name: "Все"
				},
				{
					key:'chairs',
					name: "Стулья"
				},
				{
					key:'sofa',
					name: "Диваны"
				},
				{
					key:'tables',
					name: "Столы"
				},
				{
					key:'light',
					name: "Свет"
				},
				{
					key:'beds',
					name: "Кровати"
				},
				{
					key:'cupboards',
					name: "Шкафы"
				}
			]
		}
	}
	render() {
		return (
			<div className='categories row'>
				{this.state.categories.map(el =>
					<div 
					key={el.key} className='category col' 
					onClick={() => this.props.onChoose(el.key)}> {el.name} </div>
				)}
				
			</div>
		)
	}
}

export default Categories
