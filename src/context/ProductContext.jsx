import { createContext, useState, useEffect, useContext } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/products`)
        if (!res.ok) throw new Error('Failed to fetch products')

        const data = await res.json()
        setProducts(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => {
  return useContext(ProductContext)
}
