import React from 'react'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

export default function Item({info}) {

  const nombre = useContext(CartContext)
  console.log ('Item', nombre)

  return (
    
  <div className="procontainer">
    <div div className="pro">
        <div className='colo'>
        <Link to={`/detalle/${info.id}`} >
        <img src={info.Image} alt=""  className="img" />
        </Link>
        </div>
        <div className="des">
            <h4 className='titulo'> {info.title} </h4>
            <span className="o"> ${info.price} </span>
        </div>
        <div class="carro">
          <a href="#"> <i class="bi bi-cart-plus"></i></a>
        </div>
      </div>
    </div>
  )
}


