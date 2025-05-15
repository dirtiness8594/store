import React , { useState } from "react";
// import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import ImageGallery from "react-image-gallery";
import ProductDetailsIndex from "../../components/detail/Detail";
import Sku from "../../components/sku/Sku";
import Freight from "../../components/freights/Freights";
import Tickets from "../../components/tickets/Tickets";
import Amount from "../../components/amount/Amount";
import Finalization from "../../components/finalization/Finalization";
import Warnings from "../../components/warnings/Warnings";
import { generateBreadcrumb } from "/src/utils/productUtils";

function Top({ productData }) {

  const [selectedSku, setSelectedSku] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const handleSizeOrColorSelect = (sku) => {
    setSelectedSku(sku);
  };

  const handleQuantityChange = (qty) => {
    setQuantity(qty);
  };

  const handleAddToCart = () => {

    console.log("Finalize", productData.id)
    if (!selectedSku || quantity <= 0) return;

    const cartItem = {
      productId: productData.id,
      name: productData.name,
      skuId: selectedSku.id,
      skuName: selectedSku.name,
      quantity,
      price: productData.price.newPrice,
      image: productData.images?.[0]?.thumbnail || '',
    };

    console.log('ADICIONANDO AO CARRINHO:', cartItem);
    // Aqui você pode salvar no localStorage, chamar um context, ou API
  };

  const canFinalize = selectedSku && quantity > 0;


  console.log("******", productData)
  return (
    <div className="product__top">
      <div className="product__wrap">
        <section className="product__zoom">
          {/* <Breadcrumb
            style="breadcrumb--product"
            paths={
              productData?.info && productData?.category
                ? generateBreadcrumb(productData.info, productData.category)
                : []
            }
          /> */}
          {/* <ImageGallery
            items={productData?.images}
            showNav={false}
            thumbnailPosition="bottom"
            showThumbnails={false}
            showFullscreenButton={false}
            slideDuration={400}
            showPlayButton={false}
          /> */}
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


            {/* Rename for Skus & Amount */}
            <Sku skus={productData?.skus} defaultStock={productData?.stock} />


            {/**
             * Fix later
             */}
            <Freight freight={productData?.delivery} />

            <Tickets tickets={productData?.ticket} />
            

            <Finalization onAddToCart={handleAddToCart} canFinalize={canFinalize} />

            <Warnings />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Top;
