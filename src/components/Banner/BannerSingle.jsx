/**
 *
 * @returns
 */

const BannerSingle = ({ banner }) => {
  return (
    <div className='banner'>
      <img className='banner__image' src={banner.url} alt={banner.name} />
    </div>
  )
}

export default BannerSingle
