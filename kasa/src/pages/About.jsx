import { Component } from "react"
import Banner from '../components/Banner'
import aboutBanner from '../assets/about_image.jpg'
import { dropDownList } from '../data/aboutDropDownData.js'
import DropDown from '../components/DropDown'
import '../styles/pages/About.css'

/**
 * Renders About/A propos page
 * @function About
 * @extends Component
 * @param {string} aboutBanner: picture for the banner from file
 * @param {array} dropDownList: content for dropdown list from file
 * @returns {JSX}
 */
export default class About extends Component {
 
  render() { 
    return ( 
      <main>
        <div className="aboutWrapper">
          <span className='aboutBanner'>
              <Banner picture={aboutBanner} alternate='Mountains'/>
              <h1 className='sr-only'>A Propos</h1>
          </span>     
          {dropDownList.map((data) => (
            <DropDown key={data.id} dropdownWidth='DropdownAboutPage' dropdownHeight='dropDownListAbout' title={data.title} content={data.content}/>
            ))}   
        </div>
      </main>
    )
  }
}