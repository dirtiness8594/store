import React, { useState, useEffect } from 'react'

import { footerPages } from '../../../config'
import "../../styles/Footer.scss"
import { getFooterData } from '../../services/sharedAPI';
/**
 *
 * @returns
*/

function Footer() {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    getFooterData().then(data => {
      setFooterData(data);
    });
  }, []);

    useEffect(() => {
      const fetchFooterPages = async () => {
        try {
          const result = await getFooterData()
          setFooterData(result)
        } catch (e) {
          console.error('Failed to fetch banners:', e)
        }
      }
  
      if (true) {
        fetchFooterPages()
      }
    }, [])

  // console.log("Footer", footerPages)
  // const firstSections = footerData.filter((item) =>
  //   item.hasOwnProperty('title')
  // )
  // const lastSectionWithoutTitle = footerData
  //   .filter((section) => !section.title)
  //   .pop()

  console.log("Fuuter ", footerData)

  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__pages'>
          {/* {firstSections.map((section, index) => {
            return (
              <ul className='footer__pages__section' key={index}>
                <li className='footer__pages__name'>
                  <a
                    className='footer__pages__link footer__pages__link--name'
                    href=''
                  >
                    {section.title}
                  </a>
                </li>
                {section.pages.map((page, pageIndex) => {
                  return (
                    <li className='footer__pages__name' key={pageIndex}>
                      <a
                        className='footer__pages__link'
                        href={page.link}
                      >
                        {page.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            )
          })} */}
        </div>
        <div className='footer__content'>
          <p className='footer__text'>Copyright © 2023</p>
          <ul className='footer__list'>
          {/* {lastSectionWithoutTitle && lastSectionWithoutTitle.pages && (
  <>
    {lastSectionWithoutTitle.pages.map((page, index) => (
      <li className='footer__item' key={index}>
        <a href={page.link} className='footer__link'>
          {page.name}
        </a>
      </li>
    ))}
  </>
)} */}

            <li className='footer__item footer__item--powered'>
              Made with :heart: by Isaiah
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
