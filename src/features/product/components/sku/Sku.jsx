import SkuColors from './SkuColors'
import SkuSizes from './SkuSizes'

/**
 *
 * @returns
 */

const Sku = ({
  skus
}) => {

  console.log("XID ", skus)
  return (
    <div className='product__skus'>
      <SkuSizes sizes={skus?.sizes} />
      <SkuColors colors={skus?.colors} />
    </div>
  )
}

export default Sku
