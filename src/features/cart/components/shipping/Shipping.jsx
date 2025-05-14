import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

/**
 *
 * @param {*} param0
 * @returns
 */

const Shipping = ({ shippingInfo, setShippingInfo, handleInputChange }) => {
  return (
    <section>
      <div className='checkout__wrap'>
        <div className='shippingForm'>
          <div className='shippingForm__left'>
            <img src='https://via.placeholder.com/200x200' />
            <h2>Informações de Envio</h2>
            <p>Preenchas seus dados para enviarmos seus produtos!</p>
            <button className='shippingForm__arrow'>
              <BsArrowRight />
            </button>
          </div>
          <div className='shippingForm__right'>
            <form className='shippingForm__form'>
              <div className='shippingForm__formGroup'>
                <label htmlFor='fullName'>Nome Completo</label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  value={shippingInfo.fullName}
                  onChange={(e) => handleInputChange(e, setShippingInfo)}
                  required
                />
              </div>
              <div className='shippingForm__formGroup'>
                <label htmlFor='zipCode'>CEP</label>
                <input
                  type='text'
                  id='zipCode'
                  name='zipCode'
                  value={shippingInfo.zipCode}
                  onChange={(e) => handleInputChange(e, setShippingInfo)}
                  required
                />
              </div>
              <div className='shippingForm__formGroup'>
                <label htmlFor='address'>Endereço</label>
                <input
                  type='text'
                  id='address'
                  name='address'
                  value={shippingInfo.address}
                  onChange={(e) => handleInputChange(e, setShippingInfo)}
                  required
                />
              </div>
              <div className='shippingForm__formGroup shippingForm__formGroup--city'>
                <label htmlFor='city'>Cidade</label>
                <input
                  type='text'
                  id='city'
                  name='city'
                  value={shippingInfo.city}
                  onChange={(e) => handleInputChange(e, setShippingInfo)}
                  required
                />
              </div>
              <div className='shippingForm__formGroup shippingForm__formGroup--state'>
                <label htmlFor='state'>Estado</label>
                <input
                  type='text'
                  id='state'
                  name='state'
                  value={shippingInfo.state}
                  onChange={(e) => handleInputChange(e, setShippingInfo)}
                  required
                />
              </div>
              <div className='shippingForm__formGroup'>
                <label htmlFor='country'>País</label>
                <input
                  type='text'
                  id='country'
                  name='country'
                  value={shippingInfo.country}
                  onChange={(e) => handleInputChange(e, setShippingInfo)}
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

export default Shipping
