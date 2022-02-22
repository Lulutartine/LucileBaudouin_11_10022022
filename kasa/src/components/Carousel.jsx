import { Component } from "react"
import PropTypes from 'prop-types'
import previousArrow from '../assets/arrows/white_back_arrow.svg'
import nextArrow from '../assets/arrows/white_forward_arrow.svg'
import '../styles/components/Carousel.css'
import Blank from '../assets/blank.jpg'

/**
 * Renders Carousel at top of page for accomodation announcement
 * @function Carousel
 * @extends Component
 * @param {array} props photoAlbum: pictures for the carousel
 * @returns {JSX}
 */
export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPictureIndex: 0,
    }
  }

	render() { 
    const {currentPictureIndex} = this.state
    const pictures = this.props.photoAlbum
    const length = pictures?.length
  
    const previousSlide = () => {
        this.setState((prevState) => ({
          currentPictureIndex: prevState.currentPictureIndex !== 0 ? prevState.currentPictureIndex - 1 : prevState.currentPictureIndex = length - 1
        }))
    };

    const nextSlide = () => {
        this.setState((prevState) => ({
          currentPictureIndex: prevState.currentPictureIndex !== length - 1 ? prevState.currentPictureIndex + 1 : prevState.currentPictureIndex = 0
        }))
    };

    return (   
          <div className='carouselWrapper'>
            <div className='carouselControls'>
              <img className='previousControlArrows' src={previousArrow} alt='précédent' onClick={previousSlide} />
              <img className='nextControlArrows' src={nextArrow} alt='suivant' onClick={nextSlide} />
            </div>
              <img className='carouselPictures' src={pictures? pictures[currentPictureIndex] : Blank} alt='Carousel Gallery' />
              <p className='counter'>{currentPictureIndex+1}/{length || 0 }</p>
          </div>     
    )
  }
}

Carousel.propTypes = {
  photoAlbum : PropTypes.array.isRequired,
 }
