import React, { Component } from 'react'
import { MdDelete } from "react-icons/md";

export class Order extends Component {
	render() {
		return (
<div className="item row ">    
  <div className='box col-2'><img src={"./imgs/" + this.props.item.img} alt="Item" /></div>
	<div className='box col-7'><h2 >{this.props.item.title}</h2></div>
	<div className='box col-1'><MdDelete className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/></div>
	<div className='box col-2'><b>{this.props.item.price}$</b></div>
</div>

		)
	}
}

export default Order
