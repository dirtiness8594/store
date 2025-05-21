import { useState, useEffect } from 'react';
import { BsArrowDownShort } from 'react-icons/bs';

import SkuAmount from '../skuAmount/skuAmount';
import SkuColors from '../skuColors/SkuColors';
import SkuSizes from '../skuSizes/SkuSizes';

/**
 * Componente SKU completo: seleção de cor, tamanho e quantidade
 */
const Sku = ({ skus, defaultStock, onSkuChange, onQuantityChange }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedSku, setSelectedSku] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [currentStock, setCurrentStock] = useState(defaultStock);

  const uniqueColors = [...new Set(skus.map((sku) => sku.color))];
  const filteredSizes = selectedColor
    ? skus.filter((sku) => sku.color === selectedColor)
    : skus;
  const uniqueSizes = [...new Set(filteredSizes.map((sku) => sku.size))];

  useEffect(() => {
    if (selectedColor && selectedSize) {
      const found = skus.find(
        (sku) => sku.color === selectedColor && sku.size === selectedSize
      );
      setSelectedSku(found ?? null);
      setCurrentStock(found?.stock ?? defaultStock);
      setQuantity(0); // resetar quantidade se mudar cor/tamanho
      if (onSkuChange) onSkuChange(found ?? null);
    } else {
      setSelectedSku(null);
      setCurrentStock(defaultStock);
      setQuantity(0);
      if (onSkuChange) onSkuChange(null);
    }
  }, [selectedColor, selectedSize]);

  const handleQuantityChange = (newQty) => {
    const validQty = Math.max(0, Math.min(newQty, currentStock));
    setQuantity(validQty);
    if (onQuantityChange) onQuantityChange(validQty);
  };

  const handleIncrement = () => handleQuantityChange(quantity + 1);
  const handleDecrement = () => handleQuantityChange(quantity - 1);

  return (
    <div className="product__skus">
      {/* Cores */}
      <SkuColors
        colors={uniqueColors}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
      />
      {selectedColor && (
        <SkuSizes
          sizes={uniqueSizes}
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
        />
      )}
      <SkuAmount
        quantity={quantity}
        stock={currentStock}
        onChange={handleQuantityChange}
      />
    </div>
  );
};

export default Sku;
