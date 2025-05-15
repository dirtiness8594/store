import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'

import CarouselListing from '../../components/carousel'
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
    infinite: true,
    dots: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000  
  }

  const prevSlide = () => {
    slider.current.slickPrev()
  }

  const nextSlide = () => {
    slider.current.slickNext()
  }

  if (!productsArray || productsArray.length === 0) {
    return null
  }

  // console.log("XXX", productsArray)

  return (
    <div className='product__list'>
      <div className='product__list__wrapper'>
        {title && <h2 className='product__category'>{title}</h2>}
        <div className='product__dots' style={{ display: '' }}>
          <button className='product__arrow' onClick={prevSlide}>
            <AiOutlineArrowLeft className='icon product__arrow__icon' />
          </button>
          <button className='product__arrow' onClick={nextSlide}>
            <AiOutlineArrowRight className='icon product__arrow__icon' />
          </button>
        </div>
        <div className='product__shelf product__shelf--carousel'>
          <Slider ref={slider} {...sliderSettings}>
          {productsArray && productsArray.length > 0 ? (
            productsArray.map((product, index) => (
              <CarouselListing key={index} product={product} />
            ))
          ) : (
            <p>No products available</p> // Caso não haja produtos, podemos exibir uma mensagem.
          )}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ProductShelfCarousel
