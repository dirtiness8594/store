/**
 *
 * @returns
 */

const Single = ({ banner }) => {

  if (!banner || typeof banner !== "object") {
    return null;
  }

  return (
    <div className='banner'>
      <img
        className="banner__image"
        src={banner?.image}
        alt={banner?.title || "Banner"}
      />
    </div>
  )
}

export default Single
