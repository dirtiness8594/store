import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

/**
 *
 *
 */

const Footer = () => {
  return (
    <footer className='checkout__footer'>
      <div className='checkout__footer__wrapper'>
        <div className='checkout__footer__logo'>
          <h1 className='checkout__footer__logo__title'>Vega Sale</h1>
        </div>
        <div className='checkout__footer__contact'>
          <p>contato@vegasale.com</p>
          <p>Rua Orion, 123 - São Paulo, Brasil</p>
        </div>
        <div className='checkout__footer__social'>
          <ul className='checkout__footer__social__list'>
            <li className='checkout__footer__social__item'>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebookF />
              </a>
            </li>
            <li className='checkout__footer__social__item'>
              <a
                href='https://www.twitter.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </a>
            </li>
            <li className='checkout__footer__social__item'>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
