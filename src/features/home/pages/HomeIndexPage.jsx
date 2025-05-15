import React from 'react'
import HomeRenderer from './HomeRenderer'
import Categories from '../../banner/sections/Categories/Categories'

/**
 *
 * @returns
 */

function HomeIndexPage() {
  return (
    <div className='home-page'>
      <HomeRenderer />
      {/* <Categories /> */}
    </div>
  )
}

export default HomeIndexPage
