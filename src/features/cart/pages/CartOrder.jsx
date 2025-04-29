/**
 *
 *
 */

const CartOrder = ({ shippingInfo, paymentInfo, totalPrice, total }) => {
  return (
    <section>
      <div className='checkout__wrap'>
        <h2>Detalhes do Pedido</h2>
        <div className='order-details'>
          <div className='shipping-details'>
            <h3>Informações de Envio</h3>
            <p>Nome: {shippingInfo.fullName}</p>
            <p>Endereço: {shippingInfo.address}</p>
            <p>Cidade: {shippingInfo.city}</p>
            <p>Estado: {shippingInfo.state}</p>
            <p>CEP: {shippingInfo.zipCode}</p>
            <p>País: {shippingInfo.country}</p>
          </div>
          <div className='payment-details'>
            <h3>Detalhes de Pagamento</h3>
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
    </section>
  )
}

export default CartOrder
