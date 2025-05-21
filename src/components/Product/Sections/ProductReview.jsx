import { BiLike, BiDislike } from 'react-icons/bi';
import React, { useEffect, useState } from 'react';
import { getReviewsByIds } from '../../../features/product/services/productAPI';

/**
 * Componente que renderiza avaliações de um produto
 * @param {Object} reviews - Objeto contendo média, quantidade e lista de reviews
 */
const ProductReview = ({ reviews }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const result = await getReviewsByIds(reviewIds);
        setReviews(result);
      } catch (e) {
        console.error('Failed to fetch reviews:', e);
      }
    };

    if (reviewIds?.length > 0) {
      fetchReviews();
    }
  }, [reviewIds]);

  if (!reviews.length) return null;

  return (
    <section className="product__allinfo product__allinfo--spaced">
      <h3 className="product__section">Confira as avaliações</h3>
      <div className="product__reviews">
        {/* Lado esquerdo - Visão geral */}
        <ul className="product__reviews__abouts">
          <li className="product__reviews__about product__reviews__about--title">
            Opiniões
          </li>
          <li className="product__reviews__about">{reviews.average}</li>
          <li className="product__reviews__about product__reviews__about--subtitle">
            Avaliação de características
          </li>
          <li className="product__reviews__about product__reviews__about--characteristic">
            Confortável
            <div className="product__reviews__stars"></div>
          </li>
          <li className="product__reviews__about product__reviews__about--characteristic">
            Custo-benefício
          </li>
          <li className="product__reviews__about product__reviews__about--characteristic">
            Fácil para montar
          </li>
          <li className="product__reviews__about product__reviews__about--characteristic">
            Qualidade dos materiais
          </li>
          <li className="product__reviews__about product__reviews__about--characteristic">
            Resistência às condições externas
          </li>
        </ul>

        {/* Lado direito - Avaliações */}
        <ul className="product__reviews__made">
          <li className="product__reviews__title">Opiniões</li>
          {reviews.list.map((review) => (
            <li className="product__reviews__review" key={review.id}>
              <p className="product__reviews__text">{review.description}</p>
              <div className="product__reviews__interact">
                <button className="product__reviews__opine">
                  <BiLike className="icon product__reviews__icon" /> | Útil (
                  {review.likes})
                </button>
                <button className="product__reviews__opine">
                  <BiDislike className="icon product__reviews__icon" /> | Inútil (
                  {review.dislikes})
                </button>
              </div>
              <ul className="product__reviews__tags">
                {review.tags.map((tag, index) => (
                  <li className="product__reviews__tags__item" key={index}>
                    #{tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductReview;
