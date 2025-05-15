import React from 'react'

/**
 *
 * @param {*} param0
 * @returns
 */

function ProductImage({ image, alt }) {

  console.log("Image: ",image)


  return (
    <figure className='product__photo'>
      <img className='product__image' src={image[0]} alt={alt} />
    </figure>
  )
}

export default ProductImage
