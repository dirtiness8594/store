import React from 'react'

import ProductShelfCarousel from './ProductShelfCarousel'
import ProductSimpleList from './ProductSimpleList'

/**
 *
 * @param {*} param0
 * @returns
 */

const Shelf = ({ products, type, section }) => {
  return (
    <>
      {type === 21 ? (
        <ProductShelfCarousel productsArray={products} title={section.name} />
      ) : (
        <ProductSimpleList products={products} title={section.name} />
      )}
    </>
  );
};

export default Shelf
