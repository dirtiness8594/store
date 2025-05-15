import DetailListing from '../detailListing'
import DetailImage from '../detailImage'

/**
 *
 * @param {*} param0
 * @returns
 */

const Listing = ({ product }) => {
    console.log("Details ", product)
    return (
        <a
            href={`/product/${product.friendlyUrl ? product.friendlyUrl : product.id
                }`}
            className='product__item product__item--simple'
        >
            <DetailImage image={product.image} alt={product.name} />
            <DetailListing
                price={product.price}
                name={product.name}
                description={product.description || product.details}
            />

        </a>
    )
}

export default Listing
