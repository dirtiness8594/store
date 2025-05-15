import ProductDetails from './ProductDetails'
import ProductImage from './ProductImage'

/**
 *
 * @param {*} param0
 * @returns
 */

const ProductCarousel = ({ product }) => {

  console.log("Product ", product)



  const {
    name,
    image,
    price,
    description,
    friendlyUrl,
    id
  } = product;
  const productPrice = price?.newPrice || price?.installment?.value;

  console.log("Aqui ,", product, productPrice)
  return (
    <a
      href={`/product/${friendlyUrl || id}`}
      className='product__item product__item--carousel'
    >
      <ProductImage image={image?.original || image?.thumbnail} alt={name} />
      <ProductDetails
  price={product.price}
  name={product.name}
  description={product.description || product.details}
/>

    </a>
  )
}

export default ProductCarousel
