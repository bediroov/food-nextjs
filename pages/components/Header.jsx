import React from 'react'
import Logo from './ui/Logo'
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (

<div className="Header h-[5.5rem] bg-secondary ">
   <div className="container mx-auto text-white flex justify-around items-center h-full ">
   <Logo/>
     <nav >
      <ul className='flex gap-x-5 ' >
        <li className='px-[5px] py-[10px] font-sans uppercase hover:text-primary cursor-pointer'><a href="#">Home</a></li>
        <li className='px-[5px] py-[10px]  font-sans uppercase hover:text-primary cursor-pointer'><a href="#">Menu</a></li>
        <li className='px-[5px] py-[10px]  font-sans uppercase hover:text-primary cursor-pointer'><a href="#">About</a></li>
        <li className='px-[5px] py-[10px]  font-sans uppercase hover:text-primary cursor-pointer'><a href="#">Book Table</a></li>
      </ul>
     </nav>
   <div className="user-option flex justify-evenly gap-x-5 items-center">
    <a href="#"><FaUserLarge /></a>
    <a href="#"><FaShoppingCart/></a>
    <a href="#"><FaSearch /></a>
    <a href="#"><button className='btn-primary'>Order inline</button></a>
   </div>
   </div>
    </div>



  )
}

export default Header