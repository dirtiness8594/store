/**
 * @param {{ colors: Array<{ id: string, name: string, hexCode: string, amount: number }> }} props
 * @returns
 */
const SkuColors = ({ colors }) => {
  return (
    <div className='product__skus'>
      <ul className='product__size'>
        <li className='product__size__item product__size__item--title'>
          Cores
        </li>
        {Array.isArray(colors) &&
        colors.map((color) => (
          <li key={color.id} className='product__size__item'>
            <span
              className='product__size__unit'
              title={`${color.name} (${color.amount} disponíveis)`}
              style={{
                backgroundColor: color.hexCode,
                display: 'inline-block',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                border: '1px solid #ccc'
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkuColors;
