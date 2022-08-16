import React from 'react'
import {strLimit} from '../utils/helpers';
import {Link, useLocation} from 'react-router-dom'

function Products({products, title="products"}) {
    const location = useLocation()
    return (
        <div className="container mt-10">
            <h2 className="title">{title}</h2>
            <div>
                <div className="grid grid-cols-6 gap-x-4 gap-y-10">
                    {
                        products?.map(product => (
                            <div className='border border-gray-300 bg-white drop-shadow-md p-4' key={product._id}>
                                <Link to={location.pathname ==='/'? `category/topdeals/${product._id}`: `${product._id}`} >
                                    <img  className= "w-full" src={product.images[0]} alt={product.title} />
                                </Link>
                                <h4 className="text-sm">{strLimit(product.title,50)}</h4>
                                <h4 className="text-red-500 font-bold">$ {product.c_price}</h4>
                                <h4 className='text-sm'>Available: {product.quantity} units </h4>                        
                            </div>
                        )
                    )}                 

                </div>

            </div>

        </div>
    )
}

export default Products