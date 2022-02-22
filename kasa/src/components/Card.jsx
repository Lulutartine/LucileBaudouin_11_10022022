import { Component } from "react"
import { Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/components/Card.css'

/**
 * Individual announcement card for each accomodation on Home page
 * @function Card
 * @extends Component
 * @param {string} props id: used for the route
 * @param {string} props title: title for the accommodation anouncement card
 * @param {string} props cover: cover photo of the accomodation anouncement card
 * @returns {JSX}
 */
export default class Card extends Component {

  render() {
    const {id, title, cover} = this.props
    return (
        <article className='accomodationCard'>
          <Link to={`/accomodation/${id}`}>
            <img className='coverImage' src={cover} alt='Cover'/>
            <h2 className='coverTitle'>{title}</h2>
          </Link> 
        </article>
    )
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}