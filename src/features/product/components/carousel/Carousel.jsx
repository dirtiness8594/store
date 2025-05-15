import DetailListing from '../detailListing';
import DetailImage from '../detailImage'

/**
 *
 * @param {*} param0
 * @returns
 */

const CarouselListing = ({ product }) => {

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

  console.log("Aqui ,", product)
  return (
    <a
      href={`/product/${friendlyUrl || id}`}
      className='product__item product__item--carousel'
    >
      <DetailImage image={image?.original || image?.thumbnail} alt={name} />
      <DetailListing
        price={product.price}
        name={product.name}
        description={product.description || product.details}
      />

    </a>
  )
}

export default CarouselListing
