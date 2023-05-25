import './App.css'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useFilters } from './hooks/useFilters.jsx'
import { Header } from './components/Header.jsx'
import {Footer} from './components/Footer'
import { IS_DEVELOPMENT } from './config.js'
import {Cart} from "./components/Cart"
import { CartProvider } from './context/cart'



function App() {

  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)
  //FILTRAR IMPORTANTE



  return (
    <CartProvider>
    <Header/> 
    <Cart></Cart>
    <Products products={filteredProducts}></Products>
    {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
   
}

export default App
