import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'

import ProductCarousel from '../carousel'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

  // Não é necessário mais o estado products ou useEffect

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
            {productsArray.length > 0 ? (
              productsArray.map((product, index) => (
                <ProductCarousel key={index} product={product} />
              ))
            ) : (
              <p>No products available</p> // Caso não haja produtos, exibimos uma mensagem no carrossel também
            )}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ProductShelfCarousel
