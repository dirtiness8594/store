import Questions from './Questions'

import { MdOutlineHeadsetMic, MdOutlineMail } from "react-icons/md"
import { GiSmartphone } from "react-icons/gi"

/**
 *
 * @param {*} param0
 * @returns
 */

const ProductQuestionAds = ({ data }) => {

  return (
    <div className='product__sidetoside'>
      <Questions data={data?.list} />
      <section className='product__allinfo product__allinfo--products product__allinfo--spaced'>
        <h3 className='product__allinfo__title'>
          Precisa de ajuda?
        </h3>
        <ul className='product__support__list'>
          <li className="product__support__item">
            <MdOutlineHeadsetMic /> Atendimento telefonico
          </li>
          <li className="product__support__item">
            <GiSmartphone />
            Envie uma mensagem por whatsapp
          </li>
          <li className="product__support__item">
            <MdOutlineMail /> Envie um e-mail
          </li>
        </ul>
      </section>
    </div>
  )
}

export default ProductQuestionAds
