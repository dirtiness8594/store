import { useMediaQuery } from 'react-responsive'

const Single = ({ banner }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <section className='banner__single'>
      <h4 className='banner__single__title'>Categorias</h4>
      <div className='banner__single__figures'>
        <figure className='banner__single__figure'>
          {isMobile ? (
            <img
              src='https://via.placeholder.com/600x150'
              alt=''
              className='banner__single__img'
            />
          ) : (
            <img src={banner?.image} alt='' className='banner__single__img' />
          )}
          <figcaption className='banner__single__name'></figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Single
