import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='cards'>
        <h2>Id:{props.id}</h2>
        <img src={props.image} alt="product-img" className='product-image' />
        <h3 className='product-title'>{props.title}</h3>
        <h3>Price: $ {props.price}</h3>
        <p className='product-desc'> {props.description} </p>
        <div className='product-btns'>
        <button className='btn'>Buy Now</button>
        <button className='btn'>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductCard