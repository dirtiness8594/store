import { useState, useEffect } from 'react'

import { BiLike, BiDislike } from 'react-icons/bi'

/**
 *
 * @param {*} param0
 * @returns
 */

const ProductReview = ({ data }) => {
  console.log(data)
  return (
    <section className='product__allinfo product__allinfo--spaced'>
      <h3 className='product__section'>Confira as avaliações</h3>
      <div className='product__reviews'>
        <ul className='product__reviews__abouts'>
          <li className='product__reviews__about product__reviews__about--title'>
            Opniões
          </li>
          <li className='product__reviews__about'>4.6</li>
          <li className='product__reviews__about product__reviews__about--subtitle'>
            Avalilação de caracteristicas
          </li>
          <li className='product__reviews__about product__reviews__about--characteristic'>
            Confortável
            <div className='product__reviews__stars'></div>
          </li>
          <li className='product__reviews__about product__reviews__about--characteristic'>
            Custo-benefício
          </li>
          <li className='product__reviews__about product__reviews__about--characteristic'>
            Fácil para montar
          </li>
          <li className='product__reviews__about product__reviews__about--characteristic'>
            Qualidade dos materiais
          </li>
          <li className='product__reviews__about product__reviews__about--characteristic'>
            Resistência às condições extrenas
          </li>
        </ul>
        <ul className='product__reviews__made'>
          <li className='product__reviews__title'>Opniões</li>
          {data?.list.map((review, index) => {
            return (
              <li className='product__reviews__review' key={index}>
                <p className='product__reviews__text'>{review.description}</p>
                <div className='product__reviews__interact'>
                  <button className='product__reviews__opine'>
                    <BiLike className='icon product__reviews__icon' /> | Util (
                    {review.like})
                  </button>
                  <button className='product__reviews__opine'>
                    <BiDislike className='icon product__reviews__icon' /> |
                    Inútil ({review.dislike})
                  </button>
                </div>
                <ul className='product__reviews__tags'>
                  {review.tags.map((tag, index) => {
                    return (
                      <li className='product__reviews__tags__item' key={index}>
                        #{tag}
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ProductReview
