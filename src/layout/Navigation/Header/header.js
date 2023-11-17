import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header class="header">

    <a href="" class="logo"> Wonderpass </a>
    
    <nav class="navbar">
        <a href="/">home</a>
        <a href="/about">About</a>
        <a href="/popular">Popular</a>
        <a href="/order">Order</a>
        <a href="/blogs">Blogs</a>
        <a href='/bobo'>Bobo</a>
    </nav>

</header>
  )
}

export default Header