import React, { useEffect, useState } from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import { getReviewsByIds } from '../../services/productAPI';

const REVIEWS_PER_PAGE = 3;

const ProductReview = ({ reviewIds }) => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  console.log(reviewIds)
  const totalPages = Math.ceil((reviewIds?.length || 0) / REVIEWS_PER_PAGE);

  const currentIds = reviewIds?.slice(
    currentPage * REVIEWS_PER_PAGE,
    currentPage * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE
  ) || [];

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const result = await getReviewsByIds(currentIds);
        setReviews(result);
      } catch (e) {
        console.error('Failed to fetch reviews:', e);
      }
    };

    if (currentIds.length > 0) {
      fetchReviews();
    }
  }, [currentIds]);

  if (!reviews.length) return null;

  return (
    <section className='product__allinfo product__allinfo--spaced'>
      <h3 className='product__section'>Confira as avaliações</h3>
      <div className='product__reviews'>
        {/* Avaliações de características (estático por enquanto) */}
        <ul className='product__reviews__abouts'>
          <li className='product__reviews__about product__reviews__about--title'>
            Opiniões
          </li>
          <li className='product__reviews__about'>4.6</li>
          <li className='product__reviews__about product__reviews__about--subtitle'>
            Avaliação de características
          </li>
          <li className='product__reviews__about product__reviews__about--characteristic'>
            Confortável
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
            Resistência às condições externas
          </li>
        </ul>

        {/* Lista de reviews */}
        <ul className='product__reviews__made'>
          <li className='product__reviews__title'>Opiniões</li>
          {reviews.map((review) => (
            <li className='product__reviews__review' key={review.id}>
              <p className='product__reviews__text'>{review.description}</p>
              <div className='product__reviews__interact'>
                <button className='product__reviews__opine'>
                  <BiLike className='icon product__reviews__icon' /> | Útil ({review.likes})
                </button>
                <button className='product__reviews__opine'>
                  <BiDislike className='icon product__reviews__icon' /> | Inútil ({review.dislikes})
                </button>
              </div>
              {review.tags?.length > 0 && (
                <ul className='product__reviews__tags'>
                  {review.tags.map((tag, index) => (
                    <li className='product__reviews__tags__item' key={index}>
                      #{tag}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Controles de paginação */}
        <div className='product__reviews__pagination'>
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
            disabled={currentPage === 0}
          >
            Anterior
          </button>
          <span>
            Página {currentPage + 1} de {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={currentPage >= totalPages - 1}
          >
            Próxima
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
