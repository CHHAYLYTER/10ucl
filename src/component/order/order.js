import React from 'react'
import './order.css'

const FritOrder = ({boy}) => {
  return (
    <section class="popular" id="popular">
    	<div class="box-container">
    <div class="box">
        <a href="#" class="fas fa-heart"></a>
        <div class="image">
            <img src={boy.img} />
        </div>
        <div class="content">
            <h3>{boy.item}</h3>
            <div class="price">$40.00 <span>$50.00</span></div>
            <a href="#" class="btn">add to cart</a>
        </div>
    </div>
</div>

</section>
  )
}

export default FritOrder