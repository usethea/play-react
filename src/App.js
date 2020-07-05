import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({products: users}))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const {products, searchField} = this.state 
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Products list</h1>
        <SearchBox 
          placeholder='search products'
          handleChange={ this.handleChange }
        />
        <CardList products={ filteredProducts } />
      </div>
    )
  }
}

export default App;
