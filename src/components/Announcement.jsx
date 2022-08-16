import {MdClose} from 'react-icons/md';
import React,{useState} from 'react';
function Announcement() {
  
    const [announcement, setAnnouncement] = useState("flex")

    const handleClick =()=>{
        setAnnouncement("hidden")
    }


    return (
    <div className={
        `${announcement} bg-teal-500 font-[400] justify-center py-2 items-center `
    } >
        <h2>
            Super Deal ! Free Shipping on Order Over $50
        </h2>
        <MdClose className='ml-2 cursor-pointer text-xl' onClick= {handleClick}/>
    </div>
  )
}

export default Announcement