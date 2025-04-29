import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'

import ProductCarousel from './Product/ProductCarousel'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

/**
 *
 * @param {*} param0
 * @returns
 */

function ProductShelfCarousel({ section }) {
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

  if (!section || !section.products || section.products.length === 0) {
    return null
  }

  return (
    <div className='product__list'>
      <div className='product__list__wrapper'>
        <h2 className='product__category'>{section.name}</h2>
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
            {section.products.map((product, index) => (
              <ProductCarousel key={index} index={index} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ProductShelfCarousel
