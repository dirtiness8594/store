/**
 *
 * @param {{ colors: Array<{ color: string, size: string, stock: number }> }} props
 * @returns
 */
const SkuColors = ({ colors, selectedColor, onSelectColor }) => {
  return (
    <ul className="product__color">
      <li className="product__color__item product__color__item--title">Cores</li>
      {colors.map((color) => (
        <li
          key={color}
          className={`product__color__item ${selectedColor === color ? 'selected' : ''}`}
          onClick={() => onSelectColor(color)}
        >
          <span className="product__color__unit">{color}</span>
        </li>
      ))}
    </ul>
  );
};

export default SkuColors;
