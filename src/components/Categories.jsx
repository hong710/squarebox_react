import React from 'react'
import { Link } from "react-router-dom";

function Categories({categories}) {
    return (
        <div className='container mt-10'>
            <h2 className="title" >Our Products</h2>
            <div className="grid grid-cols-8 gap-x-4 gap-y-10">
                {categories?.map((item)=>(
                    <div className="drop-shadow-md" key = {item._id}>
                        <Link to={`category/${item.slug}`} >
                            <img src={item.img} alt={item.title} />
                            <h3 className="uppercase text-center mt-2">
                                {item.title}
                            </h3>
                        </Link>
                    </div>
                ))}       
            </div>

        </div>
    )
}

export default Categories