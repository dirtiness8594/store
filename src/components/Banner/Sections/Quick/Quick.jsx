import { useMediaQuery } from 'react-responsive'

const Quick = ({ banner }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <section className='banner__single'>
      <h4 className='banner__single__title'>Categorias</h4>
      <div className='banner__single__figures'>
        {banner.banners.map((banner, index) => {
          return (
            <figure className='banner__single__figure' key={index}>
              {isMobile ? (
                <img
                  src='https://via.placeholder.com/600x150'
                  alt=''
                  className='banner__single__img'
                />
              ) : (
                <img
                  src='https://via.placeholder.com/1200x250'
                  alt=''
                  className='banner__single__img'
                />
              )}
              <figcaption className='banner__single__name'></figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}

export default Quick
