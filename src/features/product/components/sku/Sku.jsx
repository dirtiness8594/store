import { useState, useEffect } from 'react';
import { BsArrowDownShort } from 'react-icons/bs';

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
      <ul className="product__color">
        <li className="product__color__item product__color__item--title">Cores</li>
        {uniqueColors.map((color) => (
          <li
            key={color}
            className={`product__color__item ${selectedColor === color ? 'selected' : ''}`}
            onClick={() => setSelectedColor(color)}
          >
            <span className="product__color__unit">{color}</span>
          </li>
        ))}
      </ul>

      {/* Tamanhos */}
      {selectedColor && (
      <ul className="product__size">
        <li className="product__size__item product__size__item--title">Tamanhos</li>
        {uniqueSizes.map((size) => (
          <li
            key={size}
            className={`product__size__item ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => setSelectedSize(size)}
          >
            <span className="product__size__unit">{size}</span>
          </li>
        ))}
      </ul>
      )}

      {/* Quantidade */}
      <div className="product__amount">
        <span className="product__amount__title">Quantidade</span>
        <div className="product__amount__controls">
          <button
            className="product__amount__control-button"
            onClick={handleDecrement}
            disabled={quantity === 0}
          >
            -
          </button>
          <input
            className="product__amount__select"
            type="number"
            value={quantity || ''}
            onChange={(e) =>
              handleQuantityChange(parseInt(e.target.value, 10) || 0)
            }
            min="0"
            max={currentStock}
          />
          <button
            className="product__amount__control-button"
            onClick={handleIncrement}
            disabled={quantity >= currentStock}
          >
            +
          </button>
        </div>
        <button className="product__skus__button">
          <a href="#description">
            Ver detalhes <BsArrowDownShort className="product__skus__icon" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Sku;
