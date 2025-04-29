import React from 'react'

import ProductShelfCarousel from './ProductShelfCarousel'
import ProductSimpleList from './ProductSimpleList'

/**
 *
 * @param {*} param0
 * @returns
 */

const Shelf = ({ section }) => {
  return (
    <>
      {section !== undefined
        ? [section].map((section, index) => {
            return (
              <React.Fragment key={index}>
                {section.type === 'carousel' ? (
                  <ProductShelfCarousel section={section} />
                ) : (
                  <ProductSimpleList
                    products={section.products}
                    title={section.name}
                  />
                )}
              </React.Fragment>
            )
          })
        : null}
    </>
  )
}

export default Shelf
