import { BsShieldCheck, BsArrowDownUp } from 'react-icons/bs'
import { TbCashBanknoteOff } from 'react-icons/tb'

/**
 *
 * @returns
 */

const Warnings = () => {
  return (
    <ul className='product__warnings'>
      <li className='product__warnings__item'>
        <BsArrowDownUp /> Devolução agendada gratuita
      </li>
      <li className='product__warnings__item'>
        <TbCashBanknoteOff /> Devolução sem multa
      </li>
      <li className='product__warnings__item'>
        <BsShieldCheck /> Compra segura
      </li>
    </ul>
  )
}

export default Warnings
