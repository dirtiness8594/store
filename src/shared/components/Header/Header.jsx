import React, { useState, useEffect } from "react";

import { FaSearch, FaAngleDown } from "react-icons/fa";
import { BiUserCircle, BiMapPin, BiSearch } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { FiMapPin, FiGlobe, FiDollarSign } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiKnockedOutStars, GiStarSwirl, GiGalaxy } from "react-icons/gi";
import { GrUpdate, GrMenu } from "react-icons/gr";

import { menuPages } from "../../../config";
import "../../styles/Header.scss";
import useAppStore from "../../../../store";
import QuickCart from "../../../features/cart/components/quickcart/QuickCart";

import { getHeaderData } from "../../services/sharedAPI"

/**
 *
 * @returns
 */

function Header() {
  const language = useAppStore((state) => state.language);
  const setLanguage = useAppStore((state) => state.setLanguage);

  const [ headerData, setHeaderData ] = useState(null)
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const fetchHeader = async () => {
      const data = await getHeaderData();
      setHeaderData(data);
    };

    fetchHeader();
  }, []);

  if (!headerData) return null;
  const { announcement_bar, logo, menu, slogan } = headerData;
  console.log("HEADE ", headerData)

  const cartItems = [
    {
      name: 'Fone Bluetooth',
      image: 'https://via.placeholder.com/100',
      price: 'R$ 199,00',
    },
    {
      name: 'Caixa JBL',
      image: 'https://via.placeholder.com/100',
      price: 'R$ 299,00',
    },
  ];


  return (
    <header className="header">

      {announcement_bar && (
        <div
          className="header__announcement"
          style={{
            backgroundColor: announcement_bar.background_color,
            color: announcement_bar.text_color,
            textAlign: "center",
            padding: "8px 0",
            display: "none"
          }}
        >
          {announcement_bar.message}
        </div>
      )}

      <div className="header__wrapper">
        <ul className="header__top">
          <li><a className="header__link header__link--top" href="#">Powered by</a></li>
          <li><FiMapPin className="header__top__icon" /><select className="header__select"><option>USA</option></select></li>
          <li>
            <FiGlobe className="header__top__icon" />
            <select className="header__select" onChange={(e) => setLanguage(e.target.value)} value={language}>
              <option value="pt">PT</option>
              <option value="en">ENG</option>
            </select>
          </li>
          <li><FiDollarSign className="header__top__icon" /><select className="header__select"><option>USD</option></select></li>
          <li><a className="header__link header__link--top" href="#">Customer service</a></li>
          <li><a className="header__link header__link--top" href="#">Sell on Vega</a></li>
        </ul>

        <div className="header__bottom">
          <div className="header__logo">
            {logo ? (
              <img src={logo} alt="Logo" className="header__logo__image" />
            ) : (
              <h1 className="header__logo__title">Minha Loja</h1>
            )}
          </div>

          <nav className="header__menu">
            <button className="header__menu__cep">
              <BiMapPin className="header__link__icon" />
              Informe seu CEP
            </button>

            <ul className="header__menu__list">
              <div className="header__menu__item">
                <li className="header__item">
                  <a href="#" className="header__link header__link--all">
                    <GrMenu className="header__link__icon" />
                    Ver todas as categorias
                  </a>
                </li>
              </div>

              {menu && menu.map((page, index) => (
                <div key={index} className="header__menu__item">
                  <li className="header__item">
                    <a href={page.url} className="header__link">
                      {page.name}
                    </a>
                  </li>
                  {page.subPages && (
                    <div className="header__submenu">
                      <ul className="header__submenu__list">
                        {page.subPages.map((sub, subIndex) => (
                          <li key={subIndex} className="header__submenu__item">
                            <a href={sub.url} className="header__submenu__anchor">
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </ul>

            <a className="header__menu__recent">
              <GrUpdate />
              Recém vistos
            </a>
          </nav>

          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item header__item--user">
                <div className="header__search">
                  <input type="text" className="header__input" placeholder="Digite sua busca" />
                  <a href="/search" className="header__link header__link--user">
                    <BiSearch className="header__link__icon header__link__icon--user" />
                  </a>
                </div>
              </li>
              <li className="header__item header__item--user">
                <a href="/login" className="header__link header__link--user">
                  <BiUserCircle className="header__link__icon header__link__icon--user" />
                </a>
              </li>
              <li className="header__item header__item--cart">
                <button onClick={() => setCartOpen(true)} className="header__link header__link--cart">
                  <AiOutlineShoppingCart className="header__link__icon header__link__icon--cart" />
                </button>
              </li>
            </ul>
            <button className="header__menumobile">
              <CiMenuBurger />
            </button>
          </nav>
        </div>

        {slogan && (
          <div className="header__cta">
            <p>{slogan}</p>
          </div>
        )}

        <QuickCart isOpen={isCartOpen} onClose={() => setCartOpen(false)} cartItems={cartItems} />
      </div>
    </header>
  );
}

export default Header;
