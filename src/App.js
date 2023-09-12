import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
    orders:[],
    currentItems: [],
    items: [
      {
        id:1,
          title: 'Chair',
          img: 'cheir-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque totam animi nisi amet, ',
          category: 'chairs',
          price: '49.99'

      },
      {
        id:2,
          title: 'Table',
          img: 'table.jpg',
          desc: 'adipisci iste. Inventore,sandae  accusamus quos ipsum, laborum consequuntur ab esse necessitatibus eius, explicabo obcaecati iusto recu.',
          category: 'tables',
          price: '149.00'

      },
      {
        id:3,
          title: 'Diva',
          img: 'sofa.jpeg',
          desc: ' accusamus quos ipsum, laborum consequuntur ab esse necessitatibus eius, explicabo obcaecati iusto recu',
          category: 'sofa',
          price: '549.99'

      },
      {
        id:4,
          title: 'Lamp',
          img: 'whall-light.jpeg',
          desc: ' accusamus quos ipsum, laborum consequuntur ab esse necessitatibus eius, explicabo obcaecati iusto recu',
          category: 'Lights',
          price: '25.99'

      },
      {
        id:5,
          title: 'White Chair',
          img: 'chair-white.jpeg',
          desc: ' accusamus quos ipsum, laborum consequuntur ab esse necessitatibus eius, explicabo obcaecati iusto recu',
          category: 'chairs',
          price: '1225.99'

      }
    ],
    showFullItem: false,
    fullItem: {}
  }
  this.state.currentItems = this.state.items
  this.addToOrder = this.addToOrder.bind(this)
  this.deleteOrder = this.deleteOrder.bind(this)
  this.ChooseCategory = this.ChooseCategory.bind(this)
  this.onShowItem = this.onShowItem.bind(this)
 }
  render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Categories ChooseCategory={this.ChooseCategory} />
       <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />  

       {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer/>
    </div>
  )
}
onShowItem(item){
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

ChooseCategory(category) {
  if(category === 'all') {
    this.setState({currentItems:this.state.items})
    return
  }
  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) {
this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    } )
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item] })
  }
}
export default App;
