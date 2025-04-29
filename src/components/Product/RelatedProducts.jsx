import React from 'react'

/**
 *
 * @param {*} param0
 * @returns
 */

function RelatedProduct({ image, name, price }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
}

export default RelatedProduct
