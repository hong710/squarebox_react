import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import {MdShoppingCart} from 'react-icons/md'
import Rating from "../components/Rating";
import { fetchData } from "../utils/helpers";
import {
	Breadcrumb,BreadcrumbItem,BreadcrumbLink,
	Tabs, TabList, TabPanels, Tab, TabPanel,
	Button
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'


function ProductPage() {

	const { productId } = useParams()
	const [rate, onRating] = useState()
	const [product,setProduct] = useState()

	useEffect(()=> {
		fetchData(`product/${productId}`)
		.then(data => setProduct(data))
	},[])

	return (
		<div className="container">
			<Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
				<BreadcrumbItem>
					<BreadcrumbLink href='#'>Home</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href='#'>About</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href='#'>Contact</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			{console.log(product)}
			{product&& (
					<>
						<div className='grid grid-cols-3 gap-x-4'>
							<div className='bg-white'>
								<img src={product.images[0]} alt={product.title} />
							</div>

							<div className='col-span-2 bg-white'>
								<h2 className='text-xl font-[500]'>
									{product.title}
								</h2>

								<div className='flex items-center my-3'>
									<h2 className='text-sm line-through mr-2'>
										${product.o_price}
									</h2>
									<h2 className='text-base text-red-500'>SAVE $ {(product.o_price - product.c_price).toFixed(2)}</h2>

								</div>
								

								<h2 className='text-4xl font-bold text-red-500'>
									${product.c_price}
								</h2>

								<Button leftIcon={<MdShoppingCart />} colorScheme='yellow' variant='solid' my="5">
    								Add To Cart
								</Button> 
							</div>
						</div>
						<Tabs variant='enclosed-colored'>
							<TabList>
								<Tab> 
									<h3 className="">Description</h3>
								</Tab>
								<Tab>Specs</Tab>
								<Tab>Reviews</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									<h2 className="text-xl font-bold mt-5 mb-2">Overview</h2>
									<div className="mb-5 text-sm">
										<p>SKU: {product.specs[0].value}</p>
										<p>UPC:  {product.specs[2].value}</p>
									</div>
						
									<p>{product.description}</p>
									<h2 className="text-lg font-bold my-3">Support Resources</h2>
									<p>
										<span className="font-[500]">Return Policy:</span> May be returned within 30 days of purchase* 
									</p>
									<p>
										<span className="font-[500]">Vendor Warranty:</span> 5 year Limited 
									</p>
									<p>
										<span className="font-[500]">Website:</span> http://www.samsung.com/us/support/# 
									</p>
								</TabPanel>
								<TabPanel>Specs</TabPanel>
								<TabPanel>
									{rate}
									<Rating onRating={onRating}/>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</>
				)}
			
		</div>
	)
}
export default ProductPage