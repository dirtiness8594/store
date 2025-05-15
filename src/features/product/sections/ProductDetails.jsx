import React from 'react'
import { getDiscountPercentage } from '../utils/productUtils'

function ProductDetails({ name, description, price }) {
  const { oldPrice, newPrice, installment } = price || {}
  const installmentText =
    installment && installment.amount && installment.value
      ? `${installment.amount}x de R$ ${installment.value}`
      : null

  return (
    <div className="product__details">
      <ProductDescription name={name} description={description} />
      <ProductPrice oldPrice={oldPrice} newPrice={newPrice} />
      {installmentText && <ProductInstallment text={installmentText} />}
    </div>
  )
}

const ProductPrice = ({ oldPrice, newPrice }) => {
  return (
    <>
      {oldPrice && <span className="product__oldprice">R$ {oldPrice}</span>}
      {newPrice && <span className="product__price">R$ {newPrice}</span>}
      {oldPrice && newPrice && (
        <span className="product__off">
          {getDiscountPercentage(oldPrice, newPrice)}% OFF
        </span>
      )}
    </>
  )
}

const ProductInstallment = ({ text }) => (
  <div className="product__installment">
    <pre className="product__steps">{text}</pre>
    <pre className="product__freight">Frete grátis full</pre>
  </div>
)

const ProductDescription = ({ name, description }) => (
  <>
    <h3 className="product__name">{name}</h3>
    <p className="product__shortinfo">{description}</p>
  </>
)

export default ProductDetails
