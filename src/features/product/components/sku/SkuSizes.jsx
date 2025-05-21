/**
 *
 * @param {{ sizes: Array<{ color: string, size: string, stock: number }> }} props
 * @returns
 */

const SkuSizes = ({ sizes, onSelect, selectedSize }) => {
  if (!sizes || sizes.length === 0) {
    return (
      <div className="product__color">
        <p>Sem tamanhos disponíveis</p>
      </div>
    );
  }

  const uniqueSizes = [...new Set(sizes.map((sku) => sku.size))];

  return (
    <ul className='product__color'>
      <li className='product__color__item product__color__item--title'>Tamanhos</li>
      {uniqueSizes.map((size) => (
        <li
          key={size}
          className={`product__color__item ${selectedSize === size ? 'selected' : ''}`}
          onClick={() => onSelect(size)}
        >
          <span className='product__color__unit'>{size}</span>
        </li>
      ))}
    </ul>
  );
};

export default SkuSizes;
