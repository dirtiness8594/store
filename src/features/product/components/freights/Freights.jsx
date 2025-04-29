import { BsTruck, BsBuildingDown } from 'react-icons/bs'
import { calculateDayOfWeek } from '../../utils/productUtils'

const Freight = ({ freight }) => {
  let firstDayExpectedDelivery = freight?.dayUntilDelivery.firstDayExpected
  let lastDayExpectedDelivery = freight?.dayUntilDelivery.lastDayExpected
  let dayToPickUp = freight?.daysUntilPickUpStore

  if (freight)
    firstDayExpectedDelivery = calculateDayOfWeek(firstDayExpectedDelivery)
  lastDayExpectedDelivery = calculateDayOfWeek(lastDayExpectedDelivery)
  dayToPickUp = calculateDayOfWeek(dayToPickUp)

  return (
    <ul className='product__delivery'>
      <li className='product__deliveryform'>
        <BsTruck className='icon product__delivery__icon' /> Chegará entre{' '}
        <b>{firstDayExpectedDelivery}</b> e <b>{lastDayExpectedDelivery}</b> por
        R$ 90,00<span> R$ 15,00</span>
      </li>
      <li className='product__deliveryform'>
        <BsBuildingDown className='icon product__delivery__icon' />{' '}
        {`Retire na
        loja a partir de ${dayToPickUp}`}
      </li>
    </ul>
  )
}

export default Freight
