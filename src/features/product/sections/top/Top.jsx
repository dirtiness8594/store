
import React, { useState, useEffect } from "react";
// import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import ImageGallery from "react-image-gallery";
import ProductDetailsIndex from "../../components/detail/Detail";
import Sku from "../../components/sku/Sku";
import Freight from "../../components/freights/Freights";
import Tickets from "../../components/tickets/Tickets";

import Finalization from "../../components/finalization/Finalization";
import Warnings from "../../components/warnings/Warnings";
import { generateBreadcrumb } from "/src/utils/productUtils";

import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';


function Top({ productData }) {

  const [selectedSku, setSelectedSku] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!productData?.images || productData.images.length === 0) return null;

  const selectedImage = productData.images[selectedIndex];
  const canFinalize = selectedSku && quantity > 0;

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (!selectedSku || quantity <= 0) {
      console.warn("Selecione um SKU válido e uma quantidade.");
      return;
    }

    console.log("XIS", selectedSku)

    const cartItem = {
      productId: productData.id,
      name: productData.name,
      skuId: selectedSku.id,
      skuName: selectedSku.name || `${selectedSku.color} - ${selectedSku.size}`,
      quantity,
      price: productData.price.newPrice,
      image: productData.images?.[0]?.thumbnail || "",
    };

    console.log("ADICIONANDO AO CARRINHO:", cartItem);
    // salvar no localStorage ou via context/API
  };

  return (
    <div className="product__top">
      <div className="product__wrap">
        {/* Seção de imagens */}
        <section className="product__zoom">
          <div className="product__gallery">
            <div className="highlighted-image" style={{ maxWidth: '600px', marginBottom: '16px' }}>
              <img
                src={selectedImage.original}
                alt={`Imagem destacada ${selectedIndex + 1}`}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  cursor: 'zoom-in',
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              {productData?.images.map((img, index) => (
                <img
                  key={index}
                  src={img.thumbnail}
                  alt={`Imagem do carrossel ${index + 1}`}
                  onClick={() => setSelectedIndex(index)}
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    border: selectedIndex === index ? '2px solid #0070f3' : '1px solid #ccc',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
          </div>
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

            {/* SKU com controle de estoque e quantidade */}
            <Sku
              skus={productData?.skus}
              defaultStock={productData?.stock}
              onSkuChange={setSelectedSku}
              onQuantityChange={setQuantity}
            />


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
