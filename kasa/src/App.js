import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Accomodation from './pages/Accomodation'
import Error from './pages/Error'
import './App.css'


/**
 * Manages routes & renders pages
 * Gets the data for the site & passes it to the components
 * @function App
 * @returns {bollean} isError: 
 * @returns{boolean} isLoaded: 
 * @returns {array} kasaPlaces: all the accomodation information
 * @returns {JSX}
 */
class App extends Component {
// FETCH() data to initialise the app
  state = {
    places :[],
    isLoaded: false,
    error: false
  }

    componentDidMount() {
      fetch("/logements.json")
      .then(res=> res.json())
          .then(datas =>{
              this.setState({
                places: datas,
                isLoaded : true
              });
          },error=>{
              this.setState({error})
    })
}

render()

  {  
    return (
    <Router>
      <Header />   
        <Switch>
          <Route path="/" exact component={()=> <Home kasaPlaces={this.state.places} isLoaded={this.state.isLoaded} isError={this.state.error}/>}/>
          <Route path="/about" exact component={About} />
          <Route path="/accomodation/:id" exact component={(props)=><Accomodation kasaPlaces={this.state.places} isLoaded={this.state.isLoaded} isError={this.state.error} {...props}/>} />
          <Route component={Error} />
        </Switch> 
      <Footer />
    </Router>  
    )
  }   
}

export default App;
