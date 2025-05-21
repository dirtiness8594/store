/**
 * Exibe as características do produto em forma de tabela
 * @param {Array} characteristics - Lista de objetos com título e descrição
 */

const ProductCharacteristics = ({ characteristics }) => {
  if (!characteristics || characteristics.length === 0) return null;

  return (
    <section className="product__allinfo" id="description">
      <h3 className="product__section">Conheça as características</h3>
      <div className="product__table">
        {characteristics.map(({ id, title, description }) => (
          <div className="product__row" key={id}>
            <div className="product__td">{title}</div>
            <div className="product__td">{description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCharacteristics;
