import React from 'react'
import './button.css'

const FruitComponent = ({fruit}) => {
  return (
    <div className='fruit_container'>
      <img src={fruit?.img} className='img_shop'/>
      <div className='container_sleep'>
        <div className="container_text">
        <h5>{fruit.item}</h5>
        <p> $ {fruit.quantity}</p>
        </div>
        <div className="btn_last">
        <p>{fruit.btn}</p>
      </div>
  </div>
</div>
  )
}

export default FruitComponent