import { useState } from 'react'
import { BsArrowDownShort } from 'react-icons/bs'

/**
 *
 * @returns
 */

const Amount = ({ amount, skus }) => {
  const [quantity, setQuantity] = useState(0)

  const handleQuantityChange = (newQuantity) => {
    const limitedQuantity = Math.min(Math.max(newQuantity, 0), 100)
    setQuantity(limitedQuantity)
  }

  const handleIncrement = () => {
    handleQuantityChange(quantity + 1)
  }

  const handleDecrement = () => {
    handleQuantityChange(quantity - 1)
  }

  return (
    <div className='product__amount'>
      <span className='product__amount__title'>Quantidade</span>
      <div className='product__amount__controls'>
        <button
          className='product__amount__control-button'
          onClick={handleDecrement}
          disabled={quantity === 0}
        >
          -
        </button>
        <input
          className='product__amount__select'
          type='number'
          value={quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
          min='0'
          max={amount}
        />
        <button
          className='product__amount__control-button'
          onClick={handleIncrement}
          disabled={quantity === amount}
        >
          +
        </button>
      </div>
      <button className='product__skus__button'>
        <a href='#description'>
          Ver detalhes <BsArrowDownShort className='product__skus__icon' />
        </a>
      </button>
    </div>
  )
}

export default Amount
