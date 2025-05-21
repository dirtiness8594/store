const SkuSizes = ({ sizes, selectedSize, onSelectSize }) => {
  return (
    <ul className="product__size">
      <li className="product__size__item product__size__item--title">Tamanhos</li>
      {sizes.map((size) => (
        <li
          key={size}
          className={`product__size__item ${selectedSize === size ? 'selected' : ''}`}
          onClick={() => onSelectSize(size)}
        >
          <span className="product__size__unit">{size}</span>
        </li>
      ))}
    </ul>
  );
};

export default SkuSizes;
