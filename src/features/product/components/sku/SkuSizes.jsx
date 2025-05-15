/**
 *
 * @param {{ sizes: Array<{ color: string, size: string, stock: number }> }} props
 * @returns
 */
const SkuSizes = ({ sizes, onSelect }) => {
  // Verificação simples antes de tentar mapear os sizes
  if (!sizes || sizes.length === 0) {
    return (
      <div className="product__color">
        <p>Sem tamanhos disponíveis</p> {/* Ou qualquer outra mensagem que você queira */}
      </div>
    );
  }

  // Pegue os tamanhos disponíveis para a cor selecionada
  const uniqueSizes = [...new Set(sizes.map((sku) => sku.size))];

  return (
    <ul className='product__color'>
      <li className='product__color__item product__color__item--title'>Tamanhos</li>
      {uniqueSizes.map((size) => (
        <li
          key={size}
          className='product__color__item'
          onClick={() => onSelect(size)}
        >
          <span className='product__color__unit'>{size}</span>
        </li>
      ))}
    </ul>
  );
};

export default SkuSizes;
