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
    const fetchFooter = async () => {
      const data = await getFooterData();
      setFooterData(data);
    };

    fetchFooter();
  }, []);

  if (!footerData) return null

  const { logo, slogan, social_links = [], sections = [] } = footerData

  const mainSections = sections.slice(0, -1) // todas menos a última
  const helpSection = sections[sections.length - 1] 


  console.log("Fuuter ", footerData )

  return (
    <footer className='footer'>
      <div className='footer__wrapper'>

        {(logo || slogan) && (
          <div className="footer__brand">
            {logo && <img src={logo} alt="Logo" className="footer__logo" />}
            {slogan && <p className="footer__slogan">{slogan}</p>}
          </div>
        )}

        <div className='footer__pages'>
          {mainSections.map((section, index) => (
            <ul className='footer__pages__section' key={index}>
              {section.title && (
                <li className='footer__pages__name'>
                  <span className='footer__pages__link footer__pages__link--name'>
                    {section.title}
                  </span>
                </li>
              )}
              {section.pages?.map((page, pageIndex) => (
                <li className='footer__pages__name' key={pageIndex}>
                  <a className='footer__pages__link' href={page.link || '#'}>
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className='footer__content'>
          <p className='footer__text'>Copyright © {new Date().getFullYear()}</p>
          <ul className='footer__list'>
            {helpSection?.pages?.map((page, index) => (
              <li className='footer__item' key={index}>
                <a href={page.link || '#'} className='footer__link'>
                  {page.name}
                </a>
              </li>
            ))}

            <li className='footer__item footer__item--powered'>
              Made with ❤️ by Isaiah
            </li>
          </ul>
        </div>

        {social_links.length > 0 && (
          <div className="footer__social">
            <ul className="footer__social__list">
              {social_links.map((social, index) => (
                <li key={index} className="footer__social__item">
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer
