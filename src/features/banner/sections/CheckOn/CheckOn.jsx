import { HiOutlineViewGrid } from "react-icons/hi";

const CheckOn = ({ bannerArray }) => {
  return (
    <section className="banner__checkon">
      <h4 className="banner__checkon__title">
        Confira <HiOutlineViewGrid />
      </h4>
      <div className="banner__checkon__figures">
        {bannerArray.map((banner, index) => {
          return (
            <figure className="banner__checkon__figure" key={index}>
              <a href={banner.link} className="banner__checkon__anchor">
                <img
                  src={banner.image}
                  alt={`Banner ${banner.title}`}
                  className="banner__checkon__img"
                />
                <figcaption className="banner__checkon__info">
                  <span className="banner__checkon__freight">
                    {banner.title}
                  </span>
                  <p className="banner__checkon__description">
                    {banner.subtitle}
                  </p>
                  <button className="banner__checkon__button">Confira</button>
                </figcaption>
              </a>
            </figure>
          );
        })}
        {/* <figure className="banner__checkon__figure">
                    <img src="https://picsum.photos/600/300" alt="" className="banner__checkon__img" />
                    <figcaption className="banner__checkon__info">
                        <span className="banner__checkon__freight">
                            Envios até 48 h
                        </span>
                        <p className="banner__checkon__description">
                            Ofertas do final de semana
                        </p>
                        <button className="banner__checkon__button">Confira</button>
                    </figcaption>
                </figure> */}
      </div>
    </section>
  );
};

export default CheckOn;
