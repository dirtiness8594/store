import { FaArrowRightLong } from "react-icons/fa6";

/**
 *
 * @param {*} param0
 * @returns
 */

const Card = ({ banner }) => {
  console.log("fjsdiofjsd ", banner);

  return (
    <section className="banner__card">
      <div className="banner__wrapper banner__wrapper--card">
        <ul className="banner__list banner__list--card">
          {banner.banners.map((banner, key) => {
            return (
              <li className="banner__item banner__item--card" key={key}>
                <a href="/a" className="banner__link banner__link--card">
                  <figure className="banner__figure banner__figure--card">
                    <legend className="banner__legend banner__legend--card">
                      <span>{banner.name}</span>
                      <p>
                        Shop today Deals, Lighning Deals, and limited-time
                        discounts
                      </p>
                      <button>
                        See more
                        <FaArrowRightLong />
                      </button>
                    </legend>
                    <img
                      className="banner__image banner__image--card"
                      src={banner.url}
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
