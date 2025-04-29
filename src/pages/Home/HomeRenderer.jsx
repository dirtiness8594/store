import React from 'react'

import { homeOrder } from '../../config'
import { mainPageSections } from '../../config'
import { mainPageBanners } from '../../config'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Shelf from '../../components/Product/Shelf'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Banner from '../../components/Banner/Banner'

/**
 *
 * @returns
 */

function HomeRenderer() {
  const combinedSections = [...mainPageSections, ...mainPageBanners]
  const homeOrderSections = homeOrder.map((item) => item.sectionName)

  const sortedSectionsData = combinedSections.sort((a, b) => {
    const orderA = homeOrderSections.indexOf(a.sectionName)
    const orderB = homeOrderSections.indexOf(b.sectionName)

    return orderA - orderB
  })

  return (
    <div className='home-page'>
      {sortedSectionsData
        ? sortedSectionsData.map((section, index) => {
            return (
              <React.Fragment key={index}>
                {section.hasOwnProperty('products') ? (
                  <Shelf section={section} />
                ) : (
                  <Banner banner={section} />
                )}
              </React.Fragment>
            )
          })
        : null}
    </div>
  )
}

export default HomeRenderer
