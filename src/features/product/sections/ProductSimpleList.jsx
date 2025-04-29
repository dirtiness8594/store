import React from 'react'

import PropTypes from 'prop-types'
import ProductList from './ProductList'

import '../../../styles/Main.scss'

/**
 *
 * @param {*} param0
 * @returns
 */

function ProductSimpleList({ products, title, additionalClass }) {
  return (
    <div
      className={`product__list${additionalClass ? ' ' + additionalClass : ''}`}
    >
      <div className='product__list__wrapper'>
        <h2 className='product__category'>{title}</h2>
        <div className='product__shelf product__shelf--simple'>
          {products.map((product, index) => (
            <ProductList key={index} index={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

ProductSimpleList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ).isRequired
}

export default ProductSimpleList
