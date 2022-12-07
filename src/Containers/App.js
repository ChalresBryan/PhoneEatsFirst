import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import {restaurants} from '../restaurants';
import '../Containers/APP.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary'

class App extends Component{
  
  constructor(){
    super();
    this.state = {
      restaurants: restaurants, //[],
      searchfield: ''
    }
  }

  /*
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({ restaurants: user }));
  }
  */

  onSearchChange = (event) => { 
    this.setState({ searchfield: event.target.value });
  }

  render(){
    //const { restaurants, searchfield} = this.state;
    const filteredRestaurants = this.state.restaurants.filter(restaurant =>{
      return restaurant.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    if(restaurants.length === 0){
      return <h1>Loading</h1>
    } 
    else{ // restaurants.length != 0
      return(
        <div className='tc'>
          <h1>Restaurants and more, delivered to your phone</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList restaurants={filteredRestaurants}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

/*
const App = () => {
  return(
    <div className='tc'>
      <h1>Restaurants and more, delivered to your phone</h1>
      <SearchBox />
      <CardList restaurants={restaurants}/>
    </div>
  );
}
*/
export default App;