import DetailListing from '../detailListing'
import DetailImage from '../detailImage'

/**
 *
 * @param {*} param0
 * @returns
 */

const Listing = ({ product }) => {

    const {
        name,
        images,
        price,
        description,
        friendlyUrl,
        id
      } = product;
      const productPrice = price?.newPrice || price?.installment?.value;

    return (
        <a
            href={`/product/${product.friendlyUrl ? product.friendlyUrl : product.id
                }`}
            className='product__item product__item--simple'
        >
            <DetailImage images={images} alt={name} />
            <DetailListing
                price={product.price}
                name={product.name}
                description={product.description || product.details}
            />

        </a>
    )
}

export default Listing
