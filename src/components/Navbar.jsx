import React, { useState } from 'react';
import { HiMenuAlt2, HiX, HiOutlineShoppingCart } from 'react-icons/hi'
import { banners } from '../data';
import {Link} from 'react-router-dom';

function Navbar() {
    const [closeMenu, setCloseMenu] = useState(true)

    const handleClose = () => {
        setCloseMenu(true);
    }


    return (
        <nav className='bg-[#570DF8] text-white relative z-10 '>
            {/* Wrapper */}
            <div className = 'flex items-center justify-between  py-2 container'>
                {/* Menu */}
                <div className = 'flex items-center gap-2'>
                    <HiMenuAlt2 className='text-3xl' onClick={ ()=>setCloseMenu(false) }/>
                    <Link to='/'>
                        <h2 className = 'text-xl'>SquareBox.</h2>
                    </Link>
                         
                </div>

                <div className='flex items-center gap-2'>
                    <h3>Register</h3>
                    <h3>Login</h3>
                    <div className="indicator relative">
                        <div className="absolute bg-teal-200 text-sm text-black w-6 h-6 rounded-full pt-[0.9px] top-[-5px] left-[15px]">
                            <p className='text-center'>2</p>     
                        </div> 
                        <HiOutlineShoppingCart className='text-3xl'/>
                    </div>
                </div>
            </div>

            {/* mask the menu */}
            <div className =  {`${closeMenu ? "hidden " : "absolute bg-black opacity-50" }  z-20 h-screen w-screen top-0`}>

            </div>

            {/* Menu Item */}
            <div className={`${closeMenu ? 'hidden':""} 
                absolute h-screen w-[80vw] top-0 z-30 bg-[#570DF8] p-2
                opacity-90 
            `}>
                <div className='flex flex-col'>
                    <div className='flex justify-end'>
                        <HiX className='text-2xl cursor-pointer' onClick={handleClose}/>
                    </div>

                    <div className='mt-10'>
                        {
                            banners.map ((item) => (
                                <div key = { item.id } 
                                    className='px-6 py-2'>
                                    <h4 className = "">{item.url}</h4>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </nav>


    )
}

export default Navbar