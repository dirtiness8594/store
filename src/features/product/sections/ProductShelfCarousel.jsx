import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'

import ProductCarousel from './ProductCarousel'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { getProductsByIds  } from '../services/productAPI'

function ProductShelfCarousel({ productsArray, title }) {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const slider = React.createRef()

  const sliderSettings = {
    slidesToShow: isMobile ? 2 : 5,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    dots: false,
    centerMode: false
  }

  const prevSlide = () => {
    slider.current.slickPrev()
  }

  const nextSlide = () => {
    slider.current.slickNext()
  }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProductsByIds(productsArray);
        setProducts(result);
      } catch (e) {
        console.error('Failed to fetch products:', e);
      }
    };

    fetchProducts();
  }, [productsArray]);

  console.log("))))))))", products)

  if (!productsArray || productsArray.length === 0) {
    return null
  }

  return (
    <div className='product__list'>
      <div className='product__list__wrapper'>
        {title && <h2 className='product__category'>{title}</h2>}
        <div className='product__dots' style={{ display: 'none' }}>
          <button className='product__arrow' onClick={prevSlide}>
            <AiOutlineArrowLeft className='icon product__arrow__icon' />
          </button>
          <button className='product__arrow' onClick={nextSlide}>
            <AiOutlineArrowRight className='icon product__arrow__icon' />
          </button>
        </div>
        <div className='product__shelf product__shelf--carousel'>
          <Slider ref={slider} {...sliderSettings}>
            {products.map((product, index) => (
              <ProductCarousel key={index} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ProductShelfCarousel
