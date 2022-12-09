import React from 'react'
import "./ProductCard.css"

export default function ProductCard(props) {  
return (
    <div className='product_card'>
        <img src={props.image} alt= "products images" className='product_image' />
        <div className='product_name'>{props.name}</div>
        <div className='product_cost'>{props.cost}</div>
    </div>
  )
}
