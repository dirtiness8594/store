/**
 *
 *
 */

const Header = () => {
  return (
    <header className='checkout__header'>
      <div className='checkout__wrap'>
        <div className='header__wrapper'>
          <div className='header__bottom'>
            <div className='header__logo'>
              <span className='header__logo__icon'>orion sale</span>
              <h1 className='header__logo__title'>Vega sale</h1>
            </div>
            <nav className='header__nav'>
              <ul className='header__list'>
                <li className='header__item header__item--user'>
                  <a
                    href='/contact'
                    className='header__link header__link--phone'
                  >
                    +55 11 9999 9999
                    <span>support 24/7</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className='header__cta'></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
