/**
 *
 * @returns
 */

const ProductDescription = ({ data }) => {
  return (
    <section className='product__allinfo'>
      <h3 className='product__section'>
        Conheça os detalhes
      </h3>
      <p className='product__characteristic'>{data}</p>
    </section>
  )
}

export default ProductDescription
