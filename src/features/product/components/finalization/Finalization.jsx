import { BsCartPlus } from 'react-icons/bs';

/**
 * @param {{
 *   onAddToCart: () => void,
 *   canFinalize: boolean
 * }} props
 */
const Finalization = ({ onAddToCart, canFinalize }) => {

  return (
    <div className='product__finalization'>
      <button
        className='product__go product__go--cart'
        onClick={onAddToCart}
        disabled={!canFinalize}
      >
        <BsCartPlus className='icon' />
      </button>
      <button className='product__go' disabled={!canFinalize}>
        Comprar
      </button>
    </div>
  );
};

export default Finalization;
