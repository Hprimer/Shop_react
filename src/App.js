import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      orders:[//заказы лежащие в корзине
      ],
      currentItems:[//массив товаров которые показаны на странице(по категориям)
      ],
      items: [//массив с товарами
        {
          id: 1,
          title: 'Стул серый',
          img: '1.jpg',
          desc: 'Удобный серый стул для офиса и дома.',
          category: 'chairs',
          price: '49.99',
        },
        {
          id: 2,
          title: 'Стул синий',
          img: '2.jpg',
          desc: 'Стильный синий стул с мягким сиденьем.',
          category: 'chairs',
          price: '59.99',
        },
        {
          id: 3,
          title: 'Стол белый',
          img: '3.webp',
          desc: 'Элегантный белый стол, подходящий для любой комнаты.',
          category: 'tables',
          price: '89.99',
        },
        {
          id: 4,
          title: 'Кресло зеленое',
          img: '4.jpg',
          desc: 'Комфортное кресло зеленого цвета для отдыха.',
          category: 'chairs',
          price: '129.99',
        },
        {
          id: 5,
          title: 'Диван коричневый',
          img: '5.jpg',
          desc: 'Просторный коричневый диван для гостиной.',
          category: 'sofa',
          price: '299.99',
        },
        {
          id: 6,
          title: 'Стеллаж деревянный',
          img: '6.jpg',
          desc: 'Универсальный деревянный стеллаж для книг и декора.',
          category: 'cupboards',
          price: '74.99',
        },
        {
          id: 7,
          title: 'Лампа настольная',
          img: '7.jpg',
          desc: 'Модная настольная лампа для вашего рабочего места.',
          category: 'light',
          price: '34.99',
        },
        {
          id: 8,
          title: 'Шкаф белый',
          img: '8.jpg',
          desc: 'Белый шкаф с зеркальными дверями.',
          category: 'cupboards',
          price: '199.99',
        },
        {
          id: 9,
          title: 'Кровать односпальная',
          img: '9.jpg',
          desc: 'Удобная односпальная кровать с мягким матрасом.',
          category: 'beds',
          price: '159.99',
        },
        {
          id: 10,
          title: 'Пуф синий',
          img: '10.jpg',
          desc: 'Небольшой синий пуф для вашего комфорта.',
          category: 'chairs',
          price: '24.99',
        }
      ]
    }
    this.state.currentItems = this.state.items
    this.addOrder = this.addOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders = {this.state.orders} onDelete={this.deleteOrder}/>
        <Categories onChoose={this.chooseCategory}/>
        <Items items = {this.state.currentItems} onAdd = {this.addOrder}/>
        <Footer/>
      </div>
        
    );
  }
  chooseCategory(category){
    if (category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    } 
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)})
  } 
  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id!==id)})
  }
  addOrder(item){
    let inArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        inArray = true
    })
    if (!inArray)
      this.setState({orders:[...this.state.orders, item]})
  }
}

export default App;
