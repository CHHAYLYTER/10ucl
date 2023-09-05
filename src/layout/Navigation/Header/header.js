import React from 'react'
//styles
import "./header.css"

const Header = () => {
  return (
    <header className='navigation_container'>
      <a href="/" className='logo'>WONDERPASS</a>
      <nav className="navbar">
        <a href="/">home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About Us</a>
        <a href="/blog">Blog</a>
      </nav>
      <button class="button button1">Login</button>
    </header>
  )
}

export default Header