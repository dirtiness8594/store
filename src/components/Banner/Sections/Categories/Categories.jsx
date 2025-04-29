import { HiOutlineViewGrid } from 'react-icons/hi'
import Slider from 'react-slick'
import { useMediaQuery } from 'react-responsive'

import { categoriesBanner } from '../../../../config'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Categories = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const sliderSettings = {
    slidesToShow: isMobile ? 3 : 7,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    dots: true
  }

  const categories = [
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    },
    {
      name: 'Carros, Motos e Outros',
      image: 'https://via.placeholder.com/60x60',
      link: ''
    }
  ]

  return (
    <section className='banner__categories'>
      <h4 className='banner__categories__title'>
        {categoriesBanner.name} <HiOutlineViewGrid />
      </h4>
      <div className='banner__categories__figures'>
        <Slider {...sliderSettings}>
          {categoriesBanner.categories.map((category, index) => {
            return (
              <div className='banner__categories__item' key={index}>
                <a href={category.link} className='banner__categories__anchor'>
                  <figure className='banner__categories__figure'>
                    <img
                      src={category.url}
                      alt=''
                      className='banner__categories__img'
                    />
                    <figcaption className='banner__categories__name'>
                      {category.name}
                    </figcaption>
                  </figure>
                </a>
              </div>
            )
          })}
        </Slider>
        <ul className='banner__categories__list'></ul>
      </div>
    </section>
  )
}

export default Categories
