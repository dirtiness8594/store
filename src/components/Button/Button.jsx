import React from 'react'

import '../../styles/Main.scss'

/**
 *
 * @param {*} param0
 * @returns
 */

function Button({ text, onClick, disabled }) {
  return (
    <button className='button' onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
