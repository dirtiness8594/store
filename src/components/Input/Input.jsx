import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/Main.scss'

/**
 *
 * @param {*} param0
 * @returns
 */
function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div className='input'>
      <label className='input__label'>{label}</label>
      <input
        className='input__field'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input
