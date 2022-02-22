import { Component } from "react"
import PropTypes from 'prop-types'
import Banner from '../components/Banner'
import homeBanner from '../assets/home_image.jpg'
import Card from '../components/Card'
import Error from "./Error"
import '../styles/pages/Home.css'

/**
* Home page template
* Renders Loading, error or page depending on state
 * @function Home
 * @extends Component
 * @param {boolean} props isError: 
 * @param {boolean} props isLoaded: 
 * @param {array} props kasaPlaces: all the accomodation information
 * @returns {JSX}
 */
export default class Home extends Component {

  render() { 
 
    return (
      <main>
         {this.props.isError && (
          <Error />
        )} 
        {!this.props.isLoaded ? (      
            <div className='loading'>  
              <div>Loading ... </div> 
            </div>
          )  :
        (   
        <div className='homeWrapper'>
            <span className='homeBanner'>
              <Banner picture={homeBanner} alternate='Moutains and sea'/>
              <h1 className='slogan'>Chez vous, partout et ailleurs</h1>    
            </span>  
          <div className='accomodationContainer'>
              {this.props.kasaPlaces.map((data) => ( 
                    <Card key={data.id} id={data.id} title={data.title} cover={data.cover}/> 
              ))}         
          </div>
        </div>
        )}
      </main>
    )
  }
}

Home.propTypes = {
  kasaPlaces: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
}