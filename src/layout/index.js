import React, { Children } from 'react'
import Header from './Navigation/Header/header'

const Layout = ({children}) => {
  return (
    <div>

      <Header />

      <div>{children}</div>

    </div>
  )
}

export default Layout
