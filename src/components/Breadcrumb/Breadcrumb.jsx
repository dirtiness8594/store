import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ style, paths }) => {
  return (
    <ul className={`breadcrumb ${style}`}>
      {paths.map((path, index) => (
        <li
          key={index}
          className={`breadcrumb__item${
            index === paths.length - 1 ? ' active' : ''
          }`}
        >
          {index === paths.length - 1 ? (
            path.label
          ) : (
            <Link to={path.url}>{path.label}</Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Breadcrumb
