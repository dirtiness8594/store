import React from 'react'

import '../../styles/Main.scss'

import { footerPages } from '../../config'

/**
 *
 * @returns
 */

function Footer() {
  const firstSections = footerPages.filter((item) =>
    item.hasOwnProperty('title')
  )
  const lastSectionWithoutTitle = footerPages
    .filter((section) => !section.title)
    .pop()

  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__pages'>
          {firstSections.map((section, index) => {
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
          })}
        </div>
        <div className='footer__content'>
          <p className='footer__text'>Copyright © 2023</p>
          <ul className='footer__list'>
            {[lastSectionWithoutTitle].map((section, index) => {
              return (
                <React.Fragment key={index}>
                  {section.pages.map((page, index) => {
                    return (
                      <li className='footer__item' key={index}>
                        <a href={page.link} className='footer__link'>
                          {page.name}
                        </a>
                      </li>
                    )
                  })}
                </React.Fragment>
              )
            })}
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
