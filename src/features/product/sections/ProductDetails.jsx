/**
 *
 * @param {*} param0
 * @returns
 */

function ProductDetails({ price, name, description }) {
  return (
    <div className='product__details'>
      <ProductDescription name={name} description={description} />
      <ProductPrice price={price} />
      <ProductInstallement price={price} />
    </div>
  )
}

const ProductPrice = ({ price }) => {
  return (
    <>
      <span className='product__oldprice'>{price}</span>
      <span className='product__price'>{price}</span>
      <span className='product__off'>30% OFF</span>
    </>
  )
}

const ProductInstallement = ({ price }) => {
  return (
    <div className='product__installment'>
      <pre className='product__steps'>12x R$ 19,00</pre>
      <pre className='product__freight'>Frete grátis full</pre>
    </div>
  )
}

const ProductDescription = ({ name, description }) => {
  return (
    <>
      <h3 className='product__name'>{name}</h3>
      <p className='product__shortinfo'>{description}</p>
    </>
  )
}

export default ProductDetails
