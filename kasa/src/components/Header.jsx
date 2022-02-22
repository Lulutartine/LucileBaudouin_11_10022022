import { Component } from "react"
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/kasa_logo.svg'
import '../styles/components/Header.css'

/**
 * Renders Header on each page
 * @function Header
 * @extends Component
 * @returns {JSX}
 */
export default class Header extends Component {
    render() { 
      return (
        <header className='header'>
            <Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>
            <nav>
                <ul>
                    <li><NavLink className="navlink" exact to="/">Accueil</NavLink></li>

                    <li><NavLink className="navlink" to="/about">A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
      )
    }
  }