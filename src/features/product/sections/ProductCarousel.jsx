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


  return (
    <a
      href={`/product/${friendlyUrl || id}`}
      className='product__item product__item--carousel'
    >
      <ProductImage image={image?.original || image?.thumbnail} alt={name} />
      <ProductDetails
        price={productPrice}
        name={name}
        description={description || product.details}
      />
    </a>
  )
}

export default ProductCarousel
