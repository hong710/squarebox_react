import React from 'react'
import { useParams } from "react-router-dom";
import Products from '../components/Products';
import {banners} from "../data";
import {useQuery} from "@tanstack/react-query"
import {fetchData} from "../utils/helpers"

function CategoryPage() {
	const { categorySlug} = useParams();
	

	//get products matching category params
	const{data:products} = useQuery(["products"], ()=>fetchData(`product/search?category=${categorySlug}`))
	
	
	return (
		<div className="container">
			<div className="mt-5">
				{banners
					.filter((item) => (item.url === categorySlug))
					.map((item) => (
						<img key={item.id} src={item.banner} alt={item.title}
							className="w-full" />
					))}
			</div>
			{/* Products */}
			<Products products={products} />
		</div>
	)
}

export default CategoryPage