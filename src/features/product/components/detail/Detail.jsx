import React from 'react'

import { BsStar, BsFillStarFill } from 'react-icons/bs'

/**
 *
 * @param {*} param0
 * @returns
 */

function ProductDetailsIndex({ price, name, description, rate }) {
  return (
    <div className='product__details product__details--index'>
      <ProductDescription name={name} description={description} />
      <ProductRate rate={rate} />
      <ProductPrice price={price} />
      <ProductInstallement price={price} />
    </div>
  )
}

const ProductPrice = ({ price }) => {
  return (
    <>
      <span className='product__oldprice product__oldprice--index'>
        R$ {price?.newPrice}
      </span>
      <span className='product__price product__price--index'>
        R$ {price?.newPrice}
      </span>
      <span className='product__off product__off--index'>30% OFF</span>
    </>
  )
}

const ProductInstallement = ({ price }) => {
  return (
    <div className='product__installment product__installment--index'>
      <pre className='product__steps product__steps--index'>
        em {price?.installment.amount} R$ {price?.installment.value}{' '}
        {price?.installment.fees ? 'com' : 'sem '} juros
      </pre>
      <button className='product__methods product__methods'>
        Ver as formas de pagamento
      </button>
    </div>
  )
}

const ProductDescription = ({ name, description }) => {
  return (
    <>
      <h3 className='product__name product__name--index'>{name}</h3>
      <p className='product__shortinfo product__shortinfo--index'>
        {description}
      </p>
    </>
  )
}

const ProductRate = ({ rate }) => {
  if (rate.average > 5 || rate.average < 0) return

  console.log('¨¨')

  const stars = new Array(5).fill(0)

  return (
    <div className='product__rate product__rate--index'>
      <div className='product__rate__stars'>
        {stars.map((star, index) => {
          return (
            <React.Fragment key={index}>
              {index <= rate.average - 1 ? (
                <BsFillStarFill
                  className='product__rate__icon product__rate__icon--high'
                  key={index}
                />
              ) : (
                <BsStar className='product__rate__icon' key={index} />
              )}
            </React.Fragment>
          )
        })}
      </div>
      <span className='product__rate__amount'>({rate.amount})</span>
    </div>
  )
}

export default ProductDetailsIndex
