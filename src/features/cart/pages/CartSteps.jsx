import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

/**
 *
 *
 */

const CheckoutSteps = ({ currentStep, steps }) => {
  const navigateTo = useNavigate()

  // NextStep
  const nextStep = () => {
    if (currentStep !== 0 && !validateForm()) {
      console.log('Erro de validação do formulário')
      return
    }

    setCurrentStep(currentStep + 1)
  }

  const returnToHome = () => {
    navigateTo('/')
  }

  return (
    <div className='checkout__actions'>
      <div className='checkout__return'>
        <button className='header__return' onClick={returnToHome}>
          <BsArrowLeft />
          Voltar para o site
        </button>
      </div>
      <div className='checkout__steps'>
        <div className='checkout__steps__wrap checkout__steps__wrap--cart'>
          <ul className='checkout__steps__list'>
            {steps.map((step, index) => (
              <li
                key={index}
                className={`checkout__steps__item ${
                  index === currentStep || index < currentStep ? 'active' : ''
                }`}
              >
                <span className='checkout__steps__number'>{index + 1}</span>
                <span className='checkout__steps__title'>
                  {index === currentStep || index < currentStep ? step : null}
                </span>
                {index !== steps.length - 1 && (
                  <div className='checkout__steps__line' />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='checkout__continue'>
        <button type='submit' className='checkout__cta' onClick={nextStep}>
          Continuar <BsArrowRight />
        </button>
      </div>
    </div>
  )
}

export default CheckoutSteps
