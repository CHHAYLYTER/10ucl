import React from 'react'
import './shop.css'
import { Shopdata } from '../../data/Shopdata'
import FruitComponent from '../../component/Button'

const Shop = () => {
  return (
    <div className='grid_shop'>
      {Shopdata.map((mom) => {
        return  (

          <FruitComponent fruit={mom} />
          
        )
      }
      )}
    </div>
  )
}

export default Shop
