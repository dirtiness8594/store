import React from 'react'

import Slider from 'react-slick'
import HighlightAdvantadges from './HighlightAdvantadges'
import Single from "../../features/banner/sections/Single"
import { FaAngleDown } from 'react-icons/fa'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

/**
 *
 * @returns
 */

function Highlight({ bannerArray }) {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    dots: true,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000
  }

  if ( !bannerArray || bannerArray.length === 0) {
    return null
  }

  return (
    <div className="banner__head">
      <div className='banner__wrapper'>
        <div className='banner__tip'>
          <FaAngleDown className='banner__tip__icon' />
        </div>
        <Slider {...sliderSettings}>
          {bannerArray.map((singleBanner, index) => (
            <Single banner={singleBanner} key={index} />
          ))}
        </Slider>

        <HighlightAdvantadges />
      </div>
    </div>
  )
}

export default Highlight
