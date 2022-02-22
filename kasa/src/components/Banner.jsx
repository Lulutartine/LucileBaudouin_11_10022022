import { Component } from "react"
import PropTypes from 'prop-types'
import '../styles/components/Banner.css'

/**
 * Renders banner at top of Home/About page
 * @function Banner
 * @extends Component
 * @param {string} props picture: picture for the banner
 * @param {string} props alternate: the alternative text for the picture
 * @returns {JSX}
 */
export default class Banner extends Component {

  render() { 
    const {picture, alternate} = this.props
    return (
          <img className="banner" src={picture} alt={alternate}/>
    )
  }
}

Banner.propTypes = {
  picture: PropTypes.string.isRequired,
  alternate: PropTypes.string.isRequired,
}