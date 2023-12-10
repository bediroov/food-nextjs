import React, { useState } from 'react'
import Logo from './ui/Logo'
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import Search from './ui/Search';
const Header = () => {


  const [search, setSearch] = useState(false);

  return (

    <>
      <div className="Header h-[5.5rem] bg-secondary ">
        <div className="container mx-auto text-white flex justify-around items-center h-full ">
          <Logo />
          <nav >
            <ul className='flex gap-x-5 ' >
              <li className='px-[5px] py-[10px] font-sans uppercase hover:text-primary cursor-pointer'><a href="#">Home</a></li>
              <li className='px-[5px] py-[10px]  font-sans uppercase hover:text-primary cursor-pointer'><a href="#">Menu</a></li>
              <li className='px-[5px] py-[10px]  font-sans uppercase hover:text-primary cursor-pointer'><a href="#">About</a></li>
              <li className='px-[5px] py-[10px]  font-sans uppercase hover:text-primary cursor-pointer'><a href="#">Book Table</a></li>
            </ul>
          </nav>
          <div className="user-option flex justify-evenly gap-x-5 items-center">
            <a className='hover:text-primary' href="#"><FaUserLarge /></a>
            <a className='hover:text-primary' href="#"><FaShoppingCart /></a>
            <button className='hover:text-primary' onClick={() => setSearch(true)} ><FaSearch /></button>
            <button className='btn-primary'>Order inline</button>
          </div>
        </div>

        <div className="box">
          {search &&
            <Search setSearch={setSearch} />
          }
        </div>

      </div>



    </>


  )
}

export default Header