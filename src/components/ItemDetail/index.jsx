import React from 'react'
import './itemDetail.css'
import ItemCount from '../ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ItemDetail({data}) {
  const [goToCart,setGoToCart] = useState(false)

  const onAdd = (quantity) => {
    setGoToCart(true)
}

  return (
    <div className='container'>
            <img className='detail_image' src={data.Image} alt="" />
            <div className='content'>
                <h1>{data.title}</h1>
                {
                  goToCart
                    ? <Link to={'/cart'}> Terminar compra</Link>
                    :<ItemCount initial={1} stock={5} onAdd={onAdd} />
                }
            </div>
    </div>
  )
}
