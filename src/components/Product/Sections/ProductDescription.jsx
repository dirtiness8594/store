/**
 *
 * @returns
 */

const ProductDescription = ({ description }) => {
  return (
    <section className='product__allinfo'>
      <h3 className='product__section'>
        Conheça os detalhes
      </h3>
      <p className='product__characteristic'>{description}</p>
    </section>
  )
}

export default ProductDescription
