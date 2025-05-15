import React, { useState, useEffect } from 'react'

import ProductShelfCarousel from './ProductShelfCarousel'
import ProductSimpleList from './ProductSimpleList'
import { getProductsByIds } from '../services/productAPI'

/**
 * @param {*} param0
 * @returns
 */
const Shelf = ({ productsIDArray, type, section }) => {
  const [productsArray, setProductsArray] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProductsByIds(productsIDArray)
        setProductsArray(result)
      } catch (e) {
        console.error('Failed to fetch products:', e)
      }
    }

    if (productsIDArray?.length > 0) {
      fetchProducts()
    }
  }, [productsIDArray])

  if (!productsArray || productsArray.length === 0) {
    return null // Ou você pode retornar um loader ou fallback visual aqui
  }

  return (
    <>
      {type === 21 ? (
        <ProductShelfCarousel
          productsArray={productsArray}
          title={section?.name}
        />
      ) : (
        <ProductSimpleList
          productsArray={productsArray}
          title={section?.name}
        />
      )}
    </>
  )
}

export default Shelf
