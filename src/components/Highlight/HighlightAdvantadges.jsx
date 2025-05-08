import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import { FaArrowRightLong } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 *
 * @returns
 */

function HighlightAdvantadges() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const sliderSettings = {
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    dots: false,
  };

  const advantadges = [
    {
      name: "Até 10 parcelas sem juros",
      image: "https://picsum.photos/50/50",
      link: "Ver mais",
    },
    {
      name: "Até 10 parcelas sem juros",
      image: "https://picsum.photos/50/50",
      link: "Ver mais",
    },
    {
      name: "Até 10 parcelas sem juros",
      image: "https://picsum.photos/50/50",
      link: "Ver mais",
    },
    {
      name: "Até 10 parcelas sem juros",
      image: "https://picsum.photos/50/50",
      link: "Ver mais",
    },
  ];

  return (
    <section className="banner__advantadges">
      <Slider {...sliderSettings}>
        {advantadges.map((banner, index) => {
          return (
            <div className="banner__topic" key={index}>
              <img
                src={banner.image}
                alt={banner.name}
                className="banner__which"
              />
              <div className="div banner__description">
                <span className="banner__name">{banner.name}</span>
                <span className="banner__seemore">
                  {banner.link}
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          );
        })}
        {/* <div className="banner__topic banner__topic--plus">
                    <img src="https://picsum.photos/50/50" alt="" className="banner__which" />
                </div> */}
      </Slider>
    </section>
  );
}

export default HighlightAdvantadges;
