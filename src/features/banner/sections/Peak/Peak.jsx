/**
 *
 * @param {*} param0
 * @returns
 */

const Peak = ({ bannerArray }) => {

  return (
    <section className="banner__hightlight">
      <div className="banner__wrapper banner__wrapper--highlight">
        <ul className="banner__list banner__list--hightlight">
          {bannerArray.map((banner, key) => {
            return (
              <li className="banner__item banner__item--hightlight" key={key}>
                <a href="/a" className="banner__link banner__link--highlight">
                  <figure className="">
                    <img
                      className="banner__image banner__image--hightlight"
                      src={banner.image}
                    />
                    <legend className="banner__legend banner__legend--highlight">
                      {banner.title.split("").map((char, index) => (
                        <span key={index}>{char}</span>
                      ))}
                    </legend>
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

export default Peak;
