import { BsTicketPerforated } from 'react-icons/bs'

/**
 *
 * @param {*} param0
 * @returns
 */

const Tickets = ({ tickets }) => {

  console.log("Tickets", tickets)
  return (
    <>
      {tickets ? (
        <div className='product__ticket'>
          <BsTicketPerforated className='icon' /> Cupons
          <ul className='product__ticket__list'>
            {tickets.map((ticket, index) => {
              return (
                <li className='product__ticket__item' key={index}>
                  {ticket}
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </>
  )
}

export default Tickets
