import { Products } from './components/Products'
import { products as initialProducts } from './mooks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './context/cart'
import { Cart } from './components/Cart'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header></Header>
      <Cart></Cart>
      <Products products={filteredProducts}></Products>
      <Footer></Footer>
    </CartProvider>
  )
}

export default App
