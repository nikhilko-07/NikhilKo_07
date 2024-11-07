import React from 'react'
import Style from './Navbar.module.css'
import { Link } from 'react-router-dom';
import Logo from './Logo.png'
const Navbar = () => {
  return (
    <div  className={`${Style.container}`}>
        <div className='container'>
            <div className='row' style={{display:"flex",alignItems:"center"}}>
            <div className='col-6'><img width={80} src={Logo} /> </div>
            <div className={`${Style.navlinks} col-6`}>
                <li> <Link  style={{textDecoration:"none",color:"white"}} to="/">Home</Link></li>
                <li> <Link  style={{textDecoration:"none",color:"white"}} to="/about">About</Link></li>
                <li> <Link  style={{textDecoration:"none",color:"white"}} to="/projects">Projects</Link></li>
                <li> <Link  style={{textDecoration:"none",color:"white"}} to="/contact">Contact</Link></li>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar