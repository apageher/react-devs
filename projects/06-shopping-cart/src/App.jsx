import { Products } from './components/Products'
import { products as initialProducts } from './mooks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header></Header>
      <Products products={filteredProducts}></Products>
      <Footer></Footer>
    </>
  )
}

export default App
