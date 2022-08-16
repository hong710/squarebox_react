import React from 'react'
import {cases, cpu, gc, mb,monitors, ram, ssd, ups} from '../assets/banner';
function Hero() {
    //BUG:
    return (
        <main className="grid grid-cols-3 gap-2 xl:container mt-2">
            <div className="md:col-span-2 col-span-3">  
                <img className='w-full h-full' 
                src={ssd} alt="" />
            </div>
            <div className="md:col-span-1 ">
                <div className="md:grid gap-2 flex ">
                    <img className="bg-orange-300 w-full " src={cases} alt="Rackcdn" />
                    <img className="bg-orange-300 w-full " src={monitors} alt="Rackcdn" />
                    <img className="bg-orange-300 w-full " src={ram} alt="Rackcdn" />
                   
                </div>
                
            </div>

        </main>
    )
}

export default Hero