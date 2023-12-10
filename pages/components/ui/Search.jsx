import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from './Title';
import { IoIosCloseCircleOutline } from "react-icons/io";
import Image from 'next/image';

const Search = ({ setSearch }) => {


    return (
        <div className='fixed top-0 left-0 w-screen h-screen  z-50

    after: content-[""] after:w-screen after:h-screen after:bg-white  after:absolute after:top-0  
    grid place-content-center after:opacity-50
      
    '>
            <OutsideClickHandler onOutsideClick={() => setSearch(false)}>


                <div className="div w-full h-full grid place-content-center">
                    <div className="box relative z-20  md:w-[600px] sm:w-[500px] w-[300px] bg-white border-4 p-10 rounded-3xl ">
                        <Title addclass="text-[50px] flex items-center justify-center "  >Search</Title>
                        <input type="text" placeholder='Search....' className='w-full uppercase my-5' />

                        <ul >
                            <li className=' flex justify-between items-center hover:bg-primary transition-all' >
                                <div className="div">
                                    <Image  src="/images/f1.png" alt="" width={48} height={48}  />
                                </div>
                                <span className='font-bold'>salam</span>
                                <span className='font-bold'>10$</span>
                            </li>

                            <li className=' flex justify-between items-center hover:bg-primary'>
                                <div className="div">
                                    <Image src="/images/f1.png" alt="" width={48} height={48}/>
                                </div>
                                <span className='font-bold'>salam</span>
                                <span className='font-bold'>10$</span>
                            </li>

                            <li className=' flex justify-between items-center hover:bg-primary'>
                                <div className="div">
                                    <Image  src="/images/f1.png" alt="" width={48} height={48} />
                                </div>
                                <span className='font-bold'>salam</span>
                                <span className='font-bold'>10$</span>
                            </li>

                        </ul>

                        <div width={30} height={30} className="icon absolute top-5 right-5">
                           <button onClick={()=>setSearch(false)}> <IoIosCloseCircleOutline size={30} className='text-secondary cursor-pointer hover:text-primary' /></button>
                        </div>

                    </div>
                </div>


            </OutsideClickHandler>
        </div>
    )
}

export default Search