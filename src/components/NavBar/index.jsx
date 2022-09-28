import React from 'react'
import CartWidget from '../CartWidget'
import {NavLink} from 'react-router-dom'


export default function NavBar() {
  return (
    <div>
    <nav className='nav'>
      <div>
        <NavLink to='/' className='a' > Marca </NavLink>
      </div>
      <ul className="navbar">
        <li className='link'>
        <NavLink to='/' className='a'> Ropa   </NavLink> 
        <NavLink to='/categoria/vestidos' className='a' > Vestidos </NavLink>   
        <NavLink to='/categoria/combos' className='a' > Combos </NavLink>
        <NavLink to='/tips' className='a' > Tips </NavLink>
        </li>
        <li className='link' >
        <NavLink to={'/cart'} className='a' > 
          <CartWidget/>
        </NavLink>
        </li>
      </ul>
    </nav>
  </div>

  )
}

