import React from 'react';
import ProductCharacteristics from '../../../../components/Product/Sections/ProductCharacteristics';
import ProductDescription from '../../../../components/Product/Sections/ProductDescription';
import ProductReview from '../../components/reviews/Reviews';

function ProductBottom({ productData }) {
  return (
    <div className="product__bottom">
      <ProductCharacteristics characteristics={productData?.characteristics} />
      <ProductDescription data={productData?.details} />
      <ProductReview data={productData?.reviews} />
    </div>
  );
}

export default ProductBottom;
