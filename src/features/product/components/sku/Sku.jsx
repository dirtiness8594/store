import { useState } from 'react';
import SkuColors from './SkuColors';
import SkuSizes from './SkuSizes';
import Amount from '../amount';

/**
 *
 * @returns
 */
const Sku = ({ skus, defaultStock }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);

  // Função para filtrar o estoque com base na combinação de cor e tamanho
  const getStockForSelected = () => {
    if (selectedColor && selectedSize) {
      const selectedSku = skus.find(
        (sku) => sku.color === selectedColor && sku.size === selectedSize
      );
      return selectedSku?.stock ?? defaultStock; // Se não encontrar, retorna o estoque padrão
    }
    return defaultStock;
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setSelectedAmount(getStockForSelected()); // Atualiza o estoque com base na combinação
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setSelectedAmount(getStockForSelected()); // Atualiza o estoque com base na combinação
  };

  const currentAmount = selectedAmount ?? defaultStock;

  return (
    <div className='product__skus'>
      <SkuSizes sizes={skus} onSelect={handleSizeSelect} />
      <SkuColors colors={skus} onSelect={handleColorSelect} />
      <Amount amount={currentAmount} skus={skus} />
    </div>
  );
};

export default Sku;
