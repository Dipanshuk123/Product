import React from 'react'
import { fetchProducts } from '../Redux/redux'
import {useSelector, useDispatch} from "react-redux"
import ProductCard from './ProductCard'

const Products = () => {
  const dispatch = useDispatch()
  const output = useSelector((data) => {
    return data.product.products;
  });

  
  const sendData = () => {
    dispatch(fetchProducts())
  }


  return (
    <div>
        {sendData()}
        <div className='card-container'>
        {
          output.map((item,i) => {
            return <ProductCard key={i} id={item.id} title={item.title} description={item.description} price={item.price} image={item.image} />
          })
        }
        </div>
    </div>
  )
}

export default Products