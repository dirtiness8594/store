import ProductDetails from './ProductDetails'
import ProductImage from './ProductImage'

/**
 *
 * @param {*} param0
 * @returns
 */

const ProductList = ({ product }) => {
  console.log("Details ", product)
  return (
    <a
    href={`/product/${
      product.friendlyUrl ? product.friendlyUrl : product.id
    }`}
    className='product__item product__item--simple'
    >
      <ProductImage image={product.image} alt={product.name} />
      <ProductDetails
  price={product.price}
  name={product.name}
  description={product.description || product.details}
/>

    </a>
  )
}

export default ProductList
