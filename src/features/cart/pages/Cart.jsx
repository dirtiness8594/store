import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import CartHeader from '../components/header/'
import CartStepsAndActions from '../components/steps'
import CartFooter from '../components/footer/'
import CartProduct from '../components/product/'


import useCartStore  from '../../../store/cartStore'
import { getProductsByIds } from '../../product/services/productAPI'
import useUserStore from '../../../store/useUserStore';



import "../styles/Checkout.scss"

/**
 *
 *
 */

const Cart = () => {
  const { id } = useParams()

  // Config
  const steps = ['Cart', 'Shipping', 'Payment', 'Order', 'Place Order']
  const [currentStep, setCurrentStep] = useState(0)

  const user = useUserStore((state) => state.user);


  console.log("XIS", user)

  return (
    <div className='checkout'>
      <CartHeader />
      <CartStepsAndActions steps={steps} currentStep={currentStep} />
      <div className='checkout__content'>
        {currentStep === 0 && (


          <CartProduct user={user} />
        )}
        <div className='checkout__wrap'></div>
        <CartFooter />
      </div>
    </div>
  )
}

export default Cart
