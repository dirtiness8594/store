import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/Main.scss'

/**
 *
 * @param {*} param0
 * @returns
 */
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null
  }

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <div className='modal__content'>{children}</div>
        <button className='modal__close' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Modal
