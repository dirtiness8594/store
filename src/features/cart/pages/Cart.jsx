import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import CartHeader from './CartHeader'
import CartStepsAndActions from './CartSteps'
import CartFooter from './CartFooter'
import CartProduct from './CartProduct'
import CartShipping from './CartShipping'
import CartPayment from './CartPayment'
import CartOrder from './CartOrder'
import CartSuccess from './CartSuccess'

import "../styles/Checkout.scss"

/**
 *
 *
 */

const Cart = () => {
  const { id } = useParams()

  // Config
  const steps = ['Cart', 'Shipping', 'Payment', 'Order', 'Place Order']
  const [currentStep, setCurrentStep] = useState(3)
  const [showNextStep, setShowNextStep] = useState(true)

  // Data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      quantity: 2,
      image: 'https://placehold.co/600x400',
      price: 9.99 // Adicione o preço do produto aqui
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 1,
      image: 'https://placehold.co/600x400',
      price: 5.99 // Adicione o preço do produto aqui
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 1,
      image: 'https://placehold.co/600x400',
      price: 7.99 // Adicione o preço do produto aqui
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 1,
      image: 'https://placehold.co/600x400',
      price: 7.99 // Adicione o preço do produto aqui
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 1,
      image: 'https://placehold.co/600x400',
      price: 7.99 // Adicione o preço do produto aqui
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 1,
      image: 'https://placehold.co/600x400',
      price: 7.99 // Adicione o preço do produto aqui
    }
  ])
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  })
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: ''
  })

  // Sum
  const total = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)

  // InputHandler
  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (currentStep === 1) {
      setShippingInfo((prev) => ({ ...prev, [name]: value }))
    } else if (currentStep === 2) {
      setPaymentInfo((prev) => ({ ...prev, [name]: value }))
    }
  }

  // FormValidation
  const validateForm = () => {
    if (currentStep === 1) {
      const { fullName, address, city, state, zipCode, country } = shippingInfo

      console.log(
        shippingInfo.fullName,
        shippingInfo.address,
        shippingInfo.city,
        shippingInfo.state,
        shippingInfo.zipCode,
        shippingInfo.country
      )
      return fullName && address && city && state && zipCode && country
    } else if (currentStep === 2) {
      const { cardNumber, cardHolder, expirationDate, cvv } = paymentInfo
      return cardNumber && cardHolder && expirationDate && cvv
    }
    return false
  }

  // Check if it is the order page view
  useEffect(() => {
    if (id) setCurrentStep(4)
    setShowNextStep(false)
  }, [])

  return (
    <div className='checkout'>
      <CartHeader />
      <CartStepsAndActions steps={steps} currentStep={currentStep} />
      <div className='checkout__content'>
        {currentStep === 0 && (
          <CartProduct
            cartItems={cartItems}
            setCartItems={setCartItems}
            total={total}
            totalPrice={totalPrice}
          />
        )}
        {currentStep === 1 && (
          <CartShipping
            shippingInfo={shippingInfo}
            setShippingInfo={setShippingInfo}
            handleInputChange={handleInputChange}
          />
        )}
        {currentStep === 2 && (
          <CartPayment
            paymentInfo={paymentInfo}
            setPaymentInfo={setPaymentInfo}
            handleInputChange={handleInputChange}
          />
        )}
        {currentStep === 3 && (
          <CartOrder
            shippingInfo={shippingInfo}
            paymentInfo={paymentInfo}
            totalPrice={totalPrice}
            total={total}
          />
        )}
        {currentStep === 4 && (
          <CartSuccess
            shippingInfo={shippingInfo}
            paymentInfo={paymentInfo}
            total={total}
            totalPrice={totalPrice}
            cartItems={cartItems}
          />
        )}
        <div className='checkout__wrap'></div>
        <CartFooter />
      </div>
    </div>
  )
}

export default Cart
