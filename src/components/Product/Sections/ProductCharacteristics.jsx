/**
 *
 * @returns
 */

const ProductCharacteristics = ({ data }) => {
  // console.log('Characte ', data)
  return (
    <section className='product__allinfo' id='description'>
      <h3 className='product__section'>
        Conheça as caracteristicas
      </h3>
      <div className='product__table'>
        <div className='product__row'>
          <div className='product__td'>Alfred </div>
          <div className='product__td'>Maria </div>
        </div>
        <div className='product__row'>
          <div className='product__td'>Mexico </div>
          <div className='product__td'>Tijuana </div>
        </div>
        <div className='product__row'>
          <div className='product__td'>Mexico </div>
          <div className='product__td'>Tijuana </div>
        </div>
        <div className='product__row'>
          <div className='product__td'>Mexico </div>
          <div className='product__td'>Tijuana </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCharacteristics
