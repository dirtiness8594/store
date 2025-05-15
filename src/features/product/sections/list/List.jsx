import React from 'react'

import PropTypes from 'prop-types'
import Listing from '../../components/listing'


/**
 *
 * @param {*} param0
 * @returns
 */

function List({ productsArray, title }) {
  return (
    <div
      className={`product__list`}
    >
      <div className='product__list__wrapper'>
        <h2 className='product__category'>{title}</h2>
        <div className='product__shelf product__shelf--simple'>
        {productsArray && productsArray.length > 0 ? (
            productsArray.map((product, index) => (
              <Listing key={index} product={product} />
            ))
          ) : (
            <p>No products available</p> // Caso não haja produtos, podemos exibir uma mensagem.
          )}
        </div>
      </div>
    </div> 
  )
}

List.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ).isRequired
}

export default List
