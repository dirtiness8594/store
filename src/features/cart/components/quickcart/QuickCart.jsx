import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import "../../styles/QuickCart.scss"

const QuickCart = ({ isOpen, onClose, cartItems }) => {
  return (
    <aside className={`quickcart ${isOpen ? 'quickcart--open' : ''}`}>
      <div className="quickcart__header">
        <h2 className="quickcart__title">Meu Carrinho</h2>
        <button className="quickcart__close" onClick={onClose}>
          <AiOutlineClose />
        </button>
      </div>

      <div className="quickcart__body">
        {cartItems.length === 0 ? (
          <p className="quickcart__empty">Seu carrinho está vazio.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="quickcart__item">
              <img src={item.image} alt={item.name} className="quickcart__item__img" />
              <div className="quickcart__item__info">
                <p className="quickcart__item__name">{item.name}</p>
                <p className="quickcart__item__price">{item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="quickcart__footer">
        <button className="quickcart__checkout">Finalizar Compra</button>
      </div>
    </aside>
  );
};

export default QuickCart;
