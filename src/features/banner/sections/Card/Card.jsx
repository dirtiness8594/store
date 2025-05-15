import { FaArrowRightLong } from "react-icons/fa6";

/**
 *
 * @param {*} param0
 * @returns
 */

const Card = ({ bannerArray }) => {
  console.log("PlUS", bannerArray)
  return (
    <section className="banner__card">
      <div className="banner__wrapper banner__wrapper--card">
        <ul className="banner__list banner__list--card">
          {bannerArray.map((banner, key) => {
            return (
              <li className="banner__item banner__item--card" key={key}>
                <a href="/a" className="banner__link banner__link--card">
                  <figure className="banner__figure banner__figure--card">
                    <legend className="banner__legend banner__legend--card">
                      <span>{banner.title}</span>
                      <p>
                        {banner.subtitle}
                      </p>
                      <button>
                        See more
                        <FaArrowRightLong />
                      </button>
                    </legend>
                    <img
                      className="banner__image banner__image--card"
                      src={banner.image}
                    />
                  </figure>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Card;
