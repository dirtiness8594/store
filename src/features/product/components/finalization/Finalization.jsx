import { BsCartPlus } from 'react-icons/bs'

/**
 *
 * @returns
 */

const Finalization = () => {
  return (
    <div className='product__finalization'>
      <button className='product__go product__go--cart'>
        <BsCartPlus className='icon' />
      </button>
      <button className='product__go'>Comprar</button>
      {/* <div className='product__specification'>
            {productData?.details}
        </div> */}
    </div>
  )
}

export default Finalization
