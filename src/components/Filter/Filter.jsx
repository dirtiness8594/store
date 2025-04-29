import React, { useEffect, useState } from 'react'
import { getFiltersData } from '../../api'

/**
 *
 * @param {*} param0
 * @returns
 */

function Filter({ categoryId }) {
  console.log('&&&', categoryId)

  const [selectedFilters, setSelectedFilters] = useState([])
  const [filterGroups, setFilterGroups] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFiltersData({
          categoryId: categoryId
        })
        setFilterGroups(data)

        console.log(data)
      } catch (error) {
        console.error('Ocorreu um erro:', error)
      }
    }
    fetchData()
  }, [categoryId])

  const handleFilterClick = (filterId) => {
    const filterIndex = selectedFilters.findIndex(
      (filter) => filter.id === filterId
    )

    if (filterIndex !== -1) {
      const updatedFilters = [...selectedFilters]
      updatedFilters.splice(filterIndex, 1)
      setSelectedFilters(updatedFilters)
    } else {
      const filter = { id: filterId }
      const updatedFilters = [...selectedFilters, filter]
      setSelectedFilters(updatedFilters)
    }
  }

  return (
    <div className='filter'>
      {filterGroups?.map((filterGroup, index) => {
        return (
          <div className='filter__category' key={index}>
            <h2 className='filter__title'>{filterGroup.title}</h2>
            <ul className='filter__list'>
              {filterGroup.options.map((option, optionIndex) => (
                <li className='filter__item' key={optionIndex}>
                  <input
                    type='checkbox'
                    id={option.id}
                    onChange={() => handleFilterClick(option.id)}
                    checked={selectedFilters.some(
                      (filter) => filter.id === option.id
                    )}
                  />
                  <label className='filter_label' htmlFor={option.id}>
                    {option.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Filter
