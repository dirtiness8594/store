import React from 'react'

/**
 *
 * @param {*} param0
 * @returns
 */

function ProductImage({ image, alt }) {
  return (
    <figure className='product__photo'>
      <img className='product__image' src={image} alt={alt} />
    </figure>
  )
}

export default ProductImage
