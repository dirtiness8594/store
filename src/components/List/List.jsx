import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/Main.scss'

/**
 *
 * @param {*} param0
 * @returns
 */
function List({ items }) {
  return (
    <ul className='list'>
      {items.map((item, index) => (
        <li key={index} className='list__item'>
          {item}
        </li>
      ))}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default List
