import { HiOutlineViewGrid } from "react-icons/hi";

const CheckOn = ({ banner }) => {
  return (
    <section className="banner__checkon">
      <h4 className="banner__checkon__title">
        Confira <HiOutlineViewGrid />
      </h4>
      <div className="banner__checkon__figures">
        {banner.banners.map((banner, index) => {
          return (
            <figure className="banner__checkon__figure" key={index}>
              <a href={banner.link} className="banner__checkon__anchor">
                <img
                  src={banner.url}
                  alt={`Banner ${banner.name}`}
                  className="banner__checkon__img"
                />
                <figcaption className="banner__checkon__info">
                  <span className="banner__checkon__freight">
                    {banner.name}
                  </span>
                  <p className="banner__checkon__description">
                    {banner.description}
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
