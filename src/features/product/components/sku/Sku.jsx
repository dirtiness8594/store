import SkuColors from './SkuColors'
import SkuSizes from './SkuSizes'

/**
 *
 * @returns
 */

const Sku = () => {
  return (
    <div className='product__skus'>
      <SkuSizes />
      <SkuColors />
    </div>
  )
}

export default Sku
