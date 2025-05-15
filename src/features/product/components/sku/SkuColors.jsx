/**
 *
 * @param {{ colors: Array<{ color: string, size: string, stock: number }> }} props
 * @returns
 */
const SkuColors = ({ colors, onSelect }) => {
  // Verificação simples antes de tentar mapear as cores
  if (!colors || colors.length === 0) {
    return (
      <div className="product__size">
        <p>Sem cores disponíveis</p> {/* Ou qualquer outra mensagem que você queira */}
      </div>
    );
  }

  // Pegue todas as cores únicas dos SKUs
  const uniqueColors = [...new Set(colors.map((sku) => sku.color))];

  return (
    <ul className='product__size'>
      <li className='product__size__item product__size__item--title'>Cores</li>
      {uniqueColors.map((color) => (
        <li
          key={color}
          className='product__size__item'
          onClick={() => onSelect(color)}
        >
          <span
            className='product__size__unit'
            style={{
              backgroundColor: color,
              display: 'inline-block',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              border: '1px solid #ccc',
            }}
            title={color}
          />
        </li>
      ))}
    </ul>
  );
};

export default SkuColors;
