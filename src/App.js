import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Announcement from './components/Announcement'
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

// TODO setup Redux
// TODO : Paganation
//TODO : breadcrumbs

function App() {
	const client = new QueryClient()

	return (
		<QueryClientProvider client={client} >
		<Router>
			<Announcement />
        	<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="category">
					<Route path=":categorySlug" element={<CategoryPage />}/>
					<Route path=":category/:productId" element={<ProductPage />} />	
					<Route path="topdeals/:productId" element={<ProductPage />} />
				</Route>				
			</Routes>
		</Router>
		</QueryClientProvider >
	);
}

export default App;
