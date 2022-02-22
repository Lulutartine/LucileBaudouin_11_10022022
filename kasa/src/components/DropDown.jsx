import { Component } from "react"  /*createRef */
import PropTypes from 'prop-types'
import upArrow from '../assets/arrows/up_arrow_white.svg'
import downArrow from '../assets/arrows/down_arrow_white.svg'
import '../styles/components/DropDown.css'

/**
* Renders Dropdown lists on about page & accomodation page
* commented out code enables ALL dropdown to close when user clicks outside a dropdown
* but not needed for the project
* @function DropDown
* @extends Component
* @param {string} props dropdownWidth: sets width of dropdown depending on page
* @param {string} props dropdownHeight: sets height of dropdown depending on page
* @param {string} props title: dropdown heading
* @param {string/array} props content: either text or list rendered in dropdown
* @returns {JSX}
*/
export default class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
        }
      
      }
      
    handleButtonClick = () => {
        this.setState(state => ({        
            open: !state.open     
        }))
      }

  
  render() {
    const { open } = this.state
    const {dropdownWidth, dropdownHeight, title, content} = this.props
   
    return (
        <div className={dropdownWidth}>
            <div className='dropDownTitleBar' onClick={this.handleButtonClick}>
                <h2 className='dropDownTitleBarText'>{title}</h2>
                <span>{open ? (<img className='dropdownArrow' src={upArrow} alt="icon" />) : 
                    (<img className='dropdownArrow' src={downArrow} alt="icon" />)} </span>
            </div>

            {open && (typeof(content) === 'string' ? (
            <p className={dropdownHeight}>{content}</p>) :  
            ( <ul className={dropdownHeight}>
                {content.map((equipment, index) => (
                  <li key={`${equipment}-${index}`}>{equipment}</li> ))}
              </ul>
            ))}                     
        </div>
    )
  }
}

DropDown.propTypes = {
  dropdownWidth: PropTypes.string.isRequired,
  dropdownHeight: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
}