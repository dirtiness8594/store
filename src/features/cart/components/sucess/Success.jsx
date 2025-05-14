import { BsPencil } from 'react-icons/bs'

/**
 *
 *
 */

const Success = ({
  shippingInfo,
  paymentInfo,
  total,
  totalPrice,
  cartItems
}) => {
  return (
    <section className='success-message'>
      <div className='success-message-wrapper'>
        <div className='success-card'>
          <h2>Parabéns! Seu pedido foi concluído com sucesso!</h2>
          <p className='success-desc'>Confira abaixo os dados de seu pedido.</p>
          <div className='order-details'>
            <div className='shipping-details'>
              <h3>Informações de Envio</h3>
              <button className='edit-pencil'>
                <BsPencil />
              </button>
              <p>Nome: {shippingInfo.fullName}</p>
              <p>Endereço: {shippingInfo.address}</p>
              <p>Cidade: {shippingInfo.city}</p>
              <p>Estado: {shippingInfo.state}</p>
              <p>CEP: {shippingInfo.zipCode}</p>
              <p>País: {shippingInfo.country}</p>
            </div>
            <div className='payment-details'>
              <h3>Detalhes de Pagamento</h3>
              <button className='edit-pencil'>
                <BsPencil />
              </button>
              <p>Número do Cartão: {paymentInfo.cardNumber}</p>
              <p>Titular do Cartão: {paymentInfo.cardHolder}</p>
              <p>Data de Expiração: {paymentInfo.expirationDate}</p>
              <p>CVV: {paymentInfo.cvv}</p>
            </div>
            <div className='order-total'>
              <h3>Total do Pedido</h3>
              <p>Total de itens: {total}</p>
              <p>Valor Total: R$ {totalPrice}</p>
            </div>
          </div>
        </div>
        <div className='product-card'>
          {cartItems.map((item) => (
            <a key={item.id} className='product-item'>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Quantidade: {item.quantity}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Success
