import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

export default function Item({info}) {

  const nombre = useContext(CartContext)
  console.log ('Item', nombre)

  return (
    <Link to={`/detalle/${info.id}`}>
        <img src= {info.Image} alt="" />        
        <p>{info.title}</p>
    </Link>
  )
}
