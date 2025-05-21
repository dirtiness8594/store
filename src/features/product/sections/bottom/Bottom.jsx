import React from 'react';
import ProductCharacteristics from '../../../../components/Product/Sections/ProductCharacteristics';
import ProductDescription from '../../../../components/Product/Sections/ProductDescription';
import ProductReview from '../../components/reviews/Reviews';

function Bottom({ productData }) {

  return (
    <div className="product__bottom">


      
      <ProductCharacteristics characteristics={productData?.characteristics} />
      <ProductDescription description={productData?.details} />
      <ProductReview reviewIds={productData?.reviews} />
    </div>
  );
}

export default Bottom;
