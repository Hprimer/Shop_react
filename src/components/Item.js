import React, { Component } from 'react'

export class Item extends Component {
	render() {
		return (
			<div className='item'>
				<img src={"./imgs/" + this.props.item.img}></img>
				<h2 className='item-h2'> {this.props.item.title} </h2>
				<p>{this.props.item.desc}</p>
				<b>{this.props.item.price}$</b>
				<div className='btn_add' onClick={() => this.props.onAdd(this.props.item)}> + </div>
			</div>
		)
	}
}

export default Item
