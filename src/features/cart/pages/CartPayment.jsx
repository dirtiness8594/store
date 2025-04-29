import { BsArrowRight } from 'react-icons/bs'

/**
 *
 *
 */

const CartPayment = ({ paymentInfo, setPaymentInfo, handleInputChange }) => {
  return (
    <section>
      <div className='checkout__wrap'>
        <div className='paymentForm'>
          <div className='shippingForm__left'>
            <img src='https://via.placeholder.com/200x200' />
            <h2>Informações de Pagamento</h2>
            <p>Preenchas seus dados para enviarmos seus produtos!</p>
            <button className='shippingForm__arrow'>
              <BsArrowRight />
            </button>
          </div>
          <div className='paymentForm__right'>
            <form className='paymentForm__form'>
              <div className='paymentForm__formGroup'>
                <label htmlFor='cardNumber'>Número do Cartão</label>
                <input
                  type='text'
                  id='cardNumber'
                  name='cardNumber'
                  value={paymentInfo.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='paymentForm__formGroup'>
                <label htmlFor='cardHolder'>Titular do Cartão</label>
                <input
                  type='text'
                  id='cardHolder'
                  name='cardHolder'
                  value={paymentInfo.cardHolder}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='paymentForm__formGroup'>
                <label htmlFor='expirationDate'>Data de Expiração</label>
                <input
                  type='text'
                  id='expirationDate'
                  name='expirationDate'
                  value={paymentInfo.expirationDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='paymentForm__formGroup'>
                <label htmlFor='cvv'>CVV</label>
                <input
                  type='text'
                  id='cvv'
                  name='cvv'
                  value={paymentInfo.cvv}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPayment
