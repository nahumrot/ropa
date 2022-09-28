import React from 'react'
import Item from '../Item'


export default function ItemList({data= []}) {
  return (
    data.map(electro => <Item key = {electro.id} info={electro} />)
  )
}
