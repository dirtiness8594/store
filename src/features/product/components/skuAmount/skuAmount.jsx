import { BsArrowDownShort } from 'react-icons/bs';

const SkuAmount = ({ quantity, stock, onChange }) => {
  const handleIncrement = () => onChange(Math.min(stock, quantity + 1));
  const handleDecrement = () => onChange(Math.max(0, quantity - 1));

  return (
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
          onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)}
          min="0"
          max={stock}
        />
        <button
          className="product__amount__control-button"
          onClick={handleIncrement}
          disabled={quantity >= stock}
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
  );
};

export default SkuAmount;
