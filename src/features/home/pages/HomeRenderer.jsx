import React, { useState, useEffect } from 'react'

import { homeOrder } from '../../../config'
import { mainPageSections } from '../../../config'
import { mainPageBanners } from '../../../config'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Banner from '../../../features/banner/Banner'

import Shelf from '../../../features/product/sections/Shelf'

import { getSections } from '../services/homeAPI';

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

  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("¨¨¨¨¨¨", sections)

  useEffect(() => {
    getSections()
      .then(setSections)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className='home-page'>

      {sections && sections.length > 0 ? (
        sections
          .sort((a, b) => a.order - b.order)
          .map((section, index) => {
            const { type, itens } = section;

            const isShelf = type === 20 || type === 21;
            const isBanner = type >= 10 && type <= 14;
            const isCategory = type === 30;

            return (
              <React.Fragment key={index}>
                {isShelf ? (
                  <Shelf products={itens} type={type} section={section} />
                ) : isBanner ? (
                  <>Banner</>
                  // <Banner banners={itens} type={type} section={section} />
                ) : isCategory ? (
                  <CategorySection section={section} />
                ) : null}
              </React.Fragment>
            );
          })
      ) : null}







      {/* {sortedSectionsData
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
        : null} */}
    </div>
  )
}

export default HomeRenderer
