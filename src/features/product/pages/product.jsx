import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import Single from '../../banner/sections/Single'
import { getProductData } from '../../../api'

import 'react-tabs/style/react-tabs.css'
import ProductTop from '../sections/productTop'
import ProductBottom from '../sections/productBottom'

import "../styles/Product.scss"


/**
 *
 * @returns
 */

function ProductIndexPage() {
  const { id } = useParams()
  const [productData, setProductData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductData({
          productId: id
        })
        setProductData(data)

        console.log('!!!', data)
      } catch (error) {
        console.error('Ocorreu um erro:', error)
      }
    }
    fetchData()
  }, [id])

  const images = [
    {
      original: 'https://via.placeholder.com/900x900',
      thumbnail: 'https://picsum.photos/id/1018/250/150/'
    },
    {
      original: 'https://via.placeholder.com/900x900',
      thumbnail: 'https://picsum.photos/id/1015/250/150/'
    },
    {
      original: 'https://via.placeholder.com/900x900',
      thumbnail: 'https://picsum.photos/id/1019/250/150/'
    }
  ]

  return (
    <div className='product'>
        <ProductTop productData={productData} images={productData?.images} />
        <ProductBottom productData={productData} />
        <Single banner={productData?.bannerFooter} />
    </div>
  )
}

export default ProductIndexPage
