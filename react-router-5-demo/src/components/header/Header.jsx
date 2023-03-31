import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';

const Header = () => {
  return (
    <>
        <h1 className="main-heading">Contact Manager</h1>
        <ul className="menu">
        <li>
            <Link to="/" className="menu-item">Home</Link>
        </li>
        <li>
            <Link to="/addContact" className="menu-item">Add Contact</Link>
        </li>
    </ul>
    </>
  )
}

export default Header