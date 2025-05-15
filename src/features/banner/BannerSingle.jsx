/**
 *
 * @returns
 */

const BannerSingle = ({ banner }) => {
  return (
    <div className='banner'>
      <img className='banner__image' src={banner.image} alt={banner.name} />
    </div>
  )
}

export default BannerSingle
