import React from 'react'
import FritOrder from '../../component/order/order'
import { Shopdata } from '../../data/Shopdata'

const order = () => {
  return (
    <div>
        {Shopdata.map((Fruit) =>{
            return (
                <FritOrder boy={Fruit} />
            )
        })}
    </div>
  )
}

export default order
