import React ,{useState} from 'react'
import CartWidget from '../CartWidget'
import {NavLink} from 'react-router-dom'
import {Badge, Dropdown} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'



export default function NavBar() {

  const [fix,setFix] = useState(false)
  function setFixed(){
    if (window.scrollY >= 80) {
      setFix(true)
    } else{
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed)
  
  return (
    <nav className={ fix ? 'nav fixed' : 'nav'}>
      <div>
        <NavLink to='/' className='logo' > h </NavLink>
      </div>
      <ul className="navbar">
        <li className='link'>
        <NavLink to='/' className='a'> Ropa   </NavLink> 
        <NavLink to='/categoria/vestidos' className='a' > Vestidos </NavLink>   
        <NavLink to='/categoria/combos' className='a' > Combos </NavLink>
        <NavLink to='/tips' className='a' > Tips </NavLink>
        </li>
        <li className='link' >
        {/* <NavLink to={'/cart'} className='a' > */}
        <Dropdown alignRight>
          <Dropdown.Toggle variant="sucess">
            <FaShoppingCart color="black" fontSize="25px"/>
            {/* <i className="bi bi-cart3"></i>  */}
            <Badge>{10}</Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{minWidth: 370}}>
            <span style={{padding:10}}> Cart is Empty! </span>
          </Dropdown.Menu>
        </Dropdown> 
          <CartWidget/>
        {/* </NavLink> */}
        </li>
      </ul>
    </nav>


  )
}

