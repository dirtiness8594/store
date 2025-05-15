/**
 *
 * @returns
 */

const Single = ({ banner }) => {

  if (!banner || typeof banner !== "object") {
    return null; // Ou renderizar algo alternativo, como um "Carregando..."
  }

  console.log("PXIS", banner, banner.image)
  return (
    <div className='banner'>
      <img
        className="banner__image"
        src={banner?.image}
        alt={banner?.title || "Banner"} // Fallback para "Banner" caso title não exista
      />
    </div>
  )
}

export default Single
