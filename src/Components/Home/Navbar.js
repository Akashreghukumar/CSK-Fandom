import React from 'react'
import Logo from '../../assets/csklogo.png'
import {motion} from "framer-motion"
import { useNavigate,Link } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className="header">
      <div className="logosearch">
        <motion.img 
     initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
        className="logo" src={Logo} alt="logo" />
        <div >
        <input className='searchinput' type="text" placeholder="Search" />
        </div>
      </div>
      <div className="headerlinks">
        <ul  > <Link  className="headerlink" to="/">Home</Link></ul>
        <ul><Link  className="headerlink" to="/">Shop</Link></ul>
        <ul > <Link  className="headerlink" to="/team">Sqad</Link></ul>
        <ul ><Link  className="headerlink" to="/">About</Link></ul>
      </div>
    </div>
  );
}

export default Navbar