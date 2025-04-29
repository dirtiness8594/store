import React from 'react';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb';
import ImageGallery from 'react-image-gallery';
import ProductDetailsIndex from '../../components/detail/Detail';
import Sku from '../../components/sku/Sku';
import Freight from '../../components/freights/Freights';
import Tickets from '../../components/tickets/Tickets';
import Amount from '../../components/amount/Amount';
import Finalization from '../../components/finalization/Finalization';
import Warnings from '../../components/warnings/Warnings';
import { generateBreadcrumb } from '/src/utils/productUtils';

function ProductTop({ productData, images }) {
  return (
    <div className="product__top">
      <div className="product__wrap">
        <section className="product__zoom">
          <Breadcrumb
            style="breadcrumb--product"
            paths={
              productData?.info && productData?.category
                ? generateBreadcrumb(productData.info, productData.category)
                : []
            }
          />
          <ImageGallery
            items={images}
            showNav={false}
            thumbnailPosition="bottom"
            showThumbnails={false}
            showFullscreenButton={false}
            slideDuration={400}
            showPlayButton={false}
          />
        </section>
        <section className="product__about">
          <div className="product__tech">
            <ProductDetailsIndex
              price={productData?.price}
              name={productData?.name}
              description={productData?.fullName}
              rate={{
                amount: productData?.reviews?.amount,
                average: productData?.reviews?.average,
              }}
            />
            <Sku />
            <Freight freight={productData?.delivery} />
            <Tickets tickets={productData?.ticket} />
            <Amount amount={productData?.stock} skus={productData?.skus} />
            <Finalization />
            <Warnings />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductTop;
