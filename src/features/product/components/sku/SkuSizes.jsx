/**
 *
 * @param {{ sizes: Array<{ id: string, name: string, amount: number, hexCode: string }> }} props
 * @returns
 */

const SkuSizes = ({ sizes }) => {

  console.log("Sizes", sizes)
  return (
    <div className='product__skus'>
      <ul className='product__color'>
        <li className='product__color__item product__color__item--title'>
          Tamanhos
        </li>
        {Array.isArray(sizes) &&
          sizes.map((size) => (
            <li key={size.id} className='product__color__item'>
              <span className='product__color__unit'>{size.name}</span>
              <span className='product__color__amount'>({size.amount} disponíveis)</span>
            </li>
          ))}

      </ul>
    </div>
  );
};

export default SkuSizes;
