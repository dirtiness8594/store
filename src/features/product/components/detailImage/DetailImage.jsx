function DetailImage({ images, alt }) {


  const imageUrl = images?.[0]?.original || images?.[0]?.thumbnail;
  return (
    <figure className="product__photo">
      <img className="product__image" src={imageUrl} alt={alt} />
    </figure>
  );
}

export default DetailImage;
