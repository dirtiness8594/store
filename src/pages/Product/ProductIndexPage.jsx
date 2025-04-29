import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageGallery from 'react-image-gallery'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Single from '../../components/Banner/Sections/Single'
import ProductDescription from '../../components/Product/Sections/ProductDescription'
import ProductCharacteristics from '../../components/Product/Sections/ProductCharacteristics'
import Sku from '../../components/Product/Component/Sku'
import Tickets from '../../components/Product/Component/Tickets'
import Freight from '../../components/Product/Component/Freight'
import Warnings from '../../components/Product/Component/Warnings'
import ProductDetailsIndex from '../../components/Product/Shelf/Product/ProductDetailsIndex'
import ProductReview from '../../components/Product/Sections/ProductReview'
import ProductQuestionAds from '../../components/Product/Sections/ProductQuestionAds'
import Amount from '../../components/Product/Component/Amount'
import Finalization from '../../components/Product/Component/Finalization'

import { getProductData } from '../../api'
import { generateBreadcrumb } from '/src/utils/productUtils'

import 'react-tabs/style/react-tabs.css'

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
        <div className='product__top'>
          <div className='product__wrap'>
            <section className='product__zoom'>
              <Breadcrumb
                style='breadcrumb--product'
                paths={
                  productData && productData.info && productData.category
                    ? generateBreadcrumb(productData.info, productData.category)
                    : []
                }
              />
              <ImageGallery
                items={images}
                showNav={false}
                thumbnailPosition={'bottom'}
                showThumbnails={false}
                showFullscreenButton={false}
                slideDuration={400}
                showPlayButton={false}
              />
            </section>
            <section className='product__about'>
              <div className='product__tech'>
                <ProductDetailsIndex
                  price={productData?.price}
                  name={productData?.name}
                  description={productData?.fullName}
                  rate={{
                    amount: productData?.reviews.amount,
                    average: productData?.reviews.average
                  }}
                />
                <Sku />
                <Freight freight={productData?.delivery} />
                <Tickets tickets={productData?.ticket} />
                <Amount amount={productData?.stock} skus={productData?.skus} />
                <Finalization />
                <Warnings />
              </div>
            </section>
          </div>
        </div>
        <div className='product__bottom'>
          <ProductCharacteristics
            characteristics={productData?.characteristics}
          />
          <ProductDescription data={productData?.details} />
          <ProductQuestionAds data={productData?.questions} />
          <ProductReview data={productData?.reviews} />
        </div>
        <Single banner={productData?.bannerFooter} />
    </div>
  )
}

export default ProductIndexPage
