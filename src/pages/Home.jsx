import React from 'react'
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import Products from '../components/Products'
import { fetchData } from "../utils/helpers";
import {useQuery} from "@tanstack/react-query"


function Home() {
    // const [allCategories,setAllCategories ] = useState();
    // const [topDeals,setTopDeals ] = useState();

    // useEffect(()=> {
    //     fetchData("category/all")
    //     .then(data => setAllCategories(data))

    //     fetchData("product/search?top_deals=true")
    //     .then(data => setTopDeals(data))
    // },[]);

    const {data:allCategories} = useQuery(["allCategories"],()=> fetchData('category/all'))
    const {data:topDeals} = useQuery(["topDeals"],()=> fetchData('product/search?topdeals=true'))
    
    

    return (
        <>
            <Hero />
            <Categories categories= {allCategories} />
            <Products products={topDeals} title={"Top Deals"}/>
        </>
    )
}

export default Home